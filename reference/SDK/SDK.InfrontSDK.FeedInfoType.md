---
title: "FeedInfoType"
qualified_name: "SDK.InfrontSDK.FeedInfoType"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > FeedInfoType"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.FeedInfoType.html"
defines: ["FeedInfoType"]
member_count: 2
members: ["ExchangeCode", "MetaData"]
member_groups:
  "Enumeration Members": ["ExchangeCode", "MetaData"]
reference_count: 2
references: ["SDK.InfrontSDK.feedInfo", "SDK.InfrontSDK.FeedInfoOptions"]
---

# FeedInfoType

Specify output for the [feedInfo](./SDK.InfrontSDK.feedInfo.md) request.

#### See

[FeedInfoOptions.infoType](./SDK.InfrontSDK.FeedInfoOptions.md#infotype) | [feedInfo](./SDK.InfrontSDK.feedInfo.md).

### Enumeration Members

#### ExchangeCode

```ts
ExchangeCode: "ExchangeCode"
```

Return the exchange code (e.g. "NSQ") the specified feed(s).

#### MetaData

```ts
MetaData: "MetaData"
```

Return metadata for the specified feed(s).
