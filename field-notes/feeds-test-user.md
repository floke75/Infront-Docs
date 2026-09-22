---
title: "Feeds visible to EFN's test user"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox feedList, EFN documentation test user"
related: ["reference/SDK/SDK.InfrontSDK.FeedListOptions.md", "reference/SDK/SDK.InfrontSDK.FeedAccess.md"]
---

# Feeds visible to EFN's test user

```js
sdk.get(InfrontSDK.feedList({ serviceTypes: { Realtime: true, Delayed: true }, feedInfo: true,
  onData: (feeds) => { /* ObservableArray; read with length() / item(i) after a moment */ } }));
```

Each feed is a **plain object**; the `FeedInfo` fields are undocumented in `reference/`, and these came back: `feed`, `feedCode`,
`description`, `service`, `access` ("Realtime" / "Delayed 15 minutes "), `accessType` (1 = real-time,
2 = delayed), `minDelaySecs`, `maxDelaySecs`, `delayStr`, `startTime`, `endTime`, `localTimeOffset`, `mic`,
`dataTypes`, `feedProperties` (e.g. `Trades`, `Chains`, `Orderbook`, `SubscribeSymbols`), `country`,
`isoCountry`, `countryName`, `additionalInfo`, `hasSymbols`, `hasTrading`, `isHidden`, `provider`,
`providerId`, `decimals`, `allDay`, `fullFeed`, `trades`, `buyerSeller`.

**Trading hours are reported as-is and the offset does not obviously apply**: Nasdaq Stockholm (17921) reads
`08:00–16:31 +02:00` against its real 09:00–17:30 CEST session. Do not derive session times from these
fields without checking.

## The 53 feeds on 2026-09-22 (RT = real-time, DLn = delayed n minutes)

| Feed | Code | Access | Hours as reported | MIC | Description | Data types |
|---|---|---|---|---|---|---|
| 12 | WFX | DL15 | 01:00–01:00 +02:00 | _WFX | World Forex | FOREX |
| 13 | WCO | **RT** | 01:00–01:00 +02:00 | _WCO | World Commodities | COMMODITIES |
| 21 | CMM | DL15 | 23:00–22:59:59 −04:00 | XCME | CME, E-Mini Futures & Options | EUROOPTIONS, FUTURES, FOREX |
| 100 | HSS | DL15 | 08:00–16:35 +02:00 | XHEL | Helsinki, Equities/ETFs/Indices | STOCKS, INDICES |
| 965 | MAPI | RT | | | MWS Market Data API Access | |
| 1048 | IDNS | RT | | | Infront Nordic Calendar - Swedish | |
| 1519 | MFN | RT | | | MFN | NEWS |
| 2087 | NSx | DL15 | 06:00–21:00 +00:00 | _NSX | Nasdaq, Indices | INDICES |
| 2158 | GTFI | RT | | _GTFI | GTIS Fixed Income | BONDS |
| 2163 | TRS | DL15 | 10:30–17:00 −03:00 | XTSE | Toronto SE, Equities | STOCKS, INDICES |
| 2198 | HSIX | DL15 | 10:00–17:10 +09:00 | XHKG | Hang Seng, Indices | INDICES |
| 2302 | BIND | DL15 | 08:00–17:00 +01:00 | _BIND | Cboe Europe, Indices | INDICES |
| 2343 | NDQB | DL15 | 14:30–21:00 −04:00 | XNAS | NASDAQ US Basic - Nasdaq Issues | STOCKS |
| 2344 | NYSB | DL15 | 14:30–21:00 −04:00 | XNYS | NASDAQ US Basic - NYSE (Tape A) Issues | STOCKS |
| 2358 | TRDG | DL15 | | | Tradegate Exchange | STOCKS, INDICES |
| 2369 | SHDC | RT | | | SHB Direkt Calendar (swedish) | |
| 2370 | SHFU | DL1440 | | _SHFU | SHB Mutual Funds | FUNDS |
| 5475 | DXE | DL15 | 08:00–17:30 +01:00 | CCXE | Cboe Europe DXE, Equities/ETFs | STOCKS, MTF |
| 6150 | NIK | DL20 | 09:20–18:30 +02:00 | XJPX | NIKKEI, Indices | INDICES |
| 17665 | CSS | DL15 | 08:00–16:00 +02:00 | XCSE | Copenhagen, Equities/Indices | STOCKS, INDICES |
| 17669 | CSU | DL15 | 07:55–16:00 +02:00 | XCSE | Nasdaq Copenhagen, Investment Funds | INDICES, FUNDS |
| 17686 | CFIX | DL1440 | 07:55–16:00 +02:00 | _CFIX | DKK, FI Fixings | FOREX |
| 17692 | AKDK | DL15 | 08:00–16:00 +02:00 | XSAT | Spotlight Stock Market, Denmark | STOCKS |
| 17693 | AKD2 | DL15 | 10:00–18:30 +02:00 | XSAT | Spotlight Stock Market, Denmark - MBL | STOCKS |
| 17695 | SPNO | RT | 08:00–16:30 +02:00 | XSAT | Spotlight Stock Market, Norway | STOCKS |
| 17920 | SSSB | RT | 08:00–16:30 +02:00 | XSTO | Nasdaq Stockholm, ETPs | BONDS |
| 17921 | SSE | DL15 | 08:00–16:31 +02:00 | XSTO | Nasdaq Stockholm, Equities/ETFs/Indices | STOCKS, INDICES |
| 17922 | SOX | DL15 | 08:15–15:30 +02:00 | XSTO | Nasdaq Stockholm, FI Tradable | BONDS |
| 17923 | SO | DL15 | 07:30–17:01 +02:00 | XSTO | Nasdaq Stockholm, Derivatives | EUROOPTIONS, FUTURES |
| 17924 | SFI | DL15 | 08:30–19:00 +02:00 | XSTO | Nasdaq Stockholm, FI Indicative | BONDS, INDICES |
| 17928 | SCO | DL15 | 08:00–16:30 +02:00 | XSTO | Nasdaq Stockholm, Convertibles | WARRANTS |
| 17931 | SSW | DL15 | 08:00–16:30 +02:00 | XSTO | Nasdaq Stockholm, Warrants | WARRANTS |
| 17938 | NGM | RT | 10:00–18:30 +03:00 | XNGM | Nordic Growth Market, Equities | STOCKS, INDICES |
| 17942 | NDX | RT | 09:15–18:30 +03:00 | XNGM | NDX Sweden, Warrants | WARRANTS |
| 17944 | NDC | RT | 10:00–18:30 +02:00 | XNGM | NDX Sweden, Certificates | BONDS, WARRANTS |
| 17952 | SSC2 | RT | 08:00–16:30 +02:00 | XSTO | Nasdaq Stockholm, ETNs/Certificates | WARRANTS |
| 17960 | SFIX | DL1440 | 08:00–16:30 +02:00 | | Nasdaq Stockholm, FI Fixings | BONDS, FOREX |
| 18009 | STOI | DL15 | 08:00–16:30 +02:00 | XSTO | Nasdaq Stockholm SE, Other Indices | INDICES |
| 18013 | NPEP | DL15 | | | Nordic Growth Market. Pep Market | STOCKS |
| 18031 | DITP | RT | | | Nyhetsbyrån Direkt: Top 10 | NEWS |
| 18045 | DPBR | RT | | | Nyhetsbyrån Direkt Private Investor | NEWS |
| 18051 | AKTS | DL15 | 08:00–16:30 +02:00 | XSAT | Spotlight Stock Market, Sweden | STOCKS |
| 18052 | AKTO | DL15 | 10:00–18:30 +03:00 | | Spotlight Stock Market Sweden, MBL | STOCKS |
| 18062 | NOWC | DL15 | 08:00–15:25 +02:00 | | Nasdaq Oslo, Warrants and Certificates | WARRANTS |
| 18065 | NDCC | RT | 09:00–18:30 +02:00 | XNGM | NDX Sweden, Certificates - L2 | BONDS, WARRANTS |
| 18068 | NDXW | RT | 09:00–18:30 +02:00 | XNGM | NDX Sweden, Warrants - L2 | WARRANTS |
| 18070 | DPBD | DL15 | | | Nyhetsbyrån Direkt Private Investor | NEWS |
| 18076 | STIB | DL1440 | | XSTO | STIBOR Fixings | FOREX |
| 18177 | OSS | DL15 | 10:00–17:26 +02:00 | XOSL | Euronext Oslo, Equities/ETFs/Indices | STOCKS, INDICES |
| 18199 | OTC | DL2 | 08:00–15:26 +02:00 | NOTC | Oslo NOTC, Equities | STOCKS, INDICES |
| 1000402 | xxx4 | RT | | | App: Infront Web Toolkit SDK Access | FEATURES |
| 1000403 | xxx4 | RT | | | App: Infront Web Trader Access | FEATURES |
| 1000404 | xxx4 | RT | | | App: Infront Mobile Access | FEATURES |

## What that means in practice

- **Missing for this login:** S&P Dow Jones Indices (S&P 500, Dow) and Xetra (DAX). Foreign index coverage
  is Nasdaq's global index feed (2087 — Nasdaq Composite, NDX, OMX indices), Nikkei, Hang Seng and Cboe
  Europe's index series.
- **News and calendars are on the same login:** MFN press releases (1519), three Nyhetsbyrån Direkt feeds
  (18031, 18045, 18070), the Infront Nordic calendar in Swedish (1048) and SHB Direkt's calendar (2369) —
  reachable through `newsHeadlines` / `newsStory` and `financialCalendar`, not yet probed.
