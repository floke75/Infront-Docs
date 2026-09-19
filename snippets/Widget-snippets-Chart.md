---
title: "Chart"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Chart"
description: "Test snippet for Chart"
tags: ["widget", "test", "widget:chartWidget2"]
demonstrates: ["chartWidget2"]
example_config: {"title":"Chart","description":"Test snippet for Chart","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:chartWidget2"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["lib/razterize/rasterizeHTML.allinone.js","//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js","//code.highcharts.com/stock/highstock.src.js","https://code.highcharts.com/maps/js/modules/exporting.js"]}
source_url: "https://docs.infrontfinance.com/tests/Chart"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chart

Test snippet for Chart

Demonstrates: `chartWidget2`

## Script (script.ts)

```typescript
const opts = new Infront.ChartWidgetOptions2();
opts.defaultPeriod = '1D';
// opts.defaultPeriod = "6M";
opts.instruments = [
    new Infront.Instrument(2098, 'DAX'),
    // new Infront.Instrument(15, "NTRA")
    // new Infront.Instrument(17921, 'OMXS30')
    // new Infront.Instrument(15, "TSLA")
];
opts.showVolume = true;
opts.zoom = true;
opts.streaming = true;
opts.chartTypeID = Infront.ChartType.candlestick;
// opts.defaultResolution = "3 minutes";
// opts.defaultResolution = "1 month";
opts.defaultResolution = '1 week';

opts.chartUI = {
    tooltipVersion: 'advanced',
    periodMenu: true,
    indicatorMenu: true,
    expandButton: true,
    chartTypeMenu: true,
    searchBox: true,
    resolutionMenu: true,
};

const widget = infront.chartWidget2('#chartwidget', opts);
```

## Markup (template.html)

```html
<div id="chartwidget" style="height: 500px; width: 1000px; padding-left: 60px"></div>
```

