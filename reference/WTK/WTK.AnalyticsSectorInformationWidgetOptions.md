---
title: "AnalyticsSectorInformationWidgetOptions"
qualified_name: "WTK.AnalyticsSectorInformationWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > AnalyticsSectorInformationWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.AnalyticsSectorInformationWidgetOptions.html"
defines: ["AnalyticsSectorInformationWidgetOptions"]
member_count: 38
members: ["instrument?", "decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "columnDefOverwrites?", "columns", "companySource", "currency", "gicsIndustryCode", "gicsIndustryGroupCode", "gicsSectorCode", "gicsSubIndustryCode", "keyfigureSource", "maxItems", "minimumMarketCap?", "onInstrumentClicked?", "onModalStateChanged?", "sectorId", "sectorRegion", "sortColumn", "subSectorId", "constructor", "source"]
member_groups:
  "Base Widgets": ["instrument?"]
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "AnalyticsSectorInformationWidget": ["columnDefOverwrites?", "columns", "companySource", "currency", "gicsIndustryCode", "gicsIndustryGroupCode", "gicsSectorCode", "gicsSubIndustryCode", "keyfigureSource", "maxItems", "minimumMarketCap?", "onInstrumentClicked?", "onModalStateChanged?", "sectorId", "sectorRegion", "sortColumn", "subSectorId"]
  "Other": ["constructor", "source"]
reference_count: 11
references: ["SDK.InfrontSDK.SymbolId", "WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsEquityIssuerKeyfigureSource", "WTK.AnalyticsSectorInformationRegion", "WTK.AnalyticsSectorInformationWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# AnalyticsSectorInformationWidgetOptions

AnalyticsSectorInformationWidgetOptions class extending SvelteSingleInstrumentWidgetBaseOptions class.

Set Options for the AnalyticsSectorInformationWidget.

#### See

AnalyticsSectorInformationWidget | SvelteWidgetOptions | SvelteSingleInstrumentWidgetBaseOptions

#### Hierarchy

- SvelteSingleInstrumentWidgetBaseOptions

  - AnalyticsSectorInformationWidgetOptions

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

### AnalyticsSectorInformationWidget

#### `Optional` columnDefOverwrites

```ts
columnDefOverwrites?:
    | ColumnDefOverwriteHelper<
        Column<AnalyticsSectorInformationColumn, unknown, SectorCompany>[],
    >
    | ColumnDefOverwrites
```

Option to overwrite column configurations using different strategies.

##### See

ColumnDefOverwrites

##### Default Value

`undefined`

#### columns

```ts
columns: readonly AnalyticsSectorInformationColumn[] = DEFAULT_COLUMNS
```

The columns to show in the sector overview. By default, Rank, Name, and MarketCap.

##### Default Value

`['Rank', 'Name', 'MarketCap']`

#### companySource

```ts
companySource: CdapiGetEquityListingsOptionsCompanySource = 'INFRONT'
```

The source for the company data.

##### Default Value

`'INFRONT'`

#### currency

```ts
currency: AnalyticsSectorInformationCurrency = 'EUR'
```

The currency for the market cap to sort by.

##### Default Value

`'EUR'`

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

The source for the market cap data.

##### Default Value

`'INFRONT'`

#### maxItems

```ts
maxItems: number = 100
```

Max. lines.

##### Default Value

`100`

#### `Optional` minimumMarketCap

```ts
minimumMarketCap?: AnalyticsMinimumMarketCapFilter
```

Indicates whether the universe should be filtered by a minimum market capitalization.

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

#### sectorId

```ts
sectorId: number | readonly number[] = null
```

A single sector-id or list of sector-ids as defined by CDAPI. Do not combine with the other sector options.

##### Default Value

`undefined`

#### sectorRegion

```ts
sectorRegion: string | AnalyticsSectorInformationRegion
```

A sector-region of type [AnalyticsSectorInformationRegion](./WTK.AnalyticsSectorInformationRegion.md) filtering the companies by given regions.

The region is generally retrieved from the region widget, or fetched via the `analyticsRegions`
query, but it can also be composed manually by setting and object with `countryCode` and/or
`regionCode` values, which correspond with CDAPI values.

You can also specify a region by its code, like 'REGIONAL'.

##### Default Value

`undefined`

#### sortColumn

```ts
sortColumn: AnalyticsSectorInformationColumn = 'MarketCap'
```

The column to sort; by default this is MarketCap, which will also cause
a "near peers" filter to be applied.

##### Default Value

`'MarketCap'`

#### subSectorId

```ts
subSectorId: number | readonly number[] = null
```

A single sub-sector-id or list of sub-sector-id as defined by CDAPI. Do not combine with the other sector options.

##### Default Value

`undefined`

### Other

#### constructor

```ts
new AnalyticsSectorInformationWidgetOptions(
    initOptions?: Partial<AnalyticsSectorInformationWidgetOptions>,
): AnalyticsSectorInformationWidgetOptions
```

Initializes a new [AnalyticsSectorInformationWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<AnalyticsSectorInformationWidgetOptions>

  The initial property values to set.

##### Returns AnalyticsSectorInformationWidgetOptions

Overrides SvelteSingleInstrumentWidgetBaseOptions.constructor

#### source

```ts
get source(): CdapiGetEquityListingsOptionsEquityIssuerKeyfigureSource
```

##### Returns [CdapiGetEquityListingsOptionsEquityIssuerKeyfigureSource](../SDK/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsEquityIssuerKeyfigureSource.md)

##### Deprecated

Use [AnalyticsSectorInformationWidgetOptions.keyfigureSource](#keyfiguresource)
