---
title: "NewsListWidgetOptions"
qualified_name: "WTK.NewsListWidgetOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > NewsListWidgetOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.NewsListWidgetOptions.html"
defines: ["NewsListWidgetOptions"]
member_count: 53
members: ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle", "columns", "cssURL", "customFilters", "enableDateSelector", "enableHeaderLine", "enableQuickFilter", "enableRegionSelector", "enableSourceSelector", "enableUserFilter", "feeds", "filterFunction", "infinitiveScroll", "instrument", "instruments", "layout", "maxDays", "maxItems", "onDataLoaded", "onNewsItemSelected", "onPageChange", "onSelectTimePeriod", "pageItems", "pageNumber", "paging", "preSelectedDate", "preSelectedRegions", "preSelectNews", "preventDefault", "retrieveData", "selectableDates", "showFlashNewsFilter", "showFlashNewsOnly", "showTickerInHeader", "streaming", "types", "useLightbox"]
member_groups:
  "Widget Options": ["decimals", "hasContentCallback", "id", "linkChannels", "navButton", "navButtonClicked", "noContentPlaceholder?", "onChanges?", "persistState", "popupContainer?", "resetPopupPosition?", "showSearchWidget", "storageType", "useOriginal", "usePerfectScrollbar", "widgetStateCallback", "widgetTitle"]
  "NewsListWidget": ["columns", "cssURL", "customFilters", "enableDateSelector", "enableHeaderLine", "enableQuickFilter", "enableRegionSelector", "enableSourceSelector", "enableUserFilter", "feeds", "filterFunction", "infinitiveScroll", "instrument", "instruments", "layout", "maxDays", "maxItems", "onDataLoaded", "onNewsItemSelected", "onPageChange", "onSelectTimePeriod", "pageItems", "pageNumber", "paging", "preSelectedDate", "preSelectedRegions", "preSelectNews", "preventDefault", "retrieveData", "selectableDates", "showFlashNewsFilter", "showFlashNewsOnly", "showTickerInHeader", "streaming", "types", "useLightbox"]
related_types: ["WTK.WidgetOptions"]
reference_count: 9
references: ["WTK.WidgetDecimals", "WTK.WidgetNavButtonType", "WTK.WidgetPopupParent", "WTK.WidgetState", "WTK.NewsListWidgetFilter", "WTK.NewsListLayout", "WTK.WidgetOptions", "WTK.NewsListWidget", "WTK.InfrontWidget"]
---

# NewsListWidgetOptions

NewsListWidgetOptions class extending WidgetOptions class.

Set options for the NewsListWidget.

#### See

NewsListWidget | WidgetOptions

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.NewsListWidgetOptions))

- WidgetOptions

  - NewsListWidgetOptions

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

Inherited from WidgetOptions.decimals

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

Inherited from WidgetOptions.hasContentCallback

#### id

```ts
id: string = null
```

ID for this widget.

Must be unique for this site, as it is used for session- and persistent state storage.

##### Default Value

`null`

Inherited from WidgetOptions.id

#### linkChannels

```ts
linkChannels: number | number[]
```

If set, auto linking will be enabled on this widget for the specified channels.

##### Default Value

`undefined`

Inherited from WidgetOptions.linkChannels

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

Inherited from WidgetOptions.navButton

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

Inherited from WidgetOptions.navButtonClicked

#### `Optional` noContentPlaceholder

```ts
noContentPlaceholder?: string | HTMLElement
```

The placeholder content to display when there's no content.

##### Default Value

`undefined`

Inherited from WidgetOptions.noContentPlaceholder

#### `Optional` onChanges

```ts
onChanges?: (changes: SimpleChanges) => void
```

Callback invoked whenever one or more options change via [InfrontWidget.modify](./WTK.InfrontWidget.md#modify).

Each key in the SimpleChanges map is the name of a changed property,
with `previousValue` and ` currentValue` available on the entry.

##### Default Value

`undefined`

Inherited from WidgetOptions.onChanges

#### persistState

```ts
persistState: boolean = true
```

Used if implementing persisting storage, set to `false` to prevent storage for this widget.

If `true`, persistence of data through WidgetStorage is enabled.

##### Default Value

`true`

Inherited from WidgetOptions.persistState

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

Inherited from WidgetOptions.popupContainer

#### `Optional` resetPopupPosition

```ts
resetPopupPosition?: boolean
```

When set to `true` there will be no positioning style added to the popup.

##### Default Value

`undefined`

Inherited from WidgetOptions.resetPopupPosition

#### showSearchWidget

```ts
showSearchWidget: boolean = false
```

If `true` it will display a search bar on the top of instrument based widgets.

##### Default Value

`false`

Inherited from WidgetOptions.showSearchWidget

#### storageType

```ts
storageType: any = null
```

Used if implementing persisting storage, can be used to set special storage objects like global storage.

Optional parameter that helps implementors route storage-calls to different targets.

##### Default Value

`null`

Inherited from WidgetOptions.storageType

#### useOriginal

```ts
useOriginal: boolean = false
```

If `true` options object will not be copied before using.

##### Default Value

`false`

Inherited from WidgetOptions.useOriginal

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Enable / disable usage of "Perfect Scrollbar".

##### Default Value

`undefined`

Inherited from WidgetOptions.usePerfectScrollbar

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

Inherited from WidgetOptions.widgetStateCallback

#### widgetTitle

```ts
widgetTitle: string
```

Title shown on the top of the widget. Will work on most widgets, but not all.

It can either be a key for the language-dictionary, or a text you want directly inserted as a header.

Set to `null` to hide title element

##### Default Value

`undefined`

Inherited from WidgetOptions.widgetTitle

### NewsListWidget

#### columns

```ts
columns: (string | object)[] = ...
```

An array of columns/values for the table.

Available columns are:

`'HEADLINE', 'CATEGORY', 'SOURCE', 'SHORT_SOURCE', 'TIME'`

##### Default Value

`["TIME", "SHORT_SOURCE", "HEADLINE"]`

#### cssURL

```ts
cssURL: string = null
```

Use custom css file by sending its url as an option.

##### Default Value

`null`

#### customFilters

```ts
customFilters: NewsListWidgetFilter[] = null
```

Specifies a list of custom filters that are displayed as buttons in the top row.

You can specify either `region` or ` feeds`, if both are specified only ` feeds` are used.

Selecting a quickfilter will override the region-selector box.

Each filter has these parameters:
`[{ name: string, region: string, feeds: number }]`

##### See

NewsListWidgetFilter

##### Default Value

`null`

#### enableDateSelector

```ts
enableDateSelector: boolean
```

Enables dropdown for filtering news items by date.

##### Default Value

`undefined`

#### enableHeaderLine

```ts
enableHeaderLine: boolean = true
```

Enables header line

##### Default Value

`true`

#### enableQuickFilter

```ts
enableQuickFilter: boolean
```

Enables the quick-filter textbox that allows the user to quickly do a keyword-search through the loaded headlines.

##### Default Value

`undefined`

#### enableRegionSelector

```ts
enableRegionSelector: boolean
```

Enables the region selector box. This will also enable the source selector drop down field.

##### Default Value

`undefined`

#### enableSourceSelector

```ts
enableSourceSelector: boolean
```

Enables the source selector drop down field.

A `false` value will be overwritten if [enableRegionSelector](#enableregionselector) is ` true`.

##### Default Value

`undefined`

#### enableUserFilter

```ts
enableUserFilter: boolean
```

Enables user filter.

##### Default Value

`undefined`

#### feeds

```ts
feeds: number[] = null
```

The feeds to show news for, specified as an Infront feed numbers.

##### Default Value

`null`

#### filterFunction

```ts
filterFunction: (newsItem: any) => boolean
```

A function taking in a news-item and returning a boolean.

If this function returns `false`, the item is removed from the news-list.

##### Type Declaration

- (newsItem: any): boolean

  ##### Parameters

  - newsItem: any

  ##### Returns boolean

##### Default Value

`undefined`

#### infinitiveScroll

```ts
infinitiveScroll: boolean = false
```

Adds infinite scrolling instead of paging to show more news items.

##### Default Value

`false`

#### instrument

```ts
instrument: Instrument
```

The instrument to show news for.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### instruments

```ts
instruments: Instrument[]
```

Multiple instruments to show news for.

##### See

Infront.Instrument

##### Default Value

`undefined`

#### layout

```ts
layout: NewsListLayout = NewsListLayout.table
```

Select news layout from `NewsListLayout.table` or ` NewsListLayout.flex`.

##### See

[NewsListLayout](./WTK.NewsListLayout.md)

##### Default Value

`NewsListLayout.table`

#### maxDays

```ts
maxDays: number = 30
```

Sets filter of maximum days to display.

##### Default Value

`30`

#### maxItems

```ts
maxItems: number
```

The maximum number of items to download.

##### Default Value

`undefined`

##### Deprecated

use [pageItems](#pageitems) instead

#### onDataLoaded

```ts
onDataLoaded: (updated: boolean) => void
```

Takes in a boolean function.

This will be called when NewsListWidget receives data.

##### Type Declaration

- (updated: boolean): void

  ##### Parameters

  - updated: boolean

  ##### Returns void

##### Default Value

`undefined`

#### onNewsItemSelected

```ts
onNewsItemSelected: (newsItem: any) => void
```

A function taking in a news-item.

This function will be called when a news-item is selected in the list.

##### Type Declaration

- (newsItem: any): void

  ##### Parameters

  - newsItem: any

  ##### Returns void

##### Default Value

`undefined`

#### onPageChange

```ts
onPageChange: (pageIndex: number) => void
```

Callback that returns page index whenever it changes.

##### Type Declaration

- (pageIndex: number): void

  ##### Parameters

  - pageIndex: number

  ##### Returns void

##### Default Value

`undefined`

#### onSelectTimePeriod

```ts
onSelectTimePeriod: (item: any) => void
```

Takes in time period item.

This function will be called when a time period is selected in the list.

##### Type Declaration

- (item: any): void

  ##### Parameters

  - item: any

  ##### Returns void

##### Default Value

`undefined`

#### pageItems

```ts
pageItems: number = 20
```

The maximum number of items to show per page.

If paging is `false`, this value is always equal to [maxItems](#maxitems).

##### Default Value

`20`

#### pageNumber

```ts
pageNumber: number = 0
```

Sets which page to show as default.

##### Default Value

`0`

#### paging

```ts
paging: boolean = false
```

Enables paging to split the available news-items into separate pages and displays paging-controls.

##### Default Value

`false`

#### preSelectedDate

```ts
preSelectedDate: any[]
```

Sets dates in array to selected as default.

##### Default Value

`undefined`

#### preSelectedRegions

```ts
preSelectedRegions: any[]
```

Sets regions in array to selected as default.

##### Default Value

`undefined`

#### preSelectNews

```ts
preSelectNews: boolean
```

Enables preselected news.

##### Default Value

`undefined`

#### preventDefault

```ts
preventDefault: boolean = false
```

Stops the default action of an element from happening.

##### Default Value

`false`

#### retrieveData

```ts
retrieveData: () => any
```

Callback (TODO to be documented).

##### Type Declaration

- (): any

  ##### Returns any

##### Default Value

`undefined`

#### selectableDates

```ts
selectableDates: string[] = ...
```

Creates a select of time periods to filter news items in dropdown.

##### Default Value

`['TODAY', 'YESTERDAY', 'TWO_DAYS', 'THREE_DAYS', 'FOUR_DAYS', 'FIVE_DAYS', 'THIS_WEEK', 'LAST_WEEK', 'THIS_MONTH', 'LAST_MONTH']`

#### showFlashNewsFilter

```ts
showFlashNewsFilter: boolean = true
```

Displays flash news filter.

##### Default Value

`true`

#### showFlashNewsOnly

```ts
showFlashNewsOnly: boolean = false
```

Displays flash news only.

##### Default Value

`false`

#### showTickerInHeader

```ts
showTickerInHeader: boolean = false
```

Show ticker in header.

##### Default Value

`false`

#### streaming

```ts
streaming: boolean = true
```

If enabled, broadcasts data to the widget.

##### Default Value

`true`

Overrides WidgetOptions.streaming

#### types

```ts
types: string[]
```

Types filter.

##### Default Value

`undefined`

#### useLightbox

```ts
useLightbox: boolean = true
```

If enabled, automatically shows any selected news-item in an overlaid box while dimming the rest of the page.

Links to another web-based source will always be opened in a separate window/tab, never in the lightbox.

##### Default Value

`true`
