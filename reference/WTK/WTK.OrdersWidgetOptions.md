---
title: "OrdersWidgetOptions"
qualified_name: "WTK.OrdersWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > OrdersWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.OrdersWidgetOptions.html"
defines: ["OrdersWidgetOptions"]
member_count: 77
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableColumns", "className", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "defaultSortedColumn", "defaultSortOrder", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory", "columns", "customFilter", "daysBack", "hideStatuses", "hideTypes", "modifyClick", "onOrderSelected", "showHistoricOrders", "showStatuses", "showTodaysOrders", "showTypes", "stopLossOnly", "onInstrumentSelected", "clickToLogin", "displayRowColumns", "emptyListMessage", "hideEmptyList", "maxItems", "onItemCountChange", "showDeleteAll", "showPortfolio", "showPortfolioSelect", "titleClick", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "CommonListWidgetBase": ["availableColumns", "className", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "defaultSortedColumn", "defaultSortOrder", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory"]
  "OrdersWidget": ["columns", "customFilter", "daysBack", "hideStatuses", "hideTypes", "modifyClick", "onOrderSelected", "showHistoricOrders", "showStatuses", "showTodaysOrders", "showTypes", "stopLossOnly"]
  "PositionsWidget": ["onInstrumentSelected"]
  "TradingTableWidget": ["clickToLogin", "displayRowColumns", "emptyListMessage", "hideEmptyList", "maxItems", "onItemCountChange", "showDeleteAll", "showPortfolio", "showPortfolioSelect", "titleClick"]
  "TradingWidget": ["hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
related_types: ["WTK.TradingTableWidgetOptions"]
reference_count: 14
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.WidgetDecimals", "WTK.Field", "WTK.SortOrder", "WTK.ListLayout", "WTK.QuoteListTabOptions", "WTK.ListUIFactory", "WTK.TradingTableWidgetOptions", "WTK.OrdersWidget", "WTK.WidgetOptions", "WTK.InfrontWidget", "WTK.CommonListOptions"]
---

# OrdersWidgetOptions

OrdersWidgetOptions class extending TradingTableWidgetOptions class.

Set options for the OrdersWidget.

#### See

OrdersWidget | WidgetOptions | TradingTableWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrdersWidgetOptions))

- TradingTableWidgetOptions

  - OrdersWidgetOptions

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

Inherited from TradingTableWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from TradingTableWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.linkChannels

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

Inherited from TradingTableWidgetOptions.navButton

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

Inherited from TradingTableWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from TradingTableWidgetOptions.persistState

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

Inherited from TradingTableWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from TradingTableWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from TradingTableWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.usePerfectScrollbar

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

Inherited from TradingTableWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.widgetTitle

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

Inherited from TradingTableWidgetOptions.availableColumns

#### className

```ts
className: string
```

A special className you want assigned to the lists table-element.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.className

#### compareCaseInsensitive

```ts
compareCaseInsensitive: boolean = false
```

Enable / disable case insensitive sorting.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.compareCaseInsensitive

#### compareCaseInsensitiveLocale

```ts
compareCaseInsensitiveLocale: string
```

Optional locale for case insensitive sorting.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.compareCaseInsensitiveLocale

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

Inherited from TradingTableWidgetOptions.createExpandRow

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

Inherited from TradingTableWidgetOptions.decimals

#### defaultContent

```ts
defaultContent: any
```

Sets default content.

Plain-text, markup-text or HTMLElement to be viewed if the list is empty.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.defaultContent

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

Inherited from TradingTableWidgetOptions.defaultSortedColumn

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

Inherited from TradingTableWidgetOptions.defaultSortOrder

#### enableChangeStatusColors

```ts
enableChangeStatusColors: boolean = false
```

If `true`, columns in the table that indicates a change or percentage change will show a color
(actually be assigned a class, you can style it any way you want) to indicate if the change is positive or negative.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.enableChangeStatusColors

#### `Experimental` enableColumnsMove

```ts
enableColumnsMove: boolean = false
```

If set to `true` columns can be moved around by the user.

Make sure to set loadSavedColumns to `true` if this should be preserved.

(Experimental feature, default will be changed to `true` at some time in the future)

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.enableColumnsMove

#### `Experimental` enableColumnsResize

```ts
enableColumnsResize: boolean = false
```

If set to `true` columns can be resized by the user.

Make sure to set loadSavedColumns to `true` if this should be preserved.

(Experimental feature, default will be changed to ''true'' at some time in the future)

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.enableColumnsResize

#### enableFixedHeader

```ts
enableFixedHeader: boolean = false
```

If set to `true` headers are fixed.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.enableFixedHeader

#### excludeUnsortedState

```ts
excludeUnsortedState: boolean = false
```

This option will allow to force sorting the list if it is `true` and the list is sorted
(disable sorting order none).

If it is `false` then the end user will have a three sorting state available Asc, Desc and None.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.excludeUnsortedState

#### expandableRows

```ts
expandableRows: boolean = false
```

Makes rows expandable

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.expandableRows

#### extraColumns

```ts
extraColumns: (string | object)[]
```

Contains columns that will be shown as a popup on mouse-click for columns with Field.showExtra set to `true`.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.extraColumns

#### extraOptions

```ts
extraOptions: object
```

Options to set on the popup window containing the extraColumns.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.extraOptions

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

Inherited from TradingTableWidgetOptions.interactionHighlight

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

Inherited from TradingTableWidgetOptions.layout

#### linkTrigger

```ts
linkTrigger: any = ColumnManager.LINK_TARGET_ROW_CLICK
```

Link trigger type.

##### See

ColumnManager

##### Default Value

`ColumnManager.LINK_TARGET_ROW_CLICK`

Inherited from TradingTableWidgetOptions.linkTrigger

#### loadSavedColumns

```ts
loadSavedColumns: boolean = false
```

If `true`, the saved columns structure would be auto-loaded before creating the table widget.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.loadSavedColumns

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

Inherited from TradingTableWidgetOptions.onColumnDeleted

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

Inherited from TradingTableWidgetOptions.onColumnExpand

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

Inherited from TradingTableWidgetOptions.onColumnInsert

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

Inherited from TradingTableWidgetOptions.onColumnMoved

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

Inherited from TradingTableWidgetOptions.onColumnMoving

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

Inherited from TradingTableWidgetOptions.onColumnsChanged

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

Inherited from TradingTableWidgetOptions.onColumnsResized

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

Inherited from TradingTableWidgetOptions.onResetColumns

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

Inherited from TradingTableWidgetOptions.onSettingsClicked

#### rowSelectable

```ts
rowSelectable: boolean = false
```

If `true`, the user can select rows in the table.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.rowSelectable

#### sortable

```ts
sortable: boolean = false
```

If `true`, the user can sort the table by clicking on the column-header.

Sorting may not be available for all types of columns.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.sortable

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

Inherited from TradingTableWidgetOptions.tabs

#### uiFactory

```ts
uiFactory: ListUIFactory
```

uiFactory

##### See

[ListUIFactory](./WTK.ListUIFactory.md)

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.uiFactory

### OrdersWidget

#### columns

```ts
columns: any[] = ...
```

Table columns.

##### Default Value

`['TICKER', 'VOLUME', 'PRICE', 'ORDER_STATUS', 'VALID_UNTIL', 'FILLED', 'BUY_OR_SELL']`

Overrides TradingTableWidgetOptions.columns

#### customFilter

```ts
customFilter: (item: object) => boolean
```

Specifies a custom filter callback function which takes order object as a parameter and
returns `true` or ` false` indicating if order should be displayed on the list or not.

##### Type Declaration

- (item: object): boolean

  ##### Parameters

  - item: object

  ##### Returns boolean

##### Default Value

`undefined`

#### daysBack

```ts
daysBack: number
```

Request historical orders for the number of previous days given.

##### Remarks

The option will only return additional data if it is supported by the trading gateway.

##### Default Value

`undefined`

#### hideStatuses

```ts
hideStatuses: string[]
```

What type of order statuses to hide.

Possible string values: see [showStatuses](#showstatuses)

##### Default Value

`undefined`

#### hideTypes

```ts
hideTypes: string[]
```

What order types to hide.

Possible string values: see [showTypes](#showtypes)

##### Default Value

`undefined`

#### modifyClick

```ts
modifyClick: (
    portfolio: string,
    orderId: number,
    instrument?: Instrument,
) => void
```

Callback that is called when modify is clicked

##### Type Declaration

- (portfolio: string, orderId: number, instrument?: Instrument): void

  ##### Parameters

  - portfolio: string
  - orderId: number
  - `Optional` instrument: Instrument

  ##### Returns void

##### See

Infront.Instrument

##### Default Value

`undefined`

#### onOrderSelected

```ts
onOrderSelected: (order: OrderStatusItem) => void
```

Callback that is called on order selected.

##### Type Declaration

- (order: OrderStatusItem): void

  ##### Parameters

  - order: OrderStatusItem

  ##### Returns void

##### See

Infront.OrderStatusItem

##### Default Value

`undefined`

#### showHistoricOrders

```ts
showHistoricOrders: boolean
```

Show historical orders.

##### Default Value

`undefined`

#### showStatuses

```ts
showStatuses: string[]
```

What type of order statuses to display.

Possible string values:

- `'INACTIVE_ORDER'`
- `'ORDER_REQUEST'`
- `'EXCHANGE_ORDER'`
- `'INTERNAL_ORDER'`
- `'DELETE_REQUEST'`
- `'OFFLINE_ORDER'`
- `'DELETED_ORDER'`
- `'MONITOR_ORDER'`
- `'WORKING_ORDER'`
- `'MODTONEW_ORDER'`
- `'SYS_ERR_ORDER'`
- `'TRD_POWER_ERR_ORDER'`
- `'LIMIT_ERR_ORDER'`
- `'COMM_ERR_ORDER'`
- `'EXPIRED_ORDER'`
- `'EXECUTED_ORDER'`
- `'REJECTED_ORDER'`
- `'PENDING_INSERT_ORDER'`
- `'PENDING_MODIFY_ORDER'`
- `'PENDING_DELETE_ORDER'`
- `'SIMULATE'`
- `'CARE_REQUEST'`
- `'DONE_FOR_DAY'`
- `'PARENT_ORDER'`
- `'FX_DEAL_PENDING'`
- `'FX_DEAL_REQUEST_ACCEPTED'`
- `'FX_DEAL_REQUEST_REJECTED'`
- `'FX_DEAL_DONE'`
- `'FX_DEAL_QUOTED'`
- `'FX_QUOTE_REJECTED'`
- `'FX_QUOTE_WITHDRAWN'`
- `'FX_DEAL_REQUEST_WITHDRAWN'`
- `'FX_DEAL_REQUEST_EXPIRED'`
- `'FX_QUOTE_EXPIRED'`

##### Default Value

`Show all`

#### showTodaysOrders

```ts
showTodaysOrders: boolean
```

Show todays orders.

##### Default Value

`undefined`

#### showTypes

```ts
showTypes: string[]
```

What order types to display.

Possible string values:

- `'NORMAL'`
- `'FILL_OR_KILL'`
- `'FILL_AND_KILL'`
- `'FILL_OR_NOTHING'`
- `'CROSS'`
- `'BEST_POSSIBLE'`
- `'AT_MARKET'`
- `'MARKET'`
- `'MARKET_TO_LIMIT'`
- `'AT_MARKET_AND_KILL'`
- `'QUOTE_ORDER'`
- `'LIMIT_OR_MARKET_ON_CLOSE'`
- `'STOP_LIMIT'`
- `'STOP_LOSS'`
- `'CONTINGENT'`
- `'FLEX'`
- `'INTEREST'`
- `'ACCEPT'`
- `'PARENT'`
- `'STRATEGY'`
- `'FIX'`
- `'LIMIT_TO_MARKET'`
- `'BEST_TO_LIMIT'`
- `'MULTI_LEG'`
- `'MARKET_FOK'`
- `'MARKET_FAK'`
- `'PEGGED'`
- `'AT_OPEN'`
- `'AT_CLOSE'`
- `'OCO'`
- `'ICEBERG'`

##### Default Value

`undefined`

#### stopLossOnly

```ts
stopLossOnly: boolean = false
```

Stops loss only

##### Default Value

`false`

### PositionsWidget

#### onInstrumentSelected

```ts
onInstrumentSelected: (instrument: Instrument) => void
```

Callback on instrument clicked.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### Default Value

`undefined`

### TradingTableWidget

#### clickToLogin

```ts
clickToLogin: boolean = false
```

Click to login.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.clickToLogin

#### displayRowColumns

```ts
displayRowColumns: any[]
```

Display row columns.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.displayRowColumns

#### emptyListMessage

```ts
emptyListMessage: string
```

Empty list message.

##### Default Value

```ts
``
```

Inherited from TradingTableWidgetOptions.emptyListMessage

#### hideEmptyList

```ts
hideEmptyList: boolean = true
```

Hide empty list.

##### Default Value

`true`

Inherited from TradingTableWidgetOptions.hideEmptyList

#### maxItems

```ts
maxItems: number
```

Maximum number of items.

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.maxItems

#### onItemCountChange

```ts
onItemCountChange: (itemCount: number) => void
```

Callback on item count changes.

##### Type Declaration

- (itemCount: number): void

  ##### Parameters

  - itemCount: number

  ##### Returns void

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.onItemCountChange

#### showDeleteAll

```ts
showDeleteAll: boolean = false
```

Show delete all.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.showDeleteAll

#### showPortfolio

```ts
showPortfolio: boolean = false
```

If `true`, shows portfolio in the widget title.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.showPortfolio

#### showPortfolioSelect

```ts
showPortfolioSelect: boolean = false
```

If `true`, shows portfolio select.

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.showPortfolioSelect

#### titleClick

```ts
titleClick: () => void
```

Callback that is called when the title is clicked.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from TradingTableWidgetOptions.titleClick

### TradingWidget

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

Inherited from TradingTableWidgetOptions.hasTradingContentCallback

#### rememberCanceledLogin

```ts
rememberCanceledLogin: boolean = false
```

Remembers that Infront.login is canceled, ensures you wont be Infront.logged in

##### Default Value

`false`

Inherited from TradingTableWidgetOptions.rememberCanceledLogin

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

Inherited from TradingTableWidgetOptions.tradingLoginCallback
