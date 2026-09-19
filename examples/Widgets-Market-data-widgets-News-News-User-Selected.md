---
title: "News User Selected"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > News > News User Selected"
tags: ["news-list-widget", "NewsListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"News User Selected","description":"","modify_date":"2023-04-28T07:31:37","owner":"","tags":["news-list-widget","NewsListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/News/NewsUserSelected"
source_files: ["script.ts", "template.html", "config.json"]
---

# News User Selected

## Script (script.ts)

```typescript
const opts = new Infront.NewsListWidgetOptions();
opts.columns = ["TIME", "HEADLINE", "SHORT_SOURCE"];
opts.preSelectedRegions = ["GERMANY"];
opts.enableRegionSelector = true;
opts.enableSourceSelector = true;
opts.enableQuickFilter = true;
opts.enableUserFilter = true;
opts.streaming = true;
opts.paging = true;
opts.pageItems = 12;
const widget = infront.newsListWidget("#newsWidget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="newsWidget" class="cell-content"></div>
	</div>
</div>
```

