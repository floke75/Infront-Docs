---
title: "Chartdividendsadjusted"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Chartdividendsadjusted"
description: "Test snippet for Chartdividendsadjusted"
tags: ["widget", "test"]
example_config: {"title":"Chartdividendsadjusted","description":"Test snippet for Chartdividendsadjusted","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/4.2.1/highstock.js"]}
source_url: "https://docs.infrontfinance.com/tests/Chartdividendsadjusted"
source_files: ["script.ts", "template.html", "config.json"]
---

# Chartdividendsadjusted

Test snippet for Chartdividendsadjusted

## Script (script.ts)

```typescript
chartOpts = new Infront.ChartWidgetOptions2();
chartOpts.defaultPeriod = period;
chartOpts.instruments = instruments;
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

chartOpts.customSearchClicked = (instr) => {
    instruments.push(instr);
};

chartOpts.adjustDividends = false;
chartOpts.adjustSplits = false;

changeDividend(true);
changeSplits();
```

## Markup (template.html)

```html
Adjust: <input id="dividendsT" onclick="changeDividend()" type="checkbox" /><label for="dividendsT"
    >dividends</label
>
<input id="splitsT" onclick="changeSplits()" type="checkbox" /><label for="splitsT">splits</label>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content cell-chart-wrapper">
            <div id="chartwidget2" style="height: 400px"></div>
        </div>
    </div>
</div>
```

