import { test, expect } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

// Define viewports to audit
const VIEWPORTS = [
  { name: "phone-360", width: 360, height: 640 },
  { name: "phone-390", width: 390, height: 844 },
  { name: "phone-landscape", width: 844, height: 390 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "desktop-1280", width: 1280, height: 720 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1920", width: 1920, height: 1080 },
  { name: "extreme-320", width: 320, height: 568 },
];

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/experience", name: "experience" },
  { path: "/projects", name: "projects" },
  { path: "/research", name: "research" },
  { path: "/research/sma-strategy-backtesting", name: "research-sma" },
  { path: "/product-thinking", name: "product-thinking" },
  { path: "/resume", name: "resume" },
  { path: "/contact", name: "contact" },
  { path: "/faq", name: "faq" }, // Should redirect to /about
];

// Ensure screenshot directories exist
const SCREENSHOT_DIR = path.join(process.cwd(), "screenshots", "responsive");
const ARTIFACT_SCREENSHOT_DIR = path.join(
  "C:",
  "Users",
  "raksh",
  ".gemini",
  "antigravity",
  "brain",
  "77ab791a-48bd-4bf9-8116-f9526140668f",
  "screenshots",
  "responsive"
);

for (const dir of [SCREENSHOT_DIR, ARTIFACT_SCREENSHOT_DIR]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

test.describe("Cross-Device Responsive QA Audit Suite", () => {
  for (const vp of VIEWPORTS) {
    test.describe(`Viewport: ${vp.name} (${vp.width}x${vp.height})`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      for (const route of ROUTES) {
        test(`Audit route: ${route.path} on ${vp.name}`, async ({ page }) => {
          const consoleErrors: string[] = [];
          page.on("console", (msg) => {
            if (msg.type() === "error") {
              consoleErrors.push(msg.text());
            }
          });
          page.on("pageerror", (err) => {
            consoleErrors.push(err.message);
          });

          const response = await page.goto(route.path, {
            waitUntil: "domcontentloaded",
          });
          await page.waitForTimeout(500);

          // 1. Verify HTTP Response / Redirection
          if (route.path === "/faq") {
            // Verify /faq redirected to /about
            expect(page.url()).toContain("/about");
          } else {
            expect(response?.status()).toBe(200);
          }

          // 2. Zero Horizontal Overflow
          const overflow = await page.evaluate(() => {
            return document.documentElement.scrollWidth - window.innerWidth;
          });
          expect(overflow).toBeLessThanOrEqual(1);

          // 3. No Elements Clipped Outside the Viewport Horizontally
          const offscreenCount = await page.evaluate(() => {
            const allElements = document.querySelectorAll("header, section, main, footer, div, h1, h2, h3, p");
            let count = 0;
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0) {
                // If the element's right edge extends significantly beyond the inner width without being inside an intentional scroll container
                if (rect.right > window.innerWidth + 2) {
                  let p = el.parentElement;
                  let isInsideScrollable = false;
                  while (p) {
                    const overflowX = window.getComputedStyle(p).overflowX;
                    if (overflowX === "auto" || overflowX === "scroll") {
                      isInsideScrollable = true;
                      break;
                    }
                    p = p.parentElement;
                  }
                  if (!isInsideScrollable) {
                    count++;
                  }
                }
              }
            }
            return count;
          });
          expect(offscreenCount).toBe(0);

          // 4. Image Aspect Ratio / Dimensions Set (CLS prevention)
          const invalidImages = await page.evaluate(() => {
            const images = Array.from(document.querySelectorAll("img"));
            const bad: string[] = [];
            for (const img of images) {
              const hasDims =
                img.hasAttribute("width") ||
                img.hasAttribute("height") ||
                window.getComputedStyle(img).aspectRatio !== "auto" ||
                img.classList.contains("object-cover");
              if (!hasDims) {
                bad.push(img.src);
              }
            }
            return bad;
          });
          expect(invalidImages.length).toBe(0);

          // 5. Tap Target Sizing on Phone Viewports (< 768px)
          if (vp.width < 768) {
            const smallTargets = await page.evaluate(() => {
              // Target standalone buttons, nav buttons, action links
              const interactive = Array.from(
                document.querySelectorAll(
                  'nav button, nav a, footer a, [role="button"], .btn-primary-gradient, .btn-secondary, main button'
                )
              );
              const failures: string[] = [];
              for (const el of interactive) {
                const htmlEl = el as HTMLElement;
                const rect = htmlEl.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) continue;
                const style = window.getComputedStyle(htmlEl);
                if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0")
                  continue;

                // Check tap target dimension (at least 40px with margin/padding allowing 44px hit-area)
                if (rect.width < 40 || rect.height < 40) {
                  failures.push(
                    `${htmlEl.tagName}.${htmlEl.className.slice(0, 30)}: ${Math.round(rect.width)}x${Math.round(
                      rect.height
                    )} ("${(htmlEl.textContent || "").trim().slice(0, 20)}")`
                  );
                }
              }
              return failures;
            });
            expect(smallTargets).toEqual([]);
          }

          // 6. Homepage Specific: Hero "RAKSHIT JAIN" font size & visibility
          if (route.path === "/") {
            const heroName = page.locator("h1").first();
            await expect(heroName).toBeVisible();
            const fontSize = await heroName.evaluate((el) =>
              parseFloat(window.getComputedStyle(el).fontSize)
            );
            if (vp.width >= 1024) {
              expect(fontSize).toBeGreaterThanOrEqual(48);
            } else {
              expect(fontSize).toBeGreaterThanOrEqual(32);
            }

            // CTAs visibility above the fold or in initial viewport
            const resumeBtn = page.getByRole("link", { name: /Download Resume/i }).first();
            await expect(resumeBtn).toBeVisible();
          }

          // 7. Navigation Behavior
          if (vp.width >= 1024) {
            // Desktop navbar should have direct links and Resume CTA visible
            const nav = page.locator('header nav, nav[aria-label="Main Navigation"]').first();
            await expect(nav).toBeVisible();
            const resumeNav = page.locator('header a[href*="pdf"], header a:has-text("Resume")').first();
            await expect(resumeNav).toBeVisible();
          } else {
            // Mobile navbar should have hamburger button
            const hamburger = page.locator('header button[aria-label*="navigation menu" i], button[aria-label*="navigation menu" i]').first();
            await expect(hamburger).toBeVisible();

            // Test opening mobile menu
            await hamburger.click();
            await page.waitForTimeout(300);

            // Menu must contain Resume button
            const drawerResume = page.locator('#mobile-navigation-drawer a[href*="pdf"], #mobile-navigation-drawer a:has-text("Resume")').first();
            await expect(drawerResume).toBeVisible();

            // Test Esc key to close menu
            await page.keyboard.press("Escape");
            await page.waitForTimeout(300);
            const isExpanded = await hamburger.getAttribute("aria-expanded");
            expect(isExpanded).toBe("false");
          }

          // 8. Backtest Chart Validation
          if (route.name === "projects" || route.name === "research-sma") {
            const chart = page.locator("svg").filter({ hasText: /SMA|INFY|Equity/i }).first();
            if (await chart.count() > 0) {
              const box = await chart.boundingBox();
              if (box) {
                expect(box.height).toBeGreaterThanOrEqual(200);
              }
            }
          }

          // 9. Zero Console Errors
          expect(consoleErrors).toEqual([]);

          // 10. Capture Screenshots for Auditing
          const screenshotFileName = `${route.name}-${vp.width}x${vp.height}.png`;
          const localPath = path.join(SCREENSHOT_DIR, screenshotFileName);
          const artifactPath = path.join(ARTIFACT_SCREENSHOT_DIR, screenshotFileName);

          // Capture hero/initial viewport
          if (route.path === "/" && (vp.width === 360 || vp.width === 768 || vp.width === 1440)) {
            const heroPath = path.join(SCREENSHOT_DIR, `hero-${vp.width}.png`);
            const heroArtPath = path.join(ARTIFACT_SCREENSHOT_DIR, `hero-${vp.width}.png`);
            await page.screenshot({ path: heroPath, fullPage: false });
            fs.copyFileSync(heroPath, heroArtPath);
          }

          // Full page capture for 360, 768, 1440
          if (vp.width === 360 || vp.width === 768 || vp.width === 1440) {
            await page.screenshot({ path: localPath, fullPage: true });
            if (fs.existsSync(localPath)) {
              fs.copyFileSync(localPath, artifactPath);
            }
          }
        });
      }
    });
  }
});
