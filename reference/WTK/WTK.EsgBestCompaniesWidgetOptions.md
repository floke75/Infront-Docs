---
title: "EsgBestCompaniesWidgetOptions"
qualified_name: "WTK.EsgBestCompaniesWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > EsgBestCompaniesWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.EsgBestCompaniesWidgetOptions.html"
defines: ["EsgBestCompaniesWidgetOptions"]
member_count: 31
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "columns?", "companySource", "gicsIndustryGroupCode", "gicsSectorCode", "loadingLabel?", "maxItems", "noDataLabel?", "onInstrumentClicked?", "onSortChanged?", "sectorId", "sortColumn?", "subSectorId", "constructor"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "EsgBestCompaniesWidget": ["columns?", "companySource", "gicsIndustryGroupCode", "gicsSectorCode", "loadingLabel?", "maxItems", "noDataLabel?", "onInstrumentClicked?", "onSortChanged?", "sectorId", "sortColumn?", "subSectorId"]
  "Other": ["constructor"]
related_types: ["WTK.SvelteWidgetOptions"]
reference_count: 9
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptionsCompanySource", "SDK.InfrontSDK.SymbolId", "WTK.EsgBestCompaniesWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget"]
---

# EsgBestCompaniesWidgetOptions

EsgBestCompaniesWidgetOptions class extending EsgBestCompaniesWidget class.

Set Options for the EsgBestCompaniesWidget.

#### See

EsgBestCompaniesWidget | SvelteWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.EsgBestCompaniesWidgetOptions))

- SvelteWidgetOptions

  - EsgBestCompaniesWidgetOptions

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

Inherited from SvelteWidgetOptions.decimals

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

Inherited from SvelteWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from SvelteWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.linkChannels

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

Inherited from SvelteWidgetOptions.navButton

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

Inherited from SvelteWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from SvelteWidgetOptions.persistState

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

Inherited from SvelteWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from SvelteWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from SvelteWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from SvelteWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from SvelteWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.usePerfectScrollbar

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

Inherited from SvelteWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from SvelteWidgetOptions.widgetTitle

### EsgBestCompaniesWidget

#### `Optional` columns

```ts
columns?: readonly EsgBestCompaniesColumnsDef[]
```

Columns options

##### Default Value

`undefined` (total desc)

#### companySource

```ts
companySource: CdapiGetEquityListingsOptionsCompanySource = 'INFRONT'
```

The source for the company data.

##### Default Value

`'INFRONT'`

#### gicsIndustryGroupCode

```ts
gicsIndustryGroupCode: string = null
```

Which GICS industry group to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### gicsSectorCode

```ts
gicsSectorCode: string = null
```

Which GICS sector to select by default. Do not combine with the other sector options.

##### Default Value

`null`

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The label to show while the sector list is still being loaded.

Defaults to "(loading...)".

##### Default Value

`undefined`

#### maxItems

```ts
maxItems: number = 10
```

Max. lines.

##### Default Value

`10`

#### `Optional` noDataLabel

```ts
noDataLabel?: string
```

The label to show when no instruments are found

Defaults to "No data available".

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

#### `Optional` onSortChanged

```ts
onSortChanged?: (sortColumn: { name: string; sort: "asc" | "desc" }) => void
```

Callback called when the user changes the sorted column.

#### sectorId

```ts
sectorId: number = null
```

A single sector-id defined by CDAPI. Do not combine with the other sector options.

##### Default Value

`null`

#### `Optional` sortColumn

```ts
sortColumn?: { name: EsgBestCompaniesSortColumn; sort: "asc" | "desc" }
```

Which column to sort on.

##### Default Value

`undefined` (total desc)

#### subSectorId

```ts
subSectorId: number = null
```

A single sub-sector-id defined by CDAPI. Do not combine with the other sector options.

##### Default Value

`null`

### Other

#### constructor

```ts
new EsgBestCompaniesWidgetOptions(
    initOptions?: Partial<EsgBestCompaniesWidgetOptions>,
): EsgBestCompaniesWidgetOptions
```

Initializes a new [EsgBestCompaniesWidgetOptions](#).
You can optionally specify an init object that specifies
a subset of properties to set on the new options object.

##### Parameters

- `Optional` initOptions: Partial<EsgBestCompaniesWidgetOptions>

  The initial property values to set.

##### Returns EsgBestCompaniesWidgetOptions

Overrides SvelteWidgetOptions.constructor
