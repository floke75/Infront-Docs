---
title: "Index overview widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "IndexOverviewWidget"
option_count: 8
options: ["target", "options", "instrument", "decimals", "layout", "showFullName", "primaryValue", "historicFields"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#IndexOverviewWidget"
---

# Index overview widget

```javascript
InfrontWidget = Infront.indexOverviewWidget(target, [options]);
```

This widget shows a compact overview of an index, showing last, percent change, nominal change, constituents performance and historical performance.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `instrument`

- **Type:** `instrument`
- **Required:** Yes

The instrument to show in this widget.

### `decimals`

- **Type:** `number`
- **Required:** No

Set to override number of decimals for this widget. Defaults to instrument or feed decimals if not set.

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
