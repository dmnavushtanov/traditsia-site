# April Uprising Reenactment Page (`src/newPage`)

This module is an isolated standalone page feature inside the Next.js site.

- Route: `/new-page`
- Route file: `src/app/new-page/page.tsx`
- Feature entry: `src/newPage/pages/Index.tsx`

## Current Architecture

- Composition:
  - `src/newPage/pages/Index.tsx` renders all sections in order.
- Styling:
  - `src/newPage/styles.module.css` contains local page tokens and effects (`--np-*`, texture, divider, glow).
- Bilingual content files:
  - `src/newPage/content.en.ts` (English text)
  - `src/newPage/content.bg.ts` (Bulgarian text)
  - `src/newPage/content.ts` maps language (`en`/`bg`) to the correct content object.
  - `src/newPage/content.types.ts` defines shared content typing.
- Language switcher integration:
  - `Index.tsx` reads active language from `useLanguage()` and picks content via `getNewPageContent(language)`.
  - All page text switches live when the global language switcher changes.
- Sections:
  - `src/newPage/components/HeroSection.tsx`
  - `src/newPage/components/SpectacleSection.tsx`
  - `src/newPage/components/ProgramSection.tsx`
  - `src/newPage/components/HistorySection.tsx`
  - `src/newPage/components/VisitorSection.tsx`
  - `src/newPage/components/Footer.tsx`

## Images and Runtime Fixes

- Hero and history images are served from `public/` to avoid broken `/_next/static/media/...` URLs in dev/export:
  - `public/newPage/hero-bg.jpg`
  - `public/newPage/reenactment.jpg`
- Countdown hydration mismatch is prevented in `SpectacleSection.tsx` by:
  - deterministic first render (`00` values),
  - client update after mount.
- Tailwind now scans `src/newPage/**/*` so page-specific utility classes are generated.

## Isolation Rules

- Keep feature code under `src/newPage`.
- Keep all user-facing copy only in `content.en.ts` and `content.bg.ts`.
- When changing page text/content, always update both files: `src/newPage/content.en.ts` and `src/newPage/content.bg.ts`.
- Reuse `content.types.ts` for any new translatable fields.
- Avoid coupling this page to global UI components except required shared app systems (routing, language context).

## Run Locally

From project root:

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/new-page/`

If you changed config/assets and still see stale errors, clear the build cache once:

```powershell
Remove-Item -Recurse -Force .next
```

Then run `npm run dev` again.

## Validate

```bash
npm run check
npm run lint
```

Expected:

- TypeScript passes.
- ESLint passes with no warnings/errors.
