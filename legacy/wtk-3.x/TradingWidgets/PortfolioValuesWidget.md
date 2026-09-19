---
title: "Portfolio values widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "PortfolioValuesWidget"
option_count: 2
options: ["values", "filter"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#PortfolioValuesWidget"
---

# Portfolio values widget

```javascript
InfrontWidget = InfrontUI.portfolioValuesWidget(target, [options]);
```

Options class extends [TradingWidgetOptions](../CoreObjects/TradingWidgetOptions.md)

Shows all portfolio values provided by the trading gateway.

### Configuration options

### `values`

- **Type:** `string[]`
- **Default:** `All`

List of values to show in widget. Available values depends on the trading gateway.

### `filter`

- **Type:** `(name: string, value: any) => boolean`

Method is used to filter out all the elements that do not match the selected criteria and those matches will be returned.

### Example

```html
<script type="text/javascript">
/* Shows all portfolio values provided by the trading gateway.
    */
var opts = new Infront.PortfolioValuesWidgetOptions();
infrontUI.portfolioValuesWidget("#portfolio-values", opts);
</script>
...
<div id="portfolio-values"></div>
        
```
