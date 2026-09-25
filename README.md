# portfolio-2026

Personal website and engineering portfolio for **Emmanuel Biolatiri**.

- **Primary Domain**: [manuelbiolatiri.me](https://manuelbiolatiri.me)
- **Repository**: `manuelbiolatiri/portfolio-2026`
- **Deployment**: Vercel (Production branch: `main`) with Cloudflare DNS

---

## Positioning & Philosophy

> Senior Software Engineer building payment, platform and wallet infrastructure.  
> *Explore → Design → Build → Ship → Operate → Scale*

- **Tone**: Calm, editorial, technical, restrained, and industrial.
- **Aesthetics**: Warm paper palette (`#f3efe7`), near-black ink (`#171717`), deep forest green accent (`#1d5d49`), and crisp typographic hierarchy.
- **Typography**: Editorial serif headings, clean sans-serif body, and monospace metadata/numeric indicators.

---

## Technical Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom CSS design tokens
- **Hosting**: Vercel

```
portfolio-2026/
├── app/
│   ├── layout.tsx         # Root layout, Google fonts & SEO OpenGraph metadata
│   ├── page.tsx           # Assembled editorial homepage
│   ├── globals.css        # Editorial tokens, typography & CSS variables
│   ├── icon.svg           # EB monogram SVG favicon
│   ├── robots.ts          # Search crawler rules
│   └── sitemap.ts         # Automated sitemap generation
├── components/
│   ├── Header.tsx         # Monogram EB logo & responsive navigation
│   ├── Footer.tsx         # Colophon, direct links & 2019 archive reference
│   ├── SectionLabel.tsx   # Editorial monospace section labels
│   ├── WorkItem.tsx       # System breakdown cards with architectural specs
│   ├── Lifecycle.tsx      # Interactive 6-stage engineering lifecycle switcher
│   ├── WalletKitDiagram.tsx # Technical system flow & 4-tier capability specs
│   ├── WritingCard.tsx    # Technical essays & architecture notes
│   └── ResearchCard.tsx   # Peer-reviewed academic literature (Elsevier)
└── data/
    ├── work.ts            # Commercial systems & platforms dataset
    ├── writing.ts         # Essays & published academic research
    └── lifecycle.ts       # 6-phase engineering lifecycle methodology
```

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build & verification
npm run build
```

---

## License

© 2026 Emmanuel Biolatiri. All rights reserved.
