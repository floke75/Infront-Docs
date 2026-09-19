---
title: "Chart Multiple Widgets"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart > Chart Multiple Widgets"
description: "Displays multiple chart widgets for different instruments using ChartWidgetOptions."
tags: ["chart-widget", "ChartWidgetOptions", "widgets", "examples", "wtk", "requests", "multiple-widgets"]
example_config: {"title":"Chart Multiple Widgets","description":"Displays multiple chart widgets for different instruments using ChartWidgetOptions.","modify_date":"2023-04-28T07:19:24","owner":"","tags":["chart-widget","ChartWidgetOptions","widgets","examples","wtk","requests","multiple-widgets"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart/ChartMultipleWidgets"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart Multiple Widgets

Displays multiple chart widgets for different instruments using ChartWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.ChartWidgetOptions();

opts.instruments = [new Infront.Instrument(26, "EOAN")];
var chartWidget = infront.chartWidget("chartwidget1", opts);

var opts2 = JSON.parse(JSON.stringify(opts));
opts2.instruments = [new Infront.Instrument(26, "BMW")];
var chartWidget2 = infront.chartWidget("chartwidget2", opts2);

var opts3 = JSON.parse(JSON.stringify(opts));
opts3.instruments = [new Infront.Instrument(18177, "DNB")];
var chartWidget3 = infront.chartWidget("chartwidget3", opts3);
```

## Markup (template.html)

```html
<!-- direct inline height on chart element -->
<div class="cell-row cell--w12">
    <div class="cell cell--w8">
        <div class="cell-content">
            <div id="chartwidget1" style="height:320px"></div>
        </div>
  	</div>
		<div class="cell cell--w4">
        <div class="cell-content">
            <div id="chartwidget2" style="height:320px"></div>
        </div>
    </div>
</div>

<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div id="chartwidget3" style="height:320px"></div>
        </div>
  	</div>
</div>
```

