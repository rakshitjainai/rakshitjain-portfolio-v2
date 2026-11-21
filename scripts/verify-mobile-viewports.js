/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;
const SCREENSHOTS_DIR = "C:\\Users\\raksh\\.gemini\\antigravity\\brain\\77ab791a-48bd-4bf9-8116-f9526140668f\\screenshots";

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) {
          reject(new Error(msg.error.message));
        } else {
          resolve(msg.result);
        }
      }
    };
  }

  send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function run() {
  console.log("=== STARTING MOBILE VIEWPORT & OVERFLOW AUDIT ===");

  // 1. Launch Chrome with CDP
  console.log("Launching Headless Chrome on debug port " + PORT + "...");
  const chromeProcess = spawn(
    CHROME_PATH,
    [
      "--headless=new",
      "--disable-gpu",
      `--remote-debugging-port=${PORT}`,
      "--no-first-run",
      "--no-default-browser-check",
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  let targets = null;
  for (let i = 0; i < 20; i++) {
    await wait(300);
    try {
      targets = await fetchJson(`http://127.0.0.1:${PORT}/json`);
      if (targets && targets.length > 0) break;
    } catch {
      // keep waiting
    }
  }

  assert(targets && targets.length > 0, "Failed to connect to Chrome CDP endpoint");
  const pageTarget = targets.find((t) => t.type === "page") || targets[0];
  console.log("Connected to Chrome page target:", pageTarget.id);

  const cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await cdp.connect();

  await cdp.send("Page.enable");
  await cdp.send("DOM.enable");
  await cdp.send("Runtime.enable");

  const viewports = [
    { name: "360-small-phone", width: 360, height: 640 },
    { name: "390-iphone-12", width: 390, height: 844 },
    { name: "412-pixel", width: 412, height: 915 },
    { name: "430-iphone-promax", width: 430, height: 932 },
    { name: "768-tablet-portrait", width: 768, height: 1024 },
  ];

  const testRoutes = [
    "/",
    "/about",
    "/experience",
    "/projects",
    "/research",
    "/research/sma-strategy-backtesting",
    "/product-thinking",
    "/resume",
    "/contact",
  ];

  console.log("\n[1] Checking Horizontal Page Overflow across all viewports...");
  let totalOverflowViolations = 0;

  for (const vp of viewports) {
    console.log(`\nTesting Viewport: ${vp.width}x${vp.height} (${vp.name})`);

    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: vp.width < 768,
    });

    for (const route of testRoutes) {
      await cdp.send("Page.navigate", { url: `http://localhost:3000${route}` });
      await wait(1000); // Wait for hydration and animation

      const evalResult = await cdp.send("Runtime.evaluate", {
        expression: `(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const winWidth = window.innerWidth;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const hasOverflow = scrollWidth > winWidth + 1; // 1px threshold for subpixel rounding

          let badElements = [];
          if (hasOverflow) {
            const all = document.querySelectorAll('*');
            for (const el of all) {
              const rect = el.getBoundingClientRect();
              if (rect.right > winWidth + 1) {
                badElements.push({
                  tag: el.tagName,
                  id: el.id,
                  class: el.className.toString().slice(0, 100),
                  rectRight: Math.round(rect.right),
                  winWidth
                });
                if (badElements.length >= 5) break;
              }
            }
          }

          return {
            scrollWidth,
            winWidth,
            hasOverflow,
            badElements
          };
        })()`,
        returnByValue: true,
      });

      const data = evalResult.result.value;
      if (data.hasOverflow) {
        console.error(`  ❌ OVERFLOW on ${route} at ${vp.width}px: scrollWidth=${data.scrollWidth} > innerWidth=${data.winWidth}`);
        console.error("     Offending elements:", JSON.stringify(data.badElements));
        totalOverflowViolations++;
      } else {
        console.log(`  ✓ ${route} fits perfectly (scrollWidth: ${data.scrollWidth}px <= innerWidth: ${data.winWidth}px)`);
      }
    }
  }

  assert.strictEqual(totalOverflowViolations, 0, `Found ${totalOverflowViolations} overflow violations!`);
  console.log("\n✓ ZERO HORIZONTAL OVERFLOW ACROSS ALL TESTED VIEWPORTS!");

  // 2. Capture Key Screenshots
  console.log("\n[2] Capturing High-Res Mobile Screenshots for Verification...");
  const screenshotConfigs = [
    { route: "/", vp: viewports[0], filename: "mobile-360-home.png" },
    { route: "/", vp: viewports[1], filename: "mobile-390-home.png" },
    { route: "/", vp: viewports[4], filename: "mobile-768-home.png" },
    { route: "/experience", vp: viewports[1], filename: "mobile-390-experience.png" },
    { route: "/projects", vp: viewports[1], filename: "mobile-390-projects.png" },
    { route: "/research/sma-strategy-backtesting", vp: viewports[0], filename: "mobile-360-article-sma.png" },
    { route: "/research/sma-strategy-backtesting", vp: viewports[1], filename: "mobile-390-article-sma.png" },
    { route: "/research/sma-strategy-backtesting", vp: viewports[4], filename: "mobile-768-article-sma.png" },
    { route: "/resume", vp: viewports[1], filename: "mobile-390-resume.png" },
    { route: "/contact", vp: viewports[1], filename: "mobile-390-contact.png" },
  ];

  for (const sc of screenshotConfigs) {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: sc.vp.width,
      height: sc.vp.height,
      deviceScaleFactor: 2,
      mobile: sc.vp.width < 768,
    });
    await cdp.send("Page.navigate", { url: `http://localhost:3000${sc.route}` });
    await wait(1200);

    const shot = await cdp.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
    });

    const outPath = path.join(SCREENSHOTS_DIR, sc.filename);
    fs.writeFileSync(outPath, Buffer.from(shot.data, "base64"));
    const stat = fs.statSync(outPath);
    console.log(`  ✓ Captured ${sc.filename} (${sc.vp.width}x${sc.vp.height}, ${(stat.size / 1024).toFixed(1)} KB)`);
  }

  // 3. Test Drawer Menu Interaction
  console.log("\n[3] Testing Mobile Drawer Menu open/close & tap targets...");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await cdp.send("Page.navigate", { url: `http://localhost:3000/` });
  await wait(1000);

  // Click hamburger menu
  const menuEval = await cdp.send("Runtime.evaluate", {
    expression: `(() => {
      const btn = document.querySelector('button[aria-controls="mobile-navigation-drawer"]');
      if (!btn) return { ok: false, error: "Menu button not found" };
      const btnRect = btn.getBoundingClientRect();
      const meetsSize = btnRect.width >= 44 && btnRect.height >= 44;
      btn.click();
      return { ok: true, btnWidth: btnRect.width, btnHeight: btnRect.height, meetsSize };
    })()`,
    returnByValue: true,
  });
  console.log("  Menu button click result:", menuEval.result.value);
  assert(menuEval.result.value.ok, "Menu button click failed");
  assert(menuEval.result.value.meetsSize, "Menu button tap target must be >= 44x44px");

  await wait(500);

  // Capture open drawer
  const drawerShot = await cdp.send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(SCREENSHOTS_DIR, "mobile-390-drawer-open.png"), Buffer.from(drawerShot.data, "base64"));
  console.log("  ✓ Captured mobile-390-drawer-open.png");

  // Check drawer items tap target size
  const drawerItemsEval = await cdp.send("Runtime.evaluate", {
    expression: `(() => {
      const links = Array.from(document.querySelectorAll('#mobile-navigation-drawer a, #mobile-navigation-drawer button'));
      return links.map(l => {
        const r = l.getBoundingClientRect();
        return {
          text: l.innerText.trim().slice(0, 30),
          width: Math.round(r.width),
          height: Math.round(r.height),
          meetsMinTarget: r.height >= 44
        };
      });
    })()`,
    returnByValue: true,
  });
  console.log("  Drawer interactive items tap targets:");
  drawerItemsEval.result.value.forEach((item) => {
    console.log(`    - ${item.text}: ${item.width}x${item.height}px (meetsMinTarget: ${item.meetsMinTarget})`);
    assert(item.meetsMinTarget, `Tap target for ${item.text} must be >= 44px height`);
  });

  // Close with Esc key
  await cdp.send("Input.dispatchKeyEvent", {
    type: "rawKeyDown",
    key: "Escape",
    code: "Escape",
    windowsVirtualKeyCode: 27,
  });
  await cdp.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "Escape",
    code: "Escape",
    windowsVirtualKeyCode: 27,
  });
  await wait(400);

  const menuClosedEval = await cdp.send("Runtime.evaluate", {
    expression: `document.getElementById('mobile-navigation-drawer') === null`,
    returnByValue: true,
  });
  assert(menuClosedEval.result.value, "Menu should close on Escape key press");
  console.log("  ✓ Drawer closed smoothly via Escape key");

  cdp.close();
  chromeProcess.kill();
  console.log("\n=======================================================");
  console.log("✓ ALL MOBILE VIEWPORT & INTERACTION TESTS PASSED!");
  console.log("=======================================================");
}

run().catch((err) => {
  console.error("FATAL ERROR in mobile verification:", err);
  process.exit(1);
});
