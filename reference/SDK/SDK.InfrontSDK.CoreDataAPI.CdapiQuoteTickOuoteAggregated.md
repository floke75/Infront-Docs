---
title: "CdapiQuoteTickOuoteAggregated"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickOuoteAggregated"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiQuoteTickOuoteAggregated"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickOuoteAggregated.html"
defines: ["CdapiQuoteTickOuoteAggregated"]
member_count: 20
members: ["_meta", "ask_close_price", "ask_high_price", "ask_low_price", "ask_number_of_ticks", "ask_open_price", "ask_volume", "bid_close_price", "bid_high_price", "bid_low_price", "bid_number_of_ticks", "bid_open_price", "bid_volume", "timestamp", "trade_close_price", "trade_high_price", "trade_low_price", "trade_number_of_ticks", "trade_open_price", "trade_volume"]
member_groups:
  "Properties": ["_meta", "ask_close_price", "ask_high_price", "ask_low_price", "ask_number_of_ticks", "ask_open_price", "ask_volume", "bid_close_price", "bid_high_price", "bid_low_price", "bid_number_of_ticks", "bid_open_price", "bid_volume", "timestamp", "trade_close_price", "trade_high_price", "trade_low_price", "trade_number_of_ticks", "trade_open_price", "trade_volume"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiQuoteTickOuoteAggregated

TickQuoteAggregated represents OHLCV data aggregated over a specific time interval
(e.g. 1-minute, 5-minute, hourly bars) for trade, bid, and ask separately.
Note: the message name contains a typo ("Ouote") — preserved for backwards compatibility.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.quote.TickOuoteAggregated

```ts
interface CdapiQuoteTickOuoteAggregated {
    _meta: BasedefEntityMeta;
    ask_close_price: number;
    ask_high_price: number;
    ask_low_price: number;
    ask_number_of_ticks: number;
    ask_open_price: number;
    ask_volume: number;
    bid_close_price: number;
    bid_high_price: number;
    bid_low_price: number;
    bid_number_of_ticks: number;
    bid_open_price: number;
    bid_volume: number;
    timestamp: string;
    trade_close_price: number;
    trade_high_price: number;
    trade_low_price: number;
    trade_number_of_ticks: number;
    trade_open_price: number;
    trade_volume: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` ask_close_price

```ts
ask_close_price: number
```

Closing ask price within the interval.

##### Remarks

Format: double

#### `Readonly` ask_high_price

```ts
ask_high_price: number
```

Highest ask price within the interval.

##### Remarks

Format: double

#### `Readonly` ask_low_price

```ts
ask_low_price: number
```

Lowest ask price within the interval.

##### Remarks

Format: double

#### `Readonly` ask_number_of_ticks

```ts
ask_number_of_ticks: number
```

Number of ask ticks within the interval.

##### Remarks

Format: double

#### `Readonly` ask_open_price

```ts
ask_open_price: number
```

Opening ask price within the interval.

##### Remarks

Format: double

#### `Readonly` ask_volume

```ts
ask_volume: number
```

Total ask volume within the interval.

##### Remarks

Format: double

#### `Readonly` bid_close_price

```ts
bid_close_price: number
```

Closing bid price within the interval.

##### Remarks

Format: double

#### `Readonly` bid_high_price

```ts
bid_high_price: number
```

Highest bid price within the interval.

##### Remarks

Format: double

#### `Readonly` bid_low_price

```ts
bid_low_price: number
```

Lowest bid price within the interval.

##### Remarks

Format: double

#### `Readonly` bid_number_of_ticks

```ts
bid_number_of_ticks: number
```

Number of bid ticks within the interval.

##### Remarks

Format: double

#### `Readonly` bid_open_price

```ts
bid_open_price: number
```

Opening bid price within the interval.

##### Remarks

Format: double

#### `Readonly` bid_volume

```ts
bid_volume: number
```

Total bid volume within the interval.

##### Remarks

Format: double

#### `Readonly` timestamp

```ts
timestamp: string
```

Start timestamp of the aggregation interval. Format: YYYY-MM-ddThh:mm:ssZ

#### `Readonly` trade_close_price

```ts
trade_close_price: number
```

Closing trade price within the interval.

##### Remarks

Format: double

#### `Readonly` trade_high_price

```ts
trade_high_price: number
```

Highest trade price within the interval.

##### Remarks

Format: double

#### `Readonly` trade_low_price

```ts
trade_low_price: number
```

Lowest trade price within the interval.

##### Remarks

Format: double

#### `Readonly` trade_number_of_ticks

```ts
trade_number_of_ticks: number
```

Number of individual trade ticks within the interval.

##### Remarks

Format: double

#### `Readonly` trade_open_price

```ts
trade_open_price: number
```

Opening trade price within the interval.

##### Remarks

Format: double

#### `Readonly` trade_volume

```ts
trade_volume: number
```

Total traded volume within the interval.

##### Remarks

Format: double
