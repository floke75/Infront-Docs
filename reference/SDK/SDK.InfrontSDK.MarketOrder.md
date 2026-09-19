---
title: "MarketOrder"
qualified_name: "SDK.InfrontSDK.MarketOrder"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > MarketOrder"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.MarketOrder.html"
defines: ["MarketOrder"]
member_count: 6
members: ["feed", "market", "ordersCount", "price", "ticker", "volume"]
member_groups:
  "Properties": ["feed", "market", "ordersCount", "price", "ticker", "volume"]
---

# MarketOrder

Represents an order from a specific market within a consolidated level.

```ts
interface MarketOrder {
    feed: number;
    market: string;
    ordersCount: number;
    price: number;
    ticker: string;
    volume: number;
}
```

### Properties

#### feed

```ts
feed: number
```

Market feed

#### market

```ts
market: string
```

Market identifier (feed name or exchange code)

#### ordersCount

```ts
ordersCount: number
```

Number of orders at this market

#### price

```ts
price: number
```

Price at this market

#### ticker

```ts
ticker: string
```

Market ticker

#### volume

```ts
volume: number
```

Volume at this market
