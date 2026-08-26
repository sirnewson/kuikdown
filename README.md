# KuikDown

Quick links to AI tools, software, games and apps — plus direct file downloads.
One page, searchable, one click to the real destination.

Built with React 19, Vite and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

`npm run build` produces a static site in `dist/`, `npm run preview` serves it.

## Adding an entry

Everything on the page is driven by one file: [`src/data/catalog.js`](src/data/catalog.js).
Add an object to the `entries` array and the card appears — search, category counts
and filters pick it up automatically.

A quick link is a one-liner:

```js
link('excalidraw', 'Excalidraw', 'Hand-drawn style diagrams.', 'tools', 'https://excalidraw.com')
```

A downloadable file carries a bit more:

```js
{
  id: 'my-app',                       // unique slug
  name: 'My App',
  version: 'v1.0.0',                  // optional
  description: 'One line about the file.',
  category: 'software',               // ai | software | tools | games | apps
  type: 'download',
  fileName: 'MyApp-Setup-1.0.0.exe',
  size: '42 MB',
  platform: 'windows',                // android | windows
  url: `${RELEASE}/MyApp-Setup-1.0.0.exe`,
  sha256: 'optional checksum',        // omit to hide the checksum row
}
```

Categories live in the `categories` map at the top of the same file; each one needs a
matching icon in the `icons` map in
[`src/components/FilterBar.jsx`](src/components/FilterBar.jsx).

Link cards pull their favicon from DuckDuckGo's icon service and fall back to a letter
tile when there isn't one.

## Hosting the files

The site is static — it only links out. Large binaries are attached to a
[GitHub release](https://github.com/sirnewson/kuikdown/releases), which allows up to
2 GB per asset and serves a stable URL:

```bash
gh release upload v1.0.0 "path/to/Installer.exe" --clobber
```

The `RELEASE` constant at the top of `catalog.js` is the base for those URLs. Small
files can instead go in `public/` and be linked as `/kuikdown/<file>`.

Only host files you have the right to redistribute. Anything you don't, link to the
vendor's own download page instead — that is what the `link()` entries are for, and it
keeps the version current for free.

## Deploying

The site is live at **https://sirnewson.github.io/kuikdown/**, served from the
`gh-pages` branch. To ship a change:

```bash
npm run deploy
```

That builds and pushes `dist/` to `gh-pages`; Pages picks it up within a minute.

`vite.config.js` sets `base` to `/kuikdown/` for project-site URLs. Building with
`BASE_PATH=/` targets a root domain instead.
