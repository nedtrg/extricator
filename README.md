# Extricator — NFT Marketplace

A pixel-perfect Next.js implementation of the Extricator NFT Marketplace, built with **Next.js 14 App Router**, **Tailwind CSS**, and **JavaScript**. This project was built as part of the Upcut technical assessment.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18.17 or higher → [nodejs.org](https://nodejs.org/)
- **npm** v9+ (comes included with Node.js)

Verify your versions:

```bash
node -v   # should be v18.17+
npm -v    # should be v9+
```

---

### Installation & Setup

**Step 1 — Extract the project**

```bash
unzip extricator-nft.zip
cd extricator
```

**Step 2 — Install dependencies**

```bash
npm install
```

**Step 3 — Start the development server**

```bash
npm run dev
```

Visit **http://localhost:3000** in your browser 🎉

---

### Production Build

```bash
npm run build    # creates optimised production bundle
npm run start    # runs the production server
```

---

## 📁 Folder Architecture

```
extricator/
├── public/
│   └── images/                        # Local image assets
│       ├── hero-1.jpg                 # Hero section NFT cards
│       ├── hero-2.jpg
│       ├── hero-3.jpg
│       ├── nft-1.jpg                  # NFT grid section
│       ├── nft-2.jpg
│       ├── nft-3.jpg
│       ├── nft-4.jpg
│       ├── nft-5.jpg
│       ├── nft-6.jpg
│       ├── team-1.jpg                 # Team section
│       ├── team-2.jpg
│       ├── team-3.jpg
│       └── team-4.jpg
│
├── src/
│   ├── app/
│   │   ├── globals.css                # Global styles + Tailwind directives
│   │   ├── layout.js                  # Root HTML layout (fonts, metadata)
│   │   ├── page.js                    # Home page — assembles all sections
│   │   ├── gallery/
│   │   │   └── page.js                # Gallery page (/gallery)
│   │   ├── roadmap/
│   │   │   └── page.js                # Roadmap page (/roadmap)
│   │   └── api/
│   │       ├── nfts/
│   │       │   └── route.js           # GET /api/nfts — paginated NFT listings
│   │       ├── subscribe/
│   │       │   └── route.js           # POST /api/subscribe — email signup
│   │       └── team/
│   │           └── route.js           # GET /api/team — team members
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js              # Responsive top navigation
│   │   │   └── Footer.js              # Footer with links and social icons
│   │   ├── sections/
│   │   │   ├── HeroSection.js         # Hero — heading, CTAs, fan NFT cards
│   │   │   ├── NFTGridSection.js      # 3x2 NFT grid with like and buy
│   │   │   ├── TrackRecordSection.js  # Stats — 24k+, 18k+, 10k+
│   │   │   ├── TeamSection.js         # Meet the Team 2x2 grid
│   │   │   └── AlphaSection.js        # Early alpha email signup banner
│   │   └── ui/
│   │       └── NFTCard.js             # Reusable NFT card component
│   │
│   └── lib/
│       └── data.js                    # Mock data layer (NFTs, team, stats)
│
├── .gitignore
├── jsconfig.json                      # Path alias configuration (@/)
├── next.config.js                     # Next.js + Turbopack configuration
├── tailwind.config.js                 # Tailwind theme + custom animations
├── postcss.config.js                  # PostCSS pipeline
├── package.json                       # Dependencies and scripts
└── README.md                          # This file
```

---

## 🧩 Sections Built

| Section           | File                             | Features                                                                          |
| ----------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| **Navbar**        | `layout/Navbar.js`               | Logo, nav links, responsive hamburger menu                                        |
| **Hero**          | `sections/HeroSection.js`        | Grid background, radial purple glow, fan NFT cards, staggered entrance animations |
| **NFT Grid**      | `sections/NFTGridSection.js`     | 3×2 card grid, interactive like toggle, buy button                                |
| **Track Record**  | `sections/TrackRecordSection.js` | Two-column layout, count-up animation on scroll                                   |
| **Meet the Team** | `sections/TeamSection.js`        | 2×2 team card grid with social icon links                                         |
| **Early Alpha**   | `sections/AlphaSection.js`       | Gradient banner with working email form connected to API                          |
| **Footer**        | `layout/Footer.js`               | 4-column layout, social icons, copyright bar                                      |

---

## 🏗️ Backend Architecture

### API Routes (Next.js Route Handlers)

| Endpoint         | Method | Description                                                      |
| ---------------- | ------ | ---------------------------------------------------------------- |
| `/api/nfts`      | `GET`  | Returns paginated NFT listings. Supports `?limit=6&page=1`       |
| `/api/subscribe` | `POST` | Accepts `{ email }` — validates and processes early alpha signup |
| `/api/team`      | `GET`  | Returns all team member data                                     |

### Example Usage

```bash
# Get NFT listings
GET /api/nfts?limit=6&page=1

# Subscribe to early alpha
POST /api/subscribe
Content-Type: application/json
{ "email": "user@example.com" }

# Get team members
GET /api/team
```

### Scaling to Production

The mock data in `src/lib/data.js` is swap-ready. In a production environment, replace it with:

- **Database** — PostgreSQL or MongoDB via Prisma or Mongoose
- **NFT data** — Solana RPC, Magic Eden API, or Helius API
- **Email service** — Resend, Mailchimp, or SendGrid for the subscribe endpoint
- **Authentication** — NextAuth with wallet-based login (e.g. Phantom, MetaMask)

---

## 🎨 Design Tokens

| Token        | Value     | Usage                      |
| ------------ | --------- | -------------------------- |
| Background   | `#0a0008` | Page background            |
| Brand Purple | `#6B21FF` | Primary CTAs, buy buttons  |
| Muted Text   | `#9b8fa8` | Subtitles and descriptions |
| Accent Red   | `#c0392b` | Section labels             |
| Display Font | `Sora`    | Headings and logo          |
| Body Font    | `Inter`   | Navigation and body copy   |

---

## 🖼️ Images & Icons

### Social & UI Icons

All icons throughout the project — including Discord, X (Twitter), and Telegram icons in the **Team cards**, **Footer**, and any other UI elements — are built using **inline SVG code** directly in the components. No third-party icon libraries (such as react-icons, heroicons, or Font Awesome) were used. This approach keeps the bundle lightweight, allows full styling control via CSS, and eliminates external dependencies.

### Placeholder Images

The project is structured to use **local images** stored in the `public/images/` directory. During development and as fallbacks, **placeholder images** were used in place of real NFT artwork and team member photos in the following sections:

- **Hero Section** — 3 fan-arc NFT cards (`hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`)
- **NFT Grid Section** — 6 NFT artwork cards (`nft-1.jpg` through `nft-6.jpg`)
- **Team Section** — 4 team member portraits (`team-1.jpg` through `team-4.jpg`)

To swap in real images, simply replace the files in `public/images/` with your actual assets using the same filenames. No code changes are required.

---

## 📱 Responsive Design

The project is fully responsive across all screen sizes:

- **Navbar** — collapses into a hamburger menu on mobile
- **Hero** — NFT cards stack vertically on mobile, fan arc layout on desktop
- **NFT Grid** — single column on mobile, 3 columns on desktop
- **Track Record** — stacks vertically on mobile, side by side on desktop
- **Meet the Team** — heading and subheading center on mobile, left-aligned on desktop
- **Early Alpha** — email input and button stack vertically and center on mobile
- **Footer** — single column on mobile, 4-column layout on desktop

---

## 🤖 AI Tools Used

This project was built using **Claude AI** (Anthropic) as an AI-assisted development tool for:

- Scaffolding component structure and boilerplate
- Generating SVG character illustrations as placeholder artwork
- Implementing animation logic and scroll-triggered effects
- Building API route handlers and mock data architecture

All generated code was reviewed, structured, and organised for production quality and maintainability.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com) for automatic CI/CD deployments on every push.

---

## 📜 Available Scripts

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start dev server at localhost:3000 with Turbopack |
| `npm run build` | Create optimised production bundle                |
| `npm run start` | Run production server                             |
| `npm run lint`  | Run ESLint code quality checks                    |

---

## 🔧 Tech Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 14.2.5  | React framework with App Router |
| React        | 18      | UI library                      |
| Tailwind CSS | 3.4.1   | Utility-first styling           |
| PostCSS      | 8       | CSS processing                  |
| JavaScript   | ES6+    | Language                        |

---

Built with ❤️ for the **Upcut Technical Assessment**
