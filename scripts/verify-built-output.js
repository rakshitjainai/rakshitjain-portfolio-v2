/* eslint-disable @typescript-eslint/no-require-imports */
const http = require("http");
const assert = require("assert");

const routes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/research",
  "/research/iibx-and-indias-bullion-market",
  "/research/sma-strategy-backtesting",
  "/research/financial-workflows-and-fintech-products",
  "/product-thinking",
  "/resume",
  "/resume/finance",
  "/resume/quant",
  "/resume/tech",
  "/contact",
];

function fetchRoute(path, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path,
        method: "GET",
        headers: {
          ...headers,
        },
      },
      (res) => {
        let text = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          text += chunk;
        });
        res.on("end", () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            text,
          });
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function run() {
  console.log("=== STARTING BUILT OUTPUT VERIFICATION ===");

  // 1. Verify robots.txt
  console.log("\n[1] Checking /robots.txt...");
  const robots = await fetchRoute("/robots.txt");
  assert.strictEqual(robots.status, 200, "robots.txt must return 200");
  assert(robots.headers["content-type"].includes("text/plain"), "robots.txt must be text/plain");
  assert(robots.text.includes("https://www.rakshitjain.in/sitemap.xml"), "robots.txt must reference canonical sitemap");
  assert(!robots.text.includes("vercel.app"), "robots.txt must not contain vercel.app");
  console.log("  ✓ /robots.txt returned 200 text/plain referencing https://www.rakshitjain.in/sitemap.xml");

  // 2. Verify sitemap.xml
  console.log("\n[2] Checking /sitemap.xml...");
  const sitemap = await fetchRoute("/sitemap.xml");
  assert.strictEqual(sitemap.status, 200, "sitemap.xml must return 200");
  assert(sitemap.headers["content-type"].includes("xml"), "sitemap.xml must be xml");
  assert(!sitemap.text.includes("vercel.app"), "sitemap.xml must not contain vercel.app");
  assert(!sitemap.text.includes("/faq"), "sitemap.xml must not include /faq");
  for (const r of routes) {
    assert(sitemap.text.includes(`https://www.rakshitjain.in${r === "/" ? "" : r}`), `sitemap.xml missing route ${r}`);
  }
  console.log(`  ✓ /sitemap.xml returned 200, contains all ${routes.length} canonical URLs with zero vercel.app`);

  // 3. Verify /Rakshit-Jain-Resume.pdf
  console.log("\n[3] Checking /Rakshit-Jain-Resume.pdf...");
  const pdfRes = await fetchRoute("/Rakshit-Jain-Resume.pdf");
  assert.strictEqual(pdfRes.status, 200, "PDF must return 200");
  assert(pdfRes.headers["content-type"].includes("application/pdf"), "PDF must be application/pdf");
  console.log("  ✓ /Rakshit-Jain-Resume.pdf returned 200 application/pdf");

  // 4. Verify /faq redirect
  console.log("\n[4] Checking /faq redirect...");
  const faqRes = await fetchRoute("/faq");
  console.log(`  /faq response status: ${faqRes.status}, location: ${faqRes.headers.location}`);
  assert([301, 308].includes(faqRes.status), "FAQ must redirect with 301/308");
  assert.strictEqual(faqRes.headers.location, "/about", "FAQ must redirect to /about");
  console.log("  ✓ /faq permanently redirects (308) to /about");

  // 5. Verify host redirects (apex & vercel.app)
  console.log("\n[5] Checking Host Redirects (apex & vercel.app)...");
  const apexRes = await fetchRoute("/", { host: "rakshitjain.in" });
  console.log(`  apex host 'rakshitjain.in' status: ${apexRes.status}, location: ${apexRes.headers.location}`);
  assert([301, 308].includes(apexRes.status), "Apex host must redirect with 301/308");
  assert(
    apexRes.headers.location === "https://www.rakshitjain.in" || apexRes.headers.location === "https://www.rakshitjain.in/",
    `Apex must redirect to https://www.rakshitjain.in, got ${apexRes.headers.location}`
  );

  const vercelHostRes = await fetchRoute("/experience", { host: "rakshitjain-portfolio-v2.vercel.app" });
  console.log(`  vercel host status: ${vercelHostRes.status}, location: ${vercelHostRes.headers.location}`);
  assert([301, 308].includes(vercelHostRes.status), "Vercel host must redirect with 301/308");
  assert.strictEqual(vercelHostRes.headers.location, "https://www.rakshitjain.in/experience", "Vercel host must redirect to www.rakshitjain.in/experience");

  // 6. Verify preview deployment X-Robots-Tag
  console.log("\n[6] Checking Preview Deployment X-Robots-Tag...");
  const previewRes = await fetchRoute("/", { host: "preview-deployment-branch-123.vercel.app" });
  console.log(`  preview deployment X-Robots-Tag: ${previewRes.headers["x-robots-tag"]}`);
  assert.strictEqual(previewRes.headers["x-robots-tag"], "noindex, nofollow", "Preview deployment must send noindex, nofollow");
  console.log("  ✓ Preview deployment sends X-Robots-Tag: noindex, nofollow");

  // 7. Verify each route's HTML, metadata, canonical, OG, Twitter, and content syntax
  console.log("\n[7] Crawling and inspecting all routes...");
  for (const r of routes) {
    const res = await fetchRoute(r);
    assert.strictEqual(res.status, 200, `Route ${r} returned status ${res.status}`);
    const html = res.text;

    // Zero vercel.app
    assert(!html.includes("rakshitjain-portfolio-v2.vercel.app"), `Route ${r} contains vercel.app in HTML!`);

    // No keywords tag
    assert(!html.includes('name="keywords"'), `Route ${r} contains keywords meta tag!`);

    // Canonical link
    const expectedCanonical = `https://www.rakshitjain.in${r === "/" ? "" : r}`;
    assert(
      html.includes(`<link rel="canonical" href="${expectedCanonical}"`) ||
      html.includes(`rel="canonical" href="${expectedCanonical}"`),
      `Route ${r} canonical mismatch! Expected: ${expectedCanonical}`
    );

    // og:url
    assert(
      html.includes(`<meta property="og:url" content="${expectedCanonical}"`) ||
      html.includes(`property="og:url" content="${expectedCanonical}"`),
      `Route ${r} og:url mismatch! Expected: ${expectedCanonical}`
    );

    // Exactly one <title>
    const titleMatches = html.match(/<title>([^<]+)<\/title>/g) || [];
    assert.strictEqual(titleMatches.length, 1, `Route ${r} has ${titleMatches.length} <title> tags!`);
    const titleText = titleMatches[0].replace(/<\/?title>/g, "");
    
    // Check no repeated brand in title
    assert(!titleText.includes("Rakshit Jain | Rakshit Jain"), `Route ${r} has duplicate brand in title: ${titleText}`);
    assert(!titleText.endsWith("|"), `Route ${r} has truncated title ending in pipe: ${titleText}`);

    // Check meta description
    const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
    assert(descMatch, `Route ${r} missing meta description!`);
    const descText = descMatch[1];
    assert(descText.length >= 120 && descText.length <= 165, `Route ${r} description length out of range (${descText.length} chars): "${descText}"`);
    assert(descText.endsWith("."), `Route ${r} description does not end cleanly with period: "${descText}"`);

    // Check og:type
    if (r.startsWith("/research/")) {
      assert(html.includes('property="og:type" content="article"'), `Article ${r} og:type must be article`);
    } else if (r === "/about") {
      assert(html.includes('property="og:type" content="profile"'), `About page og:type must be profile`);
    } else {
      assert(html.includes('property="og:type" content="website"'), `Page ${r} og:type must be website`);
    }

    // Check visible text leaks: no raw **, no raw [Verb], no raw $$ or _{ in text outside code blocks
    // In experience cards on home / experience
    if (r === "/" || r === "/experience") {
      assert(html.includes("live trading terminals"), `Route ${r} must contain full text 'live trading terminals'!`);
      assert(html.includes("dematerialized Bullion"), `Route ${r} must contain full text 'dematerialized Bullion'!`);
      assert(html.includes("institutional client onboarding"), `Route ${r} must contain full text 'institutional client onboarding'!`);
      assert(!html.includes("> ding terminals") && !html.includes(">ding terminals"), `Route ${r} has chopped text 'ding terminals'!`);
      assert(!html.includes("> rialized Bullion") && !html.includes(">rialized Bullion"), `Route ${r} has chopped text 'rialized Bullion'!`);
      assert(!html.includes("**Observed**"), `Route ${r} has raw markdown bold in bullets!`);
    }

    // Check SMA article for clean rendering
    if (r === "/research/sma-strategy-backtesting") {
      assert(!html.includes("N_{fast}"), "SMA article contains raw N_{fast}!");
      assert(!html.includes("N_{slow}"), "SMA article contains raw N_{slow}!");
      assert(!html.includes("pythonScript"), "SMA article contains raw pythonScript label!");
      assert(!html.includes("*strictly above*"), "SMA article contains raw *strictly above*!");
      assert(!html.includes("*strictly below*"), "SMA article contains raw *strictly below*!");
    }

    console.log(`  ✓ Route ${r.padEnd(52)} | Title: "${titleText}" | Desc: ${descText.length}ch | 200 OK`);
  }

  // 8. Check contact links
  console.log("\n[8] Verifying Contact href strings across HTML...");
  const contactRes = await fetchRoute("/contact");
  const contactHtml = contactRes.text;
  assert(contactHtml.includes("mailto:rakshitindia2019@gmail.com"), "Contact missing mailto");
  assert(contactHtml.includes("tel:+919521084089"), "Contact missing tel");
  assert(contactHtml.includes("https://wa.me/919521084089?text=Hi%2C%20I%20want%20a%20callback%20from%20you."), "Contact missing exact WhatsApp href");
  assert(contactHtml.includes("Message on WhatsApp"), "Contact missing 'Message on WhatsApp'");
  console.log("  ✓ mailto:, tel:, and WhatsApp hrefs verified exactly as specified");

  console.log("\n=======================================================");
  console.log("✓ ALL BUILT OUTPUT & INTEGRATION VERIFICATION CHECKS PASSED!");
  console.log("=======================================================");
}

run().catch((err) => {
  console.error("\n❌ VERIFICATION FAILED:", err);
  process.exit(1);
});
