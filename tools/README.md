# Extraction tooling

The scripts that produced the corpus in the repository root. They are here so the
corpus can be regenerated when Infront ships a new version, rather than being a
snapshot nobody can reproduce.

## Running them

```bash
npm install node-html-parser playwright
node fetch.js            # mirror the TypeDoc reference pages
node fetch-ex.js         # mirror the examples and widget snippets
IF_USER=... IF_PASS=... node login2.js    # log in to the legacy site
node crawl-legacy.js     # mirror the legacy 2.x/3.x pages
bash run.sh              # convert, split, index, verify
```

`run.sh` is the conversion pipeline and is safe to re-run on its own once the `raw*/`
mirrors exist. It ends with `check.js`, which walks every emitted file and fails loudly
if any relative link does not resolve.

`fetch.js` needs `nav-flat.json`, which comes from decoding
`https://docs.infrontfinance.com/docs/assets/navigation.js` — base64 of a deflate
stream containing the full page tree. `index.js` likewise reads a decoded
`search.json` from `assets/search.js`.

## Hand-written content the pipeline does not produce

`field-notes/` holds notes verified against the live service (see its README). No script generates it, and
`run.sh` rebuilds `out/` from scratch, so **copy `field-notes/` into `out/` before `index.js` runs** — that
puts it in `manifest.json` and under `check.js`. `readme.js` and `concepts.js` link to it; a regeneration
that forgot the copy fails the link check instead of silently dropping the notes.

## What each script does

| Script | Role |
|---|---|
| `fetch.js` | Downloads every TypeDoc page listed in the navigation data. |
| `fetch-ex.js` | Downloads each example's `script.ts`, `template.html`, `style.css`, `config.json`. |
| `login2.js` | Drives the IdentityServer login for the legacy site and saves `state.json`. |
| `crawl-legacy.js` | Crawls the legacy `/v2/*` and `/v3/*` pages using that session. |
| `convert.js` | TypeDoc HTML → Markdown, with front matter, signatures and cross-links. |
| `convert-ex.js` | Examples and snippets → Markdown. |
| `convert-legacy.js` | Legacy pages → one file per widget, options structured. |
| `guides.js` | Splits the docsite's getting-started page into one file per topic. |
| `split.js` | Splits pages too large to retrieve as one chunk into `.parts/`. |
| `fixlinks.js` | Normalises relative links and de-links anything dead upstream. |
| `index.js` | Builds `index/symbols.tsv`, `index/symbols.json`, `index/topics.md`, `manifest.json`. |
| `readme.js` | Generates the corpus README from the manifest, so its counts stay true. |
| `check.js` | Verifies every relative link resolves. |

## Things that will bite you

- **`<pre>` parsing.** Pass `{blockTextElements:{script:false,style:false}}` to
  node-html-parser. The default treats `<pre>` as raw text and you get `<span>` markup
  inside your code blocks.
- **Content extraction.** Parsing a whole TypeDoc page mis-nests its `<details>`
  elements and `.col-content` truncates. `convert.js` slices the content column out of
  the raw HTML string before parsing.
- **Prototype keys.** Symbol names include `constructor` and `toString`. Every lookup
  map in `index.js` uses `Object.create(null)`.
- **Playwright.** The installed browser is older than what npm `playwright` expects, so
  launch with `executablePath:"/opt/pw-browsers/chromium-1194/chrome-linux/chrome"`.
  The legacy login's submit button does not respond to `.click()`;
  `document.forms[0].submit()` works. Navigations there intermittently fail with
  `ERR_TOO_MANY_RETRIES` — retry, it is flaky rather than blocked.
- **Missing example files** come back as the SPA shell with `content-type: text/html`
  and status 200. Check the content type, not the status.

## Credentials

`login2.js` reads `IF_USER` and `IF_PASS` from the environment. Nothing in this
directory contains credentials, and `state.json` (the saved browser session) is
gitignored. Keep it that way.

The current docsite needs no login at all — only the legacy site does.
