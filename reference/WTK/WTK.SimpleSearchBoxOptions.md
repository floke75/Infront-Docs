---
title: "SimpleSearchBoxOptions"
qualified_name: "WTK.SimpleSearchBoxOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widget Options"
nav_path: "WTK > Widget Options > SimpleSearchBoxOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SimpleSearchBoxOptions.html"
defines: ["SimpleSearchBoxOptions"]
member_count: 18
members: ["autoselectAfterTab", "dropdownUpdatedCallback", "emptyResultSelected", "enableMultiSelect", "fields", "getSelectedItemStr", "itemAdded", "itemRemoved", "itemSelected", "maxResults", "placeholder", "popupContainer", "preselectedElements", "processSearch", "resetPopupPosition", "searchItemType", "searchThreshold", "showAfterSelect"]
member_groups:
  "SimpleSearchBox": ["autoselectAfterTab", "dropdownUpdatedCallback", "emptyResultSelected", "enableMultiSelect", "fields", "getSelectedItemStr", "itemAdded", "itemRemoved", "itemSelected", "maxResults", "placeholder", "popupContainer", "preselectedElements", "processSearch", "resetPopupPosition", "searchItemType", "searchThreshold", "showAfterSelect"]
reference_count: 2
references: ["WTK.WidgetPopupParent", "WTK.SimpleSearchBox"]
---

# SimpleSearchBoxOptions

SimpleSearchBoxOptions class.

Set options for the SimpleSearchBox.

#### See

SimpleSearchBox

### SimpleSearchBox

#### autoselectAfterTab

```ts
autoselectAfterTab: boolean
```

Auto-select after tab.

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

Use the callbacks [itemAdded](#itemadded) and [itemRemoved](#itemremoved) to get notified when items are added or removed from selection.

##### Default Value

`false`

#### fields

```ts
fields: string[]
```

Select the fields used to search in.

##### Default Value

`['full_name', 'ticker']`

#### getSelectedItemStr

```ts
getSelectedItemStr: (item: any) => string
```

Callback for getting selected item string.

##### Type Declaration

- (item: any): string

  ##### Parameters

  - item: any

  ##### Returns string

##### Default Value

`undefined`

#### itemAdded

```ts
itemAdded: (item: any) => void
```

Callback on item added.

##### Type Declaration

- (item: any): void

  ##### Parameters

  - item: any

  ##### Returns void

##### Default Value

`undefined`

#### itemRemoved

```ts
itemRemoved: (item: any) => void
```

Callback on item removed.

##### Type Declaration

- (item: any): void

  ##### Parameters

  - item: any

  ##### Returns void

##### Default Value

`undefined`

#### itemSelected

```ts
itemSelected: (item: any) => void
```

Callback on item selected.

##### Type Declaration

- (item: any): void

  ##### Parameters

  - item: any

  ##### Returns void

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

#### preselectedElements

```ts
preselectedElements: any
```

Elements shown as results in the box on load.

Only first element is used unless [enableMultiSelect](#enablemultiselect) is `true`.

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

#### searchItemType

```ts
searchItemType: string
```

Search item type.

##### Default Value

`undefined`

#### searchThreshold

```ts
searchThreshold: number
```

Sets the minimum number of characters to search while typing.

##### Default Value

`3`

#### showAfterSelect

```ts
showAfterSelect: any
```

When an item is selected, set this option to add additional information to the displayed result.

Can be a string or a `function(instr: Instrument): string`.

Available values are:

- `Infront.SearchBox.kShowEmpty`
- `Infront.SearchBox.kShowTicker`
- `Infront.SearchBox.kShowName`
- `Infront.SearchBox.kShowTickerAndFeedCode`

##### Default Value

`'EMPTY'`
