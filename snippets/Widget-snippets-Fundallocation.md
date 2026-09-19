---
title: "Fundallocation"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundallocation"
description: "Test snippet for Fundallocation"
tags: ["widget", "test", "widget:FundAllocationWidget", "widget:fundAllocationWidget"]
demonstrates: ["FundAllocationWidget", "fundAllocationWidget"]
example_config: {"title":"Fundallocation","description":"Test snippet for Fundallocation","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FundAllocationWidget","widget:fundAllocationWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundallocation"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundallocation

Test snippet for Fundallocation

Demonstrates: `FundAllocationWidget`, `fundAllocationWidget`

## Script (script.ts)

```typescript
const opts = new Infront.FundAllocationWidgetOptions();
opts.instrument = new Infront.Instrument(2412, 'SE0000538944-SEK');
opts.allocationType = 'Region';
opts.widgetTitle = 'Top Regioner';
infront.fundAllocationWidget('#fundAllocation', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="fundAllocation"></div>
    </div>
</div>
```

