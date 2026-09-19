---
title: "FeedListItem"
qualified_name: "SDK.InfrontSDK.FeedListItem"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > FeedListItem"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.FeedListItem.html"
defines: ["FeedListItem"]
member_count: 5
members: ["country", "exchangeCode", "feed", "listings", "name"]
member_groups:
  "Properties": ["country", "exchangeCode", "feed", "listings", "name"]
reference_count: 2
references: ["SDK.InfrontSDK.ListingsByClassification", "SDK.InfrontSDK.companySymbols"]
---

# FeedListItem

Represents data for [companySymbols](./SDK.InfrontSDK.companySymbols.md) request.

#### See

[companySymbols](./SDK.InfrontSDK.companySymbols.md)

### Properties

#### country

```ts
country: string
```

The feed country name

#### exchangeCode

```ts
exchangeCode: string
```

The exchange code for the feed (e.g. NSQ)

#### feed

```ts
feed: number
```

Feed number

#### listings

```ts
listings: ListingsByClassification = {}
```

Other listings organized by symbol classification

#### name

```ts
name: string
```

The name of the feed
