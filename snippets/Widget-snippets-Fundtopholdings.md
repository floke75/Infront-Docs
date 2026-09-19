---
title: "Fundtopholdings"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundtopholdings"
description: "Test snippet for Fundtopholdings"
tags: ["widget", "test", "widget:FundTopHoldingsWidget", "widget:fundTopHoldingsWidget"]
demonstrates: ["FundTopHoldingsWidget", "fundTopHoldingsWidget"]
example_config: {"title":"Fundtopholdings","description":"Test snippet for Fundtopholdings","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FundTopHoldingsWidget","widget:fundTopHoldingsWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundtopholdings"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundtopholdings

Test snippet for Fundtopholdings

Demonstrates: `FundTopHoldingsWidget`, `fundTopHoldingsWidget`

## Script (script.ts)

```typescript
var opts = new Infront.FundTopHoldingsWidgetOptions();
//opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
opts.instrument = new Infront.Instrument(2260, '0P00000MVB');
infront.fundTopHoldingsWidget('#holdings', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="holdings"></div>
    </div>
</div>
```

