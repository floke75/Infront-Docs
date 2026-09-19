---
title: "MyListsWidgetOptions"
qualified_name: "WTK.MyListsWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > MyListsWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.MyListsWidgetOptions.html"
defines: ["MyListsWidgetOptions"]
member_count: 69
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableColumns", "className", "columns", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "defaultSortedColumn", "defaultSortOrder", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory", "hideListSelector", "hideSearchWidget", "instrumentList", "limitToChains", "limitToFeeds", "linkAction", "notificationsTargetElementId", "onInstrumentAdded", "onInstrumentRemoved", "rightAlignSearchBoxDropdown", "selectedInstrument", "selectedList", "selectedRow", "clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "CommonListWidgetBase": ["availableColumns", "className", "columns", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "defaultSortedColumn", "defaultSortOrder", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory"]
  "MyListsWidget": ["hideListSelector", "hideSearchWidget", "instrumentList", "limitToChains", "limitToFeeds", "linkAction", "notificationsTargetElementId", "onInstrumentAdded", "onInstrumentRemoved", "rightAlignSearchBoxDropdown", "selectedInstrument", "selectedList", "selectedRow"]
  "TradingWidget": ["clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
related_types: ["WTK.CommonListOptions"]
reference_count: 14
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.WidgetDecimals", "WTK.Field", "WTK.SortOrder", "WTK.ListLayout", "WTK.QuoteListTabOptions", "WTK.ListUIFactory", "WTK.LinkAction", "WTK.CommonListOptions", "WTK.MyListsWidget", "WTK.WidgetOptions", "WTK.InfrontWidget"]
---

# MyListsWidgetOptions

MyListsWidgetOptions class extending CommonListOptions class.

Set options for the MyListsWidget.

#### See

MyListsWidget | WidgetOptions | CommonListOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.MyListsWidgetOptions))

- CommonListOptions

  - MyListsWidgetOptions

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

#### columns

```ts
columns: any[] = []
```

This is where you specify which columns you want in your table, and where you want them.
Columns can be specified as a name or an object of parameters.

##### Default Value

`[]`

Inherited from CommonListOptions.columns

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

#### defaultSortedColumn

```ts
defaultSortedColumn: string | number | Field = 0
```

The column you want the table sorted by as default.

This can either be an Field or the columns index in the columns-array, or the name of the column as a string.

##### See

Field

##### Default Value

`0`

Inherited from CommonListOptions.defaultSortedColumn

#### defaultSortOrder

```ts
defaultSortOrder: SortOrder = SortOrder.Desc
```

Sort order (Asc or Desc) for the default sorted column.

Can be one of: `SortOrder.Asc`, ` SortOrder.Desc`

##### See

[SortOrder](./WTK.SortOrder.md)

##### Default Value

`SortOrder.Desc`

Inherited from CommonListOptions.defaultSortOrder

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

### MyListsWidget

#### hideListSelector

```ts
hideListSelector: boolean = false
```

If `true` it will remove list selector.

##### Default Value

`false`

#### hideSearchWidget

```ts
hideSearchWidget: boolean
```

Allow show / hide for the search box to add instruments to the list.

##### Default Value

`undefined`

#### instrumentList

```ts
instrumentList: () => Instrument[]
```

Callback to provide list of instruments.

##### Type Declaration

- (): Instrument[]

  ##### Returns Instrument[]

##### Default Value

`undefined`

#### limitToChains

```ts
limitToChains: any[]
```

Limit search results to specified chains.

Parameter is an array of chain objects which has 2 parameter `feed: number` and ` name: string`.

##### Default Value

`undefined`

#### limitToFeeds

```ts
limitToFeeds: number[]
```

Limiting search result to the specific feeds.

##### Default Value

`undefined`

#### linkAction

```ts
linkAction: LinkAction = LinkAction.None
```

Sets link action.

##### See

[LinkAction](./WTK.LinkAction.md)

##### Default Value

`Infront.LinkAction.None`

#### notificationsTargetElementId

```ts
notificationsTargetElementId: string
```

Sets target element id which should be same as the element id assigned to the widget.

##### Default Value

`false`

#### onInstrumentAdded

```ts
onInstrumentAdded: (listName: string, instrument: Instrument) => void
```

This callback will be called after adding instrument to the selected list.

##### Type Declaration

- (listName: string, instrument: Instrument): void

  ##### Parameters

  - listName: string
  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### onInstrumentRemoved

```ts
onInstrumentRemoved: (listName: string, instrument: Instrument) => void
```

This callback will be called after removing an instrument from the selected list.

##### Type Declaration

- (listName: string, instrument: Instrument): void

  ##### Parameters

  - listName: string
  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

#### rightAlignSearchBoxDropdown

```ts
rightAlignSearchBoxDropdown: boolean = false
```

Aligns search box dropdown to right.

##### Default Value

`false`

#### selectedInstrument

```ts
selectedInstrument: Instrument
```

Selected instrument.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### selectedList

```ts
selectedList: (listName: string) => void
```

This callback will be called when a list has been selected.

##### Type Declaration

- (listName: string): void

  ##### Parameters

  - listName: string

  ##### Returns void

##### Default Value

`undefined`

#### selectedRow

```ts
selectedRow: number
```

Selected row.

##### Default Value

`undefined`

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
