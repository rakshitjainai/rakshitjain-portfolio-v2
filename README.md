# Rakshit Jain — Professional Portfolio (v2)

> **Official Repository:** [https://github.com/rakshitjainai/rakshitjain-portfolio-v2](https://github.com/rakshitjainai/rakshitjain-portfolio-v2)  
> **Target Domain:** [https://www.rakshitjain.in/](https://www.rakshitjain.in/)  
> **Positioning:** Finance · Quantitative Analysis · Technology · Product  

A production-ready personal portfolio web application built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Designed with an editorial, institutional visual identity inspired by global financial institutions and modern product systems.

---

## 1. Professional Positioning

This portfolio presents Rakshit Jain's work across four interconnected areas:
- **Finance & Capital Markets:** Bullion trading operations at GIFT City IFSC, India International Bullion Exchange (IIBX) ecosystem, Bullion Depository Receipts (BDRs), order execution terminals, and institutional client onboarding (KYC, GST, IEC compliance).
- **Quantitative Finance & Trading:** Python-based backtesting engines, 20/50 Simple Moving Average (SMA) crossover models, risk-adjusted performance analysis (CAGR, Sharpe Ratio, Maximum Drawdown), and empirical testing on NSE equities (INFY, TATAINVEST).
- **Software Engineering:** Full-stack development with modern React, Next.js, Node.js, Python, systems programming in C (Unix shell), and industrial enterprise systems (Department of Atomic Energy).
- **Product Thinking & Development:** Problem discovery, workflow deconstruction, regulatory compliance frameworks, and case studies (LawPrix legal-tech matchmaking and RegMate IFSC compliance portal).

---

## 2. Technology Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language:** TypeScript 5.x (Strict type safety)
- **Styling:** Tailwind CSS v4 (Custom institutional midnight palette, hairline borders, print stylesheets)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Geist Sans & Geist Mono
- **SEO & GEO:**
  - Dynamic XML Sitemap (`src/app/sitemap.ts`)
  - Configured `robots.ts` with crawler permissions for Google, GPTBot, PerplexityBot, ClaudeBot
  - JSON-LD Structured Data: `Person`, `WebSite`, `ProfilePage`, `Article`, `BreadcrumbList`
  - Generative Engine Optimization documentation (`public/llms.txt`)
- **Accessibility:** Semantic HTML5, WCAG AA compliant contrast, visible focus rings, keyboard navigation, print CSS.

---

## 3. Project Directory Structure

```text
rakshitjain-portfolio-v2/
├── .gitignore                      # Configured to strictly exclude /references, *.pdf, .env
├── AGENTS.md                       # Workspace agent guidelines
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project metadata & dependencies
├── tsconfig.json                   # TypeScript configuration
├── public/
│   ├── llms.txt                    # Generative Engine Optimization index
│   └── favicon.ico                 # Site icon
├── references/                     # [IGNORED IN GIT] Private source PDFs & credentials
└── src/
    ├── app/
    │   ├── layout.tsx              # Root layout (Navbar, Footer, Geist fonts, global meta)
    │   ├── globals.css             # Tailwind v4 theme, custom scrollbar & print styles
    │   ├── page.tsx                # Homepage (Hero, 4 Pillars, Experience, Projects, Research)
    │   ├── about/
    │   │   └── page.tsx            # Biography, core principles, skills architecture, education
    │   ├── experience/
    │   │   └── page.tsx            # Institutional timeline (Anand Rathi, Certopus, DAE Kota, Leadership)
    │   ├── projects/
    │   │   └── page.tsx            # Filterable project showcase & interactive quant backtester
    │   ├── product-thinking/
    │   │   └── page.tsx            # Product philosophy, LawPrix case study, RegMate workflow
    │   ├── research/
    │   │   ├── page.tsx            # Research hub
    │   │   └── [slug]/
    │   │       └── page.tsx        # In-depth 1,200+ word researched essays with TOC and citations
    │   ├── resume/
    │   │   ├── page.tsx            # Curated resume track selector
    │   │   ├── finance/
    │   │   │   └── page.tsx        # Printable Financial Markets & Quantitative CV
    │   │   ├── quant/
    │   │   │   └── page.tsx        # Printable Quantitative Research & Modeling CV
    │   │   └── tech/
    │   │       └── page.tsx        # Printable Software Engineering & Full Stack CV
    │   ├── contact/
    │   │   └── page.tsx            # Direct contact methods
    │   ├── sitemap.ts              # Dynamic XML sitemap generator
    │   └── robots.ts               # Robots.txt generator
    ├── components/
    │   ├── Navbar.tsx              # Navigation bar with mobile drawer
    │   ├── Footer.tsx              # Institutional footer & verified links
    │   ├── HeroSection.tsx         # Main hero component
    │   ├── MarkdownRenderer.tsx    # Zero-dependency Markdown & LaTeX renderer
    │   ├── RoleCards.tsx           # Track overview cards
    │   ├── ExperienceSection.tsx   # Chronological experience items
    │   ├── ProjectsSection.tsx     # Project showcase with metrics matrix
    │   ├── ArticlesSection.tsx     # Research articles
    │   ├── ResumeView.tsx          # Institutional printable resume component
    │   ├── ContactSection.tsx      # Accessible direct contact channels
    │   ├── SmaBacktestChart.tsx    # Interactive SVG dual moving average crossover chart
    │   ├── BullionSettlementDiagram.tsx # IIBX vaulting to electronic BDR lifecycle diagram
    │   ├── LegalTechWorkflowDiagram.tsx # LawPrix criteria-based case routing workflow diagram
    │   └── StructuredData.tsx      # JSON-LD injector component
    ├── data/
    │   ├── siteConfig.ts           # Global metadata, links, email, navigation
    │   ├── experience.ts           # Authoritative employment dates (following LinkedIn)
    │   ├── projects.ts             # Verified projects (Market Sentiment Analyzer, LawPrix, etc.)
    │   ├── articles.ts             # 3 complete researched essays with formal citations
    │   ├── skills.ts               # Categorized skills (no percentage bars)
    │   └── education.ts            # PDEU degree & verified hackathon achievements
    └── types/
        └── index.ts                # TypeScript interfaces & types
```

---

## 4. Local Development & Build Instructions

### Prerequisites
- Node.js `v20.x` or higher (tested on Node `v26.7.0`)
- npm `v10.x` or higher (tested on npm `v11.19.0`)

### Installation
Clone or navigate to the project directory:
```bash
cd Downloads/rakshitjain-portfolio-v2
npm install
```

### Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
Execute a clean production build and static page generation:
```bash
npm run build
```

### Production Preview
Serve the compiled production build locally:
```bash
npm run start
```

---

## 5. Security & Privacy Safeguards

- The `references/` directory contains private resume PDFs and personal identity records.
- `.gitignore` is configured to ensure that `references/`, `*.pdf`, and `.env*.local` are strictly excluded from version control.
- No personal phone numbers, residential addresses, date of birth, or CGPA are exposed in the public source code or public web interfaces.

---

## 6. Deployment & Domain Migration Workflow

### Step 1: Push to the New GitHub Repository
*Execute only after personal review and approval:*
```bash
# 1. Verify git status and ensure references are untracked
git status

# 2. Stage verified application files
git add .

# 3. Commit changes
git commit -m "feat: complete production-ready institutional portfolio v2"

# 4. Set main branch and connect remote
git branch -M main
git remote add origin https://github.com/rakshitjainai/rakshitjain-portfolio-v2.git

# 5. Push code
git push -u origin main
```

### Step 2: Deploy to Vercel (Staging URL)
1. Log into your [Vercel Dashboard](https://vercel.com/).
2. Click **Add New...** -> **Project**.
3. Import the repository: `rakshitjainai/rakshitjain-portfolio-v2`.
4. Framework Preset: **Next.js**.
5. Build Command: `npm run build` (Default).
6. Output Directory: `.next` (Default).
7. Click **Deploy**.
8. Inspect and verify the live staging URL (e.g., `rakshitjain-portfolio-v2.vercel.app`).

### Step 3: Domain Migration to `rakshitjain.in`
*Execute only after the staging deployment is fully tested and approved:*
1. Navigate to the **Settings** -> **Domains** tab in the newly created Vercel project (`rakshitjain-portfolio-v2`).
2. Add your custom domains:
   - `rakshitjain.in`
   - `www.rakshitjain.in`
3. Vercel will prompt you to transfer the domain assignment from the old project to the new project.
4. Confirm the transfer. DNS records on your registrar (pointing to Vercel CNAME `cname.vercel-dns.com` or A record `76.76.21.21`) will seamlessly serve the new version with zero downtime.

---

## 7. License & Credits

Designed and engineered for Rakshit Jain. All content, projects, and research essays are original.
