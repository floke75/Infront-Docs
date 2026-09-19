---
title: "Search widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "searchWidget"
option_count: 6
options: ["enableMultiSelect", "preselectedInstruments", "placeholder", "itemTypes", "showAfterSelect", "instrumentSelected"]
source_url: "https://doc.infrontfinance.com/v2/CoreObjects#searchWidget"
---

# Search widget

```javascript
InfrontWidget = InfrontUI.searchWidget(target, [options]);
```

Search widget for finding instruments.

### `enableMultiSelect`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

If true, more than one instrument can be selected

### `preselectedInstruments`

- **Type:** `Instrument or Instrument[]`
- **Required:** No

Instruments shown as results in the box on load. Only first instrument is used unless enableMultiSelect is true. Can be set to an Instrument-object if enableMultiSelct is false

### `placeholder`

- **Type:** `string`
- **Required:** No
- **Default:** `""`

Placeholder text to show when no instruments are selected

### `itemTypes`

- **Type:** `string[]`
- **Required:** No

Limit what to search for, example ["INSTRUMENT"]

### `showAfterSelect`

- **Type:** `Infront.SearchBox.kShowEmpty || Infront.SearchBox.kShowTicker || Infront.SearchBox.kShowName || Infront.SearchBox.kShowTickerAndFeedCode`
- **Required:** No

When a result is selected, set this option to add additional information to the displayed result.

### `instrumentSelected`

- **Type:** `(selectedInstr:Instrument)=>void`
- **Required:** No

Returns selected instrument. May return Null if nothing is selected.

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
infront.searchWidget("#editSearch", opts);
</script>
...
<div id="editSearch"></div>
    
```
