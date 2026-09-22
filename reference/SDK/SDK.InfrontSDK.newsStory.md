---
title: "newsStory"
qualified_name: "SDK.InfrontSDK.newsStory"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "News"
nav_path: "SDK > InfrontSDK > News > newsStory"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.newsStory.html"
defines: ["newsStory"]
reference_count: 3
references: ["SDK.InfrontSDK.NewsStoryOptions", "SDK.InfrontSDK.TypedDataRequest", "SDK.InfrontSDK.NewsStory"]
---

# newsStory

> Not the same page as [`NewsStory`](./SDK.InfrontSDK.NewsStory.interface.md), the interface — the names differ only in case.

```ts
newsStory(options: NewsStoryOptions): TypedDataRequest<NewsStory>
```

Request a news story based on specific news headline. The headline can be identified by id and feed.

#### Parameters

- options: [NewsStoryOptions](./SDK.InfrontSDK.NewsStoryOptions.md)

  NewsStoryOptions

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<[NewsStory](./SDK.InfrontSDK.NewsStory.interface.md)>

#### See

[NewsStory](./SDK.InfrontSDK.NewsStory.interface.md) | NewsStoryOptions
