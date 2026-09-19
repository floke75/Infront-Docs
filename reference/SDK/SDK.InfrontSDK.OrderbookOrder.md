---
title: "OrderbookOrder"
qualified_name: "SDK.InfrontSDK.OrderbookOrder"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > OrderbookOrder"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.OrderbookOrder.html"
defines: ["OrderbookOrder"]
member_count: 8
members: ["buyer?", "id", "market", "price", "seller?", "side", "time", "volume"]
member_groups:
  "Properties": ["buyer?", "id", "market", "price", "seller?", "side", "time", "volume"]
reference_count: 1
references: ["SDK.InfrontSDK.OrderbookOrderSide"]
---

# OrderbookOrder

Orderbook order presentation.

```ts
interface OrderbookOrder {
    buyer?: string;
    id: string;
    market: string;
    price: number;
    seller?: string;
    side: OrderbookOrderSide;
    time: Date;
    volume: number;
}
```

### Properties

#### `Optional` buyer

```ts
buyer?: string
```

Buyer name/id.

#### id

```ts
id: string
```

Order id.

#### market

```ts
market: string
```

Order market.

#### price

```ts
price: number
```

Order price.

#### `Optional` seller

```ts
seller?: string
```

Seller name/id.

#### side

```ts
side: OrderbookOrderSide
```

Describes order side buy or sell.

#### time

```ts
time: Date
```

Order placing time.

#### volume

```ts
volume: number
```

Order volume.
