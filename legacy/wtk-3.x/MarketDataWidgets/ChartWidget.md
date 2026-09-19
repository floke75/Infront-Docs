---
title: "Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ChartWidget"
extends: "WidgetBaseOptions"
option_count: 53
options: ["zoom", "showVolume", "yAxisOpposite", "step", "instruments", "hideBreaks", "streaming", "hasCustomSearchButton", "customSearchClicked", "selectablePeriods", "defaultPeriod", "defaultResolution", "chartTypeID", "showWatermark", "watermarkType", "linkAction", "xDateFormat", "chartUI.tooltipVersion", "chartUI.periodMenu", "chartUI.indicatorMenu", "chartUI.chartTypeMenu", "chartUI.searchBox", "chartUI.expandButton", "intradayPeriod", "intradayStepSize", "intradayStepUnit", "endDate", "targetCurrency", "selectedCurrency", "instrumentIsin", "periodSelectorPosition", "chartColors", "volumeColor", "initialRange", "gapSize", "breakSize", "onClick", "indicators", "hideAxes", "hideXAxis", "hideYAxis", "invertXAxis", "invertYAxis", "noSpacing", "axisDateTimeFormat", "enableReferenceSymbols", "maxLookupDays", "legendCreator", "legend", "buypassDefaultGlobalHighchartsOptions", "showSearchWidget", "adjustDividends", "adjustSplits"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#ChartWidget"
---

# Chart widget

```javascript
InfrontWidget = InfrontUI.chartWidget2(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

The chart widget enables users to see symbols performance over time, compare it to other symbols, and display powerful graphical indicators.
Close price development can bee seen as "line" or "area" type charts, and OHLC values can be visualiced as "Candlestick" or "Bar" charts.

### `zoom`

- **Type:** `boolean`
- **Default:** `false`

Whether to display the "navigator" at the bottom of the chart, enabling the user to zoom and navigate what part of the supplied period to display.

### `showVolume`

- **Type:** `boolean`
- **Default:** `false`

Whether to show volume as a bar chart at the bottom of the plot.

### `yAxisOpposite`

- **Type:** `boolean`
- **Default:** `false`

Shows yAxis on opposite side of the chart

### `step`

- **Type:** `boolean`
- **Default:** `false`

Whether to apply steps to the line, when "line" or "area" chart type is displayed.

### `instruments`

- **Type:** `Infront.Instrument | Infront.Instrument[]`
- **Required:** no

List of initial instruments to show

### `hideBreaks`

- **Type:** `boolean`
- **Default:** `false`

Set to true to hide breaks in graph

### `streaming`

- **Type:** `boolean`
- **Default:** `false`

Array of types you want to show. Default are all types.

### `hasCustomSearchButton`

- **Type:** `boolean`
- **Default:** `false`

Set to true to use a custom search button instead of the default search-field

### `customSearchClicked`

- **Type:** `() => void`

Function that fires when the custom search button is clicked

### `selectablePeriods`

- **Type:** `Array`
- **Default:** `["T", "S", "1D", "2D", "5D", "10D", "30D", "6M", "1Y", "5Y", "YTD", "ALL"]`

The time periods to be selectable by users(included in the drop-down menu). Available options are: ["T", "S", "1D", "24H", "2D", "5D", "10D", "30D", "1M", "3M", "6M", "1Y", "5Y", "YTD", "ALL"] Any period not included here will not be usable in the chart!

### `defaultPeriod`

- **Type:** `string`
- **Default:** `"5D"`

The default time period displayed in the chart. Note that this value has to be in opts.selectablePeriods to work.

### `defaultResolution`

- **Type:** `string`

Use this option to override auto selection of chart resolution. Avaialable options are:

- TICK
- 1S
- 1m
- 2m
- 3m
- 5m
- 15m
- 30m
- 60m
- 1D
- 1W
- 1M

### `chartTypeID`

- **Type:** `string`
- **Default:** `"line"`

The default chart type used for the chart. If the chart includes more than one symbol (compares), the type will always show "line".

### `showWatermark`

- **Type:** `boolean`

Use this property to view watermark in the background of the chart. If showWatermark is true, it will use watermarkType while it is assigned, otherwise ticker value would be used.

### `watermarkType`

- **Type:** `string`

Assign "full_name" to display full name field instead of ticker.

### `linkAction`

- **Type:** `enum`
- **Default:** `"LinkAction.Replace"`

Defines the behaviour of the list when it receives an incoming link event. The default behaviour results in the main symbol showed beeing replaced by the symbol recieved by the link event(if any). Changing the default to "LinkAction.Append", would result in the incoming symbol beeing added as a compare to any previously displayed symbol(s).

### `xDateFormat`

- **Type:** `string`
- **Default:** `undefined`

Defines the Highchart xAxis tooltip date-format. By default this is dynamically determined by the chart based on distance between points. See https://apidock.com/ruby/DateTime/strftime for formats.

### `chartUI.tooltipVersion`

- **Type:** `string`
- **Default:** `"advanced"`

What type of tooltip to display when the user hovers over the chart. When set to "advanced", the default highcharts tooltip and labels are swapped to custom UI-elements. Including banners in the right margin, showing the current last value. Any other option, i.e. "standard" results in a UI using highcharts default elements.

### `chartUI.periodMenu`

- **Type:** `boolean`
- **Default:** `true`

Either or not to show the period drop-down menu, enabling the user to switch the period displayed in the chart.

### `chartUI.indicatorMenu`

- **Type:** `boolean`
- **Default:** `true`

Either or not to show the indicator drop-down menu, enabling the user to add graphical indicators to the chart.

### `chartUI.chartTypeMenu`

- **Type:** `boolean`
- **Default:** `true`

Either or not to show the chart type drop-down menu, enabling the user to switch the chart type displayed in the chart.

### `chartUI.searchBox`

- **Type:** `boolean`
- **Default:** `true`

Either or not to show a search box in the chart widget. Enabling

### `chartUI.expandButton`

- **Type:** `boolean`
- **Default:** `true`

Either or not to include an expand button in the widget, enabling the user to view the chart in "full-screen mode";

### `intradayPeriod`

- **Type:** `Infront.IntradayPeriod`

Shows chart for selected period. Allowed values are: TICK,SECOND,ONE_DAY,PERIOD_24H,TWO_DAYS,THREE_DAYS,FIVE_DAYS,TEN_DAYS,THIRTY_DAYS

### `intradayStepSize`

- **Type:** `number`
- **Default:** `1`

Sets step size for chart

### `intradayStepUnit`

- **Type:** `Date`

Sets start date for chart

### `endDate`

- **Type:** `Date`

Sets end date for chart

### `targetCurrency`

- **Type:** `string`
- **Default:** `null`

Sets target currecy for chart.

### `selectedCurrency`

- **Type:** `string`
- **Default:** `null`

Sets selected currecy for chart.

### `instrumentIsin`

- **Type:** `string[]`
- **Default:** `[]`

Sets selected list of instruments international security identification numbers.

### `periodSelectorPosition`

- **Type:** `string`
- **Default:** `"LEFT"`

Sets period selector position

### `chartColors`

- **Type:** `string[]`

Sets chart colors. Contains of array of color codes

### `volumeColor`

- **Type:** `string`

Sets volume color. Value should be color code.

### `initialRange`

- **Type:** `string`

Sets initial range of the chart

### `gapSize`

- **Type:** `number`

Sets gap size for the chart

### `breakSize`

- **Type:** `number`
- **Default:** `0`

Sets break size for the chart

### `onClick`

- **Type:** `() => void`

Callback that is called when chart is clicked

### `indicators`

- **Type:** `string[]`
- **Default:** `[]`

Sets charts indicators

### `hideAxes`

- **Type:** `boolean`

Hides chart axes

### `hideXAxis`

- **Type:** `boolean`

Hides chart X axis

### `hideYAxis`

- **Type:** `boolean`

Hides chart Y axis

### `invertXAxis`

- **Type:** `boolean`

Inverts chart X axis

### `invertYAxis`

- **Type:** `boolean`

Inverts chart Y axis

### `noSpacing`

- **Type:** `boolean`

Removes spacing

### `axisDateTimeFormat`

- **Type:** `any`

{ millisecond: '%H:%M:%S.%L', second: '%H:%M:%S', minute: '%H:%M', hour: '%H:%M', day: '%e. %b', week: '%e. %b', month: '%b \'%y', year: '%Y' }; Sets axis date time format

### `enableReferenceSymbols`

- **Type:** `boolean`

Enables reference symbols

### `maxLookupDays`

- **Type:** `number`

Sets maximum lookup days

### `legendCreator`

- **Type:** `(instrument: Instrument) => string`

Optional callback to create you own label names, rather than the default ticker or full-name. The callback will receive an instrument as parameter, and is expected to return a string. The string will be inserted in any label or legend normally showing the ticker.

### `legend`

- **Type:** `string`

("ticker"||"fullname"), defaults to ticker for any other instrument types than funds. Setting this option to "fullname" will make the chart display the full name rather than just the ticker in labels and legends

### `buypassDefaultGlobalHighchartsOptions`

- **Type:** `boolean`

Buypasses Global Highcharts options

### `showSearchWidget`

- **Type:** `boolean`

Shows or hides the searchbar in the top left corner with the default value of true if not set.

### `adjustDividends`

- **Type:** `boolean`
- **Default:** `false`

Defines if values on the chart should be adjusted for dividends.

### `adjustSplits`

- **Type:** `boolean`
- **Default:** `true`

Defines if values on the chart should be adjusted for splits.

### Example

```html
<script type="text/javascript">
/* This configuration shows a streaming chart, displaying the last 5 days, with all UI components enabled.
*/
var chartOpts = new Infront.ChartWidgetOptions2();
chartOpts.defaultPeriod = "5D";
chartOpts.instruments = [new Infront.Instrument(18177,"STL")];
chartOpts.showVolume = true;
chartOpts.zoom = true;
chartOpts.streaming = true;
chartOpts.chartUI = {
    tooltipVersion: "advanced",
    periodMenu: true,
    indicatorMenu: true,
    chartTypeMenu: true,
    searchBox: true
};

infront.chartWidget2("chartwidget", chartOpts);
</script>
...
<div id="chartwidget"></div>
```
