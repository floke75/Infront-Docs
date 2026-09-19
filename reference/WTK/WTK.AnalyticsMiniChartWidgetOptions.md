---
title: "AnalyticsMiniChartWidgetOptions"
qualified_name: "WTK.AnalyticsMiniChartWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsMiniChartWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsMiniChartWidgetOptions.html"
defines: ["AnalyticsMiniChartWidgetOptions"]
member_count: 54
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableReportTypes", "chartHeight?", "chartWidth?", "colors", "companySource", "estimatePeriodCount", "estimatePeriodSelectDropdownPeriods", "estimateSource", "fields", "fontFamily", "fundamentalPeriodCount", "fundamentalPeriodSelectDropdownPeriods", "fundamentalSource", "invalidGrowthNodeColor", "legend", "legendLabelColor", "ltmPeriodCount", "ltmSource", "negativeColors", "onEstimatePeriodCountChanged?", "onFundamentalPeriodCountChanged?", "onLtmPeriodCountChanged?", "onReportTypeChanged?", "reportType", "showEstimatePeriodSelectDropdown", "showFundamentalPeriodSelectDropdown", "showLtmCheckbox", "showReportTypeSwitch", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "styledMode?", "yAxisLabelFormatter?", "constructor"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsMiniChartWidget": ["availableReportTypes", "chartHeight?", "chartWidth?", "colors", "companySource", "estimatePeriodCount", "estimatePeriodSelectDropdownPeriods", "estimateSource", "fields", "fontFamily", "fundamentalPeriodCount", "fundamentalPeriodSelectDropdownPeriods", "fundamentalSource", "invalidGrowthNodeColor", "legend", "legendLabelColor", "ltmPeriodCount", "ltmSource", "negativeColors", "onEstimatePeriodCountChanged?", "onFundamentalPeriodCountChanged?", "onLtmPeriodCountChanged?", "onReportTypeChanged?", "reportType", "showEstimatePeriodSelectDropdown", "showFundamentalPeriodSelectDropdown", "showLtmCheckbox", "showReportTypeSwitch", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "styledMode?", "yAxisLabelFormatter?"]
  "Other": ["constructor"]
reference_count: 14
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYearsReportType", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerKeyfigureSource", "WTK.AnalyticsMiniChartWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget", "WTK.AnalyticsMiniChartReportType"]
---

# AnalyticsMiniChartWidgetOptions

AnalyticsMiniChartWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsMiniChartWidget.

#### See

AnalyticsMiniChartWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsMiniChartWidgetOptions

### Base Widgets

#### `Optional` instrument

```ts
instrument?: SymbolId
```

Sets instrument for the widget.

##### See

[InfrontSDK.SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.instrument

### Widget Options

#### decimals

```ts
decimals: number | WidgetDecimals = WidgetDecimals.INSTRUMENT
```

Set the number or type of decimals to use for normal numbers in the widget.

Available values:

- `WidgetDecimals.FEED`
- `WidgetDecimals.INSTRUMENT`
- `WidgetDecimals.DEFAULT` (usually 2) or a number

##### See

[WidgetDecimals](./WTK.WidgetDecimals.md)

##### Default Value

`Infront.WidgetDecimals.INSTRUMENT`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.decimals

#### hasContentCallback

```ts
hasContentCallback: (hasContent: boolean, item?: any) => void = ...
```

Callback that indicates whether the widget has any content.

This can let you easily remove widgets that are empty

##### Type Declaration

- (hasContent: boolean, item?: any): void

  ##### Parameters

  - hasContent: boolean
  - `Optional` item: any

  ##### Returns void

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.linkChannels

#### navButton

```ts
navButton: WidgetNavButtonType = WidgetNavButtonType.NONE
```

Type of navigation-button. Available on most widgets.

Available values:

- `WidgetNavButtonType.NONE`
- `WidgetNavButtonType.EXPAND`
- `WidgetNavButtonType.NAVIGATE`

##### See

[WidgetNavButtonType](./WTK.WidgetNavButtonType.md)

##### Default Value

`Infront.WidgetNavButtonType.NONE`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.navButton

#### navButtonClicked

```ts
navButtonClicked: () => void = ...
```

Callback that indicates whether the navigation button has been clicked.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.persistState

#### `Optional` popupContainer

```ts
popupContainer?: string | HTMLElement | WidgetPopupParent
```

Option to set parent element of every popup opened in the widget.

This can take enum value:

- `Infront.WidgetPopupParent.FIRST_PARENT`
- `Infront.WidgetPopupParent.BODY`

If set to `Infront.WidgetPopupParent.FIRST_PARENT` the popup will be added in the DOM right
after the element which trigger popup to show.

When it is set to `Infront.WidgetPopupParent.BODY` the popup will be appended to the body.

When you specify the HTMLElement the popup would be added inside it.
When you specify a string, popup will be appended to the element with specified string as an id.

##### See

[WidgetPopupParent](./WTK.WidgetPopupParent.md)

##### Default Value

`true`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.usePerfectScrollbar

#### widgetStateCallback

```ts
widgetStateCallback: (state: WidgetState) => void = ...
```

Callback is called when widget state changes.

Can be one of:

- `Infront.WidgetState.Constructing`
- `Infront.WidgetState.Constructed`
- `Infront.WidgetState.Initializing`
- `Infront.WidgetState.Initialized`
- `Infront.WidgetState.UiBuilt`
- `Infront.WidgetState.Subscribed`
- `Infront.WidgetState.Destroying`

##### Type Declaration

- (state: WidgetState): void

  ##### Parameters

  - state: [WidgetState](./WTK.WidgetState.md)

  ##### Returns void

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from SvelteSingleInstrumentWidgetBaseOptions.widgetTitle

### AnalyticsMiniChartWidget

#### availableReportTypes

```ts
availableReportTypes: CdapiEquityCompanyFundamentalYearsReportType[] = ...
```

The available period types that are being displayed as selectable options.
One ReportPeriodType item is required

##### Default Value

`['ANNUAL', 'QUARTERLY']`

#### `Optional` chartHeight

```ts
chartHeight?: string | number
```

Set the chart height.

##### Default Value

```ts
undefined
```

#### `Optional` chartWidth

```ts
chartWidth?: string | number
```

Set the chart width.

##### Default Value

```ts
undefined
```

#### colors

```ts
colors: ColorItem[] = ...
```

List of hex colors (e.g. `'#ff00ff'`) to use in the chart.

#### companySource

```ts
companySource: CdapiGetEquityIssuersOptionsCompanySource = 'INFRONT'
```

The source for company data.

##### Default Value

`'INFRONT'`

#### estimatePeriodCount

```ts
estimatePeriodCount: PeriodCount = DEFAULT_PERIOD_COUNTS
```

How many periods of estimates to display in the chart.

0 when no estimates should be shown.

##### Default Value

`3`

#### estimatePeriodSelectDropdownPeriods

```ts
estimatePeriodSelectDropdownPeriods: AnalyticsMiniChartPeriodSelectDropdownPeriods = DEFAULT_PERIOD_SELECT_DROPDOWN_PERIODS_ESTIMATES
```

Defines the periods available for Estimate Period Select Dropdown

##### Default Value

`{ ANNUAL: [0, 1, 2, 3, 4], QUARTERLY: [0, 1, 2, 4, 8, 12]] }`

#### estimateSource

```ts
estimateSource: CdapiEquityCompanyEstimateSource = 'INFRONT'
```

Source for the Estimates data.

##### Default Value

`'INFRONT'`

#### fields

```ts
fields: KeyFigureField[] = ...
```

The fields to display.

A field combines Fundamental, LTM and Estimates data

##### Default Value

`['NET_PROFIT', 'NET_SALES']`

#### fontFamily

```ts
fontFamily: string = 'Arial, sans-serif'
```

Sets font for the widget.

##### Default Value

`'Arial, sans-serif'`

#### fundamentalPeriodCount

```ts
fundamentalPeriodCount: PeriodCount = DEFAULT_PERIOD_COUNTS
```

Defines the amount of fundamentals-columns to display in the chart

Changes the fundamentals data request by extending the from-/toDate.

0 when no fundamentals should be shown.

##### See

[AnalyticsMiniChartReportType](./WTK.AnalyticsMiniChartReportType.md)

##### Default Value

`{ ANNUAL: 2, QUARTERLY: 2 }`

#### fundamentalPeriodSelectDropdownPeriods

```ts
fundamentalPeriodSelectDropdownPeriods: AnalyticsMiniChartPeriodSelectDropdownPeriods = DEFAULT_PERIOD_SELECT_DROPDOWN_PERIODS_FUNDAMENTAL
```

Defines the periods available for Fundamental Period Select Dropdown

##### Default Value

`{ ANNUAL: [0, 1, 2, 3, 4], QUARTERLY: [0, 1, 2, 4, 8, 12]] }`

#### fundamentalSource

```ts
fundamentalSource: CdapiEquityCompanyFundamentalSource = 'INFRONT'
```

Source for the Fundamentals data.

##### Default Value

`'INFRONT'`

#### invalidGrowthNodeColor

```ts
invalidGrowthNodeColor: string = '#ffb84e'
```

List of hex colors (e.g. `'#ff00ff'`) to use in the chart for Invalid Growth node.

#### legend

```ts
legend: boolean = true
```

Show or hide legend on the chart.

##### Default Value

`true`

#### legendLabelColor

```ts
legendLabelColor: string = '#999'
```

Sets label color.

##### Default Value

`'#999'`

#### ltmPeriodCount

```ts
ltmPeriodCount: 0 | 1 = 1
```

How many years of ltm to display in the chart.

0 when no ltm should be shown.

##### Default Value

`1`

#### ltmSource

```ts
ltmSource: CdapiEquityIssuerKeyfigureSource = 'INFRONT'
```

Source for the LTM data.

##### Default Value

`'INFRONT'`

#### negativeColors

```ts
negativeColors: ColorItem[] = ...
```

List of hex colors (e.g. `'#ff00ff'`) to use in the chart for negative bars.

#### `Optional` onEstimatePeriodCountChanged

```ts
onEstimatePeriodCountChanged?: (periodCount: PeriodCount) => void
```

Callback that is called when estimatePeriodCount is changed.

##### Type Declaration

- (periodCount: PeriodCount): void

  ##### Parameters

  - periodCount: PeriodCount

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onFundamentalPeriodCountChanged

```ts
onFundamentalPeriodCountChanged?: (periodCount: PeriodCount) => void
```

Callback that is called when fundamentalPeriodCount is changed.

##### Type Declaration

- (periodCount: PeriodCount): void

  ##### Parameters

  - periodCount: PeriodCount

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onLtmPeriodCountChanged

```ts
onLtmPeriodCountChanged?: (ltmPeriodCount: 0 | 1) => void
```

Callback that is called when ltmPeriodCount is changed.

##### Type Declaration

- (ltmPeriodCount: 0 | 1): void

  ##### Parameters

  - ltmPeriodCount: 0 | 1

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onReportTypeChanged

```ts
onReportTypeChanged?: (
    reportType: CdapiEquityCompanyFundamentalYearsReportType,
) => void
```

Callback that is called when reportType is changed.

##### Type Declaration

- (reportType: CdapiEquityCompanyFundamentalYearsReportType): void

  ##### Parameters

  - reportType: [CdapiEquityCompanyFundamentalYearsReportType](../SDK/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYearsReportType.md)

  ##### Returns void

##### Default Value

`undefined`

#### reportType

```ts
reportType: CdapiEquityCompanyFundamentalYearsReportType = 'ANNUAL'
```

The selected financial statements type.

If set to 'ANNUAL', the combined Fundamentals, LTM and Estimates data is displayed.

If set to 'INTERIM' only Fundamentals data will be shown!

Displayed data count can be controlled by
[AnalyticsMiniChartWidgetOptions.fundamentalPeriodCount](#fundamentalperiodcount),
[AnalyticsMiniChartWidgetOptions.ltmPeriodCount](#ltmperiodcount),
[AnalyticsMiniChartWidgetOptions.estimatePeriodCount](#estimateperiodcount).
This mostly makes sense for 'ANNUAL' though.

##### See

[AnalyticsMiniChartReportType](./WTK.AnalyticsMiniChartReportType.md)

##### Default Value

`'ANNUAL'`

#### showEstimatePeriodSelectDropdown

```ts
showEstimatePeriodSelectDropdown: boolean = false
```

Display Estimate Period Select Dropdown

##### Default Value

`false`

#### showFundamentalPeriodSelectDropdown

```ts
showFundamentalPeriodSelectDropdown: boolean = false
```

Display Fundamental Period Select Dropdown

##### Default Value

`false`

#### showLtmCheckbox

```ts
showLtmCheckbox: boolean = false
```

Displays LTM checkbox

##### Default Value

`false`

#### showReportTypeSwitch

```ts
showReportTypeSwitch: boolean = false
```

Display Report Period Type (ANNUAL / QUARTERLY) Toggle Button

##### Default Value

`false`

#### spacingBottom

```ts
spacingBottom: number = 15
```

Spacing from chart to bottom edge of container.

##### Default Value

`15`

#### spacingLeft

```ts
spacingLeft: number = 10
```

Spacing from chart to left edge of container.

##### Default Value

`10`

#### spacingRight

```ts
spacingRight: number = 10
```

Spacing from chart to right edge of container.

##### Default Value

`10`

#### spacingTop

```ts
spacingTop: number = 10
```

Spacing from chart to top edge of container.

##### Default Value

`10`

#### `Optional` styledMode

```ts
styledMode?: boolean = false
```

Enable styled mode.

##### Default Value

`false`

#### `Optional` yAxisLabelFormatter

```ts
yAxisLabelFormatter?: (value: unknown, decimals?: number) => string
```

A custom formatter for the yAxis labels.

##### Default

`undefined`

### Other

#### constructor

```ts
new AnalyticsMiniChartWidgetOptions(
    initOptions?: Partial<AnalyticsMiniChartWidgetOptions>,
): AnalyticsMiniChartWidgetOptions
```

Initializes a new [AnalyticsMiniChartWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<AnalyticsMiniChartWidgetOptions>

  The initial property values to set.

##### Returns AnalyticsMiniChartWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor
