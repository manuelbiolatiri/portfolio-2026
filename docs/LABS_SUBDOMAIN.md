# Labs subdomain

The Labs showcase is deliberately part of `manuelbiolatiri/portfolio-2026`, not a second Next.js app.

- Preview it at `/labs` on a Vercel preview deployment.
- `next.config.ts` routes requests with host `labs.manuelbiolatiri.me` and path `/` to `/labs`. The main site at `manuelbiolatiri.me` is not rewritten.
- Only the Labs root is host-rewritten. Project links go to their independent sites or repositories.

## Connect the subdomain after review

1. Merge the reviewed PR to `main` and confirm a healthy production build.
2. In Vercel, open project **portfolio-2026** → **Settings → Domains** and add `labs.manuelbiolatiri.me`.
3. Copy the **exact CNAME target** displayed by Vercel (targets can be deployment-specific).
4. In Cloudflare DNS for `manuelbiolatiri.me`, create a CNAME named `labs` pointing to that value. Use DNS-only initially to avoid proxy/verification surprises.
5. Back in Vercel confirm ownership, DNS, HTTPS certificate and production routing.
6. Verify `https://labs.manuelbiolatiri.me/` shows Labs while `https://manuelbiolatiri.me/` still shows the existing portfolio.

If Vercel requests a TXT ownership record, add the exact verification record shown in the Domains settings. Do not remove existing apex/portfolio records.

## QA

From the repository root: `npm ci && npm run lint && npm run build`.

Manually check Labs at widths 320, 390 and 1440px. Check accessible external links and logos, and hostname-specific root routing at the actual subdomain after DNS is connected.

No DNS records, Vercel domain registrations or deployments are changed in this PR.
