---
title: "Intraday trades simple"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Intraday trades simple"
description: "Displays a simple intraday trades widget for a given instrument using IntradayTradesSimpleWidgetOptions."
tags: ["intraday-trades-simple-widget", "IntradayTradesSimpleWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Intraday trades simple","description":"Displays a simple intraday trades widget for a given instrument using IntradayTradesSimpleWidgetOptions.","modify_date":"2020-10-13T07:15:44","owner":"","tags":["intraday-trades-simple-widget","IntradayTradesSimpleWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Intradaytradessimple"
source_files: ["script.ts", "template.html", "config.json"]
---

# Intraday trades simple

Displays a simple intraday trades widget for a given instrument using IntradayTradesSimpleWidgetOptions.

## Script (script.ts)

```typescript
const opts = new Infront.IntradayTradesSimpleWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.pageItems = 6;
opts.tickerInHeader = true;

const widget = infront.intradayTradesSimpleWidget("#intradaytradesmini", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="intradaytradesmini" class="cell-content"></div>
	</div>
</div>
```

