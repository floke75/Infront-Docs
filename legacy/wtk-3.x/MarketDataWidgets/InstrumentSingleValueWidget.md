---
title: "Instrument Single Value Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "InstrumentSingleValueWidget"
extends: "ValueWidgetOptions"
option_count: 1
options: ["cacheKeyConverter"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#InstrumentSingleValueWidget"
---

# Instrument Single Value Widget

```javascript
InfrontWidget = InfrontUI.instrumentSingleValueWidget(target, [options]);
```

Extends [ValueWidgetOptions](../CoreObjects/ValueWidgetOptions.md)

Displays single instrument ticker, price and changes

### `cacheKeyConverter`

- **Type:** `(originalKey: string, col: Field) => string`

Converts the base cacheKey into the key pointing to the location of this specific column

### Example

```html
<script type="text/javascript">
    var svopts = new Infront.InstrumentSingleValueWidgetOptions();
    svopts.decimals = 2;
    svopts.instrument = new Infront.Instrument(18177, "OSEBX");
    svopts.name = "LAST";
    infront.instrumentSingleValueWidget("#last-oslo", svopts);
</script>

<div id="last-oslo"></div>
```
