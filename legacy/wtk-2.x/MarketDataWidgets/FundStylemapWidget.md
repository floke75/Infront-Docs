---
title: "Fund Stylemap Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundStylemapWidget"
option_count: 4
options: ["target", "options", "instrument", "decimals"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#FundStylemapWidget"
---

# Fund Stylemap Widget

```javascript
var opts = Infront.FundStylemapWidgetOptions(target, [options]);
```

The stylemap widget gives the user a stylemap grid for the fund.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `instrument`

- **Type:** `instrument`
- **Required:** Yes

The instrument to show in this widget.

### `decimals`

- **Type:** `number`
- **Required:** No

Set to override number of decimals for this widget. Defaults to instrument or feed decimals if not set.

### Example

```html
<script type="text/javascript">
var opts = new Infront.FundStylemapWidgetOptions();
opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
infront.fundStylemapWidget("#fundStylemap", opts);
</script>
...
 <div id="fundStylemap"></div>
        
```
