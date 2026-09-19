---
title: "FeedListType"
qualified_name: "SDK.InfrontSDK.FeedListType"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > FeedListType"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.FeedListType.html"
defines: ["FeedListType"]
member_count: 4
members: ["AccessibleFeeds", "Markets", "NewsFeeds", "TradableFeeds"]
member_groups:
  "Enumeration Members": ["AccessibleFeeds", "Markets", "NewsFeeds", "TradableFeeds"]
reference_count: 2
references: ["SDK.InfrontSDK.feedList", "SDK.InfrontSDK.FeedListOptions"]
---

# FeedListType

Specify output for the [feedList](./SDK.InfrontSDK.feedList.md) request. listType option is not available anymore use [FeedListOptions.serviceTypes](./SDK.InfrontSDK.FeedListOptions.md#servicetypes) instead.

#### See

[FeedListOptions](./SDK.InfrontSDK.FeedListOptions.md)

#### Deprecated

### Enumeration Members

#### AccessibleFeeds

```ts
AccessibleFeeds: "AccessibleFeeds"
```

Return a list of all feeds available to the user.

#### Markets

```ts
Markets: "Markets"
```

Return all available markets as a list of FeedMetaData objects.

#### NewsFeeds

```ts
NewsFeeds: "NewsFeeds"
```

Return a list of all news feeds available to the current user.

#### TradableFeeds

```ts
TradableFeeds: "TradableFeeds"
```

Return a list of feeds that are available for trading.
