---
title: "ChartWidget"
qualified_name: "WTK.ChartWidget"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > ChartWidget"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.ChartWidget.html"
defines: ["ChartWidget"]
member_count: 25
members: ["subscribes", "unbinds", "addCompareInstrument", "addEventListener", "addIndicator", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "removeCompareInstrument", "removeIndicator", "resume", "setAreaStacking", "setChartType", "setMainInstrument", "setMainPerformance", "setNavigatorScrollFactor", "setPeriod", "setShowPulseTrackLine", "setShowVolume"]
member_groups:
  "Properties": ["subscribes", "unbinds"]
  "Methods": ["addCompareInstrument", "addEventListener", "addIndicator", "addInfrontEventObserver", "createBindings", "destroy", "modify", "newBuildUI", "newInit", "newSubscribe", "pause", "receiveMessage", "removeCompareInstrument", "removeIndicator", "resume", "setAreaStacking", "setChartType", "setMainInstrument", "setMainPerformance", "setNavigatorScrollFactor", "setPeriod", "setShowPulseTrackLine", "setShowVolume"]
related_types: ["WTK.WidgetBase"]
reference_count: 6
references: ["WTK.WidgetSubscriptions", "WTK.IndicatorType", "WTK.WidgetOptions", "WTK.ChartType", "WTK.WidgetBase", "WTK.ChartWidgetOptions"]
---

# ChartWidget

ChartWidget class extending WidgetBase class.

`InfrontWidget = InfrontUI.chartWidget(target, [options]);`

Reworked version of the chart widget that covers all the features of the old tool,
but introduces many new functionalities and allows for more flexibility.

Options can be configured with ChartWidgetOptions.

It is a highly customizable widget with hundreds of options, even though there are
no required options for setting it up. Everything is basically optional.

Out of the box it comes with a useful default configuration.
Some options are designed in a flexible manner so they can change the widgets behavior
for example by depending on the symbol classification or instrument type of the
main instrument in the

### Highcharts requirements

- Works best with Highstock version 12.6.0
- Tested with Highstock versions >=9.1.0 <=9.3.3 || 10.3.3 || 11.4.8 || 12.6.0

#### Example

HTML include Infront styles

```html
<link type="text/css" rel="stylesheet" href="https://wtk.infrontservices.com/css/InfrontFramework-latest.css" />
<!-- <link type="text/css" rel="stylesheet" href="https://wtk.infrontservices.com/themes/light-latest/theme.css" /> -->
<link type="text/css" rel="stylesheet" href="https://wtk.infrontservices.com/themes/terminal-latest/theme.css" />
```

HTML include Infront UI (since v4.0.0 the chart-indicator-lib is included).

```html
<script type="text/javascript" src="https://wtk.infrontservices.com/js/InfrontUI-latest.min.js"></script>
```

HTML include Highcharts and sub-modules (as required)

```html
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/highstock.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/indicators/indicators-all.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/modules/drag-panes.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/modules/annotations-advanced.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/modules/stock-tools.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/modules/heikinashi.js"></script>
<script type="text/javascript" src="https://code.highcharts.com/stock/12.6.0/modules/hollowcandlestick.js"></script>
```

Chart with default options

```ts
var chartOpts = new Infront.ChartWidgetOptions();
chartOpts.instruments = [new Infront.Instrument(18177, "DNB")];
chartWidget = infront.chartWidget("chartwidget1", chartOpts);
```

```html
<!-- direct inline height on chart element -->
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div id="chartwidget1" style="height:320px"></div>
        </div>
    </div>
</div>
```

#### See

WidgetBase | ChartWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.ChartWidget))

- WidgetBase

  - ChartWidget

#### Implements

- Target

### Properties

#### `Protected` subscribes

```ts
subscribes: WidgetSubscriptions
```

Add fields and instruments to subscribe, will unsubscribe and clear on this.unsubscribe()

Inherited from WidgetBase.subscribes

#### `Protected` unbinds

```ts
unbinds: (() => void)[] = []
```

All unbind functions added here will be executed during this.removeBindings()

Inherited from WidgetBase.unbinds

### Methods

#### addCompareInstrument

```ts
addCompareInstrument(instrument: Instrument): void
```

addCompareInstrument can be used to add a compare instrument from external code,
like from within an HTML page or WebTrader.
The instrument is silently ignored if it is already present in the chart.

##### Parameters

- instrument: Instrument

  the instrument to add as a compare instrument

##### Returns void

#### `Protected` addEventListener

```ts
addEventListener(
    element: HTMLElement,
    event: string,
    callback: (event: Event) => void,
): void
```

Adds an event and registers it so it will be removed when calling destroy

##### Parameters

- element: HTMLElement
- event: string
- callback: (event: Event) => void

##### Returns void

Inherited from WidgetBase.addEventListener

#### addIndicator

```ts
addIndicator(
    type: IndicatorType,
    params?: Partial<HighchartsIndicatorParams>,
): void
```

addIndicator can be used to add a technical indicator from external code,
like from within an HTML page or WebTrader.
Uses default parameters for the given indicator type, optionally overridden by `params`.

##### Parameters

- type: [IndicatorType](./WTK.IndicatorType.md)

  the indicator type to add, e.g. IndicatorType.SMA, IndicatorType.EMA
- `Optional` params: Partial<HighchartsIndicatorParams>

  optional partial params to override defaults (period, color, etc.)

##### Returns void

#### `Protected` addInfrontEventObserver

```ts
addInfrontEventObserver(
    eventName: string,
    callback: (event: InfrontEvent) => void,
): void
```

Adds an infront event and registers it so it will be removed when calling destroy

##### Parameters

- eventName: string
- callback: (event: InfrontEvent) => void

##### Returns void

Inherited from WidgetBase.addInfrontEventObserver

#### `Protected` createBindings

```ts
createBindings(): void
```

Do bindings here

##### Returns void

Inherited from WidgetBase.createBindings

#### destroy

```ts
destroy(): void
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns void

Inherited from WidgetBase.destroy

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<WidgetOptions>

##### Returns void

Inherited from WidgetBase.modify

#### `Protected` newBuildUI

```ts
newBuildUI(): void
```

Responsible for creating DOM and bindings

##### Returns void

Overrides WidgetBase.newBuildUI

#### `Protected` newInit

```ts
newInit(): void
```

Should do property initialization/resets.

##### Returns void

Overrides WidgetBase.newInit

#### `Protected` newSubscribe

```ts
newSubscribe(): void
```

Do subscribes here

##### Returns void

Inherited from WidgetBase.newSubscribe

#### pause

```ts
pause(): void
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns void

Inherited from WidgetBase.pause

#### receiveMessage

```ts
receiveMessage(msg: Message): void
```

Target must:

- Handle any message containing a data type returned by accepts()
- Disregard any message not containing a datatype returned by accepts()

##### Parameters

- msg: Message

##### Returns void

Implementation of InterLibraryLink.Target.receiveMessage

#### removeCompareInstrument

```ts
removeCompareInstrument(instrument: Instrument): void
```

removeCompareInstrument can be used to remove a compare instrument from external code,
like from within an HTML page or WebTrader.
The main instrument (index 0) cannot be removed and will be silently ignored.

NOTE: matching is done by ticker only, not by feed+ticker. If the same ticker exists
on multiple feeds, the first match is removed.

##### Parameters

- instrument: Instrument

  the instrument to remove

##### Returns void

#### removeIndicator

```ts
removeIndicator(type: IndicatorType, index?: number): void
```

removeIndicator can be used to remove all indicators of a given type from external code,
like from within an HTML page or WebTrader.

NOTE: if no index is given, all indicators of the given type are removed.

##### Parameters

- type: [IndicatorType](./WTK.IndicatorType.md)

  the indicator type to remove, e.g. IndicatorType.SMA, IndicatorType.EMA
- `Optional` index: number

  optional zero-based index within indicators of that type; omit to remove all

##### Returns void

#### resume

```ts
resume(): void
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns void

Inherited from WidgetBase.resume

#### setAreaStacking

```ts
setAreaStacking(areaStacking: "percent" | "normal"): void
```

setAreaStacking can be used to enable or disable area stacking from external code,
like from within an HTML page or WebTrader.

See ChartWidgetOptions.areaStacking for a full description of restrictions and recommendations.

##### Parameters

- areaStacking: "percent" | "normal"

  `'normal'` for absolute stacking, `'percent'` for 0–100% stacking,
  or `undefined` to disable stacking

##### Returns void

#### setChartType

```ts
setChartType(chartType: ChartType): void
```

setChartType can be used to set the chart type from external code,
like from within an HTML page or WebTrader.

##### Parameters

- chartType: [ChartType](./WTK.ChartType.md)

  the chart type to switch to, e.g. ChartType.AREA, ChartType.LINE, ChartType.OHLC

##### Returns void

#### setMainInstrument

```ts
setMainInstrument(
    instrument: Instrument,
    resetInstrumentSettings?: boolean,
): void
```

setMainInstrument can be used to set the main-instrument from external code
like from within an HTML page, WebTrader or InterLibraryLink.

##### Parameters

- instrument: Instrument

  the instrument to be used as main-instrument
- resetInstrumentSettings: boolean = false

  if set to `true`, the instrument-settings will be created from scratch

##### Returns void

##### Remarks

- Does nothing if `instrument` already matches the current main instrument and
  `resetInstrumentSettings` is not ` true`. Pass ` resetInstrumentSettings: true` if you need to
  force a reload for the same instrument.
- Does nothing while a previous `setMainInstrument()` call is still loading - this is logged as
  a console warning, but the call is not queued, call it again once the chart is idle.

#### setMainPerformance

```ts
setMainPerformance(isPerformance: boolean): void
```

setMainPerformance can be used to toggle performance-view for the main-instrument.
Performance-view shows two lines for the main-instrument, one with and one without dividends.

##### Parameters

- isPerformance: boolean

  if set to `true`, performance view is activated, if set to ` false`, deactivated

##### Returns void

#### setNavigatorScrollFactor

```ts
setNavigatorScrollFactor(factor: number): void
```

Update method for the chart navigators scroll factor which determines the steps when using the mouse wheel
to scroll through the current chart data period/time/x-axis

##### Parameters

- factor: number

  the new scroll factor

##### Returns void

#### setPeriod

```ts
setPeriod(periodStr: string): void
```

setPeriod can be used to set the current period for the main-instrument from external code,
like from within an HTML page, WebTrader or InterLibraryLink.

##### Parameters

- periodStr: string

  the period to be switched to, e.g: 'ONE_DAY', 'THREE_MONTHS', 'ONE_YEAR', 'ALL'

##### Returns void

#### setShowPulseTrackLine

```ts
setShowPulseTrackLine(show: boolean): void
```

setShowPulseTrackLine can be used to show or hide the pulse track line from external code,
like from within an HTML page or WebTrader.

##### Parameters

- show: boolean

  if `true`, the pulse track line is shown; if ` false`, it is hidden

##### Returns void

#### setShowVolume

```ts
setShowVolume(show: boolean): void
```

setShowVolume can be used to show or hide the volume/turnover series from external code,
like from within an HTML page or WebTrader.
Not to be confused with the Volume Underlay indicator (showVolumeUnderlay).

##### Parameters

- show: boolean

  if `true`, volume is shown; if ` false`, volume is hidden

##### Returns void
