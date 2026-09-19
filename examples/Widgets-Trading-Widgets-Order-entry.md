---
title: "Order entry"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Order entry"
description: "Displays an order entry widget using OrderEntryWidgetOptions."
tags: ["order-entry-widget", "OrderEntryWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Order entry","description":"","modify_date":"2020-11-03T22:10:48","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Orderentry"
source_files: ["script.ts", "template.html", "config.json"]
---

# Order entry

Displays an order entry widget using OrderEntryWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.OrderEntryWidgetOptions();
opts.closeCallback = function() {
    hideOrderEntry();
}
infront.orderEntryWidget("#order-entry", opts);
```

## Markup (template.html)

```html
<div id="order-entry"></div>
```

