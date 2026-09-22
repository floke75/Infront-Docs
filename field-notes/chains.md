---
title: "Chains — index constituents and market lists"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox feedContents, EFN documentation test user"
related: ["reference/SDK/SDK.InfrontSDK.Requests.feedContents.md", "reference/SDK/SDK.InfrontSDK.FeedContentType.md", "examples/SDK-SDK-API-Feeds-Get-Chain-Content.md"]
---

# Chains: index constituents and market lists

A **chain** is Infront's name for a curated list of symbols on a feed — index constituents, market
segments, sector lists. `FeedContentType` has `Chains`, `ChainContent`, `SymbolIds`, `SymbolData`,
`Ranking`.

## Listing a feed's chains

```js
sdk.get(InfrontSDK.feedContents({ contentType: "Chains", feed: 17921, onData: (tree) => { /* … */ } }));
```

Returns a **tree**: `[{ label, sortField, nodes: [{ label, chain: { feed, name, providerId, type,
description, fullPath, label, sortField } }] }]`. On feed 17921 (Nasdaq Stockholm) the groups are
"Main Market", "First North", "Spotlight Stock Market", "ETN/ETP", "Other".

**The OMXS30 constituents chain is named `DEFAULT`, not `OMXS30`:** `{ feed: 17921, name: "DEFAULT",
providerId: 0, type: "Default", label: "OMXS30 Constituents" }`. Others on 17921: `10208` Large Cap
Stockholm SEK, `10210` Mid Cap, `10212` Small Cap, `OMXSEALLCAP` Large+Mid+Small, `10150` foreign
companies, `PREFERENCE_SHARES`, `FNO_STOCK` First North, `OMXSESECTORS` OMX SE sectors, `SME` (SME Direct
estimates coverage).

## Reading a chain

```js
sdk.get(InfrontSDK.feedContents({
  contentType: "ChainContent", feed: 17921, chainName: "DEFAULT", providerId: 0,   // providerId is REQUIRED
  onData: (chain) => chain.items.forEach((i) => console.log(i.ticker, i.isin)),
}));
```

- Without `providerId` the request fails validation with a descriptive error:
  `Missing required property: 'providerId'` ([errors-and-access.md](errors-and-access.md)).
- `onData` receives a **plain object**, not an `ObservableArray`: `{ name, description, chainType,
  providerId, items, marketActivity }`. `items` is a plain array of `{ feed, ticker, symbolType,
  symbolSubType, isin, currency, fullname, exchangeSymbol, feedInfo }`.

## OMXS30 constituents on 2026-09-22

All on feed 17921. **The list changes at index reviews — fetch it rather than hard-coding it** wherever
membership matters (a movers list ranked over "the index").

| Ticker | Name | ISIN |
|---|---|---|
| ABB | ABB Ltd | CH0012221716 |
| ADDT B | Addtech B | SE0014781795 |
| ALFA | Alfa Laval | SE0000695876 |
| ASSA B | ASSA ABLOY B | SE0007100581 |
| ATCO A | Atlas Copco A | SE0017486889 |
| AZN | AstraZeneca | GB0009895292 |
| BOL | Boliden | SE0020050417 |
| EPI A | Epiroc A | SE0015658109 |
| EQT | EQT | SE0012853455 |
| ERIC B | Ericsson B | SE0000108656 |
| ESSITY B | Essity B | SE0009922164 |
| EVO | Evolution | SE0012673267 |
| HEXA B | Hexagon B | SE0015961909 |
| HM B | Hennes & Mauritz B | SE0000106270 |
| INDU C | Industrivärden C | SE0000107203 |
| INVE B | Investor B | SE0015811963 |
| LIFCO B | Lifco B | SE0015949201 |
| NDA SE | Nordea Bank Abp | FI4000297767 |
| NIBE B | NIBE Industrier B | SE0015988019 |
| SAAB B | SAAB B | SE0021921269 |
| SAND | Sandvik | SE0000667891 |
| SCA B | SCA B | SE0000112724 |
| SEB A | SEB A | SE0000148884 |
| SHB A | Sv. Handelsbanken A | SE0007100599 |
| SKA B | Skanska B | SE0000113250 |
| SKF B | SKF B | SE0000108227 |
| SWED A | Swedbank A | SE0000242455 |
| TEL2 B | Tele2 B | SE0005190238 |
| TELIA | Telia Company | SE0000667925 |
| VOLV B | Volvo B | SE0000115446 |

Hemnet (`HEM`) and Sinch (`SINCH`) are Large/Mid Cap names, **not** OMXS30 constituents.
