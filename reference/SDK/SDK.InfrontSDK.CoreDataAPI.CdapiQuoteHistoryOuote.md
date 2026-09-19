---
title: "CdapiQuoteHistoryOuote"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryOuote"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiQuoteHistoryOuote"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryOuote.html"
defines: ["CdapiQuoteHistoryOuote"]
member_count: 13
members: ["_meta", "ask_price", "bid_price", "close_price", "cumulative_trades", "date", "high_price", "low_price", "open_price", "settlement_price", "spot_price", "turnover", "volume"]
member_groups:
  "Properties": ["_meta", "ask_price", "bid_price", "close_price", "cumulative_trades", "date", "high_price", "low_price", "open_price", "settlement_price", "spot_price", "turnover", "volume"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiQuoteHistoryOuote

HistoryQuote represents a single day's OHLCV (open/high/low/close/volume) price bar
for an instrument, along with additional end-of-day prices.
Note: the message name contains a typo ("Ouote") — preserved for backwards compatibility.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.quote.HistoryOuote

```ts
interface CdapiQuoteHistoryOuote {
    _meta: BasedefEntityMeta;
    ask_price: number;
    bid_price: number;
    close_price: number;
    cumulative_trades: number;
    date: string;
    high_price: number;
    low_price: number;
    open_price: number;
    settlement_price: number;
    spot_price: number;
    turnover: number;
    volume: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` ask_price

```ts
ask_price: number
```

Best ask price at end of day.
ADF: ADF_Brief | IDS: IDS_REALTIME_ASK

##### Remarks

Format: double

#### `Readonly` bid_price

```ts
bid_price: number
```

Best bid price at end of day.
ADF: ADF_Geld | IDS: IDS_REALTIME_BID

##### Remarks

Format: double

#### `Readonly` close_price

```ts
close_price: number
```

Closing price of the trading session.
ADF: ADF_Brief | IDS: IDS_REALTIME_ASK

##### Remarks

Format: double

#### `Readonly` cumulative_trades

```ts
cumulative_trades: number
```

Total number of individual trades executed during the day.
ADF: ADF_Anzahl_Handel | IDS: IDS_REALTIME_TRADE_MOVES

##### Remarks

Format: double

#### `Readonly` date

```ts
date: string
```

Trading date for this price bar. ISO-8601 format recommended (e.g. "2024-01-15").

#### `Readonly` high_price

```ts
high_price: number
```

Highest traded price of the day.
ADF: ADF_Tageshoch | IDS: IDS_REALTIME_HIGH

##### Remarks

Format: double

#### `Readonly` low_price

```ts
low_price: number
```

Lowest traded price of the day.
ADF: ADF_Tagestief | IDS: IDS_REALTIME_LOW

##### Remarks

Format: double

#### `Readonly` open_price

```ts
open_price: number
```

Opening price of the trading session.
ADF: ADF_Anfang | IDS: IDS_REALTIME_OPEN

##### Remarks

Format: double

#### `Readonly` settlement_price

```ts
settlement_price: number
```

Settlement price — official price used for daily mark-to-market of derivatives.
ADF: ADF_Settlement | IDS: IDS_REALTIME_SETTLEMENT_PRICE

##### Remarks

Format: double

#### `Readonly` spot_price

```ts
spot_price: number
```

Spot (fixing) price — a single daily price determination, typically set at mid-session.
In contrast to continuous quotation, this price is only established once per trading day.
ADF: ADF_KASSA | IDS: n/a

##### Remarks

Format: double

#### `Readonly` turnover

```ts
turnover: number
```

Total turnover (traded value) for the day in the instrument's currency.
ADF: ADF_Umsatz_gesamt_in_Whrg | IDS: IDS_REALTIME_TURNOVER

##### Remarks

Format: double

#### `Readonly` volume

```ts
volume: number
```

Cumulative traded volume for the day.
ADF: ADF_Bezahlt_Umsatz | IDS: IDS_REALTIME_INCVOLUME

##### Remarks

Format: double
