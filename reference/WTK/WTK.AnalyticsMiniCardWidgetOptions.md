---
title: "AnalyticsMiniCardWidgetOptions"
qualified_name: "WTK.AnalyticsMiniCardWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsMiniCardWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsMiniCardWidgetOptions.html"
defines: ["AnalyticsMiniCardWidgetOptions"]
member_count: 31
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "balanceSheetField?", "cashFlowStatementField?", "fundamentalData?", "fundamentalField?", "fundamentalFigure?", "incomeStatementField?", "onDestroyCallback?", "periodCount?", "periodKpiField?", "reportType?", "snapshotKpiField?", "source?"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsMiniCardWidget": ["balanceSheetField?", "cashFlowStatementField?", "fundamentalData?", "fundamentalField?", "fundamentalFigure?", "incomeStatementField?", "onDestroyCallback?", "periodCount?", "periodKpiField?", "reportType?", "snapshotKpiField?"]
  "AnalyticsMiniCarsdWidget": ["source?"]
reference_count: 12
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalFigure", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptionsReportType", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalSource", "WTK.AnalyticsMiniCardWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# AnalyticsMiniCardWidgetOptions

AnalyticsMiniCardWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsMiniCardWidget.

#### See

AnalyticsMiniCardWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsMiniCardWidgetOptions

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

### AnalyticsMiniCardWidget

#### `Optional` balanceSheetField

```ts
balanceSheetField?: string
```

BalanceSheet field

##### Remarks

Only one field can be specified

##### See

FundamentalsBalanceSheetFields

##### Default Value

`undefined`

#### `Optional` cashFlowStatementField

```ts
cashFlowStatementField?: string
```

CashFlowStatement field

##### Remarks

Only one field can be specified

##### See

FundamentalsCashFlowStatementFields

##### Default Value

`undefined`

#### `Optional` fundamentalData

```ts
fundamentalData?: CdapiEquityCompanyFundamentalsData
```

Customly provided fundamentals data

##### Remarks

Option will be ignored if fundamentalFigure is set

##### See

FundamentalsData

##### Default Value

`undefined`

#### `Optional` fundamentalField

```ts
fundamentalField?: string
```

Generic field

##### Remarks

Only one field can be specified

##### See

FundamentalsFields

##### Default Value

`undefined`

#### `Optional` fundamentalFigure

```ts
fundamentalFigure?: CdapiEquityCompanyFundamentalFigure
```

Customly provided fundamental figure

##### Remarks

Setting this option will cause fundamentalsData and all field options below to be ignored.

##### See

FundamentalFigure

##### Default Value

`undefined`

#### `Optional` incomeStatementField

```ts
incomeStatementField?: string
```

IncomeStatement field

##### Remarks

Only one field can be specified

##### See

FundamentalsIncomeStatementFields

##### Default Value

`undefined`

#### `Optional` onDestroyCallback

```ts
onDestroyCallback?: () => void
```

The callback that's fired when the component is destroyed (calling the onDestroy lifecycle hook)

##### Default Value

`undefined`

#### `Optional` periodCount

```ts
periodCount?: FundamentalsPeriodCounts = DEFAULT_PERIOD_COUNTS
```

The amount of periods to request for a given report type

##### See

FundamentalsPeriodCounts | DEFAULT_PERIOD_COUNTS

##### Default Value

`{ REPORT_TYPE_UNSPECIFIED: 5, ANNUAL: 5, QUARTERLY: 4, INTERIM: 4, SEMI_ANNUAL: 4 };`

#### `Optional` periodKpiField

```ts
periodKpiField?: string
```

PeriodKpi field

##### Remarks

Only one field can be specified

##### See

FundamentalsPeriodKpiFields

##### Default Value

`undefined`

#### `Optional` reportType

```ts
reportType?: CdapiGetEquityCompanyFundamentalsOptionsReportType = DEFAULT_REPORT_TYPE
```

The report type of the fundamentals data

##### See

FundamentalsReportType

##### Default Value

`'ANNUAL'`

#### `Optional` snapshotKpiField

```ts
snapshotKpiField?: string
```

SnapShotKpi field

##### Remarks

Only one field can be specified

##### See

FundamentalsSnapshotKpiFields

##### Default Value

`undefined`

### AnalyticsMiniCarsdWidget

#### `Optional` source

```ts
source?: CdapiEquityCompanyFundamentalSource = DEFAULT_SOURCE
```

The source of the fundamentals data

##### See

FundamentalSource

##### Default Value

`'INFRONT'`
