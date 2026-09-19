---
title: "ConsolidatedOrderbookLevel"
qualified_name: "SDK.InfrontSDK.ConsolidatedOrderbookLevel"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > ConsolidatedOrderbookLevel"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ConsolidatedOrderbookLevel.html"
defines: ["ConsolidatedOrderbookLevel"]
member_count: 5
members: ["marketOrders", "ordersCount", "price", "side", "volume"]
member_groups:
  "Properties": ["marketOrders", "ordersCount", "price", "side", "volume"]
reference_count: 2
references: ["SDK.InfrontSDK.MarketOrder", "SDK.InfrontSDK.OrderbookOrderSide"]
---

# ConsolidatedOrderbookLevel

Interface to represent a consolidated orderbook level aggregating orders from multiple markets.

```ts
interface ConsolidatedOrderbookLevel {
    marketOrders: MarketOrder[];
    ordersCount: number;
    price: number;
    side: OrderbookOrderSide;
    volume: number;
}
```

### Properties

#### marketOrders

```ts
marketOrders: MarketOrder[]
```

List of market-specific orders at this price level

#### ordersCount

```ts
ordersCount: number
```

Total number of orders across all markets

#### price

```ts
price: number
```

Price level

#### side

```ts
side: OrderbookOrderSide
```

Describes whether order book level is bid or ask

#### volume

```ts
volume: number
```

Total volume across all markets at this price level
