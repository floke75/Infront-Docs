---
title: "FeedContentType"
qualified_name: "SDK.InfrontSDK.FeedContentType"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > FeedContentType"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.FeedContentType.html"
defines: ["FeedContentType"]
member_count: 5
members: ["ChainContent", "Chains", "Ranking", "SymbolData", "SymbolIds"]
member_groups:
  "Enumeration Members": ["ChainContent", "Chains", "Ranking", "SymbolData", "SymbolIds"]
reference_count: 3
references: ["SDK.InfrontSDK.feedContents", "SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.SortedObservableArray"]
---

# FeedContentType

Specify output for the [feedContents](./SDK.InfrontSDK.feedContents.md) request.

### Enumeration Members

#### ChainContent

```ts
ChainContent: "ChainContent"
```

Return the content of a chain as a list of [SymbolId](./SDK.InfrontSDK.SymbolId.md)

#### Chains

```ts
Chains: "Chains"
```

Return a nested array of all chains on the specified feed.

#### Ranking

```ts
Ranking: "Ranking"
```

Return ranking data. If the subscription flag is set, the data returned is a [InfrontUtil.SortedObservableArray](../Utils/Utils.InfrontUtil.SortedObservableArray.md).
Otherwise, the returned data is an array of [Ranking](#ranking) objects.

#### SymbolData

```ts
SymbolData: "SymbolData"
```

Return an observable array containing [SymbolData](#symboldata) for all symbols on the feed.

#### SymbolIds

```ts
SymbolIds: "SymbolIds"
```

Return an array containing all SymbolIds on the feed
