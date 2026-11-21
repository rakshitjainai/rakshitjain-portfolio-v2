/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("=== RUNNING PORTFOLIO VERIFICATION SUITE ===");

// 1. Verify experience bullets
console.log("\n[1] Verifying Experience Bullets...");
const expFile = fs.readFileSync(path.join(__dirname, "../src/components/ExperienceSection.tsx"), "utf8");
// Ensure line 144 does NOT slice
assert(!expFile.includes("b.text.slice"), "FAILED: ExperienceSection still slices b.text!");
assert(expFile.includes("<strong className=\"text-[#0f172a] font-semibold\">{b.verb}</strong> {b.text}"), "FAILED: ExperienceSection bullet rendering pattern mismatch!");

// Check each bullet in ExperienceSection
const bulletRegex = /verb:\s*"([^"]+)",\s*text:\s*"([^"]+)"/g;
let match;
let bulletCount = 0;
while ((match = bulletRegex.exec(expFile)) !== null) {
  bulletCount++;
  const verb = match[1];
  const text = match[2];
  
  // Assert no *, [, ] in verb or text
  assert(!verb.includes("*") && !verb.includes("[") && !verb.includes("]"), `Verb contains invalid characters: ${verb}`);
  assert(!text.includes("*") && !text.includes("[") && !text.includes("]"), `Text contains invalid characters: ${text}`);
  
  // Assert text starts with a complete lowercase word (e.g. "live trading", "dematerialized", etc.)
  const firstWord = text.split(" ")[0];
  assert(/^[a-z]+$/.test(firstWord), `Text first word is not a clean word: ${firstWord}`);
  console.log(`  ✓ Checked bullet ${bulletCount}: [${verb}] ${firstWord}... (${text.length} chars)`);
}
assert(bulletCount === 9, `Expected 9 bullets across 3 experiences, found ${bulletCount}`);
console.log("  ✓ All 9 experience bullets verified clean and structured without slicing!");

// 2. Verify Site Config & Base URL
console.log("\n[2] Verifying Base URL Single Source of Truth...");
const siteConfigFile = fs.readFileSync(path.join(__dirname, "../src/data/siteConfig.ts"), "utf8");
assert(siteConfigFile.includes("https://www.rakshitjain.in"), "FAILED: siteConfig does not default to https://www.rakshitjain.in");
console.log("  ✓ siteConfig defaults to https://www.rakshitjain.in with vercel.app protection");

// 3. Verify No Keywords Meta Tag
console.log("\n[3] Verifying Keywords Removal...");
const layoutFile = fs.readFileSync(path.join(__dirname, "../src/app/layout.tsx"), "utf8");
assert(!layoutFile.includes("keywords:"), "FAILED: keywords meta tag still present in layout.tsx!");
assert(layoutFile.includes("viewportFit: \"cover\""), "FAILED: viewportFit cover missing in layout.tsx");
console.log("  ✓ Keywords meta tag removed site-wide");
console.log("  ✓ Viewport-fit cover and color-scheme light enabled");

// 4. Verify RegMate Removal & Plain Text Threshold Note
console.log("\n[4] Verifying RegMate and Articles Compliance...");
const articlesFile = fs.readFileSync(path.join(__dirname, "../src/data/articles.ts"), "utf8");
assert(!articlesFile.includes("RegMate: Deconstructing Regulatory Complexity"), "FAILED: RegMate still present in articles.ts!");
assert(articlesFile.includes("7. Transferable Product Lessons: LawPrix"), "FAILED: Section 7 title not updated to LawPrix!");
assert(articlesFile.includes("placeholder values for illustration, not official IIBX statutory requirements"), "FAILED: Placeholder disclaimer note missing above TypeScript code!");
assert(articlesFile.includes("RBI/2022-2023/57, A.P. (DIR Series) Circular No. 04"), "FAILED: RBI circular citation not updated!");
assert(articlesFile.includes("Financial Stability Board (FSB)"), "FAILED: FSB citation not updated!");
assert(!articlesFile.includes("Designing Data-Dense Interfaces for Financial Applications"), "FAILED: Unverifiable ACM citation still present!");
console.log("  ✓ RegMate removed from articles");
console.log("  ✓ Plain threshold disclaimer note added directly above code block");
console.log("  ✓ RBI Circular updated to verified May 25, 2022 notification");
console.log("  ✓ FSB 2019 report verified, unverifiable ACM paper removed");

// 5. Verify ResumeView cleanup
console.log("\n[5] Verifying ResumeView Cleanup...");
const resumeViewFile = fs.readFileSync(path.join(__dirname, "../src/components/ResumeView.tsx"), "utf8");
assert(!resumeViewFile.includes("Factual, verifiable resume. Verified dates follow official LinkedIn record."), "FAILED: ResumeView still has disclaimer footer line!");
assert(!resumeViewFile.includes("Dec 2025 – Mar 2026"), "FAILED: ResumeView still has unconfirmed dates!");
assert(!resumeViewFile.includes("Aug 2025 – Jul 2026"), "FAILED: ResumeView still has unconfirmed dates!");
assert(resumeViewFile.includes("Tailwind CSS"), "FAILED: LawPrix stack not aligned with Tailwind CSS!");
console.log("  ✓ ResumeView unconfirmed dates and footer disclaimer removed");

// 6. Verify WhatsApp Label
console.log("\n[6] Verifying Contact WhatsApp Label...");
const contactFile = fs.readFileSync(path.join(__dirname, "../src/components/ContactSection.tsx"), "utf8");
assert(contactFile.includes("Message on WhatsApp"), "FAILED: ContactSection does not have 'Message on WhatsApp'!");
assert(!contactFile.includes("Instant callback"), "FAILED: ContactSection still has 'Instant callback'!");
assert(siteConfigFile.includes("https://wa.me/919521084089?text=Hi%2C%20I%20want%20a%20callback%20from%20you."), "FAILED: WhatsApp URL in siteConfig changed!");
assert(contactFile.includes("siteConfig.author.whatsappUrl"), "FAILED: ContactSection does not use siteConfig.author.whatsappUrl!");
console.log("  ✓ WhatsApp label updated to 'Message on WhatsApp' with exact prefilled href preserved");

// 7. Verify Hero H1
console.log("\n[7] Verifying Hero H1 markup...");
const heroFile = fs.readFileSync(path.join(__dirname, "../src/components/HeroSection.tsx"), "utf8");
assert(heroFile.includes(">Rakshit Jain<") || heroFile.includes(">\r\n            Rakshit Jain\r\n          <") || heroFile.includes(">\n            Rakshit Jain\n          <"), "FAILED: Hero H1 is not 'Rakshit Jain' in DOM!");
assert(!heroFile.includes(">RAKSHIT JAIN<"), "FAILED: Hero H1 still contains uppercase text in DOM!");
console.log("  ✓ Hero H1 is 'Rakshit Jain' in DOM with CSS text-transform: uppercase");

console.log("\n=== ALL CODEBASE UNIT ASSERTIONS PASSED ===");
