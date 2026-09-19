---
title: "Cash positions"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Cash positions"
description: "Displays a cash positions widget using CashPositionsWidgetOptions."
tags: ["cash-positions-widget", "CashPositionsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Cash positions","description":"","modify_date":"2020-11-04T09:49:22","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Cashpositions"
source_files: ["script.ts", "template.html", "config.json"]
---

# Cash positions

Displays a cash positions widget using CashPositionsWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.CashPositionsWidgetOptions();
infront.cashPositionsWidget("#cashPositions", opts);
```

## Markup (template.html)

```html
<div id="cashPositions"></div>
```

