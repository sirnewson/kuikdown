# KuikDown

A fast, no-nonsense download portal. One page, one card per file, one click to the
real download link.

Built with React 19, Vite and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

`npm run build` produces a static site in `dist/`, `npm run preview` serves it.

## Adding a download

Everything on the page is driven by one file: [`src/data/downloads.js`](src/data/downloads.js).
Add an object to the `downloads` array and the card appears — no other changes needed.

```js
{
  id: 'my-app',                       // unique slug
  name: 'My App',
  version: 'v1.0.0',
  fileName: 'MyApp-Setup-1.0.0.exe',
  description: 'One line about the file.',
  size: '42 MB',
  platform: 'windows',                // 'android' | 'windows'
  url: 'https://…/MyApp-Setup-1.0.0.exe',
  sha256: 'optional checksum',        // omit to hide the checksum row
}
```

New platforms are added to the `platforms` map in the same file, plus an icon entry
in [`src/components/DownloadCard.jsx`](src/components/DownloadCard.jsx).

## Hosting the files themselves

The site is static — it only links out. Large binaries are best attached to a
[GitHub release](https://github.com/sirnewson/kuikdown/releases), which allows files up
to 2 GB each and serves them over a stable URL:

```bash
gh release create v1.0.0 "path/to/Installer.exe" --title "v1.0.0" --notes "Initial release"
```

Small files can instead be dropped into `public/` and linked as `/kuikdown/<file>`.

## Deploying

Pushing to `main` builds and publishes to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — enable Pages
("Build and deployment" → source **GitHub Actions**) in the repository settings first.

`vite.config.js` sets `base` to `/kuikdown/` for project-site URLs. Building with
`BASE_PATH=/` targets a root domain instead.
