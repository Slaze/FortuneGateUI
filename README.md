# FortuneGate — UI Preview

> Bridging the knowledge and capital gap for African entrepreneurs.
> Life hacks · health & fitness · business tips · growth tips — paired with give-aways and a tiered referral programme.

This repository hosts the **first-pass UI for FortuneGate**: a low-fi flow map, a clickable mobile prototype, and a desktop admin shell. Everything is static HTML — open in a browser, click around, leave feedback.

---

## 🔗 Quick links

| | URL |
|---|---|
| 🌐 **Live (Netlify)** | <https://luxury-pie-712cf3.netlify.app> |
| 🐙 **Live (GitHub Pages)** | <https://slaze.github.io/FortuneGateUI/> |
| 📄 **PDF deck (client presentation)** | [Download `FortuneGate-Client-Deck.pdf`](./FortuneGate-Client-Deck.pdf) |
| 📦 **Single-file offline bundle** | [Download `FortuneGate-bundle.html`](./FortuneGate-bundle.html) |

> Recommended browser: latest Chrome, Edge, Safari, or Firefox. Designed for desktop review; mobile prototype works on phone too.

---

## 📁 What's in this repo

| File | What it shows | Use it to… |
|---|---|---|
| **`index.html`** | Landing / overview page with links into the three artifacts | Start here. Entry point for the client. |
| **`01-wireframes.html`** | Low-fidelity flow map of every screen with arrows showing the user journey | Validate **structure** — flows, screen order, what connects to what. |
| **`02-prototype.html`** | High-fidelity clickable mobile prototype (18 screens) in an iPhone frame | Validate the **mobile experience** — auth, onboarding, content, plans, dashboard, earn, give-away, profile. |
| **`03-desktop.html`** | Desktop admin shell (dashboard, content table, users) + public plans page | Validate **admin tooling** and the **public pricing page**. |
| `FortuneGate-Client-Deck.pdf` | 14-page landscape deck for client presentations | Email/print/screen-share when walking the client through the work. |
| `FortuneGate-bundle.html` | Self-contained single-file copy of the landing page | Email/Slack to anyone — works offline, no hosting needed. |
| `README.md` | This file. | — |

---

## 🚀 How to use this preview (for the client)

### Step 1 — Open the live URL
Pick either link above. They're identical mirrors.

### Step 2 — Land on the overview
You'll arrive at a dark landing page titled **"UI screens & webflow"**. Scroll once. You'll see:
- A short intro and the project's KPI targets (10M subscribers, ₦50B MRR, etc.)
- **Three cards** — one per artifact.
- A **design system reference** strip showing the colors and tier accents used throughout.

### Step 3 — Click into each artifact

#### 🟡 Card 1 — Wireframes (`01-wireframes.html`)
Low-fidelity black-and-white screens laid out as a webflow.

- **What to look for:** does the structure make sense? Are screens missing? Do the arrows point the right way?
- **What to ignore:** colors, fonts, exact copy, polish. This is the skeleton.
- **How to navigate:** scroll/pan the canvas. Drag any screen to rearrange. Click the screen title to rename.

#### 🟡 Card 2 — Mobile prototype (`02-prototype.html`)
A real iPhone-shaped frame with 18 fully-styled screens. **This is clickable.**

- **What to look for:** colors, typography, copy, tier badges, NGN amounts, the look-and-feel of the dark glass + gold accents.
- **How to navigate:** click anywhere on the phone — buttons, links, tabs, plan cards — to move between screens. Use the screen-list overlay (bottom-left) to jump directly. Use ←/→ arrow keys for prev/next.
- **Suggested walkthrough:**
  1. Splash → Get started
  2. Phone → OTP → Pick tier (Premium recommended)
  3. Dashboard → Discover feed → tap a Premium article
  4. Tap a 🔒 VIP article → land on Locked screen → See plans
  5. Plans → Pick Premium → Checkout success
  6. Bottom nav: Earn (referral code) → Give-away (countdown + entries) → Profile

#### 🟡 Card 3 — Desktop (`03-desktop.html`)
Two surfaces:
1. **Admin shell** — sidebar, KPI dashboard, content table, users table.
2. **Public Plans page** — Basic / Standard / Premium / VIP / Elite with feature comparison.

Use the top toggle to switch between **Admin** and **Plans**. Use the sidebar inside Admin to switch between Dashboard / Content / Users.

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
| Auth | Phone number + OTP |
| Mobile design width | 375 px |
| Desktop design width | 1440 px |

### Subscription tiers

| Tier | Color | Price | Notes |
|---|---|---|---|
| Basic | Slate `#6B7770` | Free | Limited free library, ads |
| Standard | Green `#43A047` | ₦2,000 / mo | 2× giveaway entries |
| **Premium ★** | **Gold `#D4A017`** | **₦5,000 / mo** | **Recommended — full library, 5× entries** |
| VIP | Deep gold `#B8860B` | ₦12,000 / mo | Live drops, monthly call, 10× entries |
| Elite | Gold → green gradient | ₦25,000 / mo | 1:1 mentor session, 25× entries |

### Referral payout

- **₦100** for a referrer's first successful subscription
- **₦50** for each subsequent subscription
- Referrals attributed for 1 year per unique phone number

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

You can also just **double-click `index.html`** — it works straight off the filesystem.

---

## ☁️ Hosting

### GitHub Pages (already configured)
The site is served from the `main` branch root. To re-deploy after editing:

```bash
git add .
git commit -m "update copy"
git push
```

GitHub Pages rebuilds automatically — give it ~30 seconds.

To re-enable from scratch:
1. Repo → **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `(root)` → **Save**

### Netlify (mirror)
Drag the repo folder onto <https://app.netlify.com/drop> for an instant deploy. Or connect the GitHub repo for auto-deploys on push.

### Embedding in the Laravel app
Drop these files into `public/preview/` of the FortuneGate Laravel project:

```
public/preview/
├── index.html
├── 01-wireframes.html
├── 02-prototype.html
└── 03-desktop.html
```

Then share `https://yoursite.com/preview/`.

---

## ❓ FAQ

**Q: Is this the real product?**
No. It's a static visual mock — no real authentication, no database, no payments. Click flows are scripted to demonstrate the intended experience.

**Q: Why does some data look fake?**
All numbers, names and articles are placeholder content for demonstration. Final copy and imagery will replace them during build.

**Q: Can I edit the screens?**
The HTML is hand-written and editable, but design changes are easier to discuss in feedback rounds. Send notes; we'll iterate.

**Q: What's the next step after sign-off?**
Implementation in Laravel 11 / Blade following the design tokens used here. The artifacts in this repo serve as the visual spec.

---

## 📋 Open questions for the client

These are pinned on the closing slide of the PDF deck — please confirm during review:

1. **Real photography & brand imagery** — currently using striped placeholders.
2. **Tier pricing & payout amounts** — confirm ₦2K / 5K / 12K / 25K and ₦100 / ₦50 referral payouts.
3. **Payment provider** — Paystack, Flutterwave, USSD, bank transfer? Pick.
4. **Localisation & copy review** — confirm prosperity-coded voice in Nigerian English is on-brand.
5. **Live-streaming events** — required for v1 launch, or phase 2?
6. **Give-away cadence & prizes** — monthly is assumed; confirm prize categories.

---

**FortuneGate · UI preview · v0.1**
Last updated: May 2026
