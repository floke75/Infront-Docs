---
title: "companySymbols"
qualified_name: "SDK.InfrontSDK.companySymbols"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > companySymbols"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.companySymbols.html"
defines: ["companySymbols"]
reference_count: 5
references: ["SDK.InfrontSDK.CompanySymbolsOptions", "SDK.InfrontSDK.TypedDataRequest", "SDK.InfrontSDK.FeedListItem", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.symbolListings"]
---

# companySymbols

```ts
companySymbols(
    options: CompanySymbolsOptions,
): TypedDataRequest<Record<number, FeedListItem>>
```

Get list of derivatives, bonds, certificates and other types that belongs to the holding company of the given [SymbolId](./SDK.InfrontSDK.SymbolId.md).

#### Parameters

- options: [CompanySymbolsOptions](./SDK.InfrontSDK.CompanySymbolsOptions.md)

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<Record<number, [FeedListItem](./SDK.InfrontSDK.FeedListItem.md)>>

#### See

symbolListings
