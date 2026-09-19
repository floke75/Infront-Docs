---
title: "Historical Overview"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Historical Overview"
description: "Test snippet for Historicaloverview"
tags: ["widget", "test", "widget:HistoricalOverviewWidget", "widget:historicalOverviewWidget"]
demonstrates: ["HistoricalOverviewWidget", "historicalOverviewWidget"]
example_config: {"title":"Historical Overview","description":"Test snippet for Historicaloverview","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:HistoricalOverviewWidget","widget:historicalOverviewWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Historicaloverview"
source_files: ["script.ts", "template.html", "config.json"]
---

# Historical Overview

Test snippet for Historicaloverview

Demonstrates: `HistoricalOverviewWidget`, `historicalOverviewWidget`

## Script (script.ts)

```typescript
var opts = new Infront.HistoricalOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(2088, 'SP500');
opts.barPeriod = InfrontConstants.HistoricalPeriods.ONE_WEEK;
opts.historicFields = [
    InfrontConstants.HistoricalPeriods.ONE_WEEK,
    InfrontConstants.HistoricalPeriods.ONE_MONTH,
    InfrontConstants.HistoricalPeriods.THREE_MONTH,
    InfrontConstants.HistoricalPeriods.SIX_MONTH,
    InfrontConstants.HistoricalPeriods.ONE_YEAR,
];
opts.id = 'tastat';
infront.historicalOverviewWidget('#historical', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="historical"></div>
    </div>
</div>
```

