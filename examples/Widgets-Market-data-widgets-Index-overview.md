---
title: "Index overview"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Index overview"
description: "Displays an index overview widget for a given instrument."
tags: ["index-overview-widget", "IndexOverviewWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Index overview","description":"Displays an index overview widget for a given instrument.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["index-overview-widget","IndexOverviewWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Indexoverview"
source_files: ["script.ts", "template.html", "config.json"]
---

# Index overview

Displays an index overview widget for a given instrument.

## Script (script.ts)

```typescript
const  opts = new Infront.IndexOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.primaryValue = "LAST";

const widget = infront.indexOverviewWidget("#index-overview", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w5">
		<div id="index-overview" class="cell-content"></div>
	</div>
</div>
```

