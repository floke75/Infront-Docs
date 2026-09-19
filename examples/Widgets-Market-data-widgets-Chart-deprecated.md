---
title: "Chart (deprecated)"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart (deprecated)"
description: "Displays a chart widget (deprecated) using ChartWidgetOptions2 for advanced charting features."
tags: ["chart-widget", "ChartWidgetOptions2", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Chart (deprecated)","description":"Displays a chart widget (deprecated) using ChartWidgetOptions2 for advanced charting features.","modify_date":"2022-03-16T09:28:06","owner":"","tags":["chart-widget","ChartWidgetOptions2","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chartdeprecated"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart (deprecated)

Displays a chart widget (deprecated) using ChartWidgetOptions2 for advanced charting features.

## Script (script.ts)

```typescript
const opts = new Infront.ChartWidgetOptions2();
opts.defaultPeriod = "5D";
opts.instruments = [new Infront.Instrument(26, "BMW")];
opts.showVolume = true;
opts.zoom = true;
opts.streaming = true;

opts.chartUI = {
  tooltipVersion: "advanced",
  periodMenu: true,
  indicatorMenu: true,
  expandButton: true,
  chartTypeMenu: true,
  searchBox: true
};

const widget = infront.chartWidget2("#chartwidget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
  	<div class="cell cell--w12">
    	 <div class="cell-content cell-chart-wrapper">
			<div id="chartwidget" style="height:300px"</div>
      	<div>  
	</div>
</div>
```

