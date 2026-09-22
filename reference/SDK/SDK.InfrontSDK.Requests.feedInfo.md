---
title: "feedInfo"
qualified_name: "SDK.InfrontSDK.Requests.feedInfo"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Other > Requests > Feeds > feedInfo"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.feedInfo.html"
defines: ["feedInfo"]
reference_count: 3
references: ["SDK.InfrontSDK.FeedInfoOptions", "SDK.InfrontSDK.TypedDataRequest", "SDK.InfrontSDK.FeedInfo"]
---

# feedInfo

```ts
feedInfo(options: FeedInfoOptions): TypedDataRequest<string[] | FeedInfo[]>
```

Gets feed(s) metadata. The output will be passed to [FeedInfoOptions.onData](./SDK.InfrontSDK.FeedInfoOptions.md#ondata) as an array of [FeedInfo](./SDK.InfrontSDK.FeedInfo.interface.md) or array of string.

#### Parameters

- options: [FeedInfoOptions](./SDK.InfrontSDK.FeedInfoOptions.md)

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<string[] | [FeedInfo](./SDK.InfrontSDK.FeedInfo.interface.md)[]>
