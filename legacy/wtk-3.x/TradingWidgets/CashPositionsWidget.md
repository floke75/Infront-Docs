---
title: "Cash positions widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "CashPositionsWidget"
extends: "CommonListOptions"
option_count: 3
options: ["showPortfolio", "showPortfolioSelect", "titleClick"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#CashPositionsWidget"
---

# Cash positions widget

```javascript
InfrontWidget = InfrontUI.cashPositionsWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

Shows the cash-positions of a given portfolio from the trading gateway.

### Available columns

Standard column-names available for this table is listed below.

|  |  |  |  |
|---|---|---|---|
| TICKER | AMOUNT | BASE_MARKET_VALUE | PORTFOLIO |

### `showPortfolio`

- **Type:** `boolean`

If true, shows portfolio in the widget title

### `showPortfolioSelect`

- **Type:** `boolean`

If true, shows portfolio select

### `titleClick`

- **Type:** `titleClick: () => void`

Callback that is called when the title is clicked.

### Example

```html
<script type="text/javascript">
/*  Shows current active orders with a few computed columns.
    */
var opts = new Infront.CashPositionsWidget();
infrontUI.cashPositionsWidget("#cashPositions", opts);
</script>
...
<div id="cashPositions"></div>
    
```
