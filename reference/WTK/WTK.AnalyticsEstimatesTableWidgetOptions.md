---
title: "AnalyticsEstimatesTableWidgetOptions"
qualified_name: "WTK.AnalyticsEstimatesTableWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsEstimatesTableWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsEstimatesTableWidgetOptions.html"
defines: ["AnalyticsEstimatesTableWidgetOptions"]
member_count: 33
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "companySource", "estimateSource", "futurePeriodCount", "historicalPeriodCount", "loadingLabel?", "noDataLabel?", "onOpenChartBtnClicked?", "reportTypes", "scrollPosition?", "selectedReportType", "showEmptyGroups", "showOpenChartBtnInRow", "viewType", "constructor"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsEstimatesTableWidget": ["companySource", "estimateSource", "futurePeriodCount", "historicalPeriodCount", "loadingLabel?", "noDataLabel?", "onOpenChartBtnClicked?", "reportTypes", "scrollPosition?", "selectedReportType", "showEmptyGroups", "showOpenChartBtnInRow", "viewType"]
  "Other": ["constructor"]
reference_count: 9
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateSource", "WTK.AnalyticsEstimatesTableWidget", "WTK.InfrontWidget"]
---

# AnalyticsEstimatesTableWidgetOptions

AnalyticsEstimatesTableWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsEstimatesTableWidget.

#### See

AnalyticsEstimatesTableWidget | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsEstimatesTableWidgetOptions

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

### AnalyticsEstimatesTableWidget

#### companySource

```ts
companySource: CdapiGetEquityListingsOptionsCompanySource = 'INFRONT'
```

The source for company data.

##### Default Value

`'INFRONT'`

#### estimateSource

```ts
estimateSource: CdapiEquityCompanyEstimateSource = 'INFRONT'
```

Sets the data source for estimates data.

##### Default Value

`'INFRONT'`

#### futurePeriodCount

```ts
futurePeriodCount: FuturePeriodCount = DEFAULT_FUTURE_PERIOD_COUNTS
```

Sets the number of future estimate columns.

Make sure to pass FuturePeriodCount for all reportTypes passed for reportType switcher

##### Default Value

`{ ANNUAL: 3, QUARTERLY: 2, INTERIM: 2, SEMI_ANNUAL: 2 }`

#### historicalPeriodCount

```ts
historicalPeriodCount: HistoricPeriodCount = DEFAULT_HISTORIC_PERIOD_COUNTS
```

Sets the number of historical estimate columns.

Make sure to pass HistoricPeriodCount for all reportTypes passed for reportType switcher

##### Default Value

`{ ANNUAL: 4, QUARTERLY: 4, INTERIM: 4, SEMI_ANNUAL: 4 }`

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The label to show while the sector list is still being loaded.

Defaults to "(loading...)".

##### Default Value

`undefined`

#### `Optional` noDataLabel

```ts
noDataLabel?: string
```

The label to show when no instruments are found

Defaults to "No data available".

##### Default Value

`undefined`

#### `Optional` onOpenChartBtnClicked

```ts
onOpenChartBtnClicked?: (figure: EstimatesTableFigure) => void
```

Callback that is called when the chart icon is clicked.

The callback receives the figure value of the row, where icon is present

##### Type Declaration

- (figure: EstimatesTableFigure): void

  ##### Parameters

  - figure: EstimatesTableFigure

  ##### Returns void

##### Default Value

`undefined`

#### reportTypes

```ts
reportTypes: EstimatesTableReportType[] = ...
```

Whether to show ANNUAL, QUARTERLY, INTERIM, etc. data switcher.

If you do not want to see the period switcher, set this property to `[]`.

##### Default Value

`['ANNUAL', 'QUARTERLY']`

#### `Optional` scrollPosition

```ts
scrollPosition?: ScrollPosition
```

Table scroll position of the list.

##### Default Value

`undefined`

#### selectedReportType

```ts
selectedReportType: EstimatesTableReportType = 'ANNUAL'
```

Whether to show ANNUAL or QUARTERLY data.

##### Default Value

`'ANNUAL'`

#### showEmptyGroups

```ts
showEmptyGroups: boolean = true
```

Whether to show column-groups that have no data at all.

##### Default Value

`'true'`

#### showOpenChartBtnInRow

```ts
showOpenChartBtnInRow: boolean = false
```

Whether to show Open Chart Button in every figure Row

##### Default Value

`'false'`

#### viewType

```ts
viewType: "advanced" | "simple" = 'simple'
```

What data columns to display in the table.

viewType is 'simple' (default):

- for historial show actuals
- for future show average (mean)

viewType is 'advanced':

- for historial show actuals
- for future show average (mean), median, high, low, number of contributors

##### Default Value

`'simple'`

### Other

#### constructor

```ts
new AnalyticsEstimatesTableWidgetOptions(
    initOptions?: Partial<AnalyticsEstimatesTableWidgetOptions>,
): AnalyticsEstimatesTableWidgetOptions
```

Initializes a new [AnalyticsEstimatesTableWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<AnalyticsEstimatesTableWidgetOptions>

  The initial property values to set.

##### Returns AnalyticsEstimatesTableWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor
