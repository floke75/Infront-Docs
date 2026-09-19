---
title: "SearchBox"
qualified_name: "WTK.SearchBox"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Widgets"
nav_path: "WTK > Widgets > SearchBox"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.SearchBox.html"
defines: ["SearchBox"]
related_types: ["WTK.InfrontComponent"]
reference_count: 2
references: ["WTK.SearchBoxOptions", "WTK.InfrontComponent"]
---

# SearchBox

SearchBox class.

`InfrontWidget = InfrontUI.searchWidget(target, [options]);`

Text box that searches for instruments and shows results in a dropdown for selection.

Options can be configured with SearchBoxOptions.

#### Example

```ts
<script type="text/javascript">
    // Symbol search
    var sbOpts = new Infront.SearchBoxOptions();
    sbOpts.enableMultiSelect = false;
    sbOpts.placeholder = "Search instruments";
    sbOpts.itemTypes = ["INSTRUMENT"];
    sbOpts.showAfterSelect = "TICKER";
    sbOpts.instrumentSelected = function (instrument) {
        this.setInstrument(instrument);
    };
    infront.searchWidget("#editSearch", sbOpts);
</script>
..
<div id="editSearch"></div>
```

#### See

SearchBoxOptions

#### Implements

- [InfrontComponent](./WTK.InfrontComponent.md)
- Controller
