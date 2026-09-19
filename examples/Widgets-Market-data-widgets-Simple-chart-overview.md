---
title: "Simple chart overview"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Simple chart overview"
description: "Displays a simple chart overview widget using SimpleChartOverviewWidgetOptions for a given instrument."
tags: ["simple-chart-overview-widget", "SimpleChartOverviewWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Simple chart overview","description":"Displays a simple chart overview widget using SimpleChartOverviewWidgetOptions for a given instrument.","modify_date":"2020-10-13T07:17:26","owner":"","tags":["simple-chart-overview-widget","SimpleChartOverviewWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Simplechartoverview"
source_files: ["script.ts", "template.html", "config.json"]
---

# Simple chart overview

Displays a simple chart overview widget using SimpleChartOverviewWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.SimpleChartOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
const widget = infront.simpleChartOverviewWidget("#simplechartoverview", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w4">
		<div id="simplechartoverview" class="cell-content" style="height:110px"></div>
	</div>
</div>
```

