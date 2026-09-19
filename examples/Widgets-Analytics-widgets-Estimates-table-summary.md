---
title: "Estimates table summary"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates table summary"
description: "Displays a summary of financial estimates in a table format using EstimatesTableWidget. Useful for presenting key financial metrics and projections."
tags: ["EstimatesTableWidget", "EstimatesTableWidgetOptions", "Analyticswidgets", "widgets", "examples", "wtk", "requests", "sdk"]
example_config: {"title":"Estimates table summary","description":"Displays a summary of financial estimates in a table format using EstimatesTableWidget. Useful for presenting key financial metrics and projections.","modify_date":"2020-07-22T18:35:44","owner":"","tags":["EstimatesTableWidget","EstimatesTableWidgetOptions","Analyticswidgets","widgets","examples","wtk","requests","sdk"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Estimatestablesummary"
source_files: ["script.ts", "template.html", "config.json"]
---

# Estimates table summary

Displays a summary of financial estimates in a table format using EstimatesTableWidget. Useful for presenting key financial metrics and projections.

## Script (script.ts)

```typescript
const opts = new Infinancials.EstimatesTableWidgetOptions();
opts.company = "90103EF";
opts.item = Infinancials.EstimatesTableItem.MAIN;
opts.source = "INQ";
opts.currency = -1;
opts.title = "INCOME STATEMENT";
const widget = visual.EstimatesTableWidget("#estimatesTable", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="estimatesTable"></div>
    </div>
</div>
```

