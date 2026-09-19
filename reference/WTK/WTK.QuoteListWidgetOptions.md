---
title: "QuoteListWidgetOptions"
qualified_name: "WTK.QuoteListWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > QuoteListWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.QuoteListWidgetOptions.html"
defines: ["QuoteListWidgetOptions"]
member_count: 97
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableColumns", "className", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory", "chainButtonTitle", "chains", "chainsProviderId", "columns", "customDropDowns", "customElementsAfter", "customElementsBefore", "customTitle", "dataItemConverter", "defaultChain", "defaultSortedColumn", "defaultSortedColumns", "defaultSortOrder", "dropDownItemClick", "dropdownSelectedCallback", "enableSearch", "expandContainer", "feed", "instruments", "instrumentSubTypes", "instrumentTypes", "issuer", "issuersHasAll", "issuersHasNone", "linkAction", "maxItems", "onInstrumentSelected", "onItemCountChange", "preferredExpiries", "preferredIssuers", "preferredUnderlying", "secondarySortedColumn", "selectedInstrument", "selectedRow", "showDropDowns", "showExpiries", "showFilters", "showIssuers", "showUnderlyings", "tagConverter", "types", "underlyingsHasAll", "underlyingsHasNone", "useChains", "clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "CommonListWidgetBase": ["availableColumns", "className", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory"]
  "QuoteListWidget": ["chainButtonTitle", "chains", "chainsProviderId", "columns", "customDropDowns", "customElementsAfter", "customElementsBefore", "customTitle", "dataItemConverter", "defaultChain", "defaultSortedColumn", "defaultSortedColumns", "defaultSortOrder", "dropDownItemClick", "dropdownSelectedCallback", "enableSearch", "expandContainer", "feed", "instruments", "instrumentSubTypes", "instrumentTypes", "issuer", "issuersHasAll", "issuersHasNone", "linkAction", "maxItems", "onInstrumentSelected", "onItemCountChange", "preferredExpiries", "preferredIssuers", "preferredUnderlying", "secondarySortedColumn", "selectedInstrument", "selectedRow", "showDropDowns", "showExpiries", "showFilters", "showIssuers", "showUnderlyings", "tagConverter", "types", "underlyingsHasAll", "underlyingsHasNone", "useChains"]
  "TradingWidget": ["clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
related_types: ["WTK.CommonListOptions"]
reference_count: 16
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.WidgetDecimals", "WTK.ListLayout", "WTK.QuoteListTabOptions", "WTK.ListUIFactory", "WTK.DropDownOptions", "WTK.Field", "WTK.SortColumnDefinition", "WTK.SortOrder", "WTK.LinkAction", "WTK.CommonListOptions", "WTK.QuoteListWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# QuoteListWidgetOptions

QuoteListWidgetOptions class extending CommonListOptions class.

Set options for the QuoteListWidget.

#### See

QuoteListWidget | WidgetOptions | CommonListOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.QuoteListWidgetOptions))

- CommonListOptions

  - QuoteListWidgetOptions

### Widget Options

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

Inherited from CommonListOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from CommonListOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from CommonListOptions.linkChannels

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

Inherited from CommonListOptions.navButton

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

Inherited from CommonListOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from CommonListOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from CommonListOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from CommonListOptions.persistState

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

Inherited from CommonListOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from CommonListOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from CommonListOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from CommonListOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from CommonListOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from CommonListOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from CommonListOptions.usePerfectScrollbar

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

Inherited from CommonListOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from CommonListOptions.widgetTitle

### CommonListWidgetBase

#### `Experimental` availableColumns

```ts
availableColumns: any[]
```

If an array of columns are supplied these columns can be added by the user.

Make sure to set loadSavedColumns to 'true' if this should be preserved.

(Experimental feature)

##### Default Value

`undefined`

Inherited from CommonListOptions.availableColumns

#### className

```ts
className: string
```

A special className you want assigned to the lists table-element.

##### Default Value

`undefined`

Inherited from CommonListOptions.className

#### compareCaseInsensitive

```ts
compareCaseInsensitive: boolean = false
```

Enable / disable case insensitive sorting.

##### Default Value

`false`

Inherited from CommonListOptions.compareCaseInsensitive

#### compareCaseInsensitiveLocale

```ts
compareCaseInsensitiveLocale: string
```

Optional locale for case insensitive sorting.

##### Default Value

`undefined`

Inherited from CommonListOptions.compareCaseInsensitiveLocale

#### createExpandRow

```ts
createExpandRow: (
    item: any,
    rowElem: HTMLElement,
    additional?: any,
) => () => void
```

Callback createExpandRow.

##### Type Declaration

- (item: any, rowElem: HTMLElement, additional?: any): () => void

  ##### Parameters

  - item: any
  - rowElem: HTMLElement
  - `Optional` additional: any

  ##### Returns () => void

##### Default Value

`undefined`

Inherited from CommonListOptions.createExpandRow

#### decimals

```ts
decimals: number | WidgetDecimals = WidgetDecimals.INSTRUMENT
```

Set to change widgets displayed number of decimals

Available values: `WidgetDecimals.FEED, WidgetDecimals.INSTRUMENT, WidgetDecimals.DEFAULT(usualy 2) or a number`

##### See

[WidgetDecimals](./WTK.WidgetDecimals.md)

##### Default Value

`WidgetDecimals.INSTRUMENT`

Inherited from CommonListOptions.decimals

#### defaultContent

```ts
defaultContent: any
```

Sets default content.

Plain-text, markup-text or HTMLElement to be viewed if the list is empty.

##### Default Value

`undefined`

Inherited from CommonListOptions.defaultContent

#### enableChangeStatusColors

```ts
enableChangeStatusColors: boolean = false
```

If `true`, columns in the table that indicates a change or percentage change will show a color
(actually be assigned a class, you can style it any way you want) to indicate if the change is positive or negative.

##### Default Value

`false`

Inherited from CommonListOptions.enableChangeStatusColors

#### `Experimental` enableColumnsMove

```ts
enableColumnsMove: boolean = false
```

If set to `true` columns can be moved around by the user.

Make sure to set loadSavedColumns to `true` if this should be preserved.

(Experimental feature, default will be changed to `true` at some time in the future)

##### Default Value

`false`

Inherited from CommonListOptions.enableColumnsMove

#### `Experimental` enableColumnsResize

```ts
enableColumnsResize: boolean = false
```

If set to `true` columns can be resized by the user.

Make sure to set loadSavedColumns to `true` if this should be preserved.

(Experimental feature, default will be changed to ''true'' at some time in the future)

##### Default Value

`false`

Inherited from CommonListOptions.enableColumnsResize

#### enableFixedHeader

```ts
enableFixedHeader: boolean = false
```

If set to `true` headers are fixed.

##### Default Value

`false`

Inherited from CommonListOptions.enableFixedHeader

#### excludeUnsortedState

```ts
excludeUnsortedState: boolean = false
```

This option will allow to force sorting the list if it is `true` and the list is sorted
(disable sorting order none).

If it is `false` then the end user will have a three sorting state available Asc, Desc and None.

##### Default Value

`false`

Inherited from CommonListOptions.excludeUnsortedState

#### expandableRows

```ts
expandableRows: boolean = false
```

Makes rows expandable

##### Default Value

`false`

Inherited from CommonListOptions.expandableRows

#### extraColumns

```ts
extraColumns: (string | object)[]
```

Contains columns that will be shown as a popup on mouse-click for columns with Field.showExtra set to `true`.

##### Default Value

`undefined`

Inherited from CommonListOptions.extraColumns

#### extraOptions

```ts
extraOptions: object
```

Options to set on the popup window containing the extraColumns.

##### Default Value

`undefined`

Inherited from CommonListOptions.extraOptions

#### interactionHighlight

```ts
interactionHighlight: boolean = false
```

If `true`, the rows in the table will be highlighted when you hover the mouse over it,
to indicate that you can interact with the row.

This property doesn’t enable any event-handling, you have to do that separately.
How to do this is specified in the documentation of the specific widget you are using.

##### Default Value

`false`

Inherited from CommonListOptions.interactionHighlight

#### layout

```ts
layout: ListLayout = ListLayout.TABLE
```

Sets the layout for the widget.

Can be one of:

- `Infront.ListLayout.TABLE`
- `Infront.ListLayout.DIV`
- `Infront.ListLayout.CARD`
- `Infront.ListLayout.COMPACT`

##### See

[ListLayout](./WTK.ListLayout.md)

##### Default Value

`ListLayout.TABLE`

Inherited from CommonListOptions.layout

#### linkTrigger

```ts
linkTrigger: any = ColumnManager.LINK_TARGET_ROW_CLICK
```

Link trigger type.

##### See

ColumnManager

##### Default Value

`ColumnManager.LINK_TARGET_ROW_CLICK`

Inherited from CommonListOptions.linkTrigger

#### loadSavedColumns

```ts
loadSavedColumns: boolean = false
```

If `true`, the saved columns structure would be auto-loaded before creating the table widget.

##### Default Value

`false`

Inherited from CommonListOptions.loadSavedColumns

#### onColumnDeleted

```ts
onColumnDeleted: (col: any, index: number) => void
```

Callback that is called when a column is deleted.

The callback receives the column and its index.

##### Type Declaration

- (col: any, index: number): void

  ##### Parameters

  - col: any
  - index: number

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnDeleted

#### onColumnExpand

```ts
onColumnExpand: (element: HTMLElement) => void
```

Callback that is called when position item is expanded.

##### Type Declaration

- (element: HTMLElement): void

  ##### Parameters

  - element: HTMLElement

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnExpand

#### onColumnInsert

```ts
onColumnInsert: (spec: any, index: number) => void
```

Callback that is called when a column is inserted.

The callback receives the column definition and its index

##### Type Declaration

- (spec: any, index: number): void

  ##### Parameters

  - spec: any
  - index: number

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnInsert

#### onColumnMoved

```ts
onColumnMoved: (col: any, fromIdx: number, toIdx: number) => void
```

Callback that is called when the column is moved.

The callback receives the column with from and to index number as arguments.

##### Type Declaration

- (col: any, fromIdx: number, toIdx: number): void

  ##### Parameters

  - col: any
  - fromIdx: number
  - toIdx: number

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnMoved

#### onColumnMoving

```ts
onColumnMoving: (col: any, fromIdx: number, toIdx: number) => boolean
```

Callback that is called when the column is moving.

The callback receives the column with from and to index number as arguments.

##### Type Declaration

- (col: any, fromIdx: number, toIdx: number): boolean

  ##### Parameters

  - col: any
  - fromIdx: number
  - toIdx: number

  ##### Returns boolean

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnMoving

#### onColumnsChanged

```ts
onColumnsChanged: () => void
```

This event fires on after changing the structure of the columns by using addColumn, insertColumn, moveColumn, removeColumn or resetColumns.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnsChanged

#### onColumnsResized

```ts
onColumnsResized: (indexes: number[]) => void
```

Callback that is called when columns are resized.

##### Type Declaration

- (indexes: number[]): void

  ##### Parameters

  - indexes: number[]

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onColumnsResized

#### onResetColumns

```ts
onResetColumns: () => void
```

Callback that is called when the columns is reset.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onResetColumns

#### onSettingsClicked

```ts
onSettingsClicked: () => void
```

Callback that is called when the settings is clicked.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.onSettingsClicked

#### rowSelectable

```ts
rowSelectable: boolean = false
```

If `true`, the user can select rows in the table.

##### Default Value

`false`

Inherited from CommonListOptions.rowSelectable

#### sortable

```ts
sortable: boolean = false
```

If `true`, the user can sort the table by clicking on the column-header.

Sorting may not be available for all types of columns.

##### Default Value

`false`

Inherited from CommonListOptions.sortable

#### tabs

```ts
tabs: QuoteListTabOptions[]
```

Here you can specify the tabs if the table supports tabs.

If you defined this, the CommonListOptions.columns property is going to be ignored.

Each tab must be an object with the following parameters:

##### id

- Type: `string`
- Required: Yes
- Defines the tab’s name.

##### label

- Type: `string`
- Required: Yes
- Defines the title of the tab.

##### columns

- Type: `(string | object)[]`
- Required: Yes
- This is where you specify which columns you want in your tab. Columns can be specified as array of names or objects.

##### See

QuoteListTabOptions

##### Default Value

`undefined`

Inherited from CommonListOptions.tabs

#### uiFactory

```ts
uiFactory: ListUIFactory
```

uiFactory

##### See

[ListUIFactory](./WTK.ListUIFactory.md)

##### Default Value

`undefined`

Inherited from CommonListOptions.uiFactory

### QuoteListWidget

#### chainButtonTitle

```ts
chainButtonTitle: string
```

Use this property to alter chains button title.

##### Default Value

`undefined`

#### chains

```ts
chains: Chain[] = []
```

The chains to have available in the drop-down menu.

The property [QuoteListWidgetOptions.useChains](#usechains) must be set to `true` in order to show chains.

##### Example

```ts
`object[{feed: [number], name: [String], description: [String]}]`
```

##### See

Infront.Chain

##### Default Value

`[]`

#### chainsProviderId

```ts
chainsProviderId: number
```

Allow to load specially defined provider chains.

Contact Infront support to get your provider id.

##### Default Value

`undefined`

#### columns

```ts
columns: (string | object)[] = ...
```

This is where you specify which columns you want in your table, and where you want them.
Columns can be specified as a name or an object of parameters.

##### Default Value

`["TICKER", "FULL_NAME", "LAST_VALID", "CHANGE", "PCT_CHANGE", "HIGH", "LOW", "TIME"]`

Overrides CommonListOptions.columns

#### customDropDowns

```ts
customDropDowns: DropDownOptions[]
```

Creates custom dropwdows in QuoteList toolbar.

##### See

DropDownOptions

##### Default Value

`undefined`

#### customElementsAfter

```ts
customElementsAfter: HTMLElement[]
```

Add custom HTML element (s) to the end of QuoteListWidgets toolbar.

##### Default Value

`undefined`

#### customElementsBefore

```ts
customElementsBefore: HTMLElement[]
```

Add custom HTML element (s) to the beginning of QuoteListWidgets toolbar.

##### Default Value

`undefined`

#### customTitle

```ts
customTitle: HTMLElement
```

Custom title.

##### Default Value

`undefined`

#### dataItemConverter

```ts
dataItemConverter: (item: BaseDataItem, column: Field) => BaseDataItem
```

Callback data item converter.

##### Type Declaration

- (item: BaseDataItem, column: Field): BaseDataItem

  ##### Parameters

  - item: BaseDataItem
  - column: Field

  ##### Returns BaseDataItem

##### Default Value

`undefined`

#### defaultChain

```ts
defaultChain: string | Chain = null
```

The chain to show as default when the widget loads.

##### See

Infront.Chain

##### Default Value

`first object in the chain-array`

#### defaultSortedColumn

```ts
defaultSortedColumn: any
```

##### Deprecated

use [QuoteListWidgetOptions.defaultSortedColumns](#defaultsortedcolumns) array instead to set sortColumns and sortOrder per column

Overrides CommonListOptions.defaultSortedColumn

#### defaultSortedColumns

```ts
defaultSortedColumns: SortColumnDefinition[] = []
```

The array of columns you want the table to be sorted by as default.

Column can be id’ed by name or index.
SortOrder determines the default sort order.
excludeUnsorted removes the unsorted state from the available sorting states of the column.

##### See

[SortColumnDefinition](./WTK.SortColumnDefinition.md)

##### Default Value

`[]`

#### defaultSortOrder

```ts
defaultSortOrder: SortOrder = SortOrder.Desc
```

##### Deprecated

use [QuoteListWidgetOptions.defaultSortedColumns](#defaultsortedcolumns) array instead to set sortColumns and sortOrder per column

Overrides CommonListOptions.defaultSortOrder

#### dropDownItemClick

```ts
dropDownItemClick: (item: any) => void
```

Callback that is called when the dropdown item is clicked. Returns clicked item.

It is possible to use the property "id" to know the origin of the item.

If the clicked item belongs to issuers then

- the "id" would be "issuersDropDown",
- underlyings would be "underlyingDropDown",
- expiries would be "expiryDatesDropDown"
- and chains would be "chainsDropDown".

It is possible to assign user-defined id for custom dropdowns by setting the desired "id" in DropDownOptions.

##### Type Declaration

- (item: any): void

  ##### Parameters

  - item: any

  ##### Returns void

##### Default Value

`undefined`

#### dropdownSelectedCallback

```ts
dropdownSelectedCallback: (
    dropdown: "underlying" | "issuer" | "chainName" | "expiryDates",
    items: string[],
) => void
```

Callback for selection made from a dropdown.

##### Type Declaration

- (dropdown: "underlying" | "issuer" | "chainName" | "expiryDates",    items: string[],): void

  ##### Parameters

  - dropdown: "underlying" | "issuer" | "chainName" | "expiryDates"
  - items: string[]

  ##### Returns void

##### Default Value

`undefined`

#### enableSearch

```ts
enableSearch: boolean = false
```

Enables search in widget.

##### Default Value

`false`

#### expandContainer

```ts
expandContainer: HTMLElement
```

Expand container.

##### Default Value

`undefined`

#### feed

```ts
feed: number
```

Feed number for displaying all symbols on that feed.

##### Default Value

`undefined`

#### instruments

```ts
instruments: Instrument[]
```

Array of Instrument objects, the initial contents of this list.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### instrumentSubTypes

```ts
instrumentSubTypes: string[]
```

Filters given instrument subtypes:

List of subtypes is very long and differ from feed to feed, example subtypes:

`"STOCK_RIGHT", "STOCK_SUBSCRIPTION_OPTION", "ETF", "FUND_UCITS_ETF", "BOND_UTC"`

##### Default Value

`undefined`

#### instrumentTypes

```ts
instrumentTypes: string[]
```

Filters given instrument types:

`"NONE", "STOCK", "NEWS", "BOND", "EURO_OPTION", "FUTURES", "COMMODITY", "INDEX", "FOREX", "US_OPTION", "FUND", "OPTION", "COMBO", "CFD", "CERTIFICATE", "UNKNOWN"`

##### Default Value

`undefined`

#### issuer

```ts
issuer: string
```

Use this property to limit the results list to show only instruments from assigned issuer.
The user will not be able to change the issuer later.

##### Default Value

`undefined`

#### issuersHasAll

```ts
issuersHasAll: boolean = true
```

Adds "All" option to the issuers list to allow the user to ignore filtering by issuer.

##### Default Value

`true`

#### issuersHasNone

```ts
issuersHasNone: boolean = true
```

Adds "None" option to the issuers list to filter items that do not have any issuer.

##### Default Value

`true`

#### linkAction

```ts
linkAction: LinkAction = LinkAction.None
```

Defines the behaviour of the list when it receives an incoming link event.

##### See

[LinkAction](./WTK.LinkAction.md)

##### Default Value

`Infront.LinkAction.None`

#### maxItems

```ts
maxItems: number
```

If set, the visible number of items is limited to the given count.
To change this count while widget is created, use the `Infront.TradingTableWidgetBase.setMaxItems` function.

##### Default Value

`undefined`

#### onInstrumentSelected

```ts
onInstrumentSelected: (instrument: Instrument) => void
```

Callback that is called when a row in the list is clicked.

The callback receives the concrete instrument that was clicked, as an Infront.Instrument object, as a parameter.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### See

Infront.Instrument

##### Default Value

`undefined`

#### onItemCountChange

```ts
onItemCountChange: (items: number) => void
```

Event that triggers whenever the count of items change for updating any external counts.

##### Type Declaration

- (items: number): void

  ##### Parameters

  - items: number

  ##### Returns void

##### Default Value

`undefined`

#### preferredExpiries

```ts
preferredExpiries: string[]
```

This property selects the default expiry dates, and allows the user to change the expiry dates.

##### Default Value

`undefined`

#### preferredIssuers

```ts
preferredIssuers: string[]
```

This property selects the default issuer, and allows the user to change the issuer.

##### Default Value

`undefined`

#### preferredUnderlying

```ts
preferredUnderlying: string
```

This property selects the default underlying, and allows the user to change the underlying.

##### Default Value

`undefined`

#### secondarySortedColumn

```ts
secondarySortedColumn: any = null
```

##### Deprecated

use [QuoteListWidgetOptions.defaultSortedColumns](#defaultsortedcolumns) array instead to set sortColumns and sortOrder per column

#### selectedInstrument

```ts
selectedInstrument: Instrument
```

Initially selected instrument.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### selectedRow

```ts
selectedRow: number
```

Pre-selects the given row as a QuoteListWidgetOptions.rowSelectable.

##### Default Value

`undefined`

#### showDropDowns

```ts
showDropDowns: boolean = true
```

Gives the user a option to hide the issuer and underlying dropdown for quotelists.

##### Default Value

`true`

#### showExpiries

```ts
showExpiries: boolean = true
```

Filters the list based on Expiries.

[QuoteListWidgetOptions.showFilters](#showfilters) should be set to `true` in order for this to work.

##### Default Value

`true`

#### showFilters

```ts
showFilters: boolean = null
```

By set this to `true`, It enables the user to filter the list by Issuers, Underlyings and Expiry dates.

##### Remarks

use `null` instead of ` false` to get the same behavior - compatibility mode

##### Default Value

`null`

#### showIssuers

```ts
showIssuers: boolean = true
```

Filters the list based on issuers.

[QuoteListWidgetOptions.showFilters](#showfilters) should be set to `true` in order for this to work.

If issuer has not been assigned, it will list all instrument

##### Default Value

`true`

#### showUnderlyings

```ts
showUnderlyings: boolean = true
```

Filters the list based on underlyings. showFilters should be set to `true` in order for this to work.

This is used only when showFilters=true

##### Default Value

`true`

#### tagConverter

```ts
tagConverter: (item: BaseDataItem, column: Field) => number
```

Callback tag converter

##### Type Declaration

- (item: BaseDataItem, column: Field): number

  ##### Parameters

  - item: BaseDataItem
  - column: Field

  ##### Returns number

##### Default Value

`undefined`

#### types

```ts
types: string[] = null
```

Array of types you want to show. Default are all types.

##### Default Value

`["FEED","INDEX","GLOBAL"]`

#### underlyingsHasAll

```ts
underlyingsHasAll: boolean = false
```

Adds "All" option to the underlyings list to allow the user to ignore filtering by underlyings.

##### Default Value

`false`

#### underlyingsHasNone

```ts
underlyingsHasNone: boolean = true
```

Adds "None" option to the underlyings list to filter items that do not have an underlying.

##### Default Value

`true`

#### useChains

```ts
useChains: boolean = false
```

Enable / disable chains.

##### Default Value

`false`

### TradingWidget

#### clickToLogin

```ts
clickToLogin: boolean = false
```

Option for deciding if the widget should show the trading Infront.login when clicked on, if the user isn’t Infront.logged in to trading.

##### Default Value

`false`

Inherited from CommonListOptions.clickToLogin

#### hasTradingContentCallback

```ts
hasTradingContentCallback: (hasTradingContent: boolean, item?: any) => void
```

Callback that indicates that trading content has been received.

##### Type Declaration

- (hasTradingContent: boolean, item?: any): void

  ##### Parameters

  - hasTradingContent: boolean
  - `Optional` item: any

  ##### Returns void

##### Default Value

`undefined`

Inherited from CommonListOptions.hasTradingContentCallback

#### rememberCanceledLogin

```ts
rememberCanceledLogin: boolean = false
```

Remembers that Infront.login is canceled, ensures you wont be Infront.logged in

##### Default Value

`false`

Inherited from CommonListOptions.rememberCanceledLogin

#### tradingLoginCallback

```ts
tradingLoginCallback: (didLogin: boolean, item?: any) => void = null
```

Callback that indicates that the user has Infront.logged in to trading.

##### Type Declaration

- (didLogin: boolean, item?: any): void

  ##### Parameters

  - didLogin: boolean
  - `Optional` item: any

  ##### Returns void

##### Default Value

`null`

Inherited from CommonListOptions.tradingLoginCallback
