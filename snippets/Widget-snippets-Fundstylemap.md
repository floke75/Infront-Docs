---
title: "Fundstylemap"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundstylemap"
description: "Test snippet for Fundstylemap"
tags: ["widget", "test", "widget:FundStylemapWidget", "widget:fundStylemapWidget"]
demonstrates: ["FundStylemapWidget", "fundStylemapWidget"]
example_config: {"title":"Fundstylemap","description":"Test snippet for Fundstylemap","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FundStylemapWidget","widget:fundStylemapWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundstylemap"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundstylemap

Test snippet for Fundstylemap

Demonstrates: `FundStylemapWidget`, `fundStylemapWidget`

## Script (script.ts)

```typescript
var opts = new Infront.FundStylemapWidgetOptions();
opts.instrument = new Infront.Instrument(17935, '0P00000AO2');
infront.fundStylemapWidget('#fundStylemap', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--12">
        <div class="cell-content" id="fundStylemap"></div>
    </div>
</div>
```

