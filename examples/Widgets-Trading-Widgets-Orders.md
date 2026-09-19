---
title: "Orders"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Orders"
description: "Displays trading orders with sortable columns, status filters, and computed fields using OrdersWidgetOptions."
tags: ["orders-widget", "OrdersWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Orders","description":"Displays trading orders with sortable columns, status filters, and computed fields.","modify_date":"2020-11-04T09:57:14","owner":"","tags":["orders-widget"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Orders"
source_files: ["script.ts", "template.html", "config.json"]
---

# Orders

Displays trading orders with sortable columns, status filters, and computed fields using OrdersWidgetOptions.

## Script (script.ts)

```typescript
var orderOpts = new Infront.OrdersWidgetOptions();
orderOpts.sortable = true;
orderOpts.defaultSortedColumn = "TICKER";
orderOpts.showStatuses = [Infront.OrderStatus.EXCHANGE_ORDER];
orderOpts.columns = [
    "ORDER_ID",
    "BUY_OR_SELL",
    "TICKER",
    "ORDER_STATUS",
    "ORDER_TYPE",
    "PRICE",
    "LAST", 
    {
        "name":"DIFF",
        "heading":"Diff",
        "type":"computed",
        "computeFields":["PRICE", "LAST"],
        "compute":function(rowId, args) {
            return args[0] - args[1];
        }
    },
    "VOLUME",
    "VOLUME_FILLED",
    {
        "heading":"Fill%",
        "name":"PCT_FILL",
        "type":"computed",
        "computeFields":["VOLUME","VOLUME_FILLED"],
        "dataType":Infront.DataType.Integer,
        "compute":function(rowId,args) {
            return (args[1]/args[0])*100;
        },
        "translate":function(rowId, val) {
            var retVal = "<div class=\"cell-w-orders__order-fill-bar\" style=\"background-color:#ddd;\"><div class=\"cell-w-orders__order-fill-bar__filled\" style=\"width:" + val + "%;\"></div></div>";
            return retVal;
        }
    }
];
infront.ordersWidget("#orders", orderOpts);
```

## Markup (template.html)

```html
<div id="orders"></div>
```

