---
title: "ChainItem"
qualified_name: "SDK.InfrontSDK.ChainItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > ChainItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ChainItem.html"
defines: ["ChainItem"]
member_count: 7
members: ["chainFeed", "description", "feed", "feedInfo", "name", "providerId", "type"]
member_groups:
  "Properties": ["chainFeed", "description", "feed", "feedInfo", "name", "providerId", "type"]
reference_count: 1
references: ["SDK.InfrontSDK.FeedInfo"]
---

# ChainItem

```ts
interface ChainItem {
    chainFeed: number;
    description: string;
    feed: number;
    feedInfo: FeedInfo;
    name: string;
    providerId: number;
    type: ChainType;
}
```

### Properties

#### chainFeed

```ts
chainFeed: number
```

Optional chain feed if different from feed

#### description

```ts
description: string
```

Chain description including path if the chain is nested under a higher level node.

#### feed

```ts
feed: number
```

Feed number

#### feedInfo

```ts
feedInfo: FeedInfo
```

Feed info

#### name

```ts
name: string
```

Short name of the chain

#### providerId

```ts
providerId: number
```

Provider id of the chain provider

#### type

```ts
type: ChainType
```

Type of chain
