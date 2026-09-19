---
title: "Positions"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > PM widgets > Positions"
description: "Displays a portfolio manager's positions using PmPositionsWidgetOptions with customizable columns and persistent state."
tags: ["pm-positions-widget", "PmPositionsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Positions","description":"Displays a portfolio manager's positions using PmPositionsWidgetOptions with customizable columns and persistent state.","modify_date":"2022-01-03T14:06:22","owner":"","tags":["pm-positions-widget","PmPositionsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/PMwidgets/Positions"
source_files: ["script.ts", "template.html", "config.json"]
---

# Positions

Displays a portfolio manager's positions using PmPositionsWidgetOptions with customizable columns and persistent state.

## Script (script.ts)

```typescript
let options = new Infront.PmPositionsWidgetOptions();
options.defaultSortedColumn = 'INVESTMENT_NAME';
options.paging = true;
options.persistState = true;
options.columnChooserOverlayElement = document.querySelector(".cell-column-chooser__overlay");
const widget = infront.pmPositions('#positions', options);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="positions"></div>
    </div>
</div>
```

