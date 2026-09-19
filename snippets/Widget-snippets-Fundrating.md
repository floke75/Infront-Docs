---
title: "Fundrating"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundrating"
description: "Test snippet for Fundrating"
tags: ["widget", "test", "widget:FundMorningstarRatingWidget", "widget:fundMorningstarRatingWidget"]
demonstrates: ["FundMorningstarRatingWidget", "fundMorningstarRatingWidget"]
example_config: {"title":"Fundrating","description":"Test snippet for Fundrating","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FundMorningstarRatingWidget","widget:fundMorningstarRatingWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundrating"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundrating

Test snippet for Fundrating

Demonstrates: `FundMorningstarRatingWidget`, `fundMorningstarRatingWidget`

## Script (script.ts)

```typescript
var opts = new Infront.FundMorningstarRatingWidgetOptions();
opts.instrument = new Infront.Instrument(17935, '0P00000AO2');
infront.fundMorningstarRatingWidget('#fundMorningstar', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="fundMorningstar"></div>
    </div>
</div>
```

