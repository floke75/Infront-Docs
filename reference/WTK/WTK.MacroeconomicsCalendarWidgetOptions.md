---
title: "MacroeconomicsCalendarWidgetOptions"
qualified_name: "WTK.MacroeconomicsCalendarWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > MacroeconomicsCalendarWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.MacroeconomicsCalendarWidgetOptions.html"
defines: ["MacroeconomicsCalendarWidgetOptions"]
member_count: 36
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "allowColumnMove", "allowColumnResize", "categories", "columns", "countryCodes", "dateRangePreset", "endDate?", "importances", "loadingLabel?", "noDataLabel?", "onCategoriesChanged?", "onDateRangeChanged?", "onImportancesChanged?", "onInstrumentClicked?", "showToolbar", "source", "startDate?", "constructor"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "streaming", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "MacroeconomicsCalendarWidget": ["allowColumnMove", "allowColumnResize", "categories", "columns", "countryCodes", "dateRangePreset", "endDate?", "importances", "loadingLabel?", "noDataLabel?", "onCategoriesChanged?", "onDateRangeChanged?", "onImportancesChanged?", "onInstrumentClicked?", "showToolbar", "source", "startDate?"]
  "Other": ["constructor"]
related_types: ["WTK.SvelteWidgetOptions"]
reference_count: 12
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.MacroeconomicsCalendarColumn", "WTK.MacroCalendarDateRangePreset", "SDK.InfrontSDK.CalendarEventImportance", "SDK.InfrontSDK.SymbolId", "WTK.MacroeconomicsCalendarWidget", "WTK.SvelteWidgetOptions", "WTK.InfrontWidget", "WTK.TRADING_ECONOMICS_FEED"]
---

# MacroeconomicsCalendarWidgetOptions

Options for the MacroeconomicsCalendarWidget.

#### See

MacroeconomicsCalendarWidget | SvelteWidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.MacroeconomicsCalendarWidgetOptions))

- SvelteWidgetOptions

  - MacroeconomicsCalendarWidgetOptions

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

### MacroeconomicsCalendarWidget

#### allowColumnMove

```ts
allowColumnMove: boolean = true
```

Indicates whether the user can move the columns and reposition them.

##### Default Value

`true`

#### allowColumnResize

```ts
allowColumnResize: boolean = true
```

Indicates whether the user can resize the columns.

##### Default Value

`true`

#### categories

```ts
categories: readonly string[] = null
```

Category descriptions (as returned by the SDK in `CalendarEvent.categoryDescription`)
to include. `null` or empty means "all categories". The widget dynamically
populates the category dropdown with the categories present in the loaded data.

##### Default Value

`null` (all)

#### columns

```ts
columns: readonly MacroeconomicsCalendarColumn[] = DEFAULT_COLUMNS
```

Column order shown in the AG-Grid table. Defaults to the standard
Trading Economics layout — `Date, Time, Flag, Symbol, Event, Actual, Expected, Previous, Importance, Revised, Reference, Category, Alert, Source`.

##### Default Value

`DEFAULT_COLUMNS`

#### countryCodes

```ts
countryCodes: readonly string[] = null
```

ISO Alpha-2 country codes to limit the calendar to. `null` or empty means "all countries".

##### Default Value

`null`

#### dateRangePreset

```ts
dateRangePreset: MacroCalendarDateRangePreset = 'UPCOMING_WEEK'
```

The currently active date range preset.

- `'TODAY'`
- `'YESTERDAY'`
- `'TOMORROW'`
- `'TODAY_AND_YESTERDAY'`
- `'TODAY_AND_TOMORROW'`
- `'LAST_WEEK'`
- `'UPCOMING_WEEK'`
- `'UPCOMING_MONTH'`
- `'CUSTOM'` — use ` startDate` / ` endDate` directly.

##### Default Value

`'UPCOMING_WEEK'`

#### `Optional` endDate

```ts
endDate?: Date
```

Explicit end date for the calendar (only used when [dateRangePreset](#daterangepreset)
is `'CUSTOM'`, or as the initial anchor for the date pickers).

##### Default Value

`undefined`

#### importances

```ts
importances: readonly CalendarEventImportance[] = null
```

Importance levels to include in the calendar. `null` or empty means
"all importance levels".

Allowed values are `'High'`, `'Medium'`, `'Low'`, `'Unknown'`.

##### Default Value

`null` (all)

#### `Optional` loadingLabel

```ts
loadingLabel?: string
```

The label to show while the calendar data is still being loaded.

##### Default Value

`undefined` — defaults to the i18n key ` WIDGETS.MACROECONOMICS_CALENDAR.LOADING`.

#### `Optional` noDataLabel

```ts
noDataLabel?: string
```

The label to show when no events match the current filters.

##### Default Value

`undefined` — defaults to the i18n key ` WIDGETS.MACROECONOMICS_CALENDAR.NO_DATA_AVAILABLE`.

#### `Optional` onCategoriesChanged

```ts
onCategoriesChanged?: (categories: readonly string[]) => void
```

Callback fired when the selected category descriptions change.

#### `Optional` onDateRangeChanged

```ts
onDateRangeChanged?: (
    range: {
        endDate: Date;
        preset: MacroCalendarDateRangePreset;
        startDate: Date;
    },
) => void
```

Callback fired when the active date range changes.

#### `Optional` onImportancesChanged

```ts
onImportancesChanged?: (importances: readonly CalendarEventImportance[]) => void
```

Callback fired when the selected importance levels change.

#### `Optional` onInstrumentClicked

```ts
onInstrumentClicked?: (symbolId: SymbolId) => void
```

Callback fired when the user clicks a row. The event's `SymbolId` is forwarded
to the callback, mirroring the convention used by the analytics widgets.

#### showToolbar

```ts
showToolbar: boolean = true
```

Whether to display the inline filter toolbar (Date range, Importance, Categories).

If you want to render your own controls (e.g. on a global toolbar) you can hide
the built-in one and drive the widget via `widget.modify(...)` calls instead.

##### Default Value

`true`

#### source

```ts
source: number = TRADING_ECONOMICS_FEED
```

Calendar data source feed number.

Defaults to [TRADING_ECONOMICS_FEED](./WTK.TRADING_ECONOMICS_FEED.md) (1049 — Trading Economics Calendar).
Change this when you want to show a different calendar provider feed.

##### Default Value

`TRADING_ECONOMICS_FEED` (1049)

#### `Optional` startDate

```ts
startDate?: Date
```

Explicit start date for the calendar (only used when [dateRangePreset](#daterangepreset)
is `'CUSTOM'`, or as the initial anchor for the date pickers).

##### Default Value

`undefined`

### Other

#### constructor

```ts
new MacroeconomicsCalendarWidgetOptions(
    initOptions?: Partial<MacroeconomicsCalendarWidgetOptions>,
): MacroeconomicsCalendarWidgetOptions
```

Initializes a new [MacroeconomicsCalendarWidgetOptions](#).

##### Parameters

- `Optional` initOptions: Partial<MacroeconomicsCalendarWidgetOptions>

  The initial property values to set.

##### Returns MacroeconomicsCalendarWidgetOptions

Overrides SvelteWidgetOptions.constructor
