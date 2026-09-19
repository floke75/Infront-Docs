---
title: "Simple Chart Overview"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Simple Chart Overview"
description: "Test snippet for Simplechartoverview"
tags: ["widget", "test", "widget:SimpleChartOverviewWidget", "widget:simpleChartOverviewWidget"]
demonstrates: ["SimpleChartOverviewWidget", "simpleChartOverviewWidget"]
example_config: {"title":"Simple Chart Overview","description":"Test snippet for Simplechartoverview","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:SimpleChartOverviewWidget","widget:simpleChartOverviewWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Simplechartoverview"
source_files: ["script.ts", "template.html", "config.json"]
---

# Simple Chart Overview

Test snippet for Simplechartoverview

Demonstrates: `SimpleChartOverviewWidget`, `simpleChartOverviewWidget`

## Script (script.ts)

```typescript
var opts = new Infront.SimpleChartOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(2008, 'UG');
infront.simpleChartOverviewWidget('#simplechartoverview', opts);
```

## Markup (template.html)

```html
<div id="simplechartoverview"></div>
```

