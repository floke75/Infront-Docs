---
title: "Short Positions"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Short Positions"
description: "Displays a short positions widget using ShortPositionsWidgetOptions for a given company."
tags: ["short-positions-widget", "ShortPositionsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Short Positions","description":"Displays a short positions widget using ShortPositionsWidgetOptions for a given company.","modify_date":"2020-12-06T15:58:24","owner":"","tags":["short-positions-widget","ShortPositionsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/ShortPositions"
source_files: ["script.ts", "template.html", "config.json"]
---

# Short Positions

Displays a short positions widget using ShortPositionsWidgetOptions for a given company.

## Script (script.ts)

```typescript
let opts = new Infinancials.ShortPositionsWidgetOptions();
opts.company = "01462SS";
let widget = visual.ShortPositionsWidget("#shortposition-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="shortposition-widget"></div>
    </div>
</div>
```

