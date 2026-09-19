---
title: "ConsolidatedOrderbook"
qualified_name: "SDK.InfrontSDK.ConsolidatedOrderbook"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > ConsolidatedOrderbook"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ConsolidatedOrderbook.html"
defines: ["ConsolidatedOrderbook"]
member_count: 3
members: ["askLevels", "bidLevels", "markets"]
member_groups:
  "Properties": ["askLevels", "bidLevels", "markets"]
reference_count: 5
references: ["Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.ConsolidatedOrderbookLevel", "SDK.InfrontSDK.SearchResultItem", "SDK.InfrontSDK.consolidatedOrderbook", "SDK.InfrontSDK.ConsolidatedOrderbookOptions"]
---

# ConsolidatedOrderbook

Consolidated orderbook interface with aggregated levels.

#### See

[consolidatedOrderbook](./SDK.InfrontSDK.consolidatedOrderbook.md) | ConsolidatedOrderbookOptions

```ts
interface ConsolidatedOrderbook {
    askLevels: ObservableArray<ConsolidatedOrderbookLevel>;
    bidLevels: ObservableArray<ConsolidatedOrderbookLevel>;
    markets: ObservableArray<SearchResultItem>;
}
```

### Properties

#### askLevels

```ts
askLevels: ObservableArray<ConsolidatedOrderbookLevel>
```

List of consolidated ask levels sorted by price.

#### bidLevels

```ts
bidLevels: ObservableArray<ConsolidatedOrderbookLevel>
```

List of consolidated bid levels sorted by price.

#### markets

```ts
markets: ObservableArray<SearchResultItem>
```

List of all market symbols included in this consolidated orderbook.
