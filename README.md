# Hisaab Website

Hisaab marketing website converted from the legacy Zynapse React/Vite codebase, using the Google Stitch **Luminescent Ledger** design as a visual reference.

## Requirements
- Node.js compatible with Vite 8 (Node 20.19+ or 22.12+)
- npm

## Run (Windows CMD)
```cmd
npm install
copy .env.example .env
npm run dev
```
Open the localhost URL shown by Vite.

## Build
```cmd
npm run lint
npm run build
```

## APK download
Host a verified signed release APK on a trusted HTTPS endpoint. Set `VITE_APK_URL=https://...` in `.env` and rebuild. Without it, the download page shows a clear not-configured notice rather than a broken or invented download link.

## Routes
`/`, `/features`, `/download`, `/support`, `/privacy`, `/terms`, and custom 404.

## Pre-launch checklist
- Configure the verified APK URL, version, SHA-256 checksum and supported Android versions.
- Replace preliminary privacy and terms content with legally reviewed text matching the final app behavior.
- Add a verified support email and social links.
- Verify SMS parser claims, data handling, and release status against the shipped APK.
- Perform real-device testing and Lighthouse accessibility/performance checks.

The original Stitch export is retained in `STITCH_REFERENCE.html` and `STITCH_DESIGN.md` for reference. Old Zynapse pages/components are not used by the app.
