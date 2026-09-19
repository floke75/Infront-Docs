---
title: "Market list"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Market list"
description: "Displays a market list widget with customizable options."
tags: ["market-list-widget", "MarketListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Market list","description":"","modify_date":"2020-07-22T12:44:14","owner":"","tags":["market-list-widget","MarketListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Marketlist"
source_files: ["script.ts", "template.html", "config.json"]
---

# Market list

Displays a market list widget with customizable options.

## Script (script.ts)

```typescript
const opts = new Infront.MarketListWidgetOptions();
const widget = infront.marketListWidget("#market-list", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="market-list" class="cell-content"></div>
	</div>
</div>
```

