---
title: "Historical overview widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "HistoricalWidget"
option_count: 6
options: ["target", "options", "instrument", "decimals", "historicFields", "barPeriod"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#HistoricalWidget"
---

# Historical overview widget

```javascript
InfrontWidget = Infront.historicalOverviewWidget(target, [options]);
```

Shows up to five configurable historical values, as well as a year high/low bar.

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

historicFields and barPeriod uses the following constants:

- InfrontConstants.HistoricalPeriods.ONE_WEEK
- InfrontConstants.HistoricalPeriods.ONE_MONTH
- InfrontConstants.HistoricalPeriods.THREE_MONTH
- InfrontConstants.HistoricalPeriods.SIX_MONTH
- InfrontConstants.HistoricalPeriods.ONE_YEAR
- InfrontConstants.HistoricalPeriods.TWO_YEAR
- InfrontConstants.HistoricalPeriods.THREE_YEAR
- InfrontConstants.HistoricalPeriods.FIVE_YEAR
- InfrontConstants.HistoricalPeriods.YTD

### `historicFields`

- **Type:** `string[]`
- **Default:** `ONE_WEEK, ONE_MONTH, THREE_MONTH, SIX_MONTH, YTD`

The fields to show in the upper row. Can be any combination of the above list.

### `barPeriod`

- **Type:** `string`
- **Default:** `ONE_YEAR`

The period to use for the high/low values of the bar. See above for possible values.

### Example

```html
<script type="text/javascript">
var opts = new Infront.HistoricalOverviewWidgetOptions();
opts.instrument = new Infront.Instrument(2088, "SP500");
opts.barPeriod = InfrontConstants.HistoricalPeriodes.ONE_WEEK;
opts.historicFields = [
	InfrontConstants.HistoricalPeriodes.ONE_WEEK,
	InfrontConstants.HistoricalPeriodes.ONE_MONTH,
	InfrontConstants.HistoricalPeriodes.THREE_MONTH,
    InfrontConstants.HistoricalPeriodes.SIX_MONTH,
    InfrontConstants.HistoricalPeriodes.ONE_YEAR
 ];
infront.historicalOverviewWidget("#historical", opts);
</script>
...
<div id="historical"></div>
        
```
