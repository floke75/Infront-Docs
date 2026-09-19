---
title: "Instrumentvalue"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Instrumentvalue"
description: "Test snippet for Instrumentvalue"
tags: ["widget", "test", "widget:InstrumentValuesWidget", "widget:PortfolioSelectWidget", "widget:instrumentValuesWidget", "widget:portfolioSelectWidget"]
demonstrates: ["InstrumentValuesWidget", "PortfolioSelectWidget", "instrumentValuesWidget", "portfolioSelectWidget"]
example_config: {"title":"Instrumentvalue","description":"Test snippet for Instrumentvalue","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:InstrumentValuesWidget","widget:PortfolioSelectWidget","widget:instrumentValuesWidget","widget:portfolioSelectWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Instrumentvalue"
source_files: ["script.ts", "template.html", "config.json"]
---

# Instrumentvalue

Test snippet for Instrumentvalue

Demonstrates: `InstrumentValuesWidget`, `PortfolioSelectWidget`, `instrumentValuesWidget`, `portfolioSelectWidget`

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSelectWidgetOptions();
infront.portfolioSelectWidget('#portfolio-selector', opts);

var opts = (window.opts = new Infront.InstrumentValuesWidgetOptions());
opts.widgetTitle = 'DNB Private Equity retail B';
opts.instrument = new Infront.Instrument(18177, 'ABT');
opts.layout = Infront.MultipleValuesWidgetLayout.VERTICAL;
opts.rememberCanceledLogin = false;
opts.fields = [
    'FULL_NAME',
    'CURRENCY',
    'SEGMENT',
    'MARGIN_RATE',
    'IS_SHORTABLE',
    'MIN_ICEBERG_SIZE',
    'COMPANY_URL',
];
infront.instrumentValuesWidget('#instrumentValues', window.opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="instrumentValues"></div>
    </div>
</div>
```

