---
title: "PutCallWidgetOptions"
qualified_name: "WTK.PutCallWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > PutCallWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.PutCallWidgetOptions.html"
defines: ["PutCallWidgetOptions"]
member_count: 74
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableColumns", "className", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "tabs", "uiFactory", "columns", "defaultExpiry?", "defaultRange?", "defaultSortedColumn", "defaultSortOrder", "defaultUnderlying", "feed", "linkAction", "onExpiryChanged?", "onRangeChanged?", "onRowClicked", "onUnderlyingChanged?", "onUnderlyingClicked", "showAllTab", "showFutureForward", "showLastInTitle", "showRangeChooser", "showSymbolPanel", "showTabs", "showTitle", "showUnderlyingChooser", "sortable", "clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "CommonListWidgetBase": ["availableColumns", "className", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "tabs", "uiFactory"]
  "PutCallWidget": ["columns", "defaultExpiry?", "defaultRange?", "defaultSortedColumn", "defaultSortOrder", "defaultUnderlying", "feed", "linkAction", "onExpiryChanged?", "onRangeChanged?", "onRowClicked", "onUnderlyingChanged?", "onUnderlyingClicked", "showAllTab", "showFutureForward", "showLastInTitle", "showRangeChooser", "showSymbolPanel", "showTabs", "showTitle", "showUnderlyingChooser", "sortable"]
  "TradingWidget": ["clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
related_types: ["WTK.CommonListOptions"]
reference_count: 15
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.WidgetDecimals", "WTK.ListLayout", "WTK.QuoteListTabOptions", "WTK.ListUIFactory", "WTK.PutCallExpirySelection", "WTK.SortOrder", "WTK.LinkAction", "WTK.CommonListOptions", "WTK.PutCallWidget", "WTK.WidgetOptions", "WTK.InfrontWidget", "WTK.Field"]
---

# PutCallWidgetOptions

PutCallWidgetOptions class extending CommonListOptions class.

Set options for the PutCallWidget.

#### See

PutCallWidget | WidgetOptions | CommonListOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.PutCallWidgetOptions))

- CommonListOptions

  - PutCallWidgetOptions

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

### PutCallWidget

#### columns

```ts
columns: (string | object)[] = ...
```

This is where you specify which columns you want in your table, and where you want them.
Columns can be specified as a name or an object of parameters.

##### Default Value

`["LAST", "VOLUME", "OPEN_INTEREST", "TIME", "BID", "ASK", "STRIKE_PRICE", "EXPIRY_DATE"]`

Overrides CommonListOptions.columns

#### `Optional` defaultExpiry

```ts
defaultExpiry?: PutCallExpirySelection
```

Sets the initial expiry selection after underlyings are loaded.

When the selection cannot be matched in the current expiry list (e.g. after
changing underlying), the widget falls back to the first available real expiry.

##### See

[PutCallExpirySelection](./WTK.PutCallExpirySelection.md)

##### Default Value

`undefined`

#### `Optional` defaultRange

```ts
defaultRange?: PutCallRange
```

Sets the initial range selection.

When provided, takes precedence over the internally stored range.

##### Default Value

`undefined`

#### defaultSortedColumn

```ts
defaultSortedColumn: string | number = 6
```

The column you want the table sorted by as default.

This can either be the columns index in the columns-array, or the name of the column as a string.

##### Default Value

`6`

Overrides CommonListOptions.defaultSortedColumn

#### defaultSortOrder

```ts
defaultSortOrder: SortOrder = SortOrder.Asc
```

Sort order (Asc or Desc) for the default sorted column.

Can be one of: `Infront.SortOrder.Asc`, ` Infront.SortOrder.Desc`

##### See

[SortOrder](./WTK.SortOrder.md)

##### Default Value

`SortOrder.Asc`

Overrides CommonListOptions.defaultSortOrder

#### defaultUnderlying

```ts
defaultUnderlying: Instrument
```

Sets the selected underlying after the widget is initialized if the given feed has the passed instrument.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### feed

```ts
feed: number
```

Feed number for displaying underlyings on that feed.

##### Default Value

`undefined`

#### linkAction

```ts
linkAction: LinkAction = LinkAction.None
```

Link action.

##### See

[LinkAction](./WTK.LinkAction.md)

##### Default Value

`LinkAction.None`

#### `Optional` onExpiryChanged

```ts
onExpiryChanged?: (expiry: PutCallExpirySelection) => void
```

Callback on expiry changed.

Fires whenever the expiry selector value changes, including the initial selection
triggered by a new underlying.

##### Type Declaration

- (expiry: PutCallExpirySelection): void

  ##### Parameters

  - expiry: [PutCallExpirySelection](./WTK.PutCallExpirySelection.md)

  ##### Returns void

##### See

[PutCallExpirySelection](./WTK.PutCallExpirySelection.md)

##### Default Value

`undefined`

#### `Optional` onRangeChanged

```ts
onRangeChanged?: (rangeIndex: PutCallRange) => void
```

Callback on range changed.

Fires whenever the range selector value changes, including the initial selection.

The `rangeIndex` matches [defaultRange](#defaultrange): `0` = no range filter, `1` = active 5, `2` = active 7.

##### Type Declaration

- (rangeIndex: PutCallRange): void

  ##### Parameters

  - rangeIndex: PutCallRange

  ##### Returns void

##### Default Value

`undefined`

#### onRowClicked

```ts
onRowClicked: (callInstrument: Instrument, putInstrument: Instrument) => void
```

Callback on row clicked.

##### Type Declaration

- (callInstrument: Instrument, putInstrument: Instrument): void

  ##### Parameters

  - callInstrument: Instrument
  - putInstrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### `Optional` onUnderlyingChanged

```ts
onUnderlyingChanged?: (instrument: Instrument) => void
```

Callback on underlying changed.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### onUnderlyingClicked

```ts
onUnderlyingClicked: (instrument: Instrument) => void
```

Callback on underlying table clicked.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### showAllTab

```ts
showAllTab: boolean = false
```

Allow show / hide the tab "All", which lists all.

##### Default Value

`false`

#### showFutureForward

```ts
showFutureForward: boolean = false
```

Displays the list of future / forward options for selected underlying.

##### Default Value

`false`

#### showLastInTitle

```ts
showLastInTitle: boolean = true
```

Displays the last price of the selected symbol in widget title.

##### Default Value

`true`

#### showRangeChooser

```ts
showRangeChooser: boolean = true
```

Show / hide range selector which can limit the number of listed symbols to the nearest five or seven symbols by strike price.

Range chooser is not available for "All", "Weekly" and "Future / Forward" tabs.

##### Default Value

`true`

#### showSymbolPanel

```ts
showSymbolPanel: boolean = false
```

Displays symbol info on the top-right side.

This panel contains information about the selected symbol like Name, bid, ask and last price.

##### Default Value

`false`

#### showTabs

```ts
showTabs: boolean = false
```

Displays expiry dates in a tab bar.

If this property is active, the expiry selector is going to be hidden when specific date is selected.

##### Default Value

`false`

#### showTitle

```ts
showTitle: boolean = true
```

Displays widget title.

##### Default Value

`true`

#### showUnderlyingChooser

```ts
showUnderlyingChooser: boolean = true
```

Show / hide list of underlying symbols.

This property can be used in combination with [defaultUnderlying](#defaultunderlying) to restrict the user from selecting a different underlying symbol.

##### Default Value

`true`

#### sortable

```ts
sortable: boolean = true
```

If `true`, the user can sort the table by clicking on the column-header.

Sorting may not be available for all types of columns.

##### Default Value

`true`

Overrides CommonListOptions.sortable

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
