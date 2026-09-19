---
title: "Portfolio single value widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "PortfolioSingleValueWidget"
extends: "ValueWidgetOptions"
option_count: 2
options: ["valueName", "onClick"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#PortfolioSingleValueWidget"
---

# Portfolio single value widget

```javascript
InfrontWidget = InfrontUI.portfolioSingleValueWidget(target, [options]);
```

Extends [ValueWidgetOptions](../CoreObjects/ValueWidgetOptions.md)

Shows all portfolio values provided by the trading gateway.

### `valueName`

- **Type:** `string`

Sets value to show in widget

### `onClick`

- **Type:** `() => void`

On value click callback

### Example

```html
<script type="text/javascript">
/* Shows all portfolio values provided by the trading gateway.
    */
var opts = new Infront.PortfolioSingleValueWidgetOptions();
opts.valueName = "MARKET VALUE";
infrontUI.singlePortfolioValueWidget("#portfolio-singleValue", opts);
</script>
...
<div id="portfolio-singleValue"></div>
        
```
