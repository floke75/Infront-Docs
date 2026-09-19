---
title: "Positions"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Positions"
description: "Shows a portfolio manager's positions with customizable columns and persistent state."
tags: ["pm-positions-widget"]
example_config: {"title":"Positions","description":"","modify_date":"2021-01-25T10:10:27","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Positions"
source_files: ["script.ts", "template.html", "config.json"]
---

# Positions

Shows a portfolio manager's positions with customizable columns and persistent state.

## Script (script.ts)

```typescript
/* Shows current positions with a few computed columns (MKT_VAL and RESULT).
    */
var opts = new Infront.PositionsWidgetOptions();
opts.columns = ["TICKER", "VOLUME", "INVESTED", {
    name:"AVG_PRICE",
    heading:"Avg. price",
    type:"computed",
    computeFields:["VOLUME", "INVESTED"],
    compute: function(rowId, args) {
        return args[0] > 0 ? args[1]/args[0] : 0;
    }
}, "LAST", {
    name:"MKT_VAL",
    heading:"Value",
    type:"computed",
    dataType:Infront.DataType.Integer,
    computeFields:["VOLUME", "LAST"],
    compute: function(rowId, args) {
        return args[0] * args[1];
    }
}, 
{
    name: "RESULT",
    allowZero: true,
}
];
infront.positionsWidget("#positions", opts);
```

## Markup (template.html)

```html
<div id="positions"></div>
```

