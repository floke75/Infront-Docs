---
title: "NewsStory"
qualified_name: "SDK.InfrontSDK.NewsStory"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "News"
nav_path: "SDK > InfrontSDK > News > NewsStory"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.NewsStory.html"
defines: ["NewsStory"]
member_count: 3
members: ["body", "headline", "logo"]
member_groups:
  "Properties": ["body", "headline", "logo"]
reference_count: 2
references: ["SDK.InfrontSDK.NewsHeadline", "SDK.InfrontSDK.newsStory"]
---

# NewsStory

> Not the same page as [`newsStory`](./SDK.InfrontSDK.newsStory.md), the function — the names differ only in case.

An interface used to store news story.

#### See

[newsStory](./SDK.InfrontSDK.newsStory.md) | NewsStoryOptions

```ts
interface NewsStory {
    body: string;
    headline: NewsHeadline;
    logo: string;
}
```

### Properties

#### body

```ts
body: string
```

Story text. This can be markup text.

#### headline

```ts
headline: NewsHeadline
```

News headline used to request the story.

#### logo

```ts
logo: string
```

EXPERIMENTAL: If news story has a logo, this will be a url to that logo.
