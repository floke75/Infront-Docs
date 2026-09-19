---
title: "NewsHeadline"
qualified_name: "SDK.InfrontSDK.NewsHeadline"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "News"
nav_path: "SDK > InfrontSDK > News > NewsHeadline"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.NewsHeadline.html"
defines: ["NewsHeadline"]
member_count: 7
members: ["dateTime", "feed", "headline", "id", "language", "symbols", "url"]
member_groups:
  "Properties": ["dateTime", "feed", "headline", "id", "language", "symbols", "url"]
related_types: ["SDK.InfrontSDK.IHeadlineItem"]
reference_count: 5
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.newsHeadlines", "SDK.InfrontSDK.NewsHeadlinesOptions", "SDK.InfrontSDK.IHeadlineItem", "SDK.InfrontSDK.feedInfo"]
---

# NewsHeadline

News headline representation interface.

#### See

[newsHeadlines](./SDK.InfrontSDK.newsHeadlines.md) | NewsHeadlinesOptions

```ts
interface NewsHeadline {
    dateTime: Date;
    feed: number;
    headline: string;
    id: string;
    language: string;
    symbols: SymbolId[];
    url: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.NewsHeadline))

- IHeadlineItem

  - NewsHeadline

### Properties

#### dateTime

```ts
dateTime: Date
```

Publish date time.

Inherited from IHeadlineItem.dateTime

#### feed

```ts
feed: number
```

News headline feed number. This can be used to get more information about the source.

##### See

[feedInfo](./SDK.InfrontSDK.feedInfo.md)

Inherited from IHeadlineItem.feed

#### headline

```ts
headline: string
```

News headline.

Inherited from IHeadlineItem.headline

#### id

```ts
id: string
```

Identical code used to identify news headline. Id can start with `HIST:` prefix to indicate that headline item comes from historical server.

Inherited from IHeadlineItem.id

#### language

```ts
language: string
```

Headline language.

Inherited from IHeadlineItem.language

#### symbols

```ts
symbols: SymbolId[]
```

List of symbols mentioned in the news item.

Inherited from IHeadlineItem.symbols

#### url

```ts
url: string
```

News story external link.

Inherited from IHeadlineItem.url
