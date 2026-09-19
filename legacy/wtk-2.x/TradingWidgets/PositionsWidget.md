---
title: "Positions widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "PositionsWidget"
option_count: 4
options: ["target", "options", "instrumentTypes", "loans"]
source_url: "https://doc.infrontfinance.com/v2/TradingWidgets#PositionsWidget"
---

# Positions widget

```javascript
InfrontWidget = InfrontUI.positionsWidget(target, [options]);
```

Shows the positions of a given portfolio from the trading gateway.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Available columns

Standard column-names available for this table is listed below. In addition, most columns available for standard quote-lists are also available here.

|  |  |  |  |
|---|---|---|---|
| ERROR_CODE | ERROR_MESSAGE | PORTFOLIO | INVESTED |
| VOLUME | AMOUNT | MULTIPLIER | COLLATERAL |
| PROFIT | BASE_CURRENCY | BASE_INVESTED | YTD_BASE_INVESTED |
| BASE_VALUE | BASE_RESULT | AVG_PRICE | MARKET_PRICE |
| BASE_MARKET_VALUE |  |  |  |

### Configuration options

This component shares some options with other lists/tables. These options are described in a [common section](https://doc.infrontfinance.com/core.php#Lists). Only parameters specific to this component are described here.

### `instrumentTypes`

- **Type:** `string[]`

description

### `loans`

- **Type:** `boolean`

description

### Example

```html
<script type="text/javascript">
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
}, {
    name:"RESULT",
    heading:"Result",
    type:"computed",
    dataType:Infront.DataType.Integer,
    computeFields:["MKT_VAL", "INVESTED"],
    compute: function(rowId, args) {
        return args[0] - args[1];
    }
}];
infront.positionsWidget("#positions", opts);
</script>
...
<div id="positions"></div>
        
```
