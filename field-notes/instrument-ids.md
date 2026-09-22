---
title: "Instrument ids that work, and how to find the rest"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox symbolSearch and symbolData, EFN documentation test user"
related: ["reference/SDK/SDK.InfrontSDK.SymbolId.md", "reference/SDK/SDK.InfrontSDK.SymbolSearchOptions.md", "examples/SDK-SDK-Examples-Search.md"]
---

# Instrument ids that work, and how to find the rest

An instrument is addressed as `{ feed, ticker }` (`reference/SDK/SDK.InfrontSDK.SymbolId.md` lists the
alternatives: `{ isin, mic }`, `{ companyId }`, `{ vwdKey }`). **The feed numbers in the docs' examples are
examples, and several of them do not work** — resolve ids against the live service.

## Verified on 2026-09-22 (test user)

| Instrument | `{ feed, ticker }` | `SymbolType` | Notes |
|---|---|---|---|
| OMX Stockholm 30 | `17921` `OMXS30` | Index | ISIN SE0000337842. Also exists as `2087:OMXS30` (Nasdaq's global index feed, no ISIN) — prefer 17921 |
| OMX Stockholm PI | `17921` `OMXSPI` | Index | `2087:OMXSPI` also exists and reports currency **USD** |
| Nasdaq Stockholm stocks | `17921` + the exchange ticker | Stock | The ticker is Nasdaq Stockholm's own, share class after a space: `SAAB B`, `ERIC B`, `VOLV B`, `INVE B`, `SEB A`, `HEM`, `BOL`, `SINCH`, `EVO` |
| USD/SEK | `12` `USDSEK` | Forex | World Forex |
| EUR/SEK | `12` `EURSEK` | Forex | World Forex |
| Brent | `13` `BRT` | **None** | "Brent Spot Indicator", World Commodities. The docs' `2229:BRT` fails for this login |
| Gold | `13` `GLDSPOT` | **None** | "Gold Spot Indicator", World Commodities |
| Nikkei 225 | `6150` `N225` | Index | 20-minute delay; **`Last` came back empty** while `ChangePercent` and `YesterdayClose` were present |
| Nasdaq Composite | `2087` `COMP` | Index | Nasdaq, Indices |

**Not entitled for the test user:** S&P 500, Dow Jones Industrial Average, DAX. Its feed list has no S&P
Dow Jones Indices feed and no Xetra feed ([feeds-test-user.md](feeds-test-user.md)), and the docs' ids
`2088:SP500`, `20:DJI`, `2098:DAX` (and `2229:BRT`) answer `NoAccess` — which a feed number that does not
exist answers too ([errors-and-access.md](errors-and-access.md)), so whether these are the right ids for a
production contract is for Infront to confirm.

## Resolving an id

```js
sdk.get(InfrontSDK.symbolSearch({
  parameters: "SAAB B",                                  // free text, or key/value pairs:
  // parameters: { SearchFreeText: "Gold", Feed: 13 },  // keys must be SearchField members
  fields: ["Feed", "Ticker", "FullName", "SymbolType", "FeedDesc", "FeedAccess", "FeedDelayStr", "Currency", "ISIN"],
  limit: 10,
  onData: (results) => results.observe({ itemAdded: (r) => console.log(r.Feed, r.Ticker, r.FeedAccess) }),
}));
```

Search results are **plain objects** (`r.Feed`, `r.Ticker`), and they carry `FeedAccess` and `FeedDelayStr`
— check entitlement before you subscribe.

## Traps

- **Commodities have `SymbolType` "None"**, not "Commodity", so `{ SymbolType: "Commodity" }` finds
  nothing. Filter by feed (`Feed: 13`) instead.
- **Free text ranks derivatives and ETPs highly.** "SAAB B" returns the share first, then futures and
  options on `17923` (Nasdaq Stockholm, Derivatives). Keep the result whose feed you expect.
- **"S&P 500" as free text returns ETF indicator series** on `2087` (tickers ending `_IV`, `_NV`, `_TC`, …),
  typed `Index`. They are not the index.
- The same index can live on two feeds with different metadata (OMXS30 and OMXSPI above).
