---
title: "feedList"
qualified_name: "SDK.InfrontSDK.Requests.feedList"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Other > Requests > Feeds > feedList"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.feedList.html"
defines: ["feedList"]
reference_count: 2
references: ["SDK.InfrontSDK.FeedListOptions", "SDK.InfrontSDK.TypedDataRequest"]
---

# feedList

```ts
feedList<T extends boolean>(
    options: FeedListOptions<T>,
): TypedDataRequest<FeedListDataType<T>>
```

Get list of feeds as specified by [serviceTypes](./SDK.InfrontSDK.FeedListOptions.md#servicetypes) option.

#### Type Parameters

- T extends boolean

#### Parameters

- options: [FeedListOptions](./SDK.InfrontSDK.FeedListOptions.md)<[T](#feedlistt)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<FeedListDataType<[T](#feedlistt)>>

void
