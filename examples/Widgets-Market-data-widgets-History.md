---
title: "History"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > History"
description: "Displays a history widget for historical prices of an instrument."
tags: ["history-widget", "HistoryWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"History","description":"Displays a history widget for historical prices of an instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["history-widget","HistoryWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/History"
source_files: ["script.ts", "template.html", "config.json"]
---

# History

Displays a history widget for historical prices of an instrument.

## Script (script.ts)

```typescript
const opts = new Infront.HistoryWidgetOptions();
opts.instrument = new Infront.Instrument(26, "ADS");
opts.widgetTitle = "Historical prices,  Adidas AG (ADS)";
opts.startYear = 1999;
opts.endYear = 2015;

const widget = infront.historyWidget("#history", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">  
		<div id="history" class="cell-content"></div>
	</div>
</div>
```

