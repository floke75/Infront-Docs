---
title: "Concept index — plain English to Infront symbols"
kind: index
page_type: concept-index
product: "Infront Web Toolkit"
version: "4.3.1"
---

# Concept index

**Use this when you know what you want but not what Infront calls it.** If you already
have a symbol name, skip this file and go straight to `index/symbols.tsv`.

Plain `grep` over this corpus finds the right page but ranks it badly — the reference
is generated from TypeScript, so it carries almost no prose synonyms. Searching
"historical" returns 91 files with `timeSeries` buried among them. This file is that
ranking, written down.

## Conventions that save you a lookup

- **Every widget `XWidget` has its options in `WTK.XWidgetOptions`.** That holds for
  92 of the 94 widgets, so construct the name rather than
  searching for it. The exceptions are `InfrontWidget` and `PortfolioSelectWidget`.
- **Most SDK requests exist twice**, as `SDK.InfrontSDK.foo` and
  `SDK.InfrontSDK.Requests.foo`. They are the same request; prefer the top-level name.
  This matters when grepping `symbols.tsv`, where the `Requests` variant often sorts
  first.
- **`subscribe: true`** on a request's options turns a one-shot fetch into a stream.
  It is on [DataRequestOptions](../reference/SDK/SDK.InfrontSDK.DataRequestOptions.md), which nearly every request's
  options extend.
- **`CoreDataAPI` is a different animal.** Its 1,662 `Cdapi*` pages are a generated
  wrapper over Infront's REST reference-data service, not the streaming SDK. Reach for
  the top-level SDK requests first; drop to `CoreDataAPI` for deep reference and
  fundamentals data that the streaming API doesn't carry.
- **A `.parts/` directory** next to a page means that page was too large to read in one
  go. Its parent is an index of the parts.

## What you want → where it lives


### Live and streaming prices

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| live price, last price, current price, quote, tick, streaming field, real-time data | [symbolData](../reference/SDK/SDK.InfrontSDK.symbolData.md) | [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | `symbolData` is the live-field request; `BasicField` is the 600-name vocabulary of what you can ask for. Pass `subscribe: true` for streaming updates. |
| bid, ask, spread, best bid offer, BBO | [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | — | Members `Bid`, `Ask`, `BidSize`, `AskSize`, `BidTime`, `AskTime`. |
| close price, closing price, open high low close, previous close, day range, change percent, VWAP | [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | [timeSeries](../reference/SDK/SDK.InfrontSDK.timeSeries.md) | Live: members `Last`, `Open`, `High`, `Low`, `Change`, `ChangePercent`, `VWAP`. There is no `Close` member — intraday, the close *is* `Last`; for a historical close use `timeSeries`. |
| volume, turnover, traded value | [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | — | Members `AccumulatedVolume`, `AverageDailyTurnover`, `AverageDailyVolumeMean` and neighbours. |
| market cap, market capitalisation | [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | [KeyfigureField](../reference/SDK/SDK.InfrontSDK.KeyfigureField.md) | `BasicField.MarketCap` for the live value; `KeyfigureField.KeyfigureMarketCap` (plus `…Eur`, `…Usd`) via the `keyfigures` request. |

### History and charting data

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| candles, bars, OHLC, historical prices, price history, chart data, time series, intraday history, daily bars | [timeSeries](../reference/SDK/SDK.InfrontSDK.timeSeries.md) | — | The single entry point for both intraday and end-of-day series. Takes `daysBack` and a `resolution` of `{unit, value}`. |
| time and sales, the tape, executed trades, prints, trade ticks | [trades](../reference/SDK/SDK.InfrontSDK.trades.md) | — | Intraday trades, distinct from `timeSeries` aggregates. |
| performance, return over period, percentage change, YTD | [HistPerformanceField](../reference/SDK/SDK.InfrontSDK.HistPerformanceField.md) | [CalculatedHistField](../reference/SDK/SDK.InfrontSDK.CalculatedHistField.md) | `HistPerformanceField` is precomputed; `CalculatedHistField` is computed on demand. |
| moving average, RSI, MACD, technical indicator, technicals | [TechnicalAnalysisField](../reference/SDK/SDK.InfrontSDK.TechnicalAnalysisField.md) | — |  |

### Charts and on-screen graphics

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| chart, price chart, plot a series, chart widget | [ChartWidget](../reference/WTK/WTK.ChartWidget.md) | [ChartWidgetOptions](../reference/WTK/WTK.ChartWidgetOptions.md) | `ChartWidgetOptions` is the largest options type in the toolkit and is split into `.parts/`; its parent page indexes them. `WTK.ChartType` lists the chart styles. |
| feed the chart myself, raw series for my own renderer, custom graphics | [timeSeries](../reference/SDK/SDK.InfrontSDK.timeSeries.md) | [symbolData](../reference/SDK/SDK.InfrontSDK.symbolData.md) | Use the SDK directly and draw your own output when you are not rendering Infront's widget. |

### Market depth

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| order book, market depth, level 2, bid ask ladder, book | [orderbook](../reference/SDK/SDK.InfrontSDK.orderbook.md) | [consolidatedOrderbook](../reference/SDK/SDK.InfrontSDK.consolidatedOrderbook.md) | `consolidatedOrderbook` aggregates across venues; `orderbook` is one venue. |

### Finding instruments

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| search, symbol lookup, find a ticker, ISIN lookup, autocomplete | [symbolSearch](../reference/SDK/SDK.InfrontSDK.symbolSearch.md) | [SearchResultField](../reference/SDK/SDK.InfrontSDK.SearchResultField.md) | `SearchResultField` is what you can ask to have returned on each hit. |
| what is this symbol, identify an instrument, feed and ticker | [validSymbolId](../reference/SDK/SDK.InfrontSDK.validSymbolId.md) | [sameSymbolId](../reference/SDK/SDK.InfrontSDK.sameSymbolId.md) | A symbol can be addressed by feed/ticker, ISIN, or other identifiers. |
| instruments on an exchange, listed equities, all symbols in a market | [symbolListings](../reference/SDK/SDK.InfrontSDK.symbolListings.md) | [feedContents](../reference/SDK/SDK.InfrontSDK.feedContents.md) | `feedContents` walks a feed; `feedList` and `feedInfo` describe what feeds exist. |
| derivatives on a company, related instruments, company's bonds | [companySymbols](../reference/SDK/SDK.InfrontSDK.companySymbols.md) | — |  |
| sector, industry, companies in a sector | [sectors](../reference/SDK/SDK.InfrontSDK.sectors.md) | [sectorCompanies](../reference/SDK/SDK.InfrontSDK.sectorCompanies.md) | `infrontSectors` returns Infront's own sector taxonomy. |

### Fundamentals and company data

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| fundamentals, key figures, P/E, financials, ratios | [keyfigures](../reference/SDK/SDK.InfrontSDK.keyfigures.md) | [KeyfigureField](../reference/SDK/SDK.InfrontSDK.KeyfigureField.md) | Deeper company data lives in the generated `CoreDataAPI` surface — see the note on it below. |
| ESG, sustainability, environmental score | [EsgField](../reference/SDK/SDK.InfrontSDK.EsgField.md) | — |  |
| funds, NAV, fund allocation, morningstar | [FundDetailField](../reference/SDK/SDK.InfrontSDK.FundDetailField.md) | — |  |
| earnings date, dividend date, company events, calendar | [financialCalendar](../reference/SDK/SDK.InfrontSDK.financialCalendar.md) | [CalendarEventField](../reference/SDK/SDK.InfrontSDK.CalendarEventField.md) |  |
| filings, prospectus, regulatory documents, KID | [documents](../reference/SDK/SDK.InfrontSDK.documents.md) | [documentUrl](../reference/SDK/SDK.InfrontSDK.documentUrl.md) | `document` fetches one by id; `documentUrl` gets a link instead. |

### News

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| news, headlines, story, newsfeed | [newsHeadlines](../reference/SDK/SDK.InfrontSDK.newsHeadlines.md) | [newsStory](../reference/SDK/SDK.InfrontSDK.newsStory.md) | Headlines first, then fetch the story by its headline id. |

### Lists and alerts

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| watchlist, my lists, saved symbols | [watchLists](../reference/SDK/SDK.InfrontSDK.watchLists.md) | [watchListContent](../reference/SDK/SDK.InfrontSDK.watchListContent.md) | `watchListTitles` if you only need names; `watchListsAsObservableArray` for a bindable list. |
| alert, price alert, trigger, notification | [alertUpdate](../reference/SDK/SDK.InfrontSDK.alertUpdate.md) | [subscribeAlerts](../reference/SDK/SDK.InfrontSDK.subscribeAlerts.md) | `alertList` reads them, `alertUpdate` writes, `subscribeAlerts` streams triggers, `alertLog` is the history. |

### Trading and portfolio

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| place an order, buy, sell, modify order, cancel order | [orderEntry](../reference/SDK/SDK.InfrontSDK.Trading.orderEntry.md) | — |  |
| portfolio, positions, holdings, P&L | [portfolio](../reference/SDK/SDK.InfrontSDK.Trading.portfolio.md) | [exposure](../reference/SDK/SDK.InfrontSDK.Trading.exposure.md) | `portfolioList` enumerates portfolios; `exposure` groups and sorts the contents. |
| connect to broker, trading gateway, trading login | [connection](../reference/SDK/SDK.InfrontSDK.Trading.connection.md) | [TradingField](../reference/SDK/SDK.InfrontSDK.TradingField.md) |  |
| request for quote, RFQ | [quoteVolume](../reference/SDK/SDK.InfrontSDK.Trading.quoteVolume.md) | [acceptQuoteOrder](../reference/SDK/SDK.InfrontSDK.Trading.acceptQuoteOrder.md) |  |

### Session, login and entitlements

| You might call it | Go to | Also relevant | Note |
|---|---|---|---|
| log in, authenticate, token, access token, credentials, SSO, connect | [SDKOptions](../reference/SDK/SDK.InfrontSDK.SDKOptions.md) | — | Two legs: fetch a token server-side from `api.infrontservices.com/id/connect/token`, then pass it to the client. The SDK option is `signedToken`; the WTK `Infront.UI` option is `signed_token` (snake_case). `userId` + `password` also work for development. See the authentication guide below. |
| entitlement, permissions, licensed, what are we paying for, do we have realtime, is this delayed, market access, subscription | [FeedAccess](../reference/SDK/SDK.InfrontSDK.FeedAccess.md) | [loginData](../reference/SDK/SDK.InfrontSDK.loginData.md) | Entitlement is **per feed**, not one global grant. `FeedAccess` is exactly `Realtime`, `Delayed` or `NoAccess`. An unentitled feed does not error — it returns delayed data through the same code path, so check rather than assume. |
| is this instrument realtime, delay in minutes, show the delay badge | [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | — | Read it off the live data: members `FeedAccess`, `FeedAccessStr` (text, includes the delay in minutes), `FeedAccessDesc` (both combined), `FeedDelayStr` (the delay alone). |
| session info, what am I allowed to see, connection status, features | [loginData](../reference/SDK/SDK.InfrontSDK.loginData.md) | [LoginDataOptions](../reference/SDK/SDK.InfrontSDK.LoginDataOptions.md) | Takes `flags: { ConnectionStatus, Features, LoginDetails }` to pick what comes back. |
| which markets, what exchanges, list feeds, feed metadata | [feedList](../reference/SDK/SDK.InfrontSDK.feedList.md) | [feedInfo](../reference/SDK/SDK.InfrontSDK.feedInfo.md) | `feedList` by `serviceTypes`; `feedInfo` for each feed's metadata. |

## Things that have no dedicated API

Worth knowing so you don't hunt for them:

- **FX, crypto, commodities, indices.** These are ordinary instruments on their own
  feeds, not a separate API. Find them with `symbolSearch` or by walking a feed with
  `feedContents`, then read them with `symbolData` and `timeSeries` like anything else.
- **Index constituents.** No dedicated request. Go via the index's feed
  (`feedContents`, `symbolListings`).
- **A `Close` field.** See the price-field row above.
- **Anything mapping a commercial contract to feed entitlements.** The docs never
  explain which exchanges a given account is realtime on, and there is no documented
  way to inspect your own contract. The API reports the answer per feed once you are
  connected (`FeedAccess`); everything before that is an account-manager question.

## Which field enum holds what

Field names are the vocabulary you pass to a request. Pick the enum by the kind of data,
then grep it for the specific name.

| Enum | Members | What it covers |
|---|---|---|
| [BasicField](../reference/SDK/SDK.InfrontSDK.BasicField.md) | 600 | A list of all available field for content type 'basic'. |
| [TradingField](../reference/SDK/SDK.InfrontSDK.TradingField.md) | 172 | List of all available trading fields. |
| [HistPerformanceField](../reference/SDK/SDK.InfrontSDK.HistPerformanceField.md) | 169 | Historical performance data fields. |
| [SearchResultField](../reference/SDK/SDK.InfrontSDK.SearchResultField.md) | 58 | Output search fields. |
| [EsgField](../reference/SDK/SDK.InfrontSDK.EsgField.md) | 52 | Environmental, Social, and Governance (ESG) risk classification fields. |
| [CalculatedHistField](../reference/SDK/SDK.InfrontSDK.CalculatedHistField.md) | 45 | Calculated history fields. These fields are being calculated on demand. |
| [TechnicalAnalysisField](../reference/SDK/SDK.InfrontSDK.TechnicalAnalysisField.md) | 30 | Technical analysis fields. |
| [FundDetailField](../reference/SDK/SDK.InfrontSDK.FundDetailField.md) | 25 | Fund data fields. |
| [FeedField](../reference/SDK/SDK.InfrontSDK.FeedField.md) | 18 | internal Fields used by SymbolSearch SearchType.Market |
| [AlertMarketDataField](../reference/SDK/SDK.InfrontSDK.AlertMarketDataField.md) | 9 | The market data field to be monitored for an alert rule. |
| [AlertNewsDataField](../reference/SDK/SDK.InfrontSDK.AlertNewsDataField.md) | 8 | The news data field to be monitored for an alert rule. |
| [CalendarEventField](../reference/SDK/SDK.InfrontSDK.CalendarEventField.md) | 7 | Calendar event fields. |
| [OrderEntryLimitField](../reference/WTK/WTK.OrderEntryLimitField.md) | 7 | Order-entry limit fields |
| [KeyfigureField](../reference/SDK/SDK.InfrontSDK.KeyfigureField.md) | 4 | Keyfigure fields. |
| [ListingDetailsField](../reference/SDK/SDK.InfrontSDK.ListingDetailsField.md) | 4 | Keyfigure fields. |
| [AlertPortfolioDataField](../reference/SDK/SDK.InfrontSDK.AlertPortfolioDataField.md) | 3 | The portfolio data field to be monitored for an alert rule. |
| [AdditionalDataField](../reference/SDK/SDK.InfrontSDK.AdditionalDataField.md) | 2 | A list of externally provided data fields. |
| [RankingField](../reference/SDK/SDK.InfrontSDK.RankingField.md) | 2 | Ranking field enum. |

The generated `CoreDataAPI` `*Field` and `*SortField` types are separate and far larger
— up to 10,622 allowed values each, grouped by field prefix in `.parts/` directories.
Grep those by prefix, e.g. `listing.common.` or `instrument.bond_`.

## Widgets

All 94 WTK widgets, each with options at `WTK.<name>Options`:

`AlertListWidget` · `AlertWidget` · `AnalyticsAnalystsWidget` · `AnalyticsBoardMembersWidget` · `AnalyticsCompanyDescriptionWidget` · `AnalyticsEstimatesBarWidget` · `AnalyticsEstimatesSurpriseChartWidget` · `AnalyticsEstimatesTableWidget` · `AnalyticsFinancialStatementsWidget` · `AnalyticsGprvScoreCardWidget` · `AnalyticsGprvWidget` · `AnalyticsHistoricalRecommendationsWidget` · `AnalyticsKeyFiguresWidget` · `AnalyticsMiniCardWidget` · `AnalyticsMiniCardsWidget` · `AnalyticsMiniChartWidget` · `AnalyticsPeersComparisonWidget` · `AnalyticsSankeyChartWidget` · `AnalyticsSectorInformationWidget` · `AnalyticsTargetPriceWidget` · `AnalyticsTemplatesWidget` · `AnalyticsTopOfficersWidget` · `AnalyticsTopShareholdersWidget` · `BrokerstatsWidget` · `CashPositionsWidget` · `ChartWidget` · `ColumnChooserWidget` · `CommunicationStatusWidget` · `CompanyDescriptionWidget` · `CompanyFundamentalsWidget` · `CountryMultiSelectWidget` · `DocumentsWidget` · `EsgBestCompaniesWidget` · `EsgTableViewWidget` · `EsgTopScoreWidget` · `FinancialCalendarWidget` · `FocusWidget` · `FundAllocationPieChartWidget` · `FundAllocationWidget` · `FundRiskLevelWidget` · `HeatmapWidget` · `HistoricalOverviewWidget` · `HistoryWidget` · `IndexOverviewWidget` · `IndexSelectWidget` · `InfrontWidget` · `InstrumentCardWidget` · `InstrumentOverviewWidget` · `InstrumentSingleValueWidget` · `InstrumentValuesWidget` · `IntradayTradesSimpleWidget` · `IntradayTradesWidget` · `MacroeconomicsCalendarWidget` · `MyListsWidget` · `NetTradesWidget` · `NewsListWidget` · `NewsReaderWidget` · `OrderEntryWidget` · `OrderStackWidget` · `OrderbookWidget` · `OrdersWidget` · `PortfolioNameWidget` · `PortfolioSelectWidget` · `PortfolioSingleValueWidget` · `PortfolioValuesWidget` · `PositionWidget` · `PositionsWidget` · `PutCallWidget` · `QuoteListWidget` · `QuoteWidget` · `RFQOrderEntryWidget` · `RegionSelectWidget` · `RiskContributionChartWidget` · `RiskMacroeconomicScenariosWidget` · `RiskMeasuresTimeseriesWidget` · `RiskPortfolioCompositionWidget` · `RiskPortfolioPositionDetailsWidget` · `RiskPortfolioScenariosWidget` · `RiskPortfolioSelectWidget` · `RiskPortfolioSensitivitiesWidget` · `RiskPositionSelectWidget` · `RiskReturnContributionWidget` · `RiskScenarioScatterPlotWidget` · `SparkChartWidget` · `StatusWidget` · `SubSectorMultiSelectWidget` · `SubSectorSelectWidget` · `SvelteInstrumentSingleValueWidget` · `TopEntitiesWidget` · `TopInvestorsWidget` · `TradesWidget` · `TradingPowerWidget` · `ValuePairWidget` · `ValueWidget`

The 3.x documentation under `legacy/wtk-3.x/` explains many of these options in prose,
which the 4.x reference gives only as types. It is superseded — check it for the
explanation, then confirm the current shape in `reference/WTK/`.

## Guides

[WTK getting started](../guides/wtk-getting-started.md) ·
[WTK setup](../guides/wtk-setup.md) ·
[Authentication](../guides/wtk-authentication.md) ·
[Modular migration](../guides/wtk-modular-toolkit-migration-guide.md) ·
[Languages](../guides/wtk-supported-languages.md) ·
[SDK getting started](../guides/sdk-getting-started.md) ·
[SDK setup](../guides/sdk-setup.md)

## Verified against the live service

[field-notes/](../field-notes/README.md) — hand-written notes from querying the live service: working
instrument ids ([instrument-ids](../field-notes/instrument-ids.md)), the OMXS30 constituents chain
([chains](../field-notes/chains.md)), feeds and delays per login ([feeds-test-user](../field-notes/feeds-test-user.md),
[production-user](../field-notes/production-user.md)),
production token recovery, transport health and concurrent app sessions
([live-token-stage](../field-notes/live-token-stage.md)),
update rates and batching ([streaming](../field-notes/streaming.md)), the live-series ordering trap
([time-series](../field-notes/time-series.md)), opaque vs descriptive errors
([errors-and-access](../field-notes/errors-and-access.md)). Where a note and the reference disagree, the note
records what the service did.

## Other indexes

[symbols.tsv](../index/symbols.tsv) — every symbol name to file and anchor ·
[topics.md](../index/topics.md) — the docs' own navigation tree ·
[manifest.json](../manifest.json) — every file's metadata, for routing before reading
