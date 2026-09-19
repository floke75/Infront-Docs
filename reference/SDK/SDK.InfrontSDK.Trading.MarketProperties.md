---
title: "MarketProperties"
qualified_name: "SDK.InfrontSDK.Trading.MarketProperties"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > MarketProperties"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.MarketProperties.html"
defines: ["MarketProperties"]
member_count: 4
members: ["getAlgorithms", "getCustomFields", "getMarketPlace", "getTickSizes"]
member_groups:
  "Methods": ["getAlgorithms", "getCustomFields", "getMarketPlace", "getTickSizes"]
reference_count: 6
references: ["SDK.InfrontSDK.Trading.AlgoItem", "SDK.InfrontSDK.Trading.CustomField", "SDK.InfrontSDK.Trading.MarketPlace", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.Trading.TickItem", "SDK.InfrontSDK.Trading.orderEntry"]
---

# MarketProperties

Output interface for all data related to a market.

#### See

[orderEntry](./SDK.InfrontSDK.Trading.orderEntry.md)

```ts
interface MarketProperties {
    getAlgorithms(
        feed: number,
        callback: (algoItems: AlgoItem[]) => void,
    ): void;
    getCustomFields(
        feed: number,
        callback: (customFields: CustomField[]) => void,
    ): void;
    getMarketPlace(
        feed: number,
        callback: (marketPlace: MarketPlace) => void,
    ): void;
    getTickSizes(
        feed: number | SymbolId,
        tickSizeId: number,
        callback: (tickSizes: TickItem[]) => void,
    ): void;
}
```

### Methods

#### getAlgorithms

```ts
getAlgorithms(feed: number, callback: (algoItems: AlgoItem[]) => void): void
```

Get algorithms for the specified feed.

##### Parameters

- feed: number
- callback: (algoItems: AlgoItem[]) => void

##### Returns void

##### See

AlgoItem

#### getCustomFields

```ts
getCustomFields(
    feed: number,
    callback: (customFields: CustomField[]) => void,
): void
```

Get custom fields for the specified feed.

##### Parameters

- feed: number
- callback: (customFields: CustomField[]) => void

##### Returns void

##### See

CustomField

#### getMarketPlace

```ts
getMarketPlace(feed: number, callback: (marketPlace: MarketPlace) => void): void
```

Get market place properties for the specified feed.

##### Parameters

- feed: number
- callback: (marketPlace: MarketPlace) => void

##### Returns void

##### See

MarketPlace

#### getTickSizes

```ts
getTickSizes(
    feed: number | SymbolId,
    tickSizeId: number,
    callback: (tickSizes: TickItem[]) => void,
): void
```

Get tick sizes for the specified feed.

##### Parameters

- feed: number | SymbolId
- tickSizeId: number
- callback: (tickSizes: TickItem[]) => void

##### Returns void

##### See

AlgoItem
