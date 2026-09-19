---
title: "Index overview widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "IndexOverviewWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 6
options: ["layout", "showFullName", "primaryValue", "historicFields", "historicColor", "onClick"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#IndexOverviewWidget"
---

# Index overview widget

```javascript
InfrontWidget = Infront.indexOverviewWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

This widget shows a compact overview of an index, showing last, percent change, nominal change, constituents performance and historical performance.

### `layout`

- **Type:** `enum`
- **Default:** `Infront.InstrumentOverviewWidgetLayout.STANDARD`

- Infront.InstrumentOverviewWidgetLayout.STANDARD
- Infront.InstrumentOverviewWidgetLayout.MINI

### `showFullName`

- **Type:** `boolean`

**Default**  true (Only relevant if layout == MINI) Set true if you wish to display full name of instrument.

### `primaryValue`

- **Type:** `String`

Which field to show as the highlighted value to the right of the ticker. Allowed values are:

- LAST (The Last value of the index shown with an arrow showing if the index is up or down)
- PCT_CHANGE (Percent change. No arrow is shown with this value)

### `historicFields`

- **Type:** `String[]`
- **Default:** `ONE_MONTH, THREE_MONTH, SIX_MONTH, YTD`

Which periods to show for historic performance. You can specify up to 4 values (any additional values will be ignored). Possible values are:

- InfrontConstants.HistoricalPeriods.ONE_WEEK
- InfrontConstants.HistoricalPeriods.ONE_MONTH
- InfrontConstants.HistoricalPeriods.THREE_MONTH
- InfrontConstants.HistoricalPeriods.SIX_MONTH
- InfrontConstants.HistoricalPeriods.ONE_YEAR
- InfrontConstants.HistoricalPeriods.TWO_YEAR
- InfrontConstants.HistoricalPeriods.THREE_YEAR
- InfrontConstants.HistoricalPeriods.FIVE_YEAR
- InfrontConstants.HistoricalPeriods.YTD

### `historicColor`

- **Type:** `boolean`
- **Default:** `true`

Shows different color for historic values

### `onClick`

- **Type:** `(instrument:Instrument)=>void`

Callback that is triggered when clicking on index overview

### Example

```html
<script type="text/javascript">
var opts = new Infront.IndexOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(2098, "DAX");
opts.primaryValue = "LAST";

infront.indexOverviewWidget("#index-overview", opts);
</script>
...
<div id="index-overview"></div>
        
```
