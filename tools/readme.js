const fs=require("fs"),path=require("path");
const OUT=process.env.OUT||"out";
const M=JSON.parse(fs.readFileSync(path.join(OUT,"manifest.json"),"utf8"));
const g=M.guides;
const k=M.by_kind, pt=M.by_page_type;
const mb=(n)=>(n/1048576).toFixed(1)+" MB";
const modTables=M.symbol_index.tables;
const inDir=(p)=>M.files.filter(f=>f.file.startsWith(p)&&!f.file.includes(".parts/")).length;
const nEx=inDir("examples/"), nSn=inDir("snippets/"), nGu=g.length,
      nL3=inDir("legacy/wtk-3.x/"), nL2=inDir("legacy/wtk-2.x/"), nRef=inDir("reference/");
const md=`---
title: "Infront Web Toolkit documentation corpus"
kind: index
page_type: corpus-readme
product: "Infront Web Toolkit"
version: "${M.docs_version}"
extracted: "${M.extracted}"
file_count: ${M.file_count}
---

# Infront Web Toolkit — documentation corpus

Extracted from Infront's own documentation site on ${M.extracted}. Every file is
Markdown with YAML front matter. It is written for retrieval by coding agents, not
for browsing: one concept per file, code verbatim, cross-references as working
relative links.

## What is covered

| Library | What it is | Version |
|---|---|---|
| **SDK** (\`InfrontSDK\`) | Market data, time series, news, alerts, search and trading. This is the data layer. | 2.3.1 |
| **WTK** (\`Infront.UI\`) | Prebuilt widgets — charts, watchlists, orderbooks, order entry. Built on the SDK. | 4.3.1 |
| **Utils** (\`InfrontUtil\`) | Observable arrays, formatting and other helpers bundled with the SDK. | — |

For charting and broadcast graphics, the two entry points that matter most are
\`InfrontSDK.timeSeries\` (historical bars) and \`InfrontSDK.symbolData\` (live fields);
see [Where to start by task](#where-to-start-by-task) below.

## How to find things

**Not sure what Infront calls the thing you want** — start at
[\`index/concepts.md\`](index/concepts.md). It maps plain English and finance vocabulary
("candles", "order book", "market cap", "time and sales") onto the symbols that serve
them, and records the conventions that save a lookup. Plain grep finds the right page
but ranks it badly, because the reference is generated from TypeScript and carries
almost no prose synonyms; that file is the ranking.

**Want what the live service actually does** — [\`field-notes/\`](field-notes/README.md). Hand-written notes
verified against the live service through Infront's sandbox: instrument ids that work (several of the
docs' example ids do not), the OMXS30 constituents chain, which feeds a login sees and with what delay,
live update rates, and the ordering trap in live time series. Where a note and the reference disagree,
the note records what the service did.

**Looking up a symbol you already know the name of** — this is the fast path.

\`\`\`
grep -P '^timeSeries\\t' index/symbols.tsv
\`\`\`

\`index/symbols.tsv\` is tab separated, ${M.symbol_index.entries.toLocaleString("en-US")} rows,
columns \`name → kind → qualified_name → file → anchor\`. It covers every class,
interface, enum, function, type alias, method, property and enum member
(${M.symbol_index.unique_names.toLocaleString("en-US")} distinct names). \`index/symbols.json\`
is the same data keyed by name if you would rather parse it.

**Browsing by area** — \`index/topics.md\` is the documentation's own navigation tree
with a link to every reference page. Per-module tables of top-level symbols live in
${modTables.length} files: ${modTables.slice(0,3).map(t=>"`"+t+"`").join(", ")}, …

**Routing before reading** — \`manifest.json\` lists every file with its title, kind,
module, nav path, original URL and byte size. Read it when you want to pick files
without opening them.

**Full-text search** — plain \`grep -r\` over the tree works; files are small enough
to read whole (the largest is under 64 KB).

## Layout

\`\`\`
README.md              this file
manifest.json          every file, with front matter fields, for routing
index/
  concepts.md          plain English → symbol, when you don't know the name yet
  symbols.tsv          name → kind → qualified name → file → anchor  (primary lookup)
  symbols.json         the same, keyed by name
  topics.md            the docs' own navigation tree
  symbols-<MODULE>*.md per-module tables of top-level symbols
guides/                ${nGu} prose guides plus an index: setup, authentication, migration, languages
reference/
  SDK/  WTK/  Utils/   one file per API symbol, named by qualified name
  <name>.parts/        oversized pages split into numbered parts, with the parent kept as an index
examples/              ${nEx} runnable examples from the docsite, full source
snippets/              ${nSn} per-widget minimal usage snippets
legacy/                the superseded 2.x / 3.x docsite — see the warning below
  wtk-3.x/  wtk-2.x/   ${nL3} and ${nL2} files, one per widget, options typed and described
  site/                release notes and the old site's standalone pages
field-notes/           hand-written, verified against the live service; not generated (see its README)
\`\`\`

A reference file is named after its qualified name, so
\`reference/SDK/SDK.InfrontSDK.timeSeries.md\` is exactly what it sounds like. That
makes direct opens possible without consulting an index.

## Front matter

Every file carries the fields you need to decide whether to read it:

\`\`\`yaml
title            the symbol or guide name
qualified_name   e.g. SDK.InfrontSDK.alertList
kind             ${Object.keys(k).filter(x=>x!=="undefined").slice(0,8).join(", ")}, …
page_type        api-reference | guide | example | legacy-reference | symbol-index | topic-index
module           SDK | WTK | Utils
namespace        e.g. SDK.InfrontSDK
group            the docs' own grouping, e.g. Alerts, Trading, Chart
nav_path         full breadcrumb through the docs' navigation
source_url       the page this was extracted from
defines          the symbol this page defines
members          methods, properties and enum members declared here
member_groups    the same, grouped as the docs group them
related_types    types it extends or that extend it
references       other symbols this page links to
\`\`\`

Examples add \`tags\`, \`demonstrates\` (the widgets and APIs they exercise) and
\`source_files\`. Split pages add \`part_of\`, \`part_index\` and \`part_count\`, and the
parent keeps \`is_index: true\`.

## Where to start by task

| Task | Start at |
|---|---|
| You don't know Infront's word for it | \`index/concepts.md\` |
| Set up the toolkit in an NPM project | \`guides/wtk-getting-started.md\`, \`guides/wtk-setup.md\` |
| Authenticate | \`guides/wtk-authentication.md\`, then \`field-notes/authentication.md\` |
| Use the SDK without widgets | \`guides/sdk-getting-started.md\`, \`guides/sdk-setup.md\` |
| Historical bars / time series | \`reference/SDK/SDK.InfrontSDK.timeSeries.md\`, \`examples/SDK-SDK-Examples-TimeSeries.md\`, and \`field-notes/time-series.md\` before subscribing |
| Live streaming fields for an instrument | \`reference/SDK/SDK.InfrontSDK.symbolData.md\`, \`reference/SDK/SDK.InfrontSDK.BasicField.md\`, \`field-notes/streaming.md\` |
| Turn an instrument name into a \`{ feed, ticker }\` that works | \`field-notes/instrument-ids.md\` |
| Index constituents or an exchange's market lists | \`field-notes/chains.md\` |
| Which markets a login can see, and their delay | \`field-notes/feeds-test-user.md\`, \`field-notes/errors-and-access.md\` |
| Which fields exist at all | \`reference/SDK/SDK.InfrontSDK.BasicField.md\`, \`reference/SDK/SDK.InfrontSDK.FundamentalField.md\`, and the \`CoreDataAPI\` \`*Field\` types |
| Charts | \`reference/WTK/WTK.ChartWidgetOptions.md\` and its parts |
| Trading | \`reference/SDK/_module.SDK.InfrontSDK.Trading.md\`, \`examples/SDK-SDK-Examples-Trading.md\` |
| Every widget WTK ships | \`reference/WTK/_module.WTK.md\` |
| A widget's options explained in prose | \`legacy/wtk-3.x/MarketDataWidgets/\` (3.x, see the warning below) |

## Notes and limits

- Extracted from **${M.sources[0].split(" ")[0]}**, the Infront Web Toolkit docsite.
  The reference is generated from TypeScript sources by TypeDoc, so signatures and
  type links are exact rather than scraped prose.
- The large \`CoreDataAPI\` \`*Field\` and \`*SortField\` types are string unions with
  thousands of allowed values each. Each is an index page listing value groups, with
  the values themselves in \`.parts/\` files grouped by field prefix.
- Widget snippets under \`snippets/\` come from the docsite's own test snippets. They
  are minimal and not commented, but they show the exact option shape each widget takes.
- Navigation, cookie banners and site chrome are stripped. Code blocks are verbatim
  with language tags. Tables are preserved as tables.
- **\`legacy/\` is WTK 2.x and 3.x and is not current.** It comes from
  \`doc.infrontfinance.com\`, which carries Infront's own banner saying it is no longer
  updated. It is here because it documents each widget's options in prose, which the
  4.x TypeDoc expresses only as types, and because it is the only place the older
  APIs are written down. Every file in it is marked \`page_type: legacy-reference\`
  with a \`status\` field saying so, and \`library_version\` gives the version. When it
  disagrees with \`reference/\`, \`reference/\` wins.
- ${M.file_count.toLocaleString("en-US")} Markdown files, ${mb(M.total_bytes)}, plus ${mb(fs.statSync(path.join(OUT,"index/symbols.tsv")).size+fs.statSync(path.join(OUT,"index/symbols.json")).size)} of indexes. Every relative link resolved and checked.
`;
fs.writeFileSync(path.join(OUT,"README.md"),md);
console.log("README written",Buffer.byteLength(md),"bytes");
