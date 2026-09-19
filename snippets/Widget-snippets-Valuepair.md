---
title: "Valuepair"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Valuepair"
description: "Test snippet for Valuepair"
tags: ["widget", "test", "widget:ValuePairWidget", "widget:valuePairWidget"]
demonstrates: ["ValuePairWidget", "valuePairWidget"]
example_config: {"title":"Valuepair","description":"Test snippet for Valuepair","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:ValuePairWidget","widget:valuePairWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Valuepair"
source_files: ["script.ts", "template.html", "config.json"]
---

# Valuepair

Test snippet for Valuepair

Demonstrates: `ValuePairWidget`, `valuePairWidget`

## Script (script.ts)

```typescript
var opts = new Infront.ValuePairWidgetOptions();
opts.instrument = new Infront.Instrument(12, 'EURUSD');
opts.leftField = 'HIGH';
opts.rightField = 'LOW';
infront.valuePairWidget('#valuePair', opts);
```

## Markup (template.html)

```html
<div id="valuePair"></div>
```

