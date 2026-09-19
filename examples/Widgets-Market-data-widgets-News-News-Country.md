---
title: "News Country"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > News > News Country"
tags: ["news-list-widget", "NewsListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"News Country","description":"","modify_date":"2023-04-28T07:31:29","owner":"","tags":["news-list-widget","NewsListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/News/NewsCountry"
source_files: ["script.ts", "template.html", "config.json"]
---

# News Country

## Script (script.ts)

```typescript
const opts = new Infront.NewsListWidgetOptions();
opts.columns = ["TIME", "HEADLINE","SHORT_SOURCE"];
opts.preSelectedRegions = ["GERMANY"];
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

