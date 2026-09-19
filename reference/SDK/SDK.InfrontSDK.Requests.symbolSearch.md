---
title: "symbolSearch"
qualified_name: "SDK.InfrontSDK.Requests.symbolSearch"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Search"
nav_path: "SDK > InfrontSDK > Other > Requests > Search > symbolSearch"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.symbolSearch.html"
defines: ["symbolSearch"]
reference_count: 4
references: ["SDK.InfrontSDK.SymbolSearchOptions", "SDK.InfrontSDK.TypedDataRequest", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.SearchResultItem"]
---

# symbolSearch

```ts
symbolSearch(
    options: SymbolSearchOptions,
): TypedDataRequest<ObservableArray<SearchResultItem>>
```

Search for symbol(s) based on search key(s) passed by options.

#### Parameters

- options: [SymbolSearchOptions](./SDK.InfrontSDK.SymbolSearchOptions.md)

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<[ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<[SearchResultItem](./SDK.InfrontSDK.SearchResultItem.md)>>

#### See

[SymbolSearchOptions](./SDK.InfrontSDK.SymbolSearchOptions.md)
