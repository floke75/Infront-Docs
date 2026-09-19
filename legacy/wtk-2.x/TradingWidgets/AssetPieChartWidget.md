---
title: "Assets pie charts widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "AssetPieChartWidget"
option_count: 31
options: ["target", "options", "target", "options", "widgetTitle", "id", "persistState", "storageType", "linkChannels", "decimals", "hasContentCallback", "widgetStateCallback", "navButton", "navButtonClicked", "useOriginal", "showSearchWidget", "type", "showCash", "enableLabels", "legend", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "colors", "borderColors", "borderWidth", "enable3d", "alpha", "beta", "depth"]
source_url: "https://doc.infrontfinance.com/v2/TradingWidgets#AssetPieChartWidget"
---

# Assets pie charts widget

Heads up! These docs are for v2. Check out the latest version of Infront Web Toolkit!

```javascript
InfrontWidget = InfrontUI.assetsPieChart(target, [options]);
```

Displays a pie chart of a portfolio's holdings.

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

Chart widgets requires the highchart javascript library to function. They also require a height (width optional) to be set via css.

### `type`

- **Type:** `string[]`
- **Default:** `kInstrumentTypes`

The type of units to show:

- Infront.AssetsPieChart.kInstrumentTypes
- Infront.AssetsPieChart.kInstruments

### `showCash`

- **Type:** `boolean`
- **Default:** `True`

Show cash post as an asset type.

### `enableLabels`

- **Type:** `boolean`
- **Default:** `False`

Show or hide labels on the chart.

### `legend`

- **Type:** `boolean`
- **Default:** `False`

Show or hide legend on the chart.

### `spacingBottom`

- **Type:** `number`
- **Default:** `15`

Spacing from chart to bottom edge of container.

### `spacingLeft`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to left edge of container.

### `spacingRight`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to right edge of container.

### `spacingTop`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to top edge of container.

### `colors`

- **Type:** `string[]`
- **Required:** No

Array of hex colors (e.g "#ff00ff") to use in the chart.

### `borderColors`

- **Type:** `string`
- **Required:** No

Hex color (e.g "#ff00ff") to use for chart borders.

### `borderWidth`

- **Type:** `string`
- **Default:** `2`

Border width, in pixels.

### `enable3d`

- **Type:** `boolean`
- **Default:** `False`

Show chart as 3d.

### `alpha`

- **Type:** `number`
- **Default:** `45`

Rotate chart around its x-axis (enable3d must be true).

### `beta`

- **Type:** `number`
- **Default:** `0`

Rotate chart around its y-axis (enable3d must be true).

### `depth`

- **Type:** `number`
- **Default:** `40`

The depth/thickness of a 3d chart (enable3d must be true).

### Example

```html
<script type="text/javascript">
infrontUI.assetsPieChart("#pieChart", {});
</script>
...
<div id="pieChart"></div>
        
```
