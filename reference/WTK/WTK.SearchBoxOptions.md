---
title: "SearchBoxOptions"
qualified_name: "WTK.SearchBoxOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > SearchBoxOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SearchBoxOptions.html"
defines: ["SearchBoxOptions"]
member_count: 40
members: ["autoselectAfterTab", "chainSelected", "customSortResult", "disableSearchOnEnter", "dropdownUpdatedCallback", "emptyResultSelected", "enableMultiSelect", "feeds", "fields", "filter", "flagSource", "hiddenLabel", "instrumentAdded", "instrumentInfoCallback", "instrumentRemoved", "instrumentSelected", "instrumentTypes", "itemTypes", "limitToChains", "limitToFeeds", "matchOnlyOnTags", "maxResults", "placeholder", "popupContainer", "popupOffset", "popupParentType", "popupPosition", "preselectedInstruments", "processSearch", "resetPopupPosition", "rightAlignDropDown", "role", "searchResultCallback", "searchThreshold", "searchTickersOnly", "setLabel", "showAfterSelect", "tabIndex?", "usePerfectScrollbar", "wrapperClass?"]
member_groups:
  "SearchBox": ["autoselectAfterTab", "chainSelected", "customSortResult", "disableSearchOnEnter", "dropdownUpdatedCallback", "emptyResultSelected", "enableMultiSelect", "feeds", "fields", "filter", "flagSource", "hiddenLabel", "instrumentAdded", "instrumentInfoCallback", "instrumentRemoved", "instrumentSelected", "instrumentTypes", "itemTypes", "limitToChains", "limitToFeeds", "matchOnlyOnTags", "maxResults", "placeholder", "popupContainer", "popupOffset", "popupParentType", "popupPosition", "preselectedInstruments", "processSearch", "resetPopupPosition", "rightAlignDropDown", "role", "searchResultCallback", "searchThreshold", "searchTickersOnly", "setLabel", "showAfterSelect", "tabIndex?", "usePerfectScrollbar", "wrapperClass?"]
reference_count: 2
references: ["WTK.WidgetPopupParent", "WTK.SearchBox"]
---

# SearchBoxOptions

SearchBoxOptions class.

Set options for the SearchBox.

#### See

SearchBox

### SearchBox

#### autoselectAfterTab

```ts
autoselectAfterTab: boolean
```

Auto-select after tab.

##### Default Value

`false`

#### chainSelected

```ts
chainSelected: (chain: Chain) => void
```

This callback will be called if the selected result is a chain.

##### Type Declaration

- (chain: Chain): void

  ##### Parameters

  - chain: Chain

  ##### Returns void

##### See

Infront.Chain

##### Default Value

`undefined`

#### customSortResult

```ts
customSortResult: (results: any[]) => any[]
```

Custom sort result callback.

##### Type Declaration

- (results: any[]): any[]

  ##### Parameters

  - results: any[]

  ##### Returns any[]

##### Default Value

`undefined`

#### disableSearchOnEnter

```ts
disableSearchOnEnter: boolean = false
```

Use this option to prevent select items by Enter key.

##### Default Value

`false`

#### dropdownUpdatedCallback

```ts
dropdownUpdatedCallback: (dropdownContainer: HTMLElement) => void
```

This callback will be called when popup result has been updated.

It passes dropdown container HTML element.

##### Type Declaration

- (dropdownContainer: HTMLElement): void

  ##### Parameters

  - dropdownContainer: HTMLElement

  ##### Returns void

##### Default Value

`undefined`

#### emptyResultSelected

```ts
emptyResultSelected: (searchText: string) => void
```

This callback will be called if the result count is zero. It will pass search text.

##### Type Declaration

- (searchText: string): void

  ##### Parameters

  - searchText: string

  ##### Returns void

##### Default Value

`undefined`

#### enableMultiSelect

```ts
enableMultiSelect: boolean
```

If `true`, more than one instrument can be selected

Use the callbacks [instrumentAdded](#instrumentadded) and [instrumentRemoved](#instrumentremoved) to get notified when items are added or removed from selection.

##### Default Value

`false`

#### feeds

```ts
feeds: number[]
```

Specify list of feeds to search in.

##### Default Value

`undefined`

#### fields

```ts
fields: (string | SearchField)[]
```

Select the fields used to search in.

##### Default Value

`['full_name', 'ticker']`

#### filter

```ts
filter: (resultItem: any) => boolean
```

Filters the results based on the return value.

##### Type Declaration

- (resultItem: any): boolean

  ##### Parameters

  - resultItem: any

  ##### Returns boolean

##### Default Value

`undefined`

#### flagSource

```ts
flagSource: "COUNTRY_OF_INCORPORATION" | "FEED_COUNTRY" | "COUNTRY"
```

Flag source.

##### Default Value

`undefined`

#### hiddenLabel

```ts
hiddenLabel: boolean = false
```

Hidden label.

##### Default Value

`false`

#### instrumentAdded

```ts
instrumentAdded: (instrument: Instrument) => void
```

This callback will be called if [enableMultiSelect](#enablemultiselect) options is `true` and new instrument has been added to selection.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### See

Infront.Instrument

##### Default Value

`undefined`

#### instrumentInfoCallback

```ts
instrumentInfoCallback: (showInstrumentInfo: boolean) => void
```

Function to be called when a symbol search is complete.

##### Type Declaration

- (showInstrumentInfo: boolean): void

  ##### Parameters

  - showInstrumentInfo: boolean

  ##### Returns void

##### Default Value

`undefined`

#### instrumentRemoved

```ts
instrumentRemoved: (instrument: Instrument) => void
```

This callback will be called if [enableMultiSelect](#enablemultiselect) options is `true` and instrument has been removed from selection.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### See

Infront.Instrument

##### Default Value

`undefined`

#### instrumentSelected

```ts
instrumentSelected: (instrument: Instrument) => void
```

Passes selected instrument. Instrument may be `null` if nothing selected.

##### Type Declaration

- (instrument: Instrument): void

  ##### Parameters

  - instrument: Instrument

  ##### Returns void

##### See

Infront.Instrument

##### Default Value

`undefined`

#### instrumentTypes

```ts
instrumentTypes: string[]
```

Set instrument types.

##### Default Value

`undefined`

#### itemTypes

```ts
itemTypes: string[]
```

Limit what to search for, example ['INSTRUMENT']

##### Default Value

`undefined`

#### limitToChains

```ts
limitToChains: Chain[]
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

##### Deprecated

Use limitToChains to specify chains or feeds to specify list of feeds.

#### matchOnlyOnTags

```ts
matchOnlyOnTags: RealtimeTags[]
```

Match only on tags.

##### Default Value

`undefined`

#### maxResults

```ts
maxResults: number
```

Sets the maximum number of search results to be fetched.

##### Default Value

`5`

#### placeholder

```ts
placeholder: string
```

Placeholder text to show when no instruments are selected.

##### Default Value

`''`

#### popupContainer

```ts
popupContainer: string | HTMLElement | WidgetPopupParent
```

Popup container.

##### See

[WidgetPopupParent](./WTK.WidgetPopupParent.md)

##### Default Value

`undefined`

#### popupOffset

```ts
popupOffset: number = 0
```

Sets the left offset for popup search results.

##### Default Value

`0`

#### popupParentType

```ts
popupParentType: WidgetPopupParent
```

Popup parent type.

##### See

[WidgetPopupParent](./WTK.WidgetPopupParent.md)

##### Default Value

`undefined`

#### popupPosition

```ts
popupPosition: string
```

Sets the position for popup search results.

Values: 'absolute', 'fixed'

##### Default Value

`'absolute'`

#### preselectedInstruments

```ts
preselectedInstruments: any
```

Instruments shown as results in the box on load.

Only first instrument is used unless [enableMultiSelect](#enablemultiselect) is `true`.

Can be set to an Instrument-object if [enableMultiSelect](#enablemultiselect) is `false`.

##### Default Value

`false`

#### processSearch

```ts
processSearch: (text: any) => object[]
```

Callback for processing the search.

##### Type Declaration

- (text: any): object[]

  ##### Parameters

  - text: any

  ##### Returns object[]

##### Default Value

`undefined`

#### resetPopupPosition

```ts
resetPopupPosition: boolean
```

Reset popup position.

##### Default Value

`undefined`

#### rightAlignDropDown

```ts
rightAlignDropDown: boolean = false
```

Right align the dropdown.

##### Default Value

`false`

#### role

```ts
role: string
```

Role.

##### Default Value

`undefined`

#### searchResultCallback

```ts
searchResultCallback: (results: any[]) => void
```

Use this callback to replace the popup result list.

If it assigned result popup list will not be displayed.

##### Type Declaration

- (results: any[]): void

  ##### Parameters

  - results: any[]

  ##### Returns void

##### Default Value

`undefined`

#### searchThreshold

```ts
searchThreshold: number
```

Sets the minimum number of characters to search while typing.

##### Default Value

`3`

#### searchTickersOnly

```ts
searchTickersOnly: boolean
```

If `true` the search will match only ticker field.

##### Default Value

`false`

#### setLabel

```ts
setLabel: (hide: string, innerHtml: string, id: string) => void
```

Set label callback.

##### Type Declaration

- (hide: string, innerHtml: string, id: string): void

  ##### Parameters

  - hide: string
  - innerHtml: string
  - id: string

  ##### Returns void

##### Default Value

`undefined`

#### showAfterSelect

```ts
showAfterSelect: any
```

When a result is selected, set this option to add additional information to the displayed result.

Can be a string or a `function(instr: Instrument): string`.

Available values are:

- `Infront.SearchBox.kShowEmpty`
- `Infront.SearchBox.kShowTicker`
- `Infront.SearchBox.kShowName`
- `Infront.SearchBox.kShowTickerAndFeedCode`

##### Default Value

`'EMPTY'`

#### `Optional` tabIndex

```ts
tabIndex?: number
```

Tab index.

##### Default Value

`false`

#### usePerfectScrollbar

```ts
usePerfectScrollbar: boolean
```

Replace native browser scrollbar with "PerfectScrollbar".

##### Default Value

`undefined`

#### `Optional` wrapperClass

```ts
wrapperClass?: string
```

Extra CSS class added to the portaled dropdown wrapper div.
Use to raise z-index when the search is hosted inside a modal.

##### Default Value

`undefined`
