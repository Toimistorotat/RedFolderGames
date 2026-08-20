# RedFolderGames

RedFolderGames is a React/Vite showcase for game ideas and prototypes.

## Current project layout

- `src/` — the active rewritten React application.
- `public/` — static files served by the application, including changelogs.
- `backend/phpback/` — PHP API implementation.
- `backend/api/` — API rewrite rules.
- `legacy/Frontend/` — the previous frontend, retained for reference and rollback.

The old `Rewrite/` and `Frontend/` locations are no longer active project entrypoints.

## Development

Install dependencies and start the active application from this directory:

```bash
npm install
npm run dev
```

The Vite development server proxies `/api` requests to the configured PHP backend. The deployed site keeps the `/RedFolderGames/` base path.

## Checks and build

```bash
npm run lint
npm run build
npm run preview
```

Vite writes production output to `dist/`. `dist/` is generated deployment output and is intentionally ignored by Git; the source of truth is the root project files.

## Backend

The PHP backend can be served separately from `backend/phpback/`. Its internal routes and public API paths are unchanged. Install its Composer dependencies from that directory when needed.

## Legacy frontend

The previous application remains buildable from `legacy/Frontend/`:

```bash
cd legacy/Frontend
npm install
npm run build
```

© 2025 REDKING_11. All rights reserved.
