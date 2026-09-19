---
title: "News reader"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > News reader"
description: "Displays a news list and reader with linking and lightbox options using NewsListWidgetOptions."
tags: ["news-list-widget", "news-reader-widget", "NewsListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"News reader","description":"Displays a news list and reader with linking and lightbox options.","modify_date":"2021-05-26T09:18:49","owner":"","tags":["news-list-widget","news-reader-widget","NewsListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Newsreader"
source_files: ["script.ts", "template.html", "config.json"]
---

# News reader

Displays a news list and reader with linking and lightbox options using NewsListWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.NewsListWidgetOptions();
opts.maxItems = 10;
opts.useLightbox = false;
var newsListWidget = infront.newsListWidget("newslist", opts);
var newsReaderWidget = infront.newsReaderWidget("#newsreader");
newsListWidget.link(newsReaderWidget);
```

## Markup (template.html)

```html
<div id="newslist"></div>            
<div id="newsreader" style="height:400px;"></div>
```

