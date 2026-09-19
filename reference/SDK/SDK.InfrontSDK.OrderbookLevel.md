---
title: "OrderbookLevel"
qualified_name: "SDK.InfrontSDK.OrderbookLevel"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > OrderbookLevel"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.OrderbookLevel.html"
defines: ["OrderbookLevel"]
member_count: 7
members: ["level", "market", "orders", "ordersCount", "price", "side", "volume"]
member_groups:
  "Properties": ["level", "market", "orders", "ordersCount", "price", "side", "volume"]
reference_count: 2
references: ["SDK.InfrontSDK.OrderbookOrder", "SDK.InfrontSDK.OrderbookOrderSide"]
---

# OrderbookLevel

Interface to represent orderbook level.
The level can combine many orders if the current logged in user has consolidation access.

```ts
interface OrderbookLevel {
    level: number;
    market: string;
    orders: OrderbookOrder[];
    ordersCount: number;
    price: number;
    side: OrderbookOrderSide;
    volume: number;
}
```

### Properties

#### level

```ts
level: number
```

Orderbook level. Levels start from 1 to 49. Levels can be limited to user access.

#### market

```ts
market: string
```

Orders market

#### orders

```ts
orders: OrderbookOrder[]
```

A list of orders. This is only valid when consolidated orderbook is supported.

#### ordersCount

```ts
ordersCount: number
```

Orders count.

#### price

```ts
price: number
```

Order price for normal orderbooks, and it can be total orders price if the orderbook is from consolidated markets.

#### side

```ts
side: OrderbookOrderSide
```

Describes whether order book level is bid or ask

#### volume

```ts
volume: number
```

Order volume for normal orderbooks, and it can be total orders volume if the orderbook is from consolidated markets.
