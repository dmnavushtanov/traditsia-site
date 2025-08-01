# Traditsia Site

This is a Next.js application built for a nonprofit organization, focusing on showcasing historical re-enactments, events, and a gallery of traditional costumes and medieval events. The site is designed to be modern, performant, and easy to manage.

## Technologies Used

*   **Next.js (App Router):** A React framework for building performant web applications, utilizing server-side rendering (SSR) and static site generation (SSG) capabilities. The App Router is used for a modern routing and data fetching approach.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing, improving code quality and maintainability.
*   **ca CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui:** A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **Framer Motion:** A production-ready motion library for React, used for animations and interactive elements.
*   **Google Maps API:** Integrated for displaying event locations on interactive maps.
*   **CSV Parsing:** Content for events is sourced from local CSV files.

## Image Handling and Optimization

This project leverages Next.js's built-in image optimization capabilities. All images are handled by the `next/image` component, which provides automatic optimization, resizing, and format conversion (e.g., to WebP) on-demand at runtime.

*   **Where to add images:**
    *   **Static Assets:** For general site images (like the logo, banner, or other static assets), place them in the `public/images/` directory.
    *   **Gallery Images:** For gallery content, images should be organized within `public/gallery/` in their respective album subdirectories (e.g., `public/gallery/Historical Reenactment/`).

When using the `next/image` component, you simply reference the image path relative to the `public` directory. Next.js will then optimize and serve the most appropriate image size and format to the user's device, improving performance without manual compression steps.

## Architectural Approach

The application leverages the Next.js App Router architecture, distinguishing between Server Components and Client Components:

*   **Server Components:** Used for data fetching (e.g., `getEvents` from CSV files) and rendering static or server-rendered UI parts, improving initial page load performance.
*   **Client Components:** Used for interactive UI elements (e.g., `GoogleMap`, `ImageLightbox`, `Select` dropdowns) and components requiring React Hooks (`useState`, `useEffect`).
*   **Content-as-Code:** Event data is managed in local CSV files, providing a straightforward way to update content.
*   **Modular Component Structure:** The UI is broken down into reusable components (e.g., `EventCard`) for better organization and maintainability.

## Main Components

*   **`src/app/layout.tsx`:** The root layout of the application, responsible for global styling, font loading (`next/font`), and context providers.
*   **`src/components/TranslatableNavigation.tsx`:** The main navigation bar, including language switching and dynamic routing.
*   **`src/components/HomePageClient.tsx`:** Client component for the home page, displaying upcoming events and announcements.
*   **`src/components/EventsPageClient.tsx`:** Client component for the events list page, featuring event filtering and a map display.
*   **`src/components/EventCard.tsx`:** A reusable component for displaying individual event details in a card format.
*   **`src/components/EventDetailsClient.tsx`:** Client component for individual event detail pages, including a map centered on the event location.
*   **`src/components/ImageLightbox.tsx`:** A dynamically loaded component for viewing gallery images in a lightbox.
*   **`src/components/GoogleMap.tsx`:** An interactive map component, dynamically loaded, displaying event markers.
*   **`src/components/LanguageSwitcher.tsx`:** Component for switching between supported languages.
*   **`src/lib/content.ts`:** Utility functions for fetching and processing event data from CSV files.
*   **`src/lib/translations.ts`:** Manages multi-language translations for the site.

## Project Structure

```
public/             # Static assets served as-is
  images/           # Logos, banners and other site images
  gallery/          # Albums for the gallery. Each folder is an album
src/
  app/              # Next.js routes
  components/       # Reusable React components
  content/          # CSV files with events and branches data
  contexts/         # React contexts (e.g. language)
  lib/              # Utility functions and translations
```

All files inside `public/` are available at the same path on the website. For example, an image at `public/images/site-banner.webp` is served from `/images/site-banner.webp`.

## Updating Content

* **Events** — edit `src/content/events.csv` (Bulgarian) or `events.en.csv` (English). Each row describes an event. Image files referenced in the `ImagePath` column live in `public/images/events/`.
* **Branches** — update `src/content/branches.csv` or `branches.en.csv` with location details. Coordinates are used to place markers on the map.
* **Gallery** — create a folder inside `public/gallery/` for each album and drop your images there. The gallery pages are generated automatically based on these folders.
* **Translations** — modify `src/lib/translations.ts` to change text that appears on the site.

## Main Principles for Development

These principles guide the development and maintenance of this project:

*   Avoid feature creep at all cost. Avoid over-engineering and overthinking.
*   Always prioritize writing clean, simple, and modular code.
*   Do what the user asks for, exactly and precisely. Nothing more, nothing less.
*   Execute exactly what is requested, nothing more.
*   Check that you've implemented every requirement fully & completely.
*   Prioritize simplicity and minimalism in your solutions.
*   Use simple & easy-to-understand language. Write in short sentences.
*   Keep our codebase simple: resist creating new files unless it really makes sense.

### IMPORTANT

*   BE VERY SUSPICIOUS OF EVERY COMPLICATION in code. SIMPLE = GOOD, COMPLEX = BAD.
*   Always prioritize writing clean, simple, modular code.
*   Do not add unnecessary complications.
*   Implement precisely what the user asks for without additional features or complexity.
*   Prioritize simplicity and minimalism in your solutions.
*   Do not add fallbacks if critical libraries not available.

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd traditsia-site
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Copy `env.example` to `.env.local` and replace the Google Maps key placeholder with your real key. The `.env.local` file is ignored by Git so your secret won't be committed:
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_real_key_here
    ```
    When deploying, define the same variable (`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`) as a repository secret so the build workflow can access it.
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) in your browser.

## Deploying to GitHub Pages

The build script automatically detects when it runs inside a GitHub workflow and
applies the correct base path for your repository. If you are using a custom
domain (no `/traditsia-site` path) **define** `NEXT_PUBLIC_BASE_PATH` as an empty
string in your environment file to disable the GitHub Pages base path. Otherwise
set it to your repository name.

1. **Export the static site**
   ```bash
   npm run export
   ```
2. **Publish to GitHub Pages**
   ```bash
   git subtree push --prefix out origin gh-pages
   ```
   Then enable GitHub Pages from the repository settings, selecting the `gh-pages` branch.
   Your site will be available at `https://<your-user>.github.io/<repository>/`.

## Building and Serving Locally

To create a production build and serve it locally:

```bash
npm run build
npm run start
```

The `build` script first runs linting and a TypeScript check so you can see all issues in one run. You can also execute `npm run check` separately to only perform the type check.

Alternatively, `npm run export` generates a static `out/` directory that can be hosted on any static file server.
