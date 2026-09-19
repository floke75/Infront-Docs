---
title: "Fundallocationpie"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundallocationpie"
description: "Test snippet for Fundallocationpie"
tags: ["widget", "test", "widget:FundAllocationPieChartWidget", "widget:fundAllocationPieChartWidget"]
demonstrates: ["FundAllocationPieChartWidget", "fundAllocationPieChartWidget"]
example_config: {"title":"Fundallocationpie","description":"Test snippet for Fundallocationpie","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FundAllocationPieChartWidget","widget:fundAllocationPieChartWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundallocationpie"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundallocationpie

Test snippet for Fundallocationpie

Demonstrates: `FundAllocationPieChartWidget`, `fundAllocationPieChartWidget`

## Script (script.ts)

```typescript
var fundPieOpts = new Infront.FundAllocationPieChartWidgetOptions();
fundPieOpts.instruments = [
    new Infront.Instrument(18197, '0P00009FQ5'),
    new Infront.Instrument(2260, '0P00009FQA'),
];
fundPieOpts.allocationType = 'Country';
fundPieOpts.innerSize = '33%';
fundPieOpts.legend = true;
infront.fundAllocationPieChartWidget('#fundAllocationPie', fundPieOpts);
```

## Markup (template.html)

```html
<div id="fundAllocationPie"></div>
```

