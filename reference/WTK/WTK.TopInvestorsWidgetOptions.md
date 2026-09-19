---
title: "TopInvestorsWidgetOptions"
qualified_name: "WTK.TopInvestorsWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > TopInvestorsWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.TopInvestorsWidgetOptions.html"
defines: ["TopInvestorsWidgetOptions"]
member_count: 84
members: ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "availableColumns", "className", "columns", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "defaultSortedColumn", "defaultSortOrder", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory", "currentPeriod", "grouping", "overridePeriodWithPersistedState", "selectablePeriods", "showDateSelectors", "showGroupingDropdown", "showPeriodDropdown", "startDate", "stopDate", "currentGroupingColumns", "defaultCurrentGroupingSortedColumn", "defaultCurrentGroupingSortOrder", "defaultNewGroupingSortedColumn", "defaultNewGroupingSortOrder", "defaultPreviousGroupingSortedColumn", "defaultPreviousGroupingSortOrder", "instrument", "newGroupingColumns", "onDataLoaded", "onGroupingChanged", "onInvestorClicked", "onLoadingData", "onPeriodChanged", "percentageOwnershipIndicatorsByFeed", "previousGroupingColumns", "realTimeValueUpdates", "searchBoxFeeds", "showEntityName", "clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
member_groups:
  "Widget Options": ["hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "CommonListWidgetBase": ["availableColumns", "className", "columns", "compareCaseInsensitive", "compareCaseInsensitiveLocale", "createExpandRow", "decimals", "defaultContent", "defaultSortedColumn", "defaultSortOrder", "enableChangeStatusColors", "enableColumnsMove", "enableColumnsResize", "enableFixedHeader", "excludeUnsortedState", "expandableRows", "extraColumns", "extraOptions", "interactionHighlight", "layout", "linkTrigger", "loadSavedColumns", "onColumnDeleted", "onColumnExpand", "onColumnInsert", "onColumnMoved", "onColumnMoving", "onColumnsChanged", "onColumnsResized", "onResetColumns", "onSettingsClicked", "rowSelectable", "sortable", "tabs", "uiFactory"]
  "TopEntitiesWidget": ["currentPeriod", "grouping", "overridePeriodWithPersistedState", "selectablePeriods", "showDateSelectors", "showGroupingDropdown", "showPeriodDropdown", "startDate", "stopDate"]
  "TopInvestorsWidget": ["currentGroupingColumns", "defaultCurrentGroupingSortedColumn", "defaultCurrentGroupingSortOrder", "defaultNewGroupingSortedColumn", "defaultNewGroupingSortOrder", "defaultPreviousGroupingSortedColumn", "defaultPreviousGroupingSortOrder", "instrument", "newGroupingColumns", "onDataLoaded", "onGroupingChanged", "onInvestorClicked", "onLoadingData", "onPeriodChanged", "percentageOwnershipIndicatorsByFeed", "previousGroupingColumns", "realTimeValueUpdates", "searchBoxFeeds", "showEntityName"]
  "TradingWidget": ["clickToLogin", "hasTradingContentCallback", "rememberCanceledLogin", "tradingLoginCallback"]
related_types: ["WTK.TopEntitiesWidgetOptions"]
reference_count: 17
references: ["WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.WidgetDecimals", "WTK.Field", "WTK.SortOrder", "WTK.ListLayout", "WTK.QuoteListTabOptions", "WTK.ListUIFactory", "WTK.TopEntitiesPeriod", "WTK.TopEntitiesGrouping", "WTK.PercentageOwnershipIndicators", "WTK.TopEntitiesWidgetOptions", "WTK.TopInvestorsWidget", "WTK.WidgetOptions", "WTK.InfrontWidget", "WTK.CommonListOptions"]
---

# TopInvestorsWidgetOptions

TopInvestorsWidgetOptions class extending TopEntitiesWidgetOptions class.

Set options for the TopInvestorsWidget.

#### See

TopInvestorsWidget | WidgetOptions | TopEntitiesWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.TopInvestorsWidgetOptions))

- TopEntitiesWidgetOptions

  - TopInvestorsWidgetOptions

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

Inherited from TopEntitiesWidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from TopEntitiesWidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.linkChannels

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

Inherited from TopEntitiesWidgetOptions.navButton

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

Inherited from TopEntitiesWidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from TopEntitiesWidgetOptions.persistState

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

Inherited from TopEntitiesWidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from TopEntitiesWidgetOptions.storageType

#### streaming

```ts
streaming: boolean = true
```

Enable / disable streaming of data.

##### Default Value

`true`

Inherited from TopEntitiesWidgetOptions.streaming

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.usePerfectScrollbar

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

Inherited from TopEntitiesWidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.widgetTitle

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

Inherited from TopEntitiesWidgetOptions.availableColumns

#### className

```ts
className: string
```

A special className you want assigned to the lists table-element.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.className

#### columns

```ts
columns: any[] = []
```

This is where you specify which columns you want in your table, and where you want them.
Columns can be specified as a name or an object of parameters.

##### Default Value

`[]`

Inherited from TopEntitiesWidgetOptions.columns

#### compareCaseInsensitive

```ts
compareCaseInsensitive: boolean = false
```

Enable / disable case insensitive sorting.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.compareCaseInsensitive

#### compareCaseInsensitiveLocale

```ts
compareCaseInsensitiveLocale: string
```

Optional locale for case insensitive sorting.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.compareCaseInsensitiveLocale

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

Inherited from TopEntitiesWidgetOptions.createExpandRow

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

Inherited from TopEntitiesWidgetOptions.decimals

#### defaultContent

```ts
defaultContent: any
```

Sets default content.

Plain-text, markup-text or HTMLElement to be viewed if the list is empty.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.defaultContent

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

Inherited from TopEntitiesWidgetOptions.defaultSortedColumn

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

Inherited from TopEntitiesWidgetOptions.defaultSortOrder

#### enableChangeStatusColors

```ts
enableChangeStatusColors: boolean = false
```

If `true`, columns in the table that indicates a change or percentage change will show a color
(actually be assigned a class, you can style it any way you want) to indicate if the change is positive or negative.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.enableChangeStatusColors

#### `Experimental` enableColumnsMove

```ts
enableColumnsMove: boolean = false
```

If set to `true` columns can be moved around by the user.

Make sure to set loadSavedColumns to `true` if this should be preserved.

(Experimental feature, default will be changed to `true` at some time in the future)

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.enableColumnsMove

#### `Experimental` enableColumnsResize

```ts
enableColumnsResize: boolean = false
```

If set to `true` columns can be resized by the user.

Make sure to set loadSavedColumns to `true` if this should be preserved.

(Experimental feature, default will be changed to ''true'' at some time in the future)

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.enableColumnsResize

#### enableFixedHeader

```ts
enableFixedHeader: boolean = false
```

If set to `true` headers are fixed.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.enableFixedHeader

#### excludeUnsortedState

```ts
excludeUnsortedState: boolean = false
```

This option will allow to force sorting the list if it is `true` and the list is sorted
(disable sorting order none).

If it is `false` then the end user will have a three sorting state available Asc, Desc and None.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.excludeUnsortedState

#### expandableRows

```ts
expandableRows: boolean = false
```

Makes rows expandable

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.expandableRows

#### extraColumns

```ts
extraColumns: (string | object)[]
```

Contains columns that will be shown as a popup on mouse-click for columns with Field.showExtra set to `true`.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.extraColumns

#### extraOptions

```ts
extraOptions: object
```

Options to set on the popup window containing the extraColumns.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.extraOptions

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

Inherited from TopEntitiesWidgetOptions.interactionHighlight

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

Inherited from TopEntitiesWidgetOptions.layout

#### linkTrigger

```ts
linkTrigger: any = ColumnManager.LINK_TARGET_ROW_CLICK
```

Link trigger type.

##### See

ColumnManager

##### Default Value

`ColumnManager.LINK_TARGET_ROW_CLICK`

Inherited from TopEntitiesWidgetOptions.linkTrigger

#### loadSavedColumns

```ts
loadSavedColumns: boolean = false
```

If `true`, the saved columns structure would be auto-loaded before creating the table widget.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.loadSavedColumns

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

Inherited from TopEntitiesWidgetOptions.onColumnDeleted

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

Inherited from TopEntitiesWidgetOptions.onColumnExpand

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

Inherited from TopEntitiesWidgetOptions.onColumnInsert

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

Inherited from TopEntitiesWidgetOptions.onColumnMoved

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

Inherited from TopEntitiesWidgetOptions.onColumnMoving

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

Inherited from TopEntitiesWidgetOptions.onColumnsChanged

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

Inherited from TopEntitiesWidgetOptions.onColumnsResized

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

Inherited from TopEntitiesWidgetOptions.onResetColumns

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

Inherited from TopEntitiesWidgetOptions.onSettingsClicked

#### rowSelectable

```ts
rowSelectable: boolean = false
```

If `true`, the user can select rows in the table.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.rowSelectable

#### sortable

```ts
sortable: boolean = false
```

If `true`, the user can sort the table by clicking on the column-header.

Sorting may not be available for all types of columns.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.sortable

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

Inherited from TopEntitiesWidgetOptions.tabs

#### uiFactory

```ts
uiFactory: ListUIFactory
```

uiFactory

##### See

[ListUIFactory](./WTK.ListUIFactory.md)

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.uiFactory

### TopEntitiesWidget

#### currentPeriod

```ts
currentPeriod: TopEntitiesPeriod = TopEntitiesPeriod.ONE_WEEK
```

Current period.

##### See

[TopEntitiesPeriod](./WTK.TopEntitiesPeriod.md)

##### Default Value

`TopEntitiesPeriod.ONE_WEEK`

Inherited from TopEntitiesWidgetOptions.currentPeriod

#### grouping

```ts
grouping: TopEntitiesGrouping = TopEntitiesGrouping.CURRENT
```

Grouping.

##### Default Value

`TopEntitiesGrouping.CURRENT`

Inherited from TopEntitiesWidgetOptions.grouping

#### overridePeriodWithPersistedState

```ts
overridePeriodWithPersistedState: boolean = true
```

Override period with persisted state.

##### Default Value

`true`

Inherited from TopEntitiesWidgetOptions.overridePeriodWithPersistedState

#### selectablePeriods

```ts
selectablePeriods: TopEntitiesPeriod[] = ...
```

Selectable periods.

##### See

[TopEntitiesPeriod](./WTK.TopEntitiesPeriod.md)

##### Default Value

`All items of Infront.TopEntitiesPeriod`

Inherited from TopEntitiesWidgetOptions.selectablePeriods

#### showDateSelectors

```ts
showDateSelectors: boolean = true
```

Show date selectors.

##### Default Value

`true`

Inherited from TopEntitiesWidgetOptions.showDateSelectors

#### showGroupingDropdown

```ts
showGroupingDropdown: boolean = true
```

Show grouping dropdown.

##### Default Value

`true`

Inherited from TopEntitiesWidgetOptions.showGroupingDropdown

#### showPeriodDropdown

```ts
showPeriodDropdown: boolean = true
```

Show period dropdown.

##### Default Value

`true`

Inherited from TopEntitiesWidgetOptions.showPeriodDropdown

#### startDate

```ts
startDate: Date
```

Start date.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.startDate

#### stopDate

```ts
stopDate: Date
```

End (stop) date.

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.stopDate

### TopInvestorsWidget

#### currentGroupingColumns

```ts
currentGroupingColumns: (string | Field)[] = ...
```

Current grouping columns.

##### See

ColumnNames | Field

##### Default Value

`[ColumnNames.RANK, ColumnNames.INVESTOR, ColumnNames.NUM_SHARES, ColumnNames.PCT_OWNERSHIP, ColumnNames.VALUE, ColumnNames.PCT_WEIGHTED_OWNERSHIP, ColumnNames.NUM_SHARES_CHANGE, ColumnNames.PCT_NUM_SHARES_CHANGE, ColumnNames.POSITIONS,]`

Overrides TopEntitiesWidgetOptions.currentGroupingColumns

#### defaultCurrentGroupingSortedColumn

```ts
defaultCurrentGroupingSortedColumn: string | Field = ColumnNames.RANK
```

Default current grouping sorted column.

##### See

ColumnNames | Field

##### Default Value

`ColumnNames.RANK`

Overrides TopEntitiesWidgetOptions.defaultCurrentGroupingSortedColumn

#### defaultCurrentGroupingSortOrder

```ts
defaultCurrentGroupingSortOrder: SortOrder = SortOrder.Asc
```

Default current grouping sort order.

##### See

[SortOrder](./WTK.SortOrder.md)

##### Default Value

`SortOrder.Asc`

Overrides TopEntitiesWidgetOptions.defaultCurrentGroupingSortOrder

#### defaultNewGroupingSortedColumn

```ts
defaultNewGroupingSortedColumn: string | Field = ColumnNames.RANK
```

Default new grouping sorted column.

##### See

ColumnNames | Field

##### Default Value

`ColumnNames.RANK`

Overrides TopEntitiesWidgetOptions.defaultNewGroupingSortedColumn

#### defaultNewGroupingSortOrder

```ts
defaultNewGroupingSortOrder: SortOrder = SortOrder.Asc
```

Default new grouping sort order.

##### See

[SortOrder](./WTK.SortOrder.md)

##### Default Value

`SortOrder.Asc`

Overrides TopEntitiesWidgetOptions.defaultNewGroupingSortOrder

#### defaultPreviousGroupingSortedColumn

```ts
defaultPreviousGroupingSortedColumn: string | Field = ColumnNames.PCT_MAX_OWNERSHIP
```

Default previous grouping sorted column.

##### See

ColumnNames | Field

##### Default Value

`ColumnNames.PCT_MAX_OWNERSHIP`

Overrides TopEntitiesWidgetOptions.defaultPreviousGroupingSortedColumn

#### defaultPreviousGroupingSortOrder

```ts
defaultPreviousGroupingSortOrder: SortOrder = SortOrder.Desc
```

Default previous grouping sort order.

##### See

[SortOrder](./WTK.SortOrder.md)

##### Default Value

`SortOrder.Desc`

Overrides TopEntitiesWidgetOptions.defaultPreviousGroupingSortOrder

#### instrument

```ts
instrument: Instrument
```

The instrument to show investors for.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### newGroupingColumns

```ts
newGroupingColumns: (string | Field)[] = ...
```

New grouping columns.

##### See

ColumnNames | Field

##### Default Value

`[ColumnNames.RANK, ColumnNames.INVESTOR, ColumnNames.NUM_SHARES, ColumnNames.PCT_OWNERSHIP, ColumnNames.VALUE, ColumnNames.PCT_WEIGHTED_OWNERSHIP, ColumnNames.POSITIONS,]`

Overrides TopEntitiesWidgetOptions.newGroupingColumns

#### onDataLoaded

```ts
onDataLoaded: (data: TopEntity[]) => void
```

Callback on data has been loaded.

##### Type Declaration

- (data: TopEntity[]): void

  ##### Parameters

  - data: TopEntity[]

  ##### Returns void

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.onDataLoaded

#### onGroupingChanged

```ts
onGroupingChanged: (newGrouping: TopEntitiesGrouping) => void
```

Callback on grouping has changed.

##### Type Declaration

- (newGrouping: TopEntitiesGrouping): void

  ##### Parameters

  - newGrouping: [TopEntitiesGrouping](./WTK.TopEntitiesGrouping.md)

  ##### Returns void

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.onGroupingChanged

#### onInvestorClicked

```ts
onInvestorClicked: (
    feed: number,
    investorId: number,
    grouping: TopEntitiesGrouping,
    period: TopEntitiesPeriod,
    startDate: Date,
    stopDate: Date,
) => void
```

Callback fired when an investor-item gets clicked.

##### Type Declaration

- (feed: number,    investorId: number,    grouping: TopEntitiesGrouping,    period: TopEntitiesPeriod,    startDate: Date,    stopDate: Date,): void

  ##### Parameters

  - feed: number
  - investorId: number
  - grouping: [TopEntitiesGrouping](./WTK.TopEntitiesGrouping.md)
  - period: [TopEntitiesPeriod](./WTK.TopEntitiesPeriod.md)
  - startDate: Date
  - stopDate: Date

  ##### Returns void

##### Default Value

`undefined`

#### onLoadingData

```ts
onLoadingData: () => void
```

Callback on loading data.

##### Type Declaration

- (): void

  ##### Returns void

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.onLoadingData

#### onPeriodChanged

```ts
onPeriodChanged: (
    newPeriod: TopEntitiesPeriod,
    newStartDate: Date,
    newStopDate: Date,
) => void
```

Callback on period has changed.

##### Type Declaration

- (newPeriod: TopEntitiesPeriod, newStartDate: Date, newStopDate: Date): void

  ##### Parameters

  - newPeriod: [TopEntitiesPeriod](./WTK.TopEntitiesPeriod.md)
  - newStartDate: Date
  - newStopDate: Date

  ##### Returns void

##### Default Value

`undefined`

Inherited from TopEntitiesWidgetOptions.onPeriodChanged

#### percentageOwnershipIndicatorsByFeed

```ts
percentageOwnershipIndicatorsByFeed: PercentageOwnershipIndicators[]
```

Percentage ownership indicators by feed.

##### Default Value

`undefined`

#### previousGroupingColumns

```ts
previousGroupingColumns: (string | Field)[] = ...
```

Previous grouping columns.

##### See

ColumnNames | Field

##### Default Value

`[ColumnNames.MAX_RANK, ColumnNames.INVESTOR, ColumnNames.MAX_NUM_SHARES, ColumnNames.PCT_MAX_OWNERSHIP, ColumnNames.MAX_VALUE, ColumnNames.PCT_MAX_WEIGHTED_OWNERSHIP, ColumnNames.POSITIONS,]`

Overrides TopEntitiesWidgetOptions.previousGroupingColumns

#### realTimeValueUpdates

```ts
realTimeValueUpdates: boolean = false
```

Enable / disable real time value updates.

##### Remarks

Set to `false`, as real time updates don't really make a lot of sense when the data is 3 days old.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.realTimeValueUpdates

#### searchBoxFeeds

```ts
searchBoxFeeds: number[]
```

Search box feed list.

##### Default Value

`undefined`

#### showEntityName

```ts
showEntityName: boolean = true
```

Show entity name.

##### Default Value

`true`

### TradingWidget

#### clickToLogin

```ts
clickToLogin: boolean = false
```

Option for deciding if the widget should show the trading Infront.login when clicked on, if the user isn’t Infront.logged in to trading.

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.clickToLogin

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

Inherited from TopEntitiesWidgetOptions.hasTradingContentCallback

#### rememberCanceledLogin

```ts
rememberCanceledLogin: boolean = false
```

Remembers that Infront.login is canceled, ensures you wont be Infront.logged in

##### Default Value

`false`

Inherited from TopEntitiesWidgetOptions.rememberCanceledLogin

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

Inherited from TopEntitiesWidgetOptions.tradingLoginCallback
