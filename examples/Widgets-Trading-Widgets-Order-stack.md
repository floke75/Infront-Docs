---
title: "Order stack"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Order stack"
description: "Displays an order stack widget using OrderStackWidgetOptions."
tags: ["order-stack-widget", "OrderStackWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Order stack","description":"","modify_date":"2020-11-04T09:57:29","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Orderstack"
source_files: ["script.ts", "template.html", "config.json"]
---

# Order stack

Displays an order stack widget using OrderStackWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.OrderStackWidgetOptions();
infront.orderStackWidget("#order-stack", opts);
```

## Markup (template.html)

```html
<div id="order-stack"></div>
```

