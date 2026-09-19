---
title: "Fundrisklevel"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundrisklevel"
description: "Test snippet for Fundrisklevel"
tags: ["widget", "test", "widget:FundRiskLevelWidget", "widget:fundRiskLevelWidget"]
demonstrates: ["FundRiskLevelWidget", "fundRiskLevelWidget"]
example_config: {"title":"Fundrisklevel","description":"Test snippet for Fundrisklevel","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FundRiskLevelWidget","widget:fundRiskLevelWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundrisklevel"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundrisklevel

Test snippet for Fundrisklevel

Demonstrates: `FundRiskLevelWidget`, `fundRiskLevelWidget`

## Script (script.ts)

```typescript
var opts = new Infront.FundRiskLevelWidgetOptions();
opts.instrument = new Infront.Instrument(17935, '0P00000AO2');
infront.fundRiskLevelWidget('#fundRiskLevel', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="fundRiskLevel"></div>
    </div>
</div>
```

