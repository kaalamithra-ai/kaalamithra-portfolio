# KAALAMITHRA AI TECH SOLUTIONS — Company Portfolio Website

Modern, premium portfolio website built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

> IDEA TODAY. IMPACT TOMORROW.

## Run locally

```bash
npm install
npm run build
npm run start        # production server on http://localhost:3000
# or
npm run dev          # development server
```

## Site sections (main navigation)

HOME · SERVICES · PORTFOLIO · CONTACT

## Content hierarchy

```
HOME
 ↓
11 SERVICES            → /services
 ↓
INDIVIDUAL SERVICE     → /services/[slug]        (one reusable template)
 ↓
SUB-SERVICES           → listed inside each service page
 ↓
RELATED PROJECTS       → /portfolio (filterable by service)
 ↓
CASE STUDY DETAILS     → /portfolio/[slug]       (one reusable template)
```

Process, technologies and "why KAALAMITHRA" content lives inside the Home
and Service pages (no separate top-level sections).

## Editing content — no UI code changes needed

All content lives in `data/` and `lib/`:

| File                  | What it controls                                             |
| --------------------- | ------------------------------------------------------------ |
| `data/services.ts`    | The 11 services: copy, sub-services, technologies, SEO text  |
| `data/projects.ts`    | Projects / case studies + their service & sub-service links  |
| `data/technologies.ts`| Technology categories (editable stack list)                  |
| `data/company.ts`     | Value props, "Why KAALAMITHRA" cards, 5-step process, mission |
| `lib/site.ts`         | Company name, tagline, site URL, contact details             |

Add a service or project in the data files and its page, navigation links,
sitemap entry, related-project relationships and SEO metadata are generated
automatically.

### Placeholders

Bracketed values in `data/projects.ts` (e.g. `[CLIENT NAME]`, `[RESULTS — …]`)
are **editable placeholders**. Replace them with real, approved case-study
information. No fake clients, revenue or percentages are published.

Also update in `lib/site.ts` before going live:

- `SITE_URL` (used for canonical URLs, sitemap, Open Graph)
- `CONTACT_EMAIL` / `CONTACT_PHONE`

## Where enquiries go (contact form)

The contact form posts to `app/api/contact/route.ts`, which **actually delivers**
the enquiry. Configure one delivery channel in `.env.local` (copy `.env.example`):

| Env var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | **Recommended.** Emails each enquiry via [Resend](https://resend.com). |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries (defaults to `CONTACT_EMAIL` in `lib/site.ts`). |
| `CONTACT_FROM_EMAIL` | Verified sender address (use `onboarding@resend.dev` for testing). |
| `CONTACT_WEBHOOK_URL` | Alternative: POST the enquiry as JSON to Formspree, Zapier, Make, Apps Script, n8n, Slack… |
| `CONTACT_FILE_BACKUP` | Set `false` to disable the local `.data/contact-enquiries.jsonl` backup. |

**Quickest setup (no backend):** create a form on Formspree and set
`CONTACT_WEBHOOK_URL=https://formspree.io/f/xxxxxxx` — enquiries are then
emailed to you by Formspree.

**Email setup:** set `RESEND_API_KEY` + `CONTACT_FROM_EMAIL`, verify the domain
in Resend, and every enquiry arrives as an email with `Reply-To` set to the
client's address.

Whatever is configured, the route also keeps a JSONL backup in
`.data/contact-enquiries.jsonl` (except on Vercel, where the filesystem is
ephemeral) and logs the enquiry to the server console. Delivery order is
Resend → webhook → local backup.

If none of those destinations exist (e.g. on Vercel with no env vars set) the
route returns a `502` and the visitor is asked to email you directly — it never
reports a success for an enquiry that was dropped.

Built in: server-side validation, a hidden honeypot field for bots, a
per-IP throttle (5 submissions / 10 min), and inline error/loading states.

## Deploying to Vercel

This is a **Next.js app**, so the Vercel project must be configured as such —
otherwise the build output is ignored and the site 404s.

| Setting (Project → Settings → Build & Development) | Required value |
| --- | --- |
| Framework Preset | **Next.js** |
| Root Directory | repo root (empty / `./`) — **not** `public` |
| Build Command | default (`npm run build`) |
| Output Directory | **leave empty** — do not set `public` or `out` |

`vercel.json` already pins `"framework": "nextjs"` so it cannot regress. The
Output Directory must stay unset: setting it turns the deployment into a plain
static site and **disables all App Router pages and the `/api/contact` route**.

Also add the environment variables from `.env.example` to
Project → Settings → Environment Variables (Production + Preview), since
`.env.local` is never committed.

## Structure

```
app/          pages & routes (App Router) + sitemap/robots/icon
app/api/      API routes (contact form delivery → app/api/contact/route.ts)
components/   reusable UI (Header, Footer, ServiceCard, ProjectFilter, …)
data/         structured content (services, projects, technologies, company)
lib/          site config + shared contact-enquiry validation
types/        shared TypeScript types
public/       logo.png, hero-loop.mp4 (hero banner video), hero-poster.jpg
```

### Hero banner video

`public/hero-loop.mp4` is a seamless 3D-animated abstract loop (glowing AI
node / light-trail swirls in the brand's blue-purple palette), web-optimized
to ~4.7 MB. It autoplays muted + looped, and **pauses to a static poster
frame when the visitor prefers reduced motion**.

License: "Mesmerizing Abstract Purple Light Swirls Loop" by Colin Jones, free
via Pexels (https://www.pexels.com/license/). To swap it, replace
`public/hero-loop.mp4` and `public/hero-poster.jpg` with any same-named files.

## Quality built in

- Responsive: 3-col → 2-col → 1-col grids, hamburger mobile nav
- Subtle animations with `prefers-reduced-motion` support
- SEO: unique titles/descriptions per page, Open Graph, canonicals,
  sitemap.xml, robots.txt, JSON-LD structured data, semantic HTML
- Accessibility: skip link, aria labels, focus states, semantic landmarks
