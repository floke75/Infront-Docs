---
title: "SearchResultItem"
qualified_name: "SDK.InfrontSDK.SearchResultItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SearchResultItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SearchResultItem.html"
defines: ["SearchResultItem"]
member_count: 2
members: ["type", "get"]
member_groups:
  "Properties": ["type"]
  "Methods": ["get"]
reference_count: 3
references: ["SDK.InfrontSDK.SearchResultField", "SDK.InfrontSDK.FeedField", "SDK.InfrontSDK.symbolSearch"]
---

# SearchResultItem

Output interface used by [symbolSearch](./SDK.InfrontSDK.symbolSearch.md) to supply symbol search results.

```ts
interface SearchResultItem {
    type: SearchResultItemType;
    get(field: SearchResultField | FeedField): any;
}
```

### Properties

#### type

```ts
type: SearchResultItemType
```

Type of search result item

### Methods

#### get

```ts
get(field: SearchResultField | FeedField): any
```

Get the value of the specified SymbolField or SearchDisplayField

##### Parameters

- field: [SearchResultField](./SDK.InfrontSDK.SearchResultField.md) | [FeedField](./SDK.InfrontSDK.FeedField.md)

##### Returns any
