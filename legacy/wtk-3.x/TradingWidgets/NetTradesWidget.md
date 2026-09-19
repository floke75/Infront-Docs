---
title: "Net Trades widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "NetTradesWidget"
option_count: 3
options: ["showPortfolio", "defaultSortedColumn", "defaultSortOrder"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#NetTradesWidget"
---

# Net Trades widget

```javascript
InfrontWidget = InfrontUI.netTradesWidget(target, [options]);
```

Options class extends [TradingWidgetOptions](../CoreObjects/TradingWidgetOptions.md)

Shows the trades of a given portfolio. Trades on the same instrument are added together

### `showPortfolio`

- **Type:** `boolean`

If true, shows portfolio in the widget title

### `defaultSortedColumn`

- **Type:** `string`
- **Default:** `NetTradesWidget.kColTicker`

Sorts data based on the selected column.

### `defaultSortOrder`

- **Type:** `SortOrder`
- **Default:** `SortOrder.Desc`

Sets sort order from values: SortOrder.Desc | SortOrder.Asc | SortOrder.None

### Example

```html
            <script type="text/javascript">
            /*  Shows current active orders with a few computed columns.
             */
            var opts = new Infront.NetTradesWidgetOptions();
            infrontUI.netTradesWidget("#netTrades", opts);
            </script>
    ...
            <div id="netTrades"></div>
        
```
