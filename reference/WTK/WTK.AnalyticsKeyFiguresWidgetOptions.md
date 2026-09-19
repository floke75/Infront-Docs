---
title: "AnalyticsKeyFiguresWidgetOptions"
qualified_name: "WTK.AnalyticsKeyFiguresWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsKeyFiguresWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsKeyFiguresWidgetOptions.html"
defines: ["AnalyticsKeyFiguresWidgetOptions"]
member_count: 45
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableReportTypes", "companySource", "displayRule", "estimatePeriodCount", "estimatePeriodSelectDropdownPeriods", "estimateSource", "fields", "fundamentalPeriodCount", "fundamentalPeriodSelectDropdownPeriods", "fundamentalSource", "ltmSource", "makeHeaderSticky", "onEstimatePeriodCountChanged?", "onFundamentalPeriodCountChanged?", "onOpenChartClicked?", "onReportTypeChanged?", "onShowLTMChanged?", "reportType", "showEstimatePeriodSelectDropdown", "showFundamentalPeriodSelectDropdown", "showInlineHeaders", "showLtm", "showLtmCheckbox", "showOpenChartInRow", "showReportTypeSwitch", "constructor"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsKeyFiguresWidget": ["availableReportTypes", "companySource", "displayRule", "estimatePeriodCount", "estimatePeriodSelectDropdownPeriods", "estimateSource", "fields", "fundamentalPeriodCount", "fundamentalPeriodSelectDropdownPeriods", "fundamentalSource", "ltmSource", "makeHeaderSticky", "onEstimatePeriodCountChanged?", "onFundamentalPeriodCountChanged?", "onOpenChartClicked?", "onReportTypeChanged?", "onShowLTMChanged?", "reportType", "showEstimatePeriodSelectDropdown", "showFundamentalPeriodSelectDropdown", "showInlineHeaders", "showLtm", "showLtmCheckbox", "showOpenChartInRow", "showReportTypeSwitch"]
  "Other": ["constructor"]
reference_count: 11
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerKeyfigureSource", "WTK.AnalyticsKeyFiguresWidget", "WTK.InfrontWidget"]
---

# AnalyticsKeyFiguresWidgetOptions

AnalyticsKeyFiguresWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsKeyFiguresWidget.

#### See

AnalyticsKeyFiguresWidget | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsKeyFiguresWidgetOptions

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

### AnalyticsKeyFiguresWidget

#### availableReportTypes

```ts
availableReportTypes: readonly ReportType[] = DEFAULT_AVAILABLE_REPORT_TYPES
```

The available period types of keyfigures that are being displayed as selectable options.
1 ReportType item is required

##### Default Value

`['ANNUAL', 'QUARTERLY']`

#### companySource

```ts
companySource: CdapiGetEquityIssuersOptionsCompanySource = 'INFRONT'
```

The source for company data.

##### Default Value

`'INFRONT'`

#### displayRule

```ts
displayRule: "default" | "estimatesBasicEarningsOnly" = 'default'
```

set to estimatesBasicEarningsOnly if SIX/FIS else default

##### Default Value

`default`

#### estimatePeriodCount

```ts
estimatePeriodCount: PeriodCount = DEFAULT_PERIOD_COUNTS
```

How many periods of Estimates to show, set based on reportType.
Set ANNUAL / QUARTERLY to 0 when no Estimates should be shown.

##### Default Value

`{ ANNUAL: 2, QUARTERLY: 2 }`

#### estimatePeriodSelectDropdownPeriods

```ts
estimatePeriodSelectDropdownPeriods: AnalyticsKeyFiguresPeriodSelectDropdownPeriods = DEFAULT_PERIOD_SELECT_DROPDOWN_PERIODS_ESTIMATES
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
fields: AnalyticsKeyFiguresFieldsPerReportType = DEFAULT_FIELDS_PER_REPORT_TYPE
```

The fields to display per report type.

A field combines Fundamental, LTM and Estimates data.

#### fundamentalPeriodCount

```ts
fundamentalPeriodCount: PeriodCount = DEFAULT_PERIOD_COUNTS
```

How many periods of Fundamentals to show, set based on reportType
Set ANNUAL / QUARTERLY to 0 when no fundamentals should be shown.

##### Default Value

`{ ANNUAL: 2, QUARTERLY: 2 }`

#### fundamentalPeriodSelectDropdownPeriods

```ts
fundamentalPeriodSelectDropdownPeriods: AnalyticsKeyFiguresPeriodSelectDropdownPeriods = DEFAULT_PERIOD_SELECT_DROPDOWN_PERIODS_FUNDAMENTAL
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

#### ltmSource

```ts
ltmSource: CdapiEquityIssuerKeyfigureSource = 'INFRONT'
```

Source for the LTM data.

##### Default Value

`'INFRONT'`

#### makeHeaderSticky

```ts
makeHeaderSticky: boolean = false
```

Whether to keep the widget header sticky to the top while the content scrolls.

##### Default Value

`false`

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

#### `Optional` onOpenChartClicked

```ts
onOpenChartClicked?: (figure: KeyFigureField) => void
```

Callback that is called when the chart icon is clicked.

The callback receives the figure value of the row, where icon is present

##### Type Declaration

- (figure: KeyFigureField): void

  ##### Parameters

  - figure: KeyFigureField

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onReportTypeChanged

```ts
onReportTypeChanged?: (reportType: ReportType) => void
```

Callback that is called when reportType is changed.

##### Type Declaration

- (reportType: ReportType): void

  ##### Parameters

  - reportType: ReportType

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onShowLTMChanged

```ts
onShowLTMChanged?: (showLtm: boolean) => void
```

Callback that is called when showLtm is changed.

##### Type Declaration

- (showLtm: boolean): void

  ##### Parameters

  - showLtm: boolean

  ##### Returns void

##### Default Value

`undefined`

#### reportType

```ts
reportType: ReportType = 'ANNUAL'
```

field to set reporting period type.

##### Default Value

`ANNUAL`

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

#### showInlineHeaders

```ts
showInlineHeaders: boolean = true
```

Whether to show group headers for the fundamentals figures.

##### Default Value

`true`

#### showLtm

```ts
showLtm: boolean = true
```

Displays LTM column

##### Default Value

`true`

#### showLtmCheckbox

```ts
showLtmCheckbox: boolean = false
```

Displays LTM checkbox

##### Default Value

`false`

#### showOpenChartInRow

```ts
showOpenChartInRow: boolean = false
```

Whether to show Open Chart Button in every figure Row

##### Default Value

`'false'`

#### showReportTypeSwitch

```ts
showReportTypeSwitch: boolean = false
```

Display Report Period Type (ANNUAL / QUARTERLY) Toggle Button

##### Default Value

`false`

### Other

#### constructor

```ts
new AnalyticsKeyFiguresWidgetOptions(
    initOptions?: Partial<AnalyticsKeyFiguresWidgetOptions>,
): AnalyticsKeyFiguresWidgetOptions
```

Initializes a new [AnalyticsKeyFiguresWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<AnalyticsKeyFiguresWidgetOptions>

  The initial property values to set.

##### Returns AnalyticsKeyFiguresWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor
