# FortuneGate — UI Preview

> Bridging the knowledge and capital gap for African entrepreneurs.
> Life hacks · health & fitness · business tips · growth tips — paired with give-aways and a tiered referral programme.

This repository hosts the **first-pass UI for FortuneGate**: a design studio that branches into the public marketing site, a low-fi flow map, a clickable mobile prototype, a desktop admin shell, and brand exploration. Everything is static HTML — open in a browser, click around, leave feedback.

---

## 🔗 Quick links

| | URL |
|---|---|
| 🌐 **Live (Netlify)** | <https://luxury-pie-712cf3.netlify.app> |
| 🐙 **Live (GitHub Pages)** | <https://slaze.github.io/FortuneGateUI/> |

> Recommended browser: latest Chrome, Edge, Safari, or Firefox. The studio is desktop-first; the mobile prototype renders on phones too. iPhone 7 / iOS 15 supported.

---

## 🗺️ Site map

```
index.html            ← landing (the studio — branches off to everything)
│
├── homepage.html        Public marketing landing page
│   ├── about.html         Mission, audience, four pillars, roadmap, contact
│   ├── how-to.html        Step-by-step: sign-up, payments, claim, referrals
│   └── claim.html         3-step winner verification form
│
├── 01-wireframes.html   Lo-fi sketchy flow exploration
├── 02-prototype.html    Hi-fi clickable mobile prototype (iPhone)
├── 03-desktop.html      Admin console (back-office only)
└── 04-logos.html        Brand & logo exploration
```

Every artifact has an **"← All artifacts"** link in its chrome that returns you to the studio (`index.html`).

---

## 📁 What's in this repo

| File | What it shows | Use it to… |
|---|---|---|
| **`index.html`** | Studio catalog — five artifact cards + a sub-pages strip + the design system. **GH Pages entry point.** | Start here. Branches into everything else. |
| **`homepage.html`** | Public marketing landing — hero with live giveaway countdown, content categories, plan tiers, referral payout band, winners, FAQ. | Validate the **public-facing brand voice** and the path from visitor → subscriber. |
| **`about.html`** | About Us — mission, three audience segments by age, the four content pillars, a roadmap timeline, contact channels. | Validate the **narrative** behind the product. |
| **`how-to.html`** | How It Works — four sticky-nav sections covering sign-up, payments, claiming a reward, and the referral payout schedule. | Validate the **mechanics** are clear and trustworthy. |
| **`claim.html`** | Claim Reward — 3-step verification form (phone OTP → payout method → review &amp; submit). | Validate the **winner flow** end-to-end. |
| **`01-wireframes.html`** | Low-fidelity flow map of every mobile screen with arrows showing the user journey. | Validate **structure** — flows, screen order, what connects to what. |
| **`02-prototype.html`** | High-fidelity clickable mobile prototype (20+ screens) in an iPhone frame. | Validate the **mobile experience** — auth, content, plans, dashboard, earn, give-away, profile. |
| **`03-desktop.html`** | Desktop admin console — dashboard, content table, users table — plus the internal Plans surface. | Validate **admin tooling**. |
| **`04-logos.html`** | Logo exploration — six directions, each shown as a lockup with dark / light / mono treatments. | Lock in the **mark** before final export. |
| `fg-public.css` | Shared stylesheet for the public pages (`homepage`, `about`, `how-to`, `claim`). | — |
| `*.jsx` | React component scripts loaded by the prototypes. Must sit alongside the HTML. | — |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages so files load as-is. | — |
| `README.md` | This file. | — |

---

## 🚀 How to use this preview

### Step 1 — Open the live URL
Pick either link above. They're identical mirrors.

### Step 2 — Land on the studio
You'll arrive at a dark page titled **"UI screens, prototypes & brand"**. There's a **"View live site →"** link in the top-right that opens the marketing site in the same tab. Below, you'll see:
- A short intro and the project's KPI targets (10M subscribers, ₦50B MRR, etc.)
- **Five cards** — one per artifact (Wireframes → Marketing homepage → Mobile prototype → Admin console → Brand & logos).
- A **Public sub-pages** strip linking to About, How To, and Claim Reward.
- The **design system** swatches (tier accents + surfaces).

### Step 3 — Click into each artifact

#### 🟡 Card 01 — Wireframes (`01-wireframes.html`)
Low-fidelity black-and-white screens on a zoomable canvas.

- **What to look for:** does the structure make sense? Are screens missing? Do the arrows point the right way?
- **What to ignore:** colors, fonts, exact copy, polish. This is the skeleton.
- **How to navigate:** scroll/pan the canvas. Drag any screen to rearrange. Click a screen title to rename.

#### 🟡 Card 02 — Marketing homepage (`homepage.html`)
The public landing page a visitor would see. Branches out to **about**, **how-to**, and **claim**.

- **What to look for:** brand voice, hero claim, plan pricing, the testimonials and giveaway countdown.
- **How to navigate:** top nav (About / How To / Claim / Premium), in-page anchors (`#plans`, `#live`, `#winners`), or the **Get started** CTA which opens the mobile prototype.

#### 🟡 Card 03 — Mobile prototype (`02-prototype.html`)
A real iPhone-shaped frame with 20+ fully-styled screens. **Fully clickable.**

- **What to look for:** colors, typography, copy, tier badges, NGN amounts, the look-and-feel of dark glass + gold accents.
- **How to navigate:** click anywhere on the phone — buttons, links, tabs, plan cards — to move between screens. Use the screen-list nav rail on the left to jump directly.
- **Suggested walkthrough:**
  1. Splash → Get started
  2. **Register** (your details — first name, surname, email, password, age confirm)
  3. **Phone verify** (separate screen, +234 phone)
  4. OTP → Pick tier (Premium recommended)
  5. Dashboard → Feed → tap a Premium article
  6. Tap a 🔒 locked article → Plans → Checkout success
  7. Bottom nav: Earn (referral code) → Give-away (countdown + entries) → Profile

#### 🟡 Card 04 — Admin console (`03-desktop.html`)
Back-office only. Sidebar shell with:
1. Dashboard KPIs
2. Content library table
3. Users table
4. Internal Plans configuration

Use the sidebar to switch between views.

#### 🟡 Card 05 — Brand & logos (`04-logos.html`)
Six logo directions for FortuneGate — Gate Arch, Threshold F, Key Crest, Sunrise Gate, Coin Monogram, Wordmark. Each direction is shown as a hero lockup plus dark / light / mono treatments.

### Step 4 — Leave feedback
The fastest path:
1. Open any screen.
2. Take a screenshot (Cmd+Shift+4 on Mac, Win+Shift+S on Windows).
3. Mark it up (Preview, Markup, Loom, etc.) and send back via email/WhatsApp/Slack with a short note.

For larger requests (e.g. "redo the entire dashboard"), reply with a written brief — bullet points are fine.

---

## 🎨 Design system at a glance

| Token | Value |
|---|---|
| Display font | **Syne** (700) — headings, CTAs, numbers |
| Body font | **DM Sans** (400) — paragraphs, UI labels |
| Page background | `#0A0E0B` (near-black) |
| Card surface | `#11181C` |
| Modal surface | `#1A2421` |
| Primary CTA | Gold gradient `#D4A017 → #B8860B` |
| Confirm / success | Green `#43A047` |
| Currency | NGN (₦) only |
| Auth | Phone number + OTP (split from account details) |
| Mobile design width | 375 px |
| Desktop design width | 1440 px |

### Subscription tiers

| Tier | Color | Price | Notes |
|---|---|---|---|
| Basic | Slate `#6B7770` | Free | Limited free library, ads |
| Standard | Green `#43A047` | ₦2,500 / mo | 1× giveaway entry, all libraries |
| **Premium ★** | **Gold `#D4A017`** | **₦5,000 / mo** | **Recommended — 5× entries, live Q&A** |
| VIP | Deep gold `#B8860B` | ₦12,000 / mo | 10× entries, monthly call, live drops |
| Elite | Gold → green gradient | ₦15,000 / mo | 15× entries, 1:1 mentor session, 2× referral payout |

### Referral payout

- **₦100** for a referrer's first successful subscription
- **₦50** for each subsequent subscription
- Referrals attributed for **12 months** per unique phone number
- Paid out automatically on the **1st of every month** to the registered phone's bank

---

## 🛠️ For developers — running locally

No build step. Static files only.

```bash
git clone https://github.com/slaze/FortuneGateUI.git
cd FortuneGateUI
# any static server works:
python3 -m http.server 8000
# or
npx serve .
```

Then open <http://localhost:8000>.

You can also **double-click `index.html`** — most pages work straight off the filesystem. The prototypes that load `.jsx` files (`01-wireframes`, `02-prototype`, `03-desktop`) need a server because Babel fetches them over HTTP.

---

## ❓ FAQ

**Q: Is this the real product?**
No. It's a static visual mock — no real authentication, no database, no payments. Click flows are scripted to demonstrate the intended experience.

**Q: Why does some data look manufactured?**
All numbers, names and articles are placeholder content for demonstration. Final copy and imagery will replace them during build.

**Q: Can I edit the screens?**
The HTML is hand-written and editable, but design changes are easier to discuss in feedback rounds. Send notes; we'll iterate.

**Q: Does it work on my iPhone 7?**
Yes. Earlier builds shipped a self-contained bundle that needed `DecompressionStream` (Safari 16.4+), which broke iOS 15. That bundle was removed — the current site uses only standard HTML/CSS/JS and supports iOS 15 and up.

**Q: What's the next step after sign-off?**
Implementation following the design here.

---

**FortuneGate · UI preview · v0.2**
Last updated: May 2026
