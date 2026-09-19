---
title: "Chart Default"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart > Chart Default"
description: "Displays a default chart widget using ChartWidgetOptions for a single instrument."
tags: ["chart-widget", "ChartWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Chart Default","description":"Displays a default chart widget using ChartWidgetOptions for a single instrument.","modify_date":"2023-05-08T11:39:21","owner":"","tags":["chart-widget","ChartWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart/ChartDefault"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart Default

Displays a default chart widget using ChartWidgetOptions for a single instrument.

## Script (script.ts)

```typescript
// options
const opts = new Infront.ChartWidgetOptions();
opts.instruments = [new Infront.Instrument(15, 'TSLA')];

// create widget
const widget = infront.chartWidget('chartwidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div id="chartwidget" style="height:360px"></div>
        </div>
  	</div>
</div>
```

