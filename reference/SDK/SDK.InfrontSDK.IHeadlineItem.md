---
title: "IHeadlineItem"
qualified_name: "SDK.InfrontSDK.IHeadlineItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "News"
nav_path: "SDK > InfrontSDK > News > IHeadlineItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.IHeadlineItem.html"
defines: ["IHeadlineItem"]
member_count: 7
members: ["dateTime", "feed", "headline", "id", "language", "symbols", "url"]
member_groups:
  "Properties": ["dateTime", "feed", "headline", "id", "language", "symbols", "url"]
related_types: ["SDK.InfrontSDK.NewsHeadline"]
reference_count: 5
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.NewsHeadline", "SDK.InfrontSDK.newsHeadlines", "SDK.InfrontSDK.NewsHeadlinesOptions", "SDK.InfrontSDK.feedInfo"]
---

# IHeadlineItem

Output interface used by NewsHeadline to present news headline data.

#### See

[newsHeadlines](./SDK.InfrontSDK.newsHeadlines.md) | NewsHeadlinesOptions | NewsHeadline

```ts
interface IHeadlineItem {
    dateTime: Date;
    feed: number;
    headline: string;
    id: string;
    language: string;
    symbols: SymbolId[];
    url: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.IHeadlineItem))

- IHeadlineItem

  - NewsHeadline

### Properties

#### dateTime

```ts
dateTime: Date
```

Publish date time.

#### feed

```ts
feed: number
```

News headline feed number. This can be used to get more information about the source.

##### See

[feedInfo](./SDK.InfrontSDK.feedInfo.md)

#### headline

```ts
headline: string
```

News headline.

#### id

```ts
id: string
```

Identical code used to identify news headline. Id can start with `HIST:` prefix to indicate that headline item comes from historical server.

#### language

```ts
language: string
```

Headline language.

#### symbols

```ts
symbols: SymbolId[]
```

List of symbols mentioned in the news item.

#### url

```ts
url: string
```

News story external link.
