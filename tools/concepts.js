// Generates index/concepts.md — the routing layer that turns plain-English and
// finance vocabulary into Infront symbol names.
//
// Grep has recall but no ranking: searching "historical" over this corpus returns 91
// files with the right one buried. This file is the ranking, written down once.
//
// Every target below is verified against index/symbols.tsv before the file is written.
// A typo fails the build rather than shipping a dangling pointer.

const fs = require("fs"), path = require("path");
const ROOT = process.env.ROOT || ".";

// ---------------------------------------------------------------- corpus facts
const tsv = fs.readFileSync(path.join(ROOT, "index/symbols.tsv"), "utf8").trim().split("\n").slice(1);
const byQualified = new Map();
for (const line of tsv) {
  const [name, kind, qualified, file, anchor] = line.split("\t");
  if (!byQualified.has(qualified)) byQualified.set(qualified, { name, kind, qualified, file, anchor });
}

const errors = [];
function sym(qualified, label) {
  const hit = byQualified.get(qualified);
  if (!hit) { errors.push(`unknown symbol: ${qualified}`); return `\`${qualified}\``; }
  const href = "../" + hit.file + (hit.anchor ? "#" + hit.anchor : "");
  return `[${label || hit.name}](${href})`;
}
function file(rel, label) {
  if (!fs.existsSync(path.join(ROOT, rel))) { errors.push(`missing file: ${rel}`); return `\`${rel}\``; }
  return `[${label}](../${rel})`;
}

// ------------------------------------------------------------- the alias table
// Left: how a person or an agent phrases it. Right: where that actually lives.
// Grouped by the job being done, because that is how the question arrives.
const ALIASES = [
  ["Live and streaming prices", [
    [["live price", "last price", "current price", "quote", "tick", "streaming field", "real-time data"],
      ["SDK.InfrontSDK.symbolData"], ["SDK.InfrontSDK.BasicField"],
      "`symbolData` is the live-field request; `BasicField` is the 600-name vocabulary of what you can ask for. Pass `subscribe: true` for streaming updates."],
    [["bid", "ask", "spread", "best bid offer", "BBO"],
      ["SDK.InfrontSDK.BasicField"], [],
      "Members `Bid`, `Ask`, `BidSize`, `AskSize`, `BidTime`, `AskTime`."],
    [["close price", "closing price", "open high low close", "previous close", "day range", "change percent", "VWAP"],
      ["SDK.InfrontSDK.BasicField"], ["SDK.InfrontSDK.timeSeries"],
      "Live: members `Last`, `Open`, `High`, `Low`, `Change`, `ChangePercent`, `VWAP`. There is no `Close` member — intraday, the close *is* `Last`; for a historical close use `timeSeries`."],
    [["volume", "turnover", "traded value"],
      ["SDK.InfrontSDK.BasicField"], [],
      "Members `AccumulatedVolume`, `AverageDailyTurnover`, `AverageDailyVolumeMean` and neighbours."],
    [["market cap", "market capitalisation"],
      ["SDK.InfrontSDK.BasicField"], ["SDK.InfrontSDK.KeyfigureField"],
      "`BasicField.MarketCap` for the live value; `KeyfigureField.KeyfigureMarketCap` (plus `…Eur`, `…Usd`) via the `keyfigures` request."],
  ]],
  ["History and charting data", [
    [["candles", "bars", "OHLC", "historical prices", "price history", "chart data", "time series", "intraday history", "daily bars"],
      ["SDK.InfrontSDK.timeSeries"], [],
      "The single entry point for both intraday and end-of-day series. Takes `daysBack` and a `resolution` of `{unit, value}`."],
    [["time and sales", "the tape", "executed trades", "prints", "trade ticks"],
      ["SDK.InfrontSDK.trades"], [],
      "Intraday trades, distinct from `timeSeries` aggregates."],
    [["performance", "return over period", "percentage change", "YTD"],
      ["SDK.InfrontSDK.HistPerformanceField"], ["SDK.InfrontSDK.CalculatedHistField"],
      "`HistPerformanceField` is precomputed; `CalculatedHistField` is computed on demand."],
    [["moving average", "RSI", "MACD", "technical indicator", "technicals"],
      ["SDK.InfrontSDK.TechnicalAnalysisField"], [],
      ""],
  ]],
  ["Charts and on-screen graphics", [
    [["chart", "price chart", "plot a series", "chart widget"],
      ["WTK.ChartWidget"], ["WTK.ChartWidgetOptions"],
      "`ChartWidgetOptions` is the largest options type in the toolkit and is split into `.parts/`; its parent page indexes them. `WTK.ChartType` lists the chart styles."],
    [["feed the chart myself", "raw series for my own renderer", "custom graphics"],
      ["SDK.InfrontSDK.timeSeries"], ["SDK.InfrontSDK.symbolData"],
      "Use the SDK directly and draw your own output when you are not rendering Infront's widget."],
  ]],
  ["Market depth", [
    [["order book", "market depth", "level 2", "bid ask ladder", "book"],
      ["SDK.InfrontSDK.orderbook"], ["SDK.InfrontSDK.consolidatedOrderbook"],
      "`consolidatedOrderbook` aggregates across venues; `orderbook` is one venue."],
  ]],
  ["Finding instruments", [
    [["search", "symbol lookup", "find a ticker", "ISIN lookup", "autocomplete"],
      ["SDK.InfrontSDK.symbolSearch"], ["SDK.InfrontSDK.SearchResultField"],
      "`SearchResultField` is what you can ask to have returned on each hit."],
    [["what is this symbol", "identify an instrument", "feed and ticker"],
      ["SDK.InfrontSDK.validSymbolId"], ["SDK.InfrontSDK.sameSymbolId"],
      "A symbol can be addressed by feed/ticker, ISIN, or other identifiers."],
    [["instruments on an exchange", "listed equities", "all symbols in a market"],
      ["SDK.InfrontSDK.symbolListings"], ["SDK.InfrontSDK.feedContents"],
      "`feedContents` walks a feed; `feedList` and `feedInfo` describe what feeds exist."],
    [["derivatives on a company", "related instruments", "company's bonds"],
      ["SDK.InfrontSDK.companySymbols"], [],
      ""],
    [["sector", "industry", "companies in a sector"],
      ["SDK.InfrontSDK.sectors"], ["SDK.InfrontSDK.sectorCompanies"],
      "`infrontSectors` returns Infront's own sector taxonomy."],
  ]],
  ["Fundamentals and company data", [
    [["fundamentals", "key figures", "P/E", "financials", "ratios"],
      ["SDK.InfrontSDK.keyfigures"], ["SDK.InfrontSDK.KeyfigureField"],
      "Deeper company data lives in the generated `CoreDataAPI` surface — see the note on it below."],
    [["ESG", "sustainability", "environmental score"],
      ["SDK.InfrontSDK.EsgField"], [],
      ""],
    [["funds", "NAV", "fund allocation", "morningstar"],
      ["SDK.InfrontSDK.FundDetailField"], [],
      ""],
    [["earnings date", "dividend date", "company events", "calendar"],
      ["SDK.InfrontSDK.financialCalendar"], ["SDK.InfrontSDK.CalendarEventField"],
      ""],
    [["filings", "prospectus", "regulatory documents", "KID"],
      ["SDK.InfrontSDK.documents"], ["SDK.InfrontSDK.documentUrl"],
      "`document` fetches one by id; `documentUrl` gets a link instead."],
  ]],
  ["News", [
    [["news", "headlines", "story", "newsfeed"],
      ["SDK.InfrontSDK.newsHeadlines"], ["SDK.InfrontSDK.newsStory"],
      "Headlines first, then fetch the story by its headline id."],
  ]],
  ["Lists and alerts", [
    [["watchlist", "my lists", "saved symbols"],
      ["SDK.InfrontSDK.watchLists"], ["SDK.InfrontSDK.watchListContent"],
      "`watchListTitles` if you only need names; `watchListsAsObservableArray` for a bindable list."],
    [["alert", "price alert", "trigger", "notification"],
      ["SDK.InfrontSDK.alertUpdate"], ["SDK.InfrontSDK.subscribeAlerts"],
      "`alertList` reads them, `alertUpdate` writes, `subscribeAlerts` streams triggers, `alertLog` is the history."],
  ]],
  ["Trading and portfolio", [
    [["place an order", "buy", "sell", "modify order", "cancel order"],
      ["SDK.InfrontSDK.Trading.orderEntry"], [],
      ""],
    [["portfolio", "positions", "holdings", "P&L"],
      ["SDK.InfrontSDK.Trading.portfolio"], ["SDK.InfrontSDK.Trading.exposure"],
      "`portfolioList` enumerates portfolios; `exposure` groups and sorts the contents."],
    [["connect to broker", "trading gateway", "trading login"],
      ["SDK.InfrontSDK.Trading.connection"], ["SDK.InfrontSDK.TradingField"],
      ""],
    [["request for quote", "RFQ"],
      ["SDK.InfrontSDK.Trading.quoteVolume"], ["SDK.InfrontSDK.Trading.acceptQuoteOrder"],
      ""],
  ]],
  ["Session, login and entitlements", [
    [["log in", "authenticate", "token", "access token", "credentials", "SSO", "connect"],
      ["SDK.InfrontSDK.SDKOptions"], [],
      "Two legs: fetch a token server-side from `api.infrontservices.com/id/connect/token`, then pass it to the client. The SDK option is `signedToken`; the WTK `Infront.UI` option is `signed_token` (snake_case). `userId` + `password` also work for development. See the authentication guide below."],
    [["entitlement", "permissions", "licensed", "what are we paying for", "do we have realtime", "is this delayed", "market access", "subscription"],
      ["SDK.InfrontSDK.FeedAccess"], ["SDK.InfrontSDK.loginData"],
      "Entitlement is **per feed**, not one global grant. `FeedAccess` is exactly `Realtime`, `Delayed` or `NoAccess`. An unentitled feed does not error — it returns delayed data through the same code path, so check rather than assume."],
    [["is this instrument realtime", "delay in minutes", "show the delay badge"],
      ["SDK.InfrontSDK.BasicField"], [],
      "Read it off the live data: members `FeedAccess`, `FeedAccessStr` (text, includes the delay in minutes), `FeedAccessDesc` (both combined), `FeedDelayStr` (the delay alone)."],
    [["session info", "what am I allowed to see", "connection status", "features"],
      ["SDK.InfrontSDK.loginData"], ["SDK.InfrontSDK.LoginDataOptions"],
      "Takes `flags: { ConnectionStatus, Features, LoginDetails }` to pick what comes back."],
    [["which markets", "what exchanges", "list feeds", "feed metadata"],
      ["SDK.InfrontSDK.feedList"], ["SDK.InfrontSDK.feedInfo"],
      "`feedList` by `serviceTypes`; `feedInfo` for each feed's metadata."],
  ]],
];

// ------------------------------------------------------------------ generation
const fieldEnums = [...byQualified.values()]
  .filter(s => s.kind === "enum" && /Field$/.test(s.qualified) && !/CoreDataAPI|PortfolioRisk/.test(s.qualified))
  .map(s => {
    const body = fs.readFileSync(path.join(ROOT, s.file), "utf8");
    const count = Number((body.match(/^member_count: (\d+)$/m) || [])[1] || 0);
    const d = (body.split(/^# .*$/m)[1] || "").split("\n").find(l => l.trim() && !/^[#`>\-|]/.test(l)) || "";
    return { ...s, count, desc: d.trim().replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") };
  })
  .sort((a, b) => b.count - a.count);

const widgets = fs.readdirSync(path.join(ROOT, "reference/WTK"))
  .filter(f => /^WTK\.[A-Za-z]+Widget\.md$/.test(f))
  .map(f => f.replace(/^WTK\.|\.md$/g, "")).sort();
const widgetsNoOptions = widgets.filter(w => !fs.existsSync(path.join(ROOT, `reference/WTK/WTK.${w}Options.md`)));
const cdapiPages = fs.readdirSync(path.join(ROOT, "reference/SDK")).filter(f => f.includes("CoreDataAPI")).length;

const L = [];
L.push(`---
title: "Concept index — plain English to Infront symbols"
kind: index
page_type: concept-index
product: "Infront Web Toolkit"
version: "4.3.1"
---

# Concept index

**Use this when you know what you want but not what Infront calls it.** If you already
have a symbol name, skip this file and go straight to \`index/symbols.tsv\`.

Plain \`grep\` over this corpus finds the right page but ranks it badly — the reference
is generated from TypeScript, so it carries almost no prose synonyms. Searching
"historical" returns 91 files with \`timeSeries\` buried among them. This file is that
ranking, written down.

## Conventions that save you a lookup

- **Every widget \`XWidget\` has its options in \`WTK.XWidgetOptions\`.** That holds for
  ${widgets.length - widgetsNoOptions.length} of the ${widgets.length} widgets, so construct the name rather than
  searching for it. The exceptions are ${widgetsNoOptions.map(w => "\`" + w + "\`").join(" and ")}.
- **Most SDK requests exist twice**, as \`SDK.InfrontSDK.foo\` and
  \`SDK.InfrontSDK.Requests.foo\`. They are the same request; prefer the top-level name.
  This matters when grepping \`symbols.tsv\`, where the \`Requests\` variant often sorts
  first.
- **\`subscribe: true\`** on a request's options turns a one-shot fetch into a stream.
  It is on ${sym("SDK.InfrontSDK.DataRequestOptions")}, which nearly every request's
  options extend.
- **\`CoreDataAPI\` is a different animal.** Its ${cdapiPages.toLocaleString("en-US")} \`Cdapi*\` pages are a generated
  wrapper over Infront's REST reference-data service, not the streaming SDK. Reach for
  the top-level SDK requests first; drop to \`CoreDataAPI\` for deep reference and
  fundamentals data that the streaming API doesn't carry.
- **A \`.parts/\` directory** next to a page means that page was too large to read in one
  go. Its parent is an index of the parts.

## What you want → where it lives
`);

for (const [section, rows] of ALIASES) {
  L.push(`\n### ${section}\n`);
  L.push(`| You might call it | Go to | Also relevant | Note |`);
  L.push(`|---|---|---|---|`);
  for (const [terms, primary, secondary, note] of rows) {
    const p = primary.map(q => sym(q)).join(", ") || "—";
    const s = secondary.map(q => sym(q)).join(", ") || "—";
    L.push(`| ${terms.map(t => `${t}`).join(", ")} | ${p} | ${s} | ${note.replace(/\|/g, "\\|")} |`);
  }
}

L.push(`\n## Things that have no dedicated API

Worth knowing so you don't hunt for them:

- **FX, crypto, commodities, indices.** These are ordinary instruments on their own
  feeds, not a separate API. Find them with \`symbolSearch\` or by walking a feed with
  \`feedContents\`, then read them with \`symbolData\` and \`timeSeries\` like anything else.
- **Index constituents.** No dedicated request. Go via the index's feed
  (\`feedContents\`, \`symbolListings\`).
- **A \`Close\` field.** See the price-field row above.
- **Anything mapping a commercial contract to feed entitlements.** The docs never
  explain which exchanges a given account is realtime on, and there is no documented
  way to inspect your own contract. The API reports the answer per feed once you are
  connected (\`FeedAccess\`); everything before that is an account-manager question.

## Which field enum holds what

Field names are the vocabulary you pass to a request. Pick the enum by the kind of data,
then grep it for the specific name.

| Enum | Members | What it covers |
|---|---|---|`);
for (const e of fieldEnums) L.push(`| ${sym(e.qualified)} | ${e.count} | ${e.desc.replace(/\|/g, "\\|")} |`);

L.push(`
The generated \`CoreDataAPI\` \`*Field\` and \`*SortField\` types are separate and far larger
— up to 10,622 allowed values each, grouped by field prefix in \`.parts/\` directories.
Grep those by prefix, e.g. \`listing.common.\` or \`instrument.bond_\`.

## Widgets

All ${widgets.length} WTK widgets, each with options at \`WTK.<name>Options\`:

${widgets.map(w => `\`${w}\``).join(" · ")}

The 3.x documentation under \`legacy/wtk-3.x/\` explains many of these options in prose,
which the 4.x reference gives only as types. It is superseded — check it for the
explanation, then confirm the current shape in \`reference/WTK/\`.

## Guides

${file("guides/wtk-getting-started.md", "WTK getting started")} ·
${file("guides/wtk-setup.md", "WTK setup")} ·
${file("guides/wtk-authentication.md", "Authentication")} ·
${file("guides/wtk-modular-toolkit-migration-guide.md", "Modular migration")} ·
${file("guides/wtk-supported-languages.md", "Languages")} ·
${file("guides/sdk-getting-started.md", "SDK getting started")} ·
${file("guides/sdk-setup.md", "SDK setup")}

## Other indexes

${file("index/symbols.tsv", "symbols.tsv")} — every symbol name to file and anchor ·
${file("index/topics.md", "topics.md")} — the docs' own navigation tree ·
${file("manifest.json", "manifest.json")} — every file's metadata, for routing before reading
`);

if (errors.length) {
  console.error("concepts.js: refusing to write, unresolved targets:");
  for (const e of [...new Set(errors)]) console.error("  " + e);
  process.exit(1);
}
fs.writeFileSync(path.join(ROOT, "index/concepts.md"), L.join("\n"));
const aliasCount = ALIASES.reduce((a, [, rows]) => a + rows.length, 0);
const termCount = ALIASES.reduce((a, [, rows]) => a + rows.reduce((b, r) => b + r[0].length, 0), 0);
console.log(`concepts.md written — ${aliasCount} routes, ${termCount} search terms, ${fieldEnums.length} field enums, ${widgets.length} widgets, 0 unresolved targets`);
