---
title: "Chart widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ChartWidget"
option_count: 22
options: ["target", "options", "zoom", "showVolume", "yAxisOpposite", "step", "instruments", "hideBreaks", "streaming", "hasCustomSearchButton", "customSearchClicked", "selectablePeriods", "defaultPeriod", "chartTypeID", "linkAction", "xDateFormat", "chartUI.tooltipVersion", "chartUI.periodMenu", "chartUI.indicatorMenu", "chartUI.chartTypeMenu", "chartUI.searchBox", "chartUI.expandButton"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#ChartWidget"
---

# Chart widget

```javascript
InfrontWidget = InfrontUI.chartWidget2(target, [options]);
```

The chart widget enables users to see symbols performance over time, compare it to other symbols, and display powerful graphical indicators.
Close price development can bee seen as "line" or "area" type charts, and OHLC values can be visualiced as "Candlestick" or "Bar" charts.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

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

List of initial instruments to show in widget

### `hideBreaks`

- **Type:** `boolean`
- **Default:** `false`

Set to true to hide breaks in graph

### `streaming`

- **Type:** `boolean`
- **Default:** `false`

If enabled, broadcasts data to the widget.

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

### `chartTypeID`

- **Type:** `string`
- **Default:** `"line"`

The default chart type used for the chart. If the chart includes more than one symbol (compares), the type will always show "line".

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
