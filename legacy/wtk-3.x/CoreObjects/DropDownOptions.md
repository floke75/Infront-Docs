---
title: "DropDownOptions"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "DropDownOptions"
option_count: 17
options: ["id", "title", "list", "multiSelect", "sortAlphabetically", "showToggleAll", "closeOnClick", "preSelectedItems", "selectionUpdatesTitle", "subNodeName", "itemLabelPropertyKeys", "itemPath", "className", "dropDownClassName", "onItemClicked", "onSelectedItemsChanged", "onSortItems"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#DropDownOptions"
---

# DropDownOptions

A component used to display dropdown list.

### `id`

- **Type:** `string`
- **Required:** No

Use this option to identify dropdown items. This can be useful when using multible dropdowns in a toolbar. This can be used only with widgets that support toolbar like QuoteListWidget.

### `title`

- **Type:** `string`
- **Required:** Yes

Sets the title for dropdown button.

### `list`

- **Type:** `any[]`
- **Required:** Yes

List of items which should be used for the dropdown. This can be array of string or objects. If it is an array of objects then use it in combination with "itemLabelPropertyKeys" and "itemPath".

### `multiSelect`

- **Type:** `boolean`
- **Default:** `false`

This option allow to have a list with more than one item selected.

### `sortAlphabetically`

- **Type:** `boolean`
- **Default:** `true`

Sorts the list items alphabetically.

### `showToggleAll`

- **Type:** `boolean`
- **Default:** `false`

Display "Toggle all" option in the list to check/un-check all list items.

### `closeOnClick`

- **Type:** `boolean`
- **Default:** `false`

Closes the list once item has beem clicked.

### `preSelectedItems`

- **Type:** `any[]`

Use this option to define which list items should be checked by default.

### `selectionUpdatesTitle`

- **Type:** `boolean`
- **Default:** `false`

If this is true, dropdown button title will be set to the selected item title.

### `subNodeName`

- **Type:** `string`
- **Required:** No
- **Default:** `""`

Use this option to create nested lists. To do that assign property name used for sub-level list. Use it in combination with "itemLabelPropertyKeys".

### `itemLabelPropertyKeys`

- **Type:** `string[]`
- **Default:** `["defTitle"]`

Specifys the property name used to display list items title. If this has not been assigned the list will be treated as a string array.

### `itemPath`

- **Type:** `string`
- **Default:** `""`

Looks for items on this property.

### `className`

- **Type:** `string`
- **Required:** No
- **Default:** `""`

Used to assign a class name to dropdown button.

### `dropDownClassName`

- **Type:** `string`
- **Required:** No
- **Default:** `""`

Used to assign a class name to dropdown list.

### `onItemClicked`

- **Type:** `(item: any) => void`

This callback will be called when a list item has been clicked.

### `onSelectedItemsChanged`

- **Type:** `(items: any[]) => void`

Returns a list of selected items.

### `onSortItems`

- **Type:** `(item1, item2) => number`

Use this callback to customize items sort.

### Example

```html
<script type="text/javascript">
var opts = new Infront.DropDownOptions();
opts.title = "Test";
opts.list = [
  {"name": "First group", "items": [{name: "a1"}, {name: "a2"}, {name: "a3"}]},
  {"name": "Second group", "items": ["b1", "b2"]}
];
opts.subNodeName = "items";
opts.itemLabelPropertyKeys = ["name"];
opts.multiSelect = true;
opts.showToggleAll = true;
opts.onItemClicked = function(item) { 
  console.log(item); 
}
opts.onSelectedItemsChanged = function(items) { 
  console.log(items); 
}
new Infront.DropDown(document.getElementById("dropdown"), opts, infront.languageHandler);
</script>
...
<div id="dropdown" class="cell-content"></div>
    
```
