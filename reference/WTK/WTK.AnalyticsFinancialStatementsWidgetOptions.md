---
title: "AnalyticsFinancialStatementsWidgetOptions"
qualified_name: "WTK.AnalyticsFinancialStatementsWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsFinancialStatementsWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsFinancialStatementsWidgetOptions.html"
defines: ["AnalyticsFinancialStatementsWidgetOptions"]
member_count: 37
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "widgetStateCallback", "widgetTitle", "availablePeriods", "columnDirection", "companySource", "currencies", "fields", "makeHeaderSticky", "onColumnDirectionChanged?", "onModalStateChanged?", "onReportPeriodCountChanged?", "onReportTypeChanged?", "periodCount", "reportTypes", "selectedCurrency", "selectedReportPeriod", "selectedReportType", "showColumnDirectionDropdown", "showExportCSVButton", "source", "usePerfectScrollbar"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "widgetStateCallback", "widgetTitle"]
  "AnalyticsFinancialStatementsWidget": ["availablePeriods", "columnDirection", "companySource", "currencies", "fields", "makeHeaderSticky", "onColumnDirectionChanged?", "onModalStateChanged?", "onReportPeriodCountChanged?", "onReportTypeChanged?", "periodCount", "reportTypes", "selectedCurrency", "selectedReportPeriod", "selectedReportType", "showColumnDirectionDropdown", "showExportCSVButton", "source", "usePerfectScrollbar"]
reference_count: 12
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuersOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptionsReportType", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalSource", "WTK.AnalyticsFinancialStatementsWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget", "SDK.InfrontSDK.FundamentalsTaxonomies"]
---

# AnalyticsFinancialStatementsWidgetOptions

AnalyticsFinancialStatementsWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsFinancialStatementsWidget.

#### See

AnalyticsFinancialStatementsWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsFinancialStatementsWidgetOptions

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

### AnalyticsFinancialStatementsWidget

#### availablePeriods

```ts
availablePeriods: AnalyticsFinancialStatementsPeriods = DEFAULT_AVAILABLE_PERIODS
```

Defines the periods available per report type. By default

##### See

AnalyticsFinancialStatementsPeriods | FundamentalsReportType | FundamentalsPeriodCounts

##### Default Value

`{ ANNUAL: [3, 5, 10, 15, 20, 25, 30], QUARTERLY: [4, 8, 12, 16], INTERIM: [4, 8] }`

#### columnDirection

```ts
columnDirection: ColumnDirection = 'desc'
```

The order in which the date columns should be shown. By default,
this will be 'desc', or 2025, 2024, 2023, 2022, 2021, 2020.

##### Default Value

`'desc'`

#### companySource

```ts
companySource: CdapiGetEquityIssuersOptionsCompanySource = 'INFRONT'
```

The source for company data.

##### Default Value

`'INFRONT'`

#### currencies

```ts
currencies: string[] = []
```

The selected financial statements type. Highlighted in the dropdown.

##### Default Value

`'[]'`

#### fields

```ts
fields:
    | {
        balance_sheet?: boolean;
        cash_flow_statement?: boolean;
        income_statement?: boolean;
        period_kpi?: boolean;
        snapshot_kpi?: boolean;
    }
    | [CdapiFundamentalField, ...CdapiFundamentalField[]] = ...
```

The taxonomies to request. A taxonomy contain multiple fields/Figures.
Set a taxonomy to true in order to request it.

When left out/set to undefined, all taxonomies will be requested.
Also defines the order of the taxonomies & fields.

##### See

[InfrontSDK.FundamentalsTaxonomies](../SDK/SDK.InfrontSDK.FundamentalsTaxonomies.md) | InfrontSDK.TaxonomyKey | InfrontSDK.CdapiFundamentalField

##### Default Value

`[InfrontSDK.CdapiFundamentalField.FundamentalIncomeStatement,InfrontSDK.CdapiFundamentalField.FundamentalBalanceSheet,InfrontSDK.CdapiFundamentalField.FundamentalCashFlowStatement]`

#### makeHeaderSticky

```ts
makeHeaderSticky: boolean = false
```

Whether to keep the widget header sticky to the top while the content scrolls.

##### Default Value

`false`

#### `Optional` onColumnDirectionChanged

```ts
onColumnDirectionChanged?: (columnDirection: ColumnDirection) => void
```

Callback that is called when columnDirection is changed.

##### Type Declaration

- (columnDirection: ColumnDirection): void

  ##### Parameters

  - columnDirection: ColumnDirection

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onModalStateChanged

```ts
onModalStateChanged?: (state: boolean, modalId?: string) => void
```

Callback whenever a modal/dropdown/popup is expanded or collapsed.

##### Type Declaration

- (state: boolean, modalId?: string): void

  ##### Parameters

  - state: boolean

    whether or not the modal is being shown or hidden
  - `Optional` modalId: string

    the name / id of the modal responsible for the state event

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onReportPeriodCountChanged

```ts
onReportPeriodCountChanged?: (count: number) => void
```

Callback that is called when selectedReportPeriod is changed.

##### Type Declaration

- (count: number): void

  ##### Parameters

  - count: number

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onReportTypeChanged

```ts
onReportTypeChanged?: (
    reportType: CdapiGetEquityCompanyFundamentalsOptionsReportType,
) => void
```

Callback that is called when selectedReportType is changed.

##### Type Declaration

- (reportType: CdapiGetEquityCompanyFundamentalsOptionsReportType): void

  ##### Parameters

  - reportType: [CdapiGetEquityCompanyFundamentalsOptionsReportType](../SDK/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptionsReportType.md)

  ##### Returns void

##### Default Value

`undefined`

#### periodCount

```ts
periodCount: FundamentalsPeriodCounts = ...
```

Defines the amount of periods to display in the table (e.g. periods - annual -> years, interim -> quarters)
Changes the data request by adjusting the greater equals (ge) & lesser equals (le) Date parameters

##### See

FundamentalsReportType | FundamentalsPeriodCounts

##### Default Value

`{ ANNUAL: 5, QUARTERLY: 4, INTERIM: 4 }`

#### reportTypes

```ts
reportTypes: [
    CdapiGetEquityCompanyFundamentalsOptionsReportType,
    ...CdapiGetEquityCompanyFundamentalsOptionsReportType[],
] = ...
```

The available types of financial statements that are being displayed as selectable dropdown options.
One FundamentalsReportType item is required

##### See

FundamentalsReportType

##### Default Value

`['ANNUAL', 'QUARTERLY']`

#### selectedCurrency

```ts
selectedCurrency: string = undefined
```

The selected financial statements type. Highlighted in the dropdown.
If set to undefined, it will use the home currency of the company.

##### Default Value

`undefined`

#### selectedReportPeriod

```ts
selectedReportPeriod: number
```

The selected financial statements period length, which corresponds to the number of
financial period columns.

When not set, the widget will default to the defaults
set via `periodCount`.

##### Default Value

`undefined`

#### selectedReportType

```ts
selectedReportType: CdapiGetEquityCompanyFundamentalsOptionsReportType = 'ANNUAL'
```

The selected financial statements report type.

##### See

FundamentalsReportType

##### Default Value

`'ANNUAL'`

#### showColumnDirectionDropdown

```ts
showColumnDirectionDropdown: boolean = false
```

whether or not to show Column Direction select Dropdown.

##### Default Value

`'false'`

#### showExportCSVButton

```ts
showExportCSVButton: boolean = false
```

whether or not to show Export CSV button.

##### Default Value

`'false'`

#### source

```ts
source: CdapiEquityCompanyFundamentalSource = 'MORNINGSTAR'
```

The data source of the fundamental data.

##### See

FundamentalSource

##### Default Value

`'MORNINGSTAR'`

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean = true
```

Flag whether or not to use the perfect scrollbar on the table.

##### Default Value

`'true'`

Overrides SvelteSingleInstrumentWidgetBaseOptions.usePerfectScrollbar
