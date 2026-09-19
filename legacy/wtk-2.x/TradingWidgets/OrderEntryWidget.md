---
title: "Order entry widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "OrderEntryWidget"
option_count: 29
options: ["target", "options", "target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget", "instrument", "initialPrice", "availableFeeds", "searchTickersOnly", "modifyOrderId", "modifyPortfolio", "AlgoId", "confirmation", "closeOnComplete", "advancedOptionsCallback", "closeCallback", "instrumentInfoCallback", "portfolioChangedCallback"]
source_url: "https://doc.infrontfinance.com/v2/TradingWidgets#OrderEntryWidget"
---

# Order entry widget

```javascript
InfrontWidget = InfrontUI.orderEntryWidget(target, [options]);
```

The Order entry widget works as a popup dialog with several configurable features including symbol search, input
validation and confirmation and a collapsible advanced panel.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `widgetTitle`

- **Type:** `string`
- **Required:** No
- **Default:** `varies per widget`

Title shown on the top of the widget. Set to null to hide title element (Not applicable to all widgets)

### `id`

- **Type:** `string`
- **Required:** No
- **Default:** `null`

Used if implementing persisting storage, then it must be unique

### `persistState`

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`

Used if implementing persisting storage, set to false to prevent storage for this widget

### `storageType`

- **Type:** `any`
- **Required:** No
- **Default:** `null`

Used if implementing persisting storage, can be used to set special storage objects like global storage.

### `linkChannels`

- **Type:** `number[]|number`
- **Required:** No

Set to link this widget with other widgets.

### `decimals`

- **Type:** `WidgetDecimals | number`
- **Required:** No
- **Default:** `WidgetDecimals.FEED or WidgetDecimals.INSTRUMENT`

Set to change widgets displayed number of decimals. Available values:

- WidgetDecimals.FEED
- WidgetDecimals.INSTRUMENT
- WidgetDecimals.DEFAULT(usualy 2) or a numbe

### `hasContentCallback`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the widget has any content. This can let you easily remove widgets that are empty

### `widgetStateCallback`

- **Type:** `(state: Infront.WidgetState) => void`
- **Required:** No

Callback is called when widget state changes. Can be one of:

- Infront.WidgetState.Constructing
- Infront.WidgetStateConstructed
- Infront.WidgetStateInitializing
- Infront.WidgetStateInitialized
- Infront.WidgetStateUiBuilt
- Infront.WidgetStateSubscribed
- Infront.WidgetStateDestroying

### `navButton`

- **Type:** `enum`
- **Required:** No
- **Default:** `WidgetNavButtonType.NONE`

Type of navigation-button. Available values:

- WidgetNavButtonType.NONE
- WidgetNavButtonType.EXPAND
- WidgetNavButtonType.NAVIGATE

### `navButtonClicked`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the navigation button has been clicked.

### `useOriginal`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true options object will not be copied before using.

### `showSearchWidget`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true it will display a search bar on the top of instrument based widgets.

### `instrument`

- **Type:** `Instrument`
- **Required:** No

Pre-populate ticker field with specified instrument.

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
- **Default:** `all`

Restrict symbol search to only search for ticker codes.

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
