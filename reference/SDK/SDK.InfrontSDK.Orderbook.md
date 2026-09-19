---
title: "Orderbook"
qualified_name: "SDK.InfrontSDK.Orderbook"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > Orderbook"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Orderbook.html"
defines: ["Orderbook"]
member_count: 3
members: ["askLevels", "bidLevels", "hasDetails"]
member_groups:
  "Properties": ["askLevels", "bidLevels", "hasDetails"]
reference_count: 5
references: ["Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.OrderbookLevel", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.orderbook", "SDK.InfrontSDK.OrderbookOptions"]
---

# Orderbook

Orderbook interface returned by DataRequestOptions.onData callback.

#### See

[orderbook](./SDK.InfrontSDK.orderbook.md) | OrderbookOptions

```ts
interface Orderbook {
    askLevels: ObservableArray<OrderbookLevel>;
    bidLevels: ObservableArray<OrderbookLevel>;
    hasDetails: boolean;
}
```

### Properties

#### askLevels

```ts
askLevels: ObservableArray<OrderbookLevel>
```

List of asks sorted by levels.

#### bidLevels

```ts
bidLevels: ObservableArray<OrderbookLevel>
```

List of bids sorted by levels.

#### hasDetails

```ts
hasDetails: boolean
```

This is only valid for consolidated orderbooks to indicate that orderbook has detailed info about all orders.
Use OrderbookLevel.orders to get a list of orders at a specific orderbook level.
