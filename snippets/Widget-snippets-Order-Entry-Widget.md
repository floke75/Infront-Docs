---
title: "Order Entry Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Order Entry Widget"
description: "Test snippet for Orderentrywidget"
tags: ["widget", "test", "widget:orderEntryWidget"]
demonstrates: ["orderEntryWidget"]
example_config: {"title":"Order Entry Widget","description":"Test snippet for Orderentrywidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:orderEntryWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Orderentrywidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Order Entry Widget

Test snippet for Orderentrywidget

Demonstrates: `orderEntryWidget`

## Script (script.ts)

```typescript
// Infront.DEBUG_REQUESTS = true;

let opts = getOrderEntryOpts();
opts.initialPrice = lastPrice;

let orderEntryWidget = infront.orderEntryWidget('#order', opts);

let modifyOrder = (portfolio, orderID) => {
    let modifyOpts = getOrderEntryOpts(portfolio, orderID);
    if (orderEntryWidget) {
        orderEntryWidget.modify(modifyOpts);
    } else {
        orderEntryWidget = infront.orderEntryWidget('#order', opts);
    }
};
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row" id="cell-row">
        <div class="cell cell--w6">
            <div id="order"></div>
        </div>
    </div>
</div>
```

