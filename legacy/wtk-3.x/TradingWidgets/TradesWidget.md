---
title: "Trades widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "TradesWidget"
extends: "CommonListOptions"
option_count: 2
options: ["instrument", "columns"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#TradesWidget"
---

# Trades widget

```javascript
InfrontWidget = InfrontUI.tradesWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

Shows the trades of a given portfolio.

### Available columns

Standard column-names available for this table is listed below. In addition, most columns available for standard quote-lists are also available here.

|  |  |  |  |
|---|---|---|---|
| TRADE_ID | ERROR_CODE | ERROR_MESSAGE | ORDER_ID |
| PORTFOLIO | CUSTOMER_ID | BUY_OR_SELL | PRICE |
| VOLUME | TRADE_TIME | FEE | FOREX_RATE |
| INVESTED | EXCHANGE_ORDER_ID | EXCHANGE_TRADE_ID | EXCHANGE_TRADE_ID2 |
| DELETED_TRADE | VERIFIED_TRADE | EXEC_MARKET |  |

### `instrument`

- **Type:** `Instrument`

The instrument to show trades for.

### `columns`

- **Type:** `any[]`
- **Default:** `["TRADE_ID", "TICKER", "PRICE", "VOLUME"]`

An array of columns/values for the table.

### Example

```html
<script type="text/javascript">
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
infrontUI.tradesWidget("#trades", opts);
</script>
...
<div id="trades"></div>
        
```
