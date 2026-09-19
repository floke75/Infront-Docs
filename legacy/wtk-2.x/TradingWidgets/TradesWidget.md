---
title: "Trades widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "TradesWidget"
option_count: 6
options: ["target", "options", "showPortfolio", "showPortfolioSelect", "showDeleteAll", "titleClick"]
source_url: "https://doc.infrontfinance.com/v2/TradingWidgets#TradesWidget"
---

# Trades widget

```javascript
InfrontWidget = InfrontUI.tradesWidget(target, [options]);
```

Shows the trades of a given portfolio.

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
| TRADE_ID | ERROR_CODE | ERROR_MESSAGE | ORDER_ID |
| PORTFOLIO | CUSTOMER_ID | BUY_OR_SELL | PRICE |
| VOLUME | TRADE_TIME | FEE | FOREX_RATE |
| INVESTED | EXCHANGE_ORDER_ID | EXCHANGE_TRADE_ID | EXCHANGE_TRADE_ID2 |
| DELETED_TRADE | VERIFIED_TRADE | EXEC_MARKET |  |

### `showPortfolio`

- **Type:** `boolean`
- **Default:** `false`

Shows the current portfolio name

### `showPortfolioSelect`

- **Type:** `boolean`
- **Default:** `false`

Shows the portfolio selector in this widget

### `showDeleteAll`

- **Type:** `boolean`
- **Default:** `false`

Shows the delete all button

### `titleClick`

- **Type:** `() => null`
- **Default:** `undefined`

Fires when a user clicks the widget title

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
