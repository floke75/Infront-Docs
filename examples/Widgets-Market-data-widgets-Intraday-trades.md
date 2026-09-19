---
title: "Intraday trades"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Intraday trades"
description: "Displays an intraday trades widget for a given instrument with customizable columns."
tags: ["intraday-trades-widget", "IntradayTradesWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Intraday trades","description":"","modify_date":"2020-10-13T07:15:37","owner":"","tags":["intraday-trades-widget","IntradayTradesWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Intradaytrades"
source_files: ["script.ts", "template.html", "config.json"]
---

# Intraday trades

Displays an intraday trades widget for a given instrument with customizable columns.

## Script (script.ts)

```typescript
const opts = new Infront.IntradayTradesWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.pageItems = 10;
opts.paging = true;
opts.columns = [
  {
    name: "TIME",
    className: "cell-text-left"
  },
  "VOLUME",
  {
    name: "BUYER",
    className: "cell-text-center"
  },
  {
    name: "SELLER",
    className: "cell-text-center"
  },
  "LAST",
];

const widget = infront.intradayTradesWidget("#intradaytrades", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="intradaytrades" class="cell-content"></div>
	</div>
</div>
```

