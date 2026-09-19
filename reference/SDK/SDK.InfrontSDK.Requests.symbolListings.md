---
title: "symbolListings"
qualified_name: "SDK.InfrontSDK.Requests.symbolListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Other > Requests > Symbols > symbolListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.symbolListings.html"
defines: ["symbolListings"]
reference_count: 5
references: ["SDK.InfrontSDK.ListingsOptions", "SDK.InfrontSDK.TypedDataRequest", "SDK.InfrontSDK.SearchResultItem", "SDK.InfrontSDK.ListingsOptionsInteractive", "SDK.InfrontSDK.Requests.companySymbols"]
---

# symbolListings

```ts
symbolListings(options: ListingsOptions): TypedDataRequest<SearchResultItem[]>
```

Get an observable array of all listed equities with the given [ListingsOptions.id](./SDK.InfrontSDK.ListingsOptionsInteractive.md#id)

#### Parameters

- options: [ListingsOptions](./SDK.InfrontSDK.ListingsOptions.md)

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<[SearchResultItem](./SDK.InfrontSDK.SearchResultItem.md)[]>

#### See

companySymbols
