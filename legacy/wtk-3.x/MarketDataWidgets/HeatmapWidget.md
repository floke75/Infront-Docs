---
title: "Heatmap Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "HeatmapWidget"
extends: "CommonListOptions"
option_count: 18
options: ["streaming", "sortOrder", "instrumentTypes", "instruments", "maxItems", "heatmapPeriod", "heatmapPeriod", "onInstrumentSelected", "rangeUpMinColor", "rangeUpMaxColor", "rangeDownMinColor", "rangeDownMaxColor", "defaultColor", "useChains", "mode", "chains", "defaultChain", "colorClippingTreshold"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#HeatmapWidget"
---

# Heatmap Widget

```javascript
InfrontWidget = InfrontUI.heatmapWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

Two-dimensional visual representation of data using colors, when the colors all represent different values.

### Functions

### `streaming`

- **Type:** `Boolean`
- **Required:** False
- **Default:** `true`

Enables data streaming

### `sortOrder`

- **Type:** `enum Infront.SortOrder = [Desc,Asc,None]`
- **Required:** False
- **Default:** `SortOrder.Asc`

Sets sort order for the instruments

### `instrumentTypes`

- **Type:** `string[]`
- **Required:** False

Filters given instrument types:

- "NONE"
- "STOCK"
- "NEWS"
- "BOND"
- "EURO_OPTION"
- "FUTURES"
- "COMMODITY"
- "INDEX"
- "FOREX"
- "US_OPTION"
- "FUND"
- "OPTION"
- "COMBO"
- "CFD"
- "CERTIFICATE"
- "UNKNOWN"

### `instruments`

- **Type:** `Infront.Instrument[]`

Adds instrument list to the widget

### `maxItems`

- **Type:** `number`

Sets max items to display

### `heatmapPeriod`

- **Type:** `enum Infront.HeatmapPeriod = [INTRADAY,ONE_WEEK,ONE_MONTH,ONE_YEAR,YTD]`
- **Default:** `HeatmapPeriod.INTRADAY`

Sets the period for the instrument percent change.

### `heatmapPeriod`

- **Type:** `enum Infront.HeatmapPeriod = [INTRADAY,ONE_WEEK,ONE_MONTH,ONE_YEAR,YTD]`
- **Default:** `HeatmapPeriod.INTRADAY`

Sets the period for the instrument percent change.

### `onInstrumentSelected`

- **Type:** `function(Instrument)`

Callback that is called when a row in the list is clicked. The callback receives the concrete instrument that was clicked, as an Instrument-object, as a parameter.

### `rangeUpMinColor`

- **Type:** `number[]`
- **Default:** `[4, 102, 4]`

RGB color value for the color range upper minimum color

### `rangeUpMaxColor`

- **Type:** `number[]`
- **Default:** `[36, 198, 36]`

RGB color value for the color range upper maximum color

### `rangeDownMinColor`

- **Type:** `number[]`
- **Default:** `[113, 4, 15]`

RGB color value for the color range lower minimum color

### `rangeDownMaxColor`

- **Type:** `number[]`
- **Default:** `[226, 8, 30]`

RGB color value for the color range lower maximum color

### `defaultColor`

- **Type:** `number[]`
- **Default:** `[136, 162, 170]`

RGB color value for the zero values

### `useChains`

- **Type:** `Boolean`
- **Default:** `false`

Shows chains dropdown

### `mode`

- **Type:** `enum HeatmapMode = [CHAINS, WATCHLIST]`

When the mode is set, automatically retrieves the instruments of given mode without manually passing them.

### `chains`

- **Type:** `Chain[]`
- **Default:** `[]`

Uses chains array instead to populate instruments

### `defaultChain`

- **Type:** `Chain | string`
- **Default:** `string = null`

Sets the default chain

### `colorClippingTreshold`

- **Type:** `number`
- **Default:** `3`

Treshold which defines when should color start changing

### Example

```javascript
var opts = new Infront.HeatmapWidgetOptions();
opts.feed = 17921;
opts.id = "myHeatmapWidget3000";
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.showFilters = false;
opts.mode = 0;
opts.useChains = true;
opts.chains = [
    {
        "feed": 15,
        "name": "NAS100_MANUAL",
        "description": "Nasdaq 100"
    }, {
        "feed": 26,
        "name": "DAX",
        "description": "DAX Constituents"
    }
];
widget = infront.heatmapWidget("#heatmap", opts);   
        
```
