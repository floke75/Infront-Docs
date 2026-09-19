---
title: "Chartadjustment"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Chartadjustment"
description: "Test snippet for Chartadjustment"
tags: ["widget", "test", "widget:chartWidget2"]
demonstrates: ["chartWidget2"]
example_config: {"title":"Chartadjustment","description":"Test snippet for Chartadjustment","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:chartWidget2"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js","//code.highcharts.com/stock/4.2.1/highstock.js"]}
source_url: "https://docs.infrontfinance.com/tests/Chartadjustment"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chartadjustment

Test snippet for Chartadjustment

Demonstrates: `chartWidget2`

## Script (script.ts)

```typescript
var chartOpts = new Infront.ChartWidgetOptions2();
chartOpts.defaultPeriod = '5Y';
chartOpts.instruments = [
    new Infront.Instrument(18177, 'DNB'),
    //new Infront.Instrument(15, "TSLA")
    //new Infront.Instrument(17921, "OMXS30"),
    //new Infront.Instrument(20, "DJI"),
    //new Infront.Instrument(18177, "OSEBX"),
    //new Infront.Instrument(2098, "DAX")
    //new Infront.Instrument(2088, "SP500")
];
//chartOpts.showVolume = true;
chartOpts.zoom = true;
chartOpts.streaming = true;
chartOpts.chartUI.advancedParameters = true;
chartOpts.chartUI = {
    tooltipVersion: 'advanced',
    periodMenu: true,
    indicatorMenu: true,
    expandButton: true,
    chartTypeMenu: true,
    searchBox: true,
    resolutionMenu: true,
    advancedParameters: true,
};

infront.chartWidget2('chartwidget', chartOpts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content cell-chart-wrapper">
            <div id="chartwidget" style="height: 500px"></div>
        </div>
    </div>
</div>
```

