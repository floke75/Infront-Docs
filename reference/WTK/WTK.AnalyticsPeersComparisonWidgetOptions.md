---
title: "AnalyticsPeersComparisonWidgetOptions"
qualified_name: "WTK.AnalyticsPeersComparisonWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsPeersComparisonWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsPeersComparisonWidgetOptions.html"
defines: ["AnalyticsPeersComparisonWidgetOptions"]
member_count: 58
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableReportPeriodTypes", "calculationMode?", "companySource", "consensusEstimatesSource", "currency", "displayRule", "estimatePeriodCount", "estimatePeriodSelectDropdownPeriods", "estimateSource", "fundamentalPeriodCount", "fundamentalPeriodSelectDropdownPeriods", "fundamentalSource", "gicsIndustryCode", "gicsIndustryGroupCode", "gicsSectorCode", "gicsSubIndustryCode", "keyfigureSource", "loadingLabel?", "ltmSource", "maxPeerCompanies", "minColumnGroupWidth", "minimumMarketCap?", "noDataLabel?", "onCalculationModeChanged?", "onEstimatePeriodCountChanged?", "onFundamentalPeriodCountChanged?", "onInstrumentClicked?", "onReportTypeChanged?", "onShowLTMChanged?", "onSortChanged?", "peersFields", "reportPeriodType", "sectorRegion", "showEstimatePeriodSelectDropdown", "showFundamentalPeriodSelectDropdown", "showLtm", "showLtmCheckbox", "showReportPeriodTypeSwitch", "sortColumn?"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsPeersComparisonWidget": ["availableReportPeriodTypes", "calculationMode?", "companySource", "consensusEstimatesSource", "currency", "displayRule", "estimatePeriodCount", "estimatePeriodSelectDropdownPeriods", "estimateSource", "fundamentalPeriodCount", "fundamentalPeriodSelectDropdownPeriods", "fundamentalSource", "gicsIndustryCode", "gicsIndustryGroupCode", "gicsSectorCode", "gicsSubIndustryCode", "keyfigureSource", "loadingLabel?", "ltmSource", "maxPeerCompanies", "minColumnGroupWidth", "minimumMarketCap?", "noDataLabel?", "onCalculationModeChanged?", "onEstimatePeriodCountChanged?", "onFundamentalPeriodCountChanged?", "onInstrumentClicked?", "onReportTypeChanged?", "onShowLTMChanged?", "onSortChanged?", "peersFields", "reportPeriodType", "sectorRegion", "showEstimatePeriodSelectDropdown", "showFundamentalPeriodSelectDropdown", "showLtm", "showLtmCheckbox", "showReportPeriodTypeSwitch", "sortColumn?"]
reference_count: 14
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsEquityIssuerEstimateKeyfigureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsEquityIssuerKeyfigureSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerKeyfigureSource", "WTK.AnalyticsPeersComparisonWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# AnalyticsPeersComparisonWidgetOptions

AnalyticsPeersComparisonWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsPeersComparisonWidget.

#### See

AnalyticsPeersComparisonWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsPeersComparisonWidgetOptions

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

### AnalyticsPeersComparisonWidget

#### availableReportPeriodTypes

```ts
availableReportPeriodTypes: ReportPeriodType[] = ...
```

The available period types of peers keyfigures that are being displayed as selectable options.
1 ReportPeriodType item is required

##### Default Value

`['ANNUAL']`

#### `Optional` calculationMode

```ts
calculationMode?: PeersCalculationMode = 'average'
```

The calculation mode for the aggregate row. Either `'average'` or `'median'`.

##### Default Value

`'average'`

#### companySource

```ts
companySource: CdapiGetEquityListingsOptionsCompanySource = 'INFRONT'
```

The source for the company data.

##### Default Value

`'INFRONT'`

#### consensusEstimatesSource

```ts
consensusEstimatesSource: CdapiGetEquityListingsOptionsEquityIssuerEstimateKeyfigureSource = 'INFRONT'
```

The source for the peer companies Consensus Estimates Fields, their Market cap etc.

##### Default Value

`'INFRONT'`

#### currency

```ts
currency: Currency = 'EUR'
```

The currency for the market cap to sort by.

##### Default Value

`'EUR'`

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

How many periods of Estimates to show, set based on reportPeriodType.
Set ANNUAL / QUARTERLY to 0 when no Estimates should be shown.

##### Default Value

`{ ANNUAL: 2, QUARTERLY: 2 }`

#### estimatePeriodSelectDropdownPeriods

```ts
estimatePeriodSelectDropdownPeriods: AnalyticsPeersPeriodSelectDropdownPeriods = DEFAULT_PERIOD_SELECT_DROPDOWN_PERIODS
```

Defines the periods available for Estimate Period Select Dropdown

##### Default Value

`{ ANNUAL: [0, 1, 2, 3, 4], QUARTERLY: [0, 1, 2, 4, 8, 12]] }`

#### estimateSource

```ts
estimateSource: CdapiEquityCompanyEstimateSource = 'STANDARD_AND_POORS'
```

Source for the Estimates data.

##### Default Value

`'STANDARD_AND_POORS'`

#### fundamentalPeriodCount

```ts
fundamentalPeriodCount: PeriodCount = DEFAULT_PERIOD_COUNTS
```

How many periods of Fundamentals to show, set based on reportPeriodType
Set ANNUAL / QUARTERLY to 0 when no fundamentals should be shown.

##### Default Value

`{ ANNUAL: 2, QUARTERLY: 2 }`

#### fundamentalPeriodSelectDropdownPeriods

```ts
fundamentalPeriodSelectDropdownPeriods: AnalyticsPeersPeriodSelectDropdownPeriods = DEFAULT_PERIOD_SELECT_DROPDOWN_PERIODS
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

#### gicsIndustryCode

```ts
gicsIndustryCode: string | readonly string[] = null
```

Which GICS industries (level 3) to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsIndustryGroupCode

```ts
gicsIndustryGroupCode: string | readonly string[] = null
```

Which GICS industry group (level 2) to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsSectorCode

```ts
gicsSectorCode: string | readonly string[] = null
```

Which GICS sector (level 1) to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsSubIndustryCode

```ts
gicsSubIndustryCode: string | readonly string[] = null
```

Which GICS sub-industries (level 4) to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### keyfigureSource

```ts
keyfigureSource: CdapiGetEquityListingsOptionsEquityIssuerKeyfigureSource = 'INFRONT'
```

The source for the peer companies list, their Market cap etc.

##### Default Value

`'INFRONT'`

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The label to show while the sector list is still being loaded.

Defaults to "(loading...)".

##### Default Value

`undefined`

#### ltmSource

```ts
ltmSource: CdapiEquityIssuerKeyfigureSource = 'INFRONT'
```

Source for the LTM data.

##### Default Value

`'INFRONT'`

#### maxPeerCompanies

```ts
maxPeerCompanies: number = 15
```

Number of Peer companies for comparison

default value is 15.

##### Default Value

`15`

#### minColumnGroupWidth

```ts
minColumnGroupWidth: number = 100
```

Minimum width of a column group when there is only 1 column in the group

value should be between 100 and 200, else will fallback to default

##### Default Value

`100`

#### `Optional` minimumMarketCap

```ts
minimumMarketCap?: MinimumMarketCapFilter
```

Indicates whether the universe should be filtered by a minimum market capitalization.

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

#### `Optional` onCalculationModeChanged

```ts
onCalculationModeChanged?: (calculationMode: "average" | "median") => void
```

Callback called when the calculation mode vhanges for the aggregate row.

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

#### `Optional` onInstrumentClicked

```ts
onInstrumentClicked?: (symbolId: SymbolId) => void
```

Callback that is called when a row in the list is clicked.

The callback receives the symbol information on the item that was clicked, as an [InfrontSDK.SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md) object, as a parameter.

##### Type Declaration

- (symbolId: SymbolId): void

  ##### Parameters

  - symbolId: [SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

  ##### Returns void

##### See

[InfrontSDK.SymbolId](../SDK/SDK.InfrontSDK.SymbolId.md)

##### Default Value

`undefined`

#### `Optional` onReportTypeChanged

```ts
onReportTypeChanged?: (reportPeriodType: ReportPeriodType) => void
```

Callback that is called when reportPeriodType is changed.

##### Type Declaration

- (reportPeriodType: ReportPeriodType): void

  ##### Parameters

  - reportPeriodType: ReportPeriodType

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

#### `Optional` onSortChanged

```ts
onSortChanged?: (sortColumn: { name: string; sort: "asc" | "desc" }) => void
```

Callback called when the user changes the sorted column.

#### peersFields

```ts
peersFields: readonly PeersField[] = DEFAULT_COL_GROUPS
```

A field to set the Column Groups to display

##### Default Value

`['PRICE_BOOKVALUE_RATIO', 'DIVIDEND_YIELD', 'ENTERPRISE_VALUE_EBITDA_RATIO', 'PRICE_BOOKVALUE_RATIO']`

#### reportPeriodType

```ts
reportPeriodType: ReportPeriodType = 'ANNUAL'
```

field to set reporting period type.

##### Default Value

`ANNUAL`

#### sectorRegion

```ts
sectorRegion: string | AnalyticsRegionCodeInfo = 'REGIONAL'
```

A sector-region of type AnalyticsRegionCodeInfo filtering the companies by given regions.

The region is generally retrieved from the region widget, or fetched via the `analyticsRegions`
query, but it can also be composed manually by setting and object with `countryCode` and/or
`regionCode` values, which correspond with CDAPI values.

You can also specify a region by its code, like 'REGIONAL'.

##### Default Value

`REGIONAL`

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

#### showReportPeriodTypeSwitch

```ts
showReportPeriodTypeSwitch: boolean = false
```

Display Report Period Type (ANNUAL / QUARTERLY) Toggle Button

##### Default Value

`false`

#### `Optional` sortColumn

```ts
sortColumn?: { name: string; sort: "asc" | "desc" }
```

The column to sort the peers table by, and the sort direction.

##### Default Value

`undefined`
