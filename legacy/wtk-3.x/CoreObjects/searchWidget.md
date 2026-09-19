---
title: "Search widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "searchWidget"
option_count: 20
options: ["feeds", "searchTickersOnly", "disableSearchOnEnter", "searchThreshold", "maxResults", "enableMultiSelect", "preselectedInstruments", "placeholder", "fields", "itemTypes", "showAfterSelect", "popupOffset", "filter", "instrumentSelected", "emptyResultSelected", "chainSelected", "instrumentAdded", "instrumentRemoved", "dropdownUpdatedCallback", "searchResultCallback"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#searchWidget"
---

# Search widget

```javascript
InfrontWidget = InfrontUI.searchWidget(target, [options]);
```

Search widget for finding instruments.

### `feeds`

- **Type:** `number[]`
- **Required:** No

Specify list of feeds to search in.

### `searchTickersOnly`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true the search will match only ticker field.

### `disableSearchOnEnter`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Use this option to prevent select items by Enter key.

### `searchThreshold`

- **Type:** `number`
- **Required:** No
- **Default:** `3`

Sets the minimum number of characters to search while typing.

### `maxResults`

- **Type:** `number`
- **Required:** No
- **Default:** `5`

Sets the maximum number of search results to be fetched.

### `enableMultiSelect`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true, more than one instrument can be selected. Use the callbacks [instrumentAdded](https://doc.infrontfinance.com/v3/CoreObjects#instrumentAdded) and [instrumentRemoved](https://doc.infrontfinance.com/v3/CoreObjects#instrumentRemoved) to get notified when items are added or removed from selection.

### `preselectedInstruments`

- **Type:** `Instrument or Instrument[]`
- **Required:** No

Instruments shown as results in the box on load. Only first instrument is used unless enableMultiSelect is true. Can be set to an Instrument-object if enableMultiSelct is false

### `placeholder`

- **Type:** `string`
- **Required:** No
- **Default:** `""`

Placeholder text to show when no instruments are selected

### `fields`

- **Type:** `string[]`
- **Required:** No
- **Default:** `["FULL_NAME", "TICKER"]`

Select the fields used to search in.

### `itemTypes`

- **Type:** `string[]`
- **Required:** No

Limit what to search for, example ["INSTRUMENT"]

### `showAfterSelect`

- **Type:** `Infront.SearchBox.kShowEmpty || Infront.SearchBox.kShowTicker || Infront.SearchBox.kShowName || Infront.SearchBox.kShowTickerAndFeedCode`
- **Required:** No

When a result is selected, set this option to add additional information to the displayed result.

### `popupOffset`

- **Type:** `number`
- **Required:** No
- **Default:** `0`

Sets the left offset for popup search results.

### `filter`

- **Type:** `(resultItem: any) => boolean`
- **Required:** No

Filters the results based on the return value.

### `instrumentSelected`

- **Type:** `(selectedInstr: Instrument) => void`
- **Required:** No

Passes selected instrument. Instrument may be Null if nothing selected.

### `emptyResultSelected`

- **Type:** `(searchText: string) => void`
- **Required:** No

This callback will be called if the result count is zero. It will pass search text.

### `chainSelected`

- **Type:** `(chain: Chain) => void`
- **Required:** No

This callback will be called if the selected result is a chain.

### `instrumentAdded`

- **Type:** `(instrument: Instrument) => void`
- **Required:** No

This callback will be called if [enableMultiSelect](https://doc.infrontfinance.com/v3/CoreObjects#enableMultiSelect) options is True and new instrument has been added to selection.

### `instrumentRemoved`

- **Type:** `(instrument: Instrument) => void`
- **Required:** No

This callback will be called if [enableMultiSelect](https://doc.infrontfinance.com/v3/CoreObjects#enableMultiSelect) options is True and instrument has been removed from selection.

### `dropdownUpdatedCallback`

- **Type:** `(dropdownContainer: HTMLElement) => void`
- **Required:** No

This callback will be called when popup result has been updated. It passes drop down container HTML element.

### `searchResultCallback`

- **Type:** `(results: any[]) => void`
- **Required:** No

Use this callback to replace the popup result list. If it assigned result popup list will not be displayed.

### Example

```html
<script type="text/javascript">
// Symbol search
var sbOpts = new Infront.SearchBoxOptions();
sbOpts.enableMultiSelect = false;
sbOpts.placeholder = "Search instruments";
sbOpts.itemTypes = ["INSTRUMENT"];
sbOpts.showAfterSelect = "TICKER";
sbOpts.instrumentSelected = function (instrument) {
_this.setInstrument(instrument);
};
infront.searchWidget("#editSearch", sbOpts);
</script>
...
<div id="editSearch"></div>
    
```
