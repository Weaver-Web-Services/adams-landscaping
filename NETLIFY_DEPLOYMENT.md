# Netlify Deployment Notes

This repo contains both a Vite frontend and a Node/Express server, but the public marketing site can be deployed to Netlify as a static frontend.

## Netlify settings

- Build command: `pnpm build:netlify`
- Publish directory: `dist/public`
- Node version: `22`

These values are already captured in [netlify.toml](/Users/jovonmiller/adams-landscaping-clone/netlify.toml).

## What is safe to deploy statically

- The main public routes in [client/src/App.tsx](/Users/jovonmiller/adams-landscaping-clone/client/src/App.tsx) are static marketing pages.
- The pricing calculator runs fully in the browser.
- The chat widget uses hard-coded client-side responses and does not call a backend.

## Important deployment considerations

- Netlify will not run the Express app in `server/`.
- The frontend should use the Netlify-specific build command instead of the repo's full `build` script, which also bundles the server.
- Because this is a single-page app, direct visits to routes like `/services` and `/contact` require the redirect rule in `netlify.toml`.
- The contact page now opens the visitor's email app with a prefilled message instead of pretending to submit data to a backend.

## Current limitations

- No database-backed contact capture is configured.
- No login/auth flow is used by the live public routes.
- If you later want real submissions without standing up a backend, use Netlify Forms or a service like Formspree.
