---
title: "feedContents"
qualified_name: "SDK.InfrontSDK.feedContents"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > feedContents"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.feedContents.html"
defines: ["feedContents"]
reference_count: 8
references: ["SDK.InfrontSDK.FeedContentsOptions", "SDK.InfrontSDK.TypedDataRequest", "SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.SymbolData", "SDK.InfrontSDK.ChainContent", "SDK.InfrontSDK.Ranking", "SDK.InfrontSDK.FeedContentType"]
---

# feedContents

```ts
feedContents(
    options: FeedContentsOptions,
): TypedDataRequest<
    | number[]
    | SymbolId[]
    | ObservableArray<SymbolData>
    | ChainContent
    | Ranking[]
    | ObservableArray<Ranking>,
>
```

Get the content of a feed as specified by the [FeedContentsOptions.contentType](./SDK.InfrontSDK.FeedContentsOptions.md#contenttype).

#### Parameters

- options: [FeedContentsOptions](./SDK.InfrontSDK.FeedContentsOptions.md)

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
| number[]
| [SymbolId](./SDK.InfrontSDK.SymbolId.md)[]
| [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<[SymbolData](./SDK.InfrontSDK.SymbolData.md)>
| [ChainContent](./SDK.InfrontSDK.ChainContent.md)
| [Ranking](./SDK.InfrontSDK.Ranking.md)[]
| [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<[Ranking](./SDK.InfrontSDK.Ranking.md)>,
>

#### See

[FeedContentType](./SDK.InfrontSDK.FeedContentType.md) for available content types.
