---
title: "Order entry widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "OrderEntryWidget"
option_count: 20
options: ["instrument", "compactMode", "initialPrice", "availableFeeds", "searchTickersOnly", "modifyOrderId", "modifyPortfolio", "AlgoId", "confirmation", "portfolioSelectorMode", "closeOnComplete", "advancedOptionsCallback", "closeCallback", "instrumentInfoCallback", "portfolioChangedCallback", "keepInstrumentOnNew", "kidLinkDefinition", "customKidMidCalculation", "customKidMidUrlParameter", "advancedOptionsCreated"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#OrderEntryWidget"
---

# Order entry widget

```javascript
InfrontWidget = InfrontUI.orderEntryWidget(target, [options]);
```

Options class extends [TradingWidgetOptions](../CoreObjects/TradingWidgetOptions.md)

The Order entry widget works as a popup dialog with several configurable features including symbol search, input
validation and confirmation and a collapsible advanced panel.

### `instrument`

- **Type:** `Instrument`
- **Required:** No

Pre-populate ticker field with specified instrument.

### `compactMode`

- **Type:** `boolean`
- **Default:** `false`

If true it will create tabbed orderentry widget.

### `initialPrice`

- **Type:** `any`
- **Required:** No

Pre-populate the price field.

### `availableFeeds`

- **Type:** `number[]`
- **Default:** `false`

Optional list of feed numbers to restrict the ticker search to restrict the search to instruments that can be traded.

### `searchTickersOnly`

- **Type:** `boolean`
- **Default:** `false`

Restrict symbol search to search only for ticker codes.

### `modifyOrderId`

- **Type:** `number`
- **Required:** New order: no, Modify order: yes

Order id of order to modify.

### `modifyPortfolio`

- **Type:** `string`
- **Required:** New order: no, Modify order: yes

Name of portfolio.

### `AlgoId`

- **Type:** `string`
- **Required:** No

Optional initial algo.

### `confirmation`

- **Type:** `boolean`
- **Default:** `true`

If true, let the user review the order data before the order is inserted.

### `portfolioSelectorMode`

- **Type:** `enum or string`
- **Default:** `Infront.PortfolioSelectorMode.name`

Sets how to display portfolio in portfolio selector. Available options are: "name", "fullName" and "nameFullName"

- Infront.PortfolioSelectorMode.name: Display portfolio name
- Infront.PortfolioSelectorMode.fullName: Display portfolio full name
- Infront.PortfolioSelectorMode.nameFullName: Display portfolio in "name - fullname" format

### `closeOnComplete`

- **Type:** `boolean`
- **Default:** `false`

Close the order entry widget when the order is inserted.

### `advancedOptionsCallback`

- **Type:** `function`
- **Required:** No

Function to be called when the advanced mode is turned on / off.

### `closeCallback`

- **Type:** `function`
- **Required:** Yes

Function to be called when the close button is clicked.

### `instrumentInfoCallback`

- **Type:** `function`
- **Required:** No

Function to be called when a symbol search is complete.

### `portfolioChangedCallback`

- **Type:** `function`
- **Required:** No

Function to be called when the active portfolio is changed.

### `keepInstrumentOnNew`

- **Type:** `boolean`
- **Default:** `true`

Keeps instrument on new order entry.

### `kidLinkDefinition`

- **Type:** `KidDefinition`
- **Default:** `null`

Sets definition of Key Information Document (KID).

### `customKidMidCalculation`

- **Type:** `(feedNu: number, mic: string) => string`

Callback that is triggered by custom kid mid calculation

### `customKidMidUrlParameter`

- **Type:** `string`
- **Default:** `null`

Sets custom Kid Mid URL parameter

### `advancedOptionsCreated`

- **Type:** `(element: HTMLElement) => void`
- **Default:** `null`

Callback that is triggered when widget is initialized and returns advanced panel element.

### Example

```html
<script type="text/javascript">
var opts = new Infront.OrderEntryWidgetOptions();
opts.closeCallback = function() {
    hideOrderEntry();
}
infront.orderEntryWidget("#order-entry", opts);
</script>
...
<div id="order-entry"></div>
        
```
