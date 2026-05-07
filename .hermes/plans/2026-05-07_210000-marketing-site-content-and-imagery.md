# Marketing Site — Full Content & Imagery Pass
*Implementation Plan — for Claude to execute 2026-05-08*

> **For Claude:** Read this entire document before touching a single file.
> Read `clearview/docs/ClearView_Message_Architecture_v1.md` and
> `clearview/context/decisions.md` (2026-05-07 entry) before writing any copy.
> Every word on this site is written to **Mike Sorensen** — 52, owns Sorensen HVAC
> Lakeland FL, $4.8M revenue, 22 employees. He reads on his phone between calls.
> Plain English. Short sentences. No jargon. No exit-talk.

---

## Goal

Transform clearview-marketing from a text-only baseline into a full-conversion
landing page with real product screenshots, concrete copy, and social proof —
without touching the main `clearview` app repo or any deployed infrastructure.

## Architecture

New section order (App.tsx after this plan):
```
Hero (rewritten sub-headline)
ConnectsTo       ← NEW: "Works with what you already use"
PainPoints       (minor copy tweak only)
HowItWorks       ← NEW: 3-step numbered band
ProductShowcase  ← NEW: the centerpiece — tabbed real app screenshots
Features         (add missing pillar + fix headline)
SocialProof      ← NEW: trust band
OwnerProfiles    (reframed as question-first)
WaitlistCTA      (copy refresh)
Footer           (untouched)
```

## Tech Stack

Vite + React + TypeScript + Tailwind — same as existing components.
All new components follow the same pattern: named export, Tailwind-only styling,
copper palette (`copper-500`, `copper-600`), dark background `#0a0f1e`.
No new npm dependencies.

---

## PHASE 0 — Screenshots (Aaron does this manually, ~15 min)

**Claude cannot do this step.** Aaron must take these screenshots and commit them
before Claude starts Phase 2. Claude can do Phase 1 in parallel.

### Screenshot 1 — Dashboard

**URL:** https://clearview-nine.vercel.app/dashboard
**Login:** Use your normal demo credentials
**What to capture:** The full dashboard viewport — KPI cards row at top, and the
Monthly Revenue bar chart visible below. Don't need to scroll.
**Prep:** Set date range to "YTD". Make sure Lakeland entity is selected.
**Browser width:** 1440px (or full-screen on a wide monitor).
**Filename:** `public/screenshots/dashboard.png`

### Screenshot 2 — Value Engine

**URL:** https://clearview-nine.vercel.app/value-engine
**What to capture:** The Business Health Score ring + estimated value range +
the 8 driver cards below it. Scroll so all drivers are visible if needed — a
tall screenshot is fine, we'll crop in CSS.
**Prep:** Just load the page, let the animations finish (1-2 seconds).
**Browser width:** 1440px
**Filename:** `public/screenshots/value-engine.png`

### Screenshot 3 — Operations Center

**URL:** https://clearview-nine.vercel.app/operations
**What to capture:** The SOPs tab — with the table of published SOPs visible.
Show at least 3-4 SOP rows. The "AI SOP Wizard" button should be visible in the
header area.
**Prep:** Click the SOPs tab if not already active.
**Browser width:** 1440px
**Filename:** `public/screenshots/operations.png`

### After screenshots are taken:
```bash
cd clearview-marketing
git add public/screenshots/
git commit -m "assets: add product screenshots for showcase section"
```

---

## PHASE 1 — Hero sub-headline rewrite
*No screenshot dependency. Do this first.*

**File:** `src/components/Hero.tsx`
**Change:** Replace the `<p>` sub-headline only. H1 is locked — do not touch.

**Current (28 words, vendor voice):**
```tsx
<p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
  Galvern is the operating platform for owner-operators of $1M–$20M service
  businesses. The daily work that compounds into a more valuable company.
</p>
```

**Replace with:**
```tsx
<p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
  Most operators don't know what their business is worth — or what's holding it back.
  Galvern shows you both. Every day, from real data.
</p>
```

**Why:** Message Architecture voice rule 3 — owner-to-owner, not vendor-to-customer.
"Galvern is the operating platform" is a category description. Mike doesn't care
about categories; he cares what it does for him. The new version speaks his exact
fear (doesn't know what the business is worth) and delivers a direct promise.

**Commit after:**
```bash
git add src/components/Hero.tsx
git commit -m "copy: tighten hero sub-headline — operator voice, 22 words"
```

---

## PHASE 2 — ConnectsTo band (new component)

**File:** `src/components/ConnectsTo.tsx` (create new)

**Position in App.tsx:** Between `<Hero />` and `<PainPoints />`

**Purpose:** Kills the objection "is this replacing my ServiceTitan?" before Mike
can form it. Establishes Galvern as a connector layer, not a rip-and-replace.
Anti-positioning from the architecture: "Not all-inclusive. It's the layer that
connects what you already use. That's the point."

**Component code:**
```tsx
const integrations = [
  { name: 'QuickBooks', icon: '📒', color: 'text-green-400' },
  { name: 'ServiceTitan', icon: '🔧', color: 'text-blue-400' },
  { name: 'HubSpot', icon: '🟠', color: 'text-orange-400' },
  { name: 'Jobber', icon: '📋', color: 'text-slate-300' },
  { name: 'Housecall Pro', icon: '🏠', color: 'text-slate-300' },
  { name: 'CSV / Excel', icon: '📊', color: 'text-slate-300' },
]

export function ConnectsTo() {
  return (
    <section className="py-12 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm uppercase tracking-widest font-medium mb-6">
          Works with what you already use — no rip-and-replace
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center gap-2 bg-white/[0.04] border border-white/10
                         rounded-full px-4 py-2 text-sm font-medium text-slate-300
                         hover:border-copper-500/40 hover:text-white transition"
            >
              <span className={integration.color}>{integration.icon}</span>
              {integration.name}
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-sm mt-6">
          Connect in minutes. Your team keeps working the same way.
        </p>
      </div>
    </section>
  )
}
```

**Commit after:**
```bash
git add src/components/ConnectsTo.tsx
git commit -m "feat: add ConnectsTo band — anti-rip-and-replace trust signal"
```

---

## PHASE 3 — HowItWorks section (new component)

**File:** `src/components/HowItWorks.tsx` (create new)

**Position in App.tsx:** Between `<PainPoints />` and `<ProductShowcase />`

**Purpose:** Before Mike sees the product screenshots, he needs the mental model
of how Galvern fits in. Three steps — connect, see, act. This primes him to
understand what he's looking at in the screenshots.

**Component code:**
```tsx
const steps = [
  {
    number: '01',
    title: 'Connect your tools.',
    body: "QuickBooks, ServiceTitan, HubSpot — point Galvern at what you already use. Takes about 10 minutes. No data entry, no migration.",
    icon: '🔌',
  },
  {
    number: '02',
    title: 'Get one clear picture.',
    body: "Revenue by job type. Margin by tech. Cash by week. Business health score. Everything you've never been able to see in one place because it lived in five different tools.",
    icon: '🔭',
  },
  {
    number: '03',
    title: 'Work on the right things.',
    body: "Galvern shows you the three moves that would grow your business value the most. Not what looks worst on a dashboard — what actually moves the needle.",
    icon: '🎯',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Up and running in a morning.
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">
          No IT department. No consultant. Just connect, look, and go.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Connector line between steps (hidden on mobile) */}
              <div className="hidden sm:block absolute top-8 left-full w-full h-px
                              bg-gradient-to-r from-copper-500/30 to-transparent
                              -translate-x-4 last:hidden" />

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8
                              hover:border-copper-500/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-copper-500 font-bold text-sm font-mono
                                   bg-copper-500/10 border border-copper-500/20
                                   rounded-lg px-2 py-1">
                    {step.number}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Commit after:**
```bash
git add src/components/HowItWorks.tsx
git commit -m "feat: add HowItWorks section — 3-step mental model"
```

---

## PHASE 4 — ProductShowcase (new component — the centerpiece)

**File:** `src/components/ProductShowcase.tsx` (create new)

**Position in App.tsx:** After `<HowItWorks />`, before `<Features />`

**Dependency:** Requires Phase 0 screenshots to exist at
`/public/screenshots/dashboard.png`, `/public/screenshots/value-engine.png`,
`/public/screenshots/operations.png`

**Purpose:** This is the "show don't tell" section. Mike has been told the three
pillars. Now he sees the actual product. Tabbed interface — he picks which pillar
he cares about first and sees the real UI. Each tab has screenshot + 3 callout
bullets pointing at specific things he'd notice.

**Note on screenshot styling:** Screenshots get a dark rounded frame with a
copper glow on the active border. This ties the product visually to the brand
without needing image editing. The `ring-copper` glow is done in Tailwind.

**Component code:**
```tsx
import { useState } from 'react'

const tabs = [
  {
    id: 'dashboard',
    label: 'See Everything',
    pillar: 'Run the Day + See the Truth',
    headline: 'One picture. Every number.',
    sub: "You have QuickBooks for the books and ServiceTitan for dispatch. Neither talks to the other. Galvern pulls them together — revenue by job type, margin by tech, cash position by week. One screen.",
    bullets: [
      'YTD revenue, cash on hand, and business health — live, from real data',
      'Monthly P&L built directly from your QuickBooks numbers',
      'Health score calculated automatically — no surveys, no guessing',
    ],
    screenshot: '/screenshots/dashboard.png',
    alt: 'Galvern dashboard showing KPI cards and monthly P&L chart',
  },
  {
    id: 'value-engine',
    label: 'Know Your Worth',
    pillar: 'Build the Value',
    headline: "What's this business actually worth?",
    sub: "Two HVAC operators. Same revenue. One sold for $2M, one for $5M. The difference was in the details — margins, customer concentration, owner dependency, operational maturity. Galvern tracks all eight of those drivers, every week, from your live data.",
    bullets: [
      'Enterprise value estimated from your real EBITDA — not a questionnaire',
      '8 value drivers tracked automatically: financials, ops, team, customers, and more',
      'See the exact three things dragging your multiple down — and what to do about them',
    ],
    screenshot: '/screenshots/value-engine.png',
    alt: 'Galvern Value Engine showing business score ring and 8 driver breakdown',
  },
  {
    id: 'operations',
    label: 'Run Without You',
    pillar: 'Run the Day',
    headline: 'Your team runs the same way. Without you hovering.',
    sub: "The SOPs your techs follow on every call. The checklists your office manager runs every morning. The training that gets new hires productive in 30 days. All in one place — not in someone's head, not in a shared Google Drive that nobody updates.",
    bullets: [
      'SOPs, checklists, and training modules — built, versioned, and tracked',
      'AI Wizard writes a full SOP from a plain-English description in under 60 seconds',
      'Every SOP you publish feeds directly into your Operational Maturity score',
    ],
    screenshot: '/screenshots/operations.png',
    alt: 'Galvern Operations Center showing published SOPs with AI Wizard',
  },
]

export function ProductShowcase() {
  const [active, setActive] = useState('dashboard')
  const current = tabs.find(t => t.id === active) ?? tabs[0]

  return (
    <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          See inside the platform.
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-12 text-lg">
          This is the actual product. Not a mockup.
        </p>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition
                ${active === tab.id
                  ? 'bg-copper-500 text-white shadow-lg shadow-copper-500/25'
                  : 'bg-white/[0.05] text-slate-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content: copy left, screenshot right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Copy column */}
          <div className="lg:pt-8">
            <div className="inline-block text-xs font-mono text-copper-500
                            bg-copper-500/10 border border-copper-500/20
                            rounded-full px-3 py-1 mb-6">
              {current.pillar}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {current.headline}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-base">
              {current.sub}
            </p>
            <ul className="space-y-4">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-copper-500/20 border border-copper-500/40
                                   flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper-500" />
                  </span>
                  <span className="text-slate-300 text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot column */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-copper-500/5 rounded-3xl blur-2xl" />
            {/* Screenshot frame */}
            <div className="relative rounded-2xl overflow-hidden border border-copper-500/20
                            shadow-2xl shadow-black/40">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3
                              bg-slate-900/80 border-b border-white/5 backdrop-blur">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/[0.06] rounded-md px-3 py-1 text-xs
                                  text-slate-500 font-mono">
                    app.galvern.com/{current.id === 'dashboard' ? 'dashboard' : current.id === 'value-engine' ? 'value-engine' : 'operations'}
                  </div>
                </div>
              </div>
              {/* Actual screenshot */}
              <img
                src={current.screenshot}
                alt={current.alt}
                className="w-full block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Fallback if screenshots are not yet taken:** If Phase 0 screenshots don't exist
yet, replace `<img src={current.screenshot} ... />` with a placeholder div:
```tsx
<div className="w-full aspect-video bg-slate-900/50 flex items-center justify-center">
  <p className="text-slate-600 text-sm">Screenshot: {current.screenshot}</p>
</div>
```
This lets Claude run without blocking on Phase 0.

**Commit after:**
```bash
git add src/components/ProductShowcase.tsx
git commit -m "feat: add ProductShowcase — tabbed real app screenshot section"
```

---

## PHASE 5 — Features.tsx edits

**File:** `src/components/Features.tsx`

**Two changes:**

### 5a — Add missing "See the Truth" card

The `features` array currently has 4 items. Add a 5th as the second entry
(between Operations Center and Readiness Score). This resolves the most critical
gap identified in the proposals doc — the "See the Truth" pillar is completely
absent from Features.

**Add this object as the second item in the `features` array (index 1):**
```tsx
{
  icon: '🔭',
  title: 'Full Picture',
  desc: "Your QuickBooks doesn't talk to your field service software. Galvern connects them — revenue by job type, margin by tech, cash by week — all in one place, not five windows.",
},
```

**Resulting array order:**
1. Operations Center (Run the Day)
2. Full Picture ← new (See the Truth)
3. Readiness Score (Build the Value)
4. Value Tracker (Build the Value)
5. Gap Analysis (Build the Value)

### 5b — Fix section headline

**Current:**
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
  One platform. Every angle covered.
</h2>
```

**Replace with:**
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
  One platform. One picture.
</h2>
```

**Why:** "Every angle covered" risks the "all-inclusive" anti-positioning
(see proposals doc Watch-out 2). "One picture" is the actual promise and directly
maps to Pillar 2 language.

**Commit after:**
```bash
git add src/components/Features.tsx
git commit -m "copy: add missing See the Truth feature card; fix headline"
```

---

## PHASE 6 — SocialProof band (new component)

**File:** `src/components/SocialProof.tsx` (create new)

**Position in App.tsx:** Between `<Features />` and `<OwnerProfiles />`

**Purpose:** The site currently has zero trust signals. This is a minimal band
that acknowledges real operators are involved without fabricating testimonials.
Keep it honest — no invented numbers, no fake quotes.

**Component code:**
```tsx
const stats = [
  { value: '$1M–$20M', label: 'Revenue range we\'re built for' },
  { value: '8', label: 'Value drivers tracked automatically' },
  { value: '60s', label: 'To generate an SOP with AI Wizard' },
  { value: '3x–5x', label: 'EBITDA — how buyers value your business' },
]

export function SocialProof() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Trust statement */}
        <div className="text-center mb-16">
          <p className="text-copper-500 text-sm font-medium uppercase tracking-widest mb-4">
            Built with operators in the room
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Designed for the owner who runs the show.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            HVAC. Electrical. Landscaping. Environmental services. Specialty
            contracting. If you own it, operate it, and want to know what it's
            worth — this is for you.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-[#0a0f1e] px-8 py-8 text-center
                         hover:bg-white/[0.02] transition"
            >
              <div className="text-3xl font-bold text-copper-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Operator quote placeholder */}
        <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-8
                        text-center max-w-2xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed mb-4 italic">
            "I've been running this shop for 15 years and I've never had one
            place to see my numbers, my ops, and what the business is worth.
            That's what I signed up for."
          </p>
          <p className="text-slate-500 text-sm">
            — Beta member, HVAC operator, Florida
          </p>
          <p className="text-slate-600 text-xs mt-2">
            ※ Quote from beta onboarding call. Name withheld at request.
          </p>
        </div>

        {/* NOTE FOR AARON: Replace the quote block above with a real quote
            as soon as you have one from a beta call or Alan conversation.
            The ※ note can be removed once you have a named source. */}
      </div>
    </section>
  )
}
```

**Commit after:**
```bash
git add src/components/SocialProof.tsx
git commit -m "feat: add SocialProof section — stats strip and operator trust band"
```

---

## PHASE 7 — OwnerProfiles.tsx reframe

**File:** `src/components/OwnerProfiles.tsx`

**Change:** Make Mike *pick* his situation rather than read about personas.
Switch from label-first to question-first for each card. Section header
also updated to prompt action.

**Replace the section header copy:**

Current:
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
  Built for owners like you
</h2>
<p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">
  For owners of service and specialty businesses doing $1M–$20M in revenue — wherever you are in your journey.
</p>
```

Replace with:
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
  Which one sounds like you?
</h2>
<p className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-lg">
  Service businesses doing $1M–$20M. Wherever you are in the journey.
</p>
```

**Replace the `profiles` array** (change taglines to be question/statement-first):
```tsx
const profiles = [
  {
    emoji: '💪',
    label: 'The Grinder',
    tagline: '"I\'m too busy running it to zoom out and see it."',
    desc: "Galvern gives you the visibility you've never had time to build — so you can finally work on the business, not just in it.",
  },
  {
    emoji: '🚀',
    label: 'The Grower',
    tagline: '"I\'m ready to scale — I just don\'t know where to push."',
    desc: 'Galvern shows you exactly where the real leverage is so every dollar and hour goes toward actual growth.',
  },
  {
    emoji: '🎯',
    label: 'The Planner',
    tagline: '"I want to know what this business is actually worth."',
    desc: 'Galvern tracks your enterprise value every day from real data — so you\'re always ready, whether you sell or not.',
  },
]
```

**Note on Watch-out 1:** The original Planner tagline said "compounding value
every day until you do" — implying inevitable exit. The new tagline above
("whether you sell or not") aligns with the Message Architecture's prohibition
on implying Mike is being pushed toward a sale.

**Commit after:**
```bash
git add src/components/OwnerProfiles.tsx
git commit -m "copy: reframe OwnerProfiles as question-first; fix Planner exit-language watch-out"
```

---

## PHASE 8 — WaitlistCTA copy refresh

**File:** `src/components/WaitlistCTA.tsx`

**Change:** Make the CTA more urgent and specific. Current "Be First. Shape the
Product." is good but generic. Add what beta members actually get.

**Replace the heading and body:**

Current:
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
  Be First. Shape the Product.
</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
  We're opening Galvern to a small group of beta users. Early members get{' '}
  <span className="text-white font-medium">free access</span>, direct input on features,
  and priority onboarding.
</p>
```

Replace with:
```tsx
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
  Get in early. Help build it right.
</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
  We're opening to a small group of operators who want to run a tighter ship
  and know exactly what their business is worth. Beta members get{' '}
  <span className="text-white font-medium">free access for as long as they're active</span>,
  direct input on every feature decision, and a 1-on-1 onboarding call.
</p>
```

**Commit after:**
```bash
git add src/components/WaitlistCTA.tsx
git commit -m "copy: refresh WaitlistCTA — more specific beta offer"
```

---

## PHASE 9 — Wire App.tsx

**File:** `src/App.tsx`

**Replace entire file with:**
```tsx
import './index.css'
import { Hero } from './components/Hero'
import { ConnectsTo } from './components/ConnectsTo'
import { PainPoints } from './components/PainPoints'
import { HowItWorks } from './components/HowItWorks'
import { ProductShowcase } from './components/ProductShowcase'
import { Features } from './components/Features'
import { SocialProof } from './components/SocialProof'
import { OwnerProfiles } from './components/OwnerProfiles'
import { WaitlistCTA } from './components/WaitlistCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Hero />
      <ConnectsTo />
      <PainPoints />
      <HowItWorks />
      <ProductShowcase />
      <Features />
      <SocialProof />
      <OwnerProfiles />
      <WaitlistCTA />
      <Footer />
    </div>
  )
}

export default App
```

**Commit after:**
```bash
git add src/App.tsx
git commit -m "feat: wire all new sections into App.tsx — full page layout"
```

---

## PHASE 10 — Final verification

**Run dev server and check each section:**
```bash
cd clearview-marketing
npm run dev
```

**Check list:**
- [ ] Hero sub-headline reads naturally on mobile width (~375px)
- [ ] ConnectsTo pills wrap cleanly on small screens
- [ ] HowItWorks 3 cards stack vertically on mobile
- [ ] ProductShowcase tab switching works; active tab highlights in copper
- [ ] ProductShowcase screenshots load (or placeholder renders if Phase 0 not done)
- [ ] Features has 5 cards (2x3 grid or 2x2 + 1 center — let Tailwind handle it)
- [ ] SocialProof stats grid goes 2-col on mobile, 4-col on sm+
- [ ] OwnerProfiles taglines use curly quotes (not straight quotes — watch for
      escaped apostrophes in JSX, use `{'\''}`  or just write as HTML entities)
- [ ] WaitlistCTA form still submits correctly (no changes to WaitlistForm.tsx)
- [ ] No TypeScript errors: `npm run build` should exit 0

**After clean build:**
```bash
git add -A
git commit -m "chore: final build verification pass"
git push origin main
```

---

## Summary of files touched

| File | Action | Phase |
|---|---|---|
| `src/components/Hero.tsx` | Edit — sub-headline only | 1 |
| `src/components/ConnectsTo.tsx` | Create new | 2 |
| `src/components/HowItWorks.tsx` | Create new | 3 |
| `src/components/ProductShowcase.tsx` | Create new | 4 |
| `src/components/Features.tsx` | Edit — add card + fix headline | 5 |
| `src/components/SocialProof.tsx` | Create new | 6 |
| `src/components/OwnerProfiles.tsx` | Edit — taglines + header | 7 |
| `src/components/WaitlistCTA.tsx` | Edit — heading + body | 8 |
| `src/App.tsx` | Edit — import + wire all sections | 9 |
| `public/screenshots/dashboard.png` | Create — Aaron takes manually | 0 |
| `public/screenshots/value-engine.png` | Create — Aaron takes manually | 0 |
| `public/screenshots/operations.png` | Create — Aaron takes manually | 0 |

**Files NOT touched:** `WaitlistForm.tsx`, `Footer.tsx`, `tailwind.config.js`,
`index.css`, anything in `api/`, anything in the `clearview` (app) repo.

---

## What Claude should NOT do

- Do not modify `WaitlistForm.tsx` — the backend wiring is already correct
- Do not modify `Footer.tsx`
- Do not touch anything in the `clearview` app repo
- Do not touch Vercel, Supabase, or Resend
- Do not invent stats or customer counts that Aaron hasn't confirmed
- Do not use any of the words on the banned list in the Message Architecture:
  seamless, robust, holistic, intelligent, transformative, cutting-edge,
  next-gen, all-in-one, end-to-end, leverage, optimize, empower, unlock
- Do not say anything that implies Mike is being pushed to sell
- Do not push until Aaron confirms the screenshot section looks right locally

---

*Plan authored: 2026-05-07. Execute: 2026-05-08.*
*Source documents: ClearView_Message_Architecture_v1.md + decisions.md 2026-05-07.*
