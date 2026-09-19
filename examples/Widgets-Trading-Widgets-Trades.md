---
title: "Trades"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Trades"
description: "Displays executed trades for the day using TradesWidgetOptions with computed columns."
tags: ["trades-widget", "TradesWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Trades","description":"Displays executed trades for the day using TradesWidgetOptions with computed columns.","modify_date":"2020-11-03T22:08:01","owner":"","tags":["trades-widget","TradesWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Trades"
source_files: ["script.ts", "template.html", "config.json"]
---

# Trades

Displays executed trades for the day using TradesWidgetOptions with computed columns.

## Script (script.ts)

```typescript
/* Shows you executed trades for this day.
*/
var opts = new Infront.TradesWidgetOptions();
opts.columns = ["TRADE_ID", "ORDER_ID", "TICKER", "BUY_OR_SELL", "PRICE", "VOLUME", {
    "name":"VALUE",
    "heading":"Value",
    "dataType":Infront.DataType.Integer,
    "type":"computed",
    "computeFields":["PRICE", "VOLUME"],
    "compute":function(rowId, args) {
        return args[0]*args[1];
    }
}];
infront.tradesWidget("#trades", opts);
```

## Markup (template.html)

```html
<div id="trades"></div>
```

