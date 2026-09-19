---
title: "CdapiQuoteTickOuoteByTick"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickOuoteByTick"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiQuoteTickOuoteByTick"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickOuoteByTick.html"
defines: ["CdapiQuoteTickOuoteByTick"]
member_count: 8
members: ["_meta", "ask_price", "ask_volume", "bid_price", "bid_volume", "timestamp", "trade_price", "trade_volume"]
member_groups:
  "Properties": ["_meta", "ask_price", "ask_volume", "bid_price", "bid_volume", "timestamp", "trade_price", "trade_volume"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiQuoteTickOuoteByTick

TickQuoteByTick represents a single raw tick event — one individual trade, bid, or ask update.
Note: the message name contains a typo ("Ouote") — preserved for backwards compatibility.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.quote.TickOuoteByTick

```ts
interface CdapiQuoteTickOuoteByTick {
    _meta: BasedefEntityMeta;
    ask_price: number;
    ask_volume: number;
    bid_price: number;
    bid_volume: number;
    timestamp: string;
    trade_price: number;
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

Ask price at this tick.

##### Remarks

Format: double

#### `Readonly` ask_volume

```ts
ask_volume: number
```

Ask volume at this tick.

##### Remarks

Format: double

#### `Readonly` bid_price

```ts
bid_price: number
```

Bid price at this tick.

##### Remarks

Format: double

#### `Readonly` bid_volume

```ts
bid_volume: number
```

Bid volume at this tick.

##### Remarks

Format: double

#### `Readonly` timestamp

```ts
timestamp: string
```

Timestamp of this tick event. Format: YYYY-MM-ddThh:mm:ssZ

#### `Readonly` trade_price

```ts
trade_price: number
```

Traded price at this tick.

##### Remarks

Format: double

#### `Readonly` trade_volume

```ts
trade_volume: number
```

Traded volume at this tick.

##### Remarks

Format: double
