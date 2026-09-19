---
title: "CdapiQuoteLatestTickOuotes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteLatestTickOuotes"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiQuoteLatestTickOuotes"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiQuoteLatestTickOuotes.html"
defines: ["CdapiQuoteLatestTickOuotes"]
member_count: 12
members: ["_meta", "ask_price", "ask_timestamp", "ask_volume", "bid_price", "bid_timestamp", "bid_volume", "close_price", "close_timestamp", "trade_price", "trade_timestamp", "trade_volume"]
member_groups:
  "Properties": ["_meta", "ask_price", "ask_timestamp", "ask_volume", "bid_price", "bid_timestamp", "bid_volume", "close_price", "close_timestamp", "trade_price", "trade_timestamp", "trade_volume"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiQuoteLatestTickOuotes

LatestTickQuotes holds the most recent price snapshot for an instrument,
including trade, bid, and ask prices with their respective timestamps and volumes.
Note: the message name contains a typo ("Ouotes") — preserved for backwards compatibility.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.quote.LatestTickOuotes

```ts
interface CdapiQuoteLatestTickOuotes {
    _meta: BasedefEntityMeta;
    ask_price: number;
    ask_timestamp: string;
    ask_volume: number;
    bid_price: number;
    bid_timestamp: string;
    bid_volume: number;
    close_price: number;
    close_timestamp: string;
    trade_price: number;
    trade_timestamp: string;
    trade_volume: number;
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

Best ask price (lowest price a seller is willing to accept).
ADF: ADF_Brief | IDS: IDS_REALTIME_ASK

##### Remarks

Format: double

#### `Readonly` ask_timestamp

```ts
ask_timestamp: string
```

Timestamp of the last ask update.

#### `Readonly` ask_volume

```ts
ask_volume: number
```

Volume available at the best ask price.

##### Remarks

Format: double

#### `Readonly` bid_price

```ts
bid_price: number
```

Best bid price (highest price a buyer is willing to pay).
ADF: ADF_Geld | IDS: IDS_REALTIME_BID

##### Remarks

Format: double

#### `Readonly` bid_timestamp

```ts
bid_timestamp: string
```

Timestamp of the last bid update.

#### `Readonly` bid_volume

```ts
bid_volume: number
```

Volume available at the best bid price.

##### Remarks

Format: double

#### `Readonly` close_price

```ts
close_price: number
```

Official closing price of the most recent trading session.
ADF: ADF_Schluss | IDS: IDS_REALTIME_OFFICIAL_CLOSE

##### Remarks

Format: double

#### `Readonly` close_timestamp

```ts
close_timestamp: string
```

Timestamp of the closing price.

#### `Readonly` trade_price

```ts
trade_price: number
```

Last traded price.

##### Remarks

Format: double

#### `Readonly` trade_timestamp

```ts
trade_timestamp: string
```

Timestamp of the last trade. ISO-8601 format recommended.

#### `Readonly` trade_volume

```ts
trade_volume: number
```

Volume of the last trade.

##### Remarks

Format: double
