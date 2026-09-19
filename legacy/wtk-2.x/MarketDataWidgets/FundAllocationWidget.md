---
title: "Fund Allocation Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundAllocationWidget"
option_count: 6
options: ["target", "options", "instrument", "decimals", "allocationType", "maxLines"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#FundAllocationWidget"
---

# Fund Allocation Widget

```javascript
var opts = Infront.FundAllocationWidgetOptions(target, [options]);
```

The fund allocation widget gives the user a list of a funds top county, asset or sector allocation.

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

### `allocationType`

- **Type:** `"Country" | "Asset" | "Sector"`
- **Required:** Yes

Set to one

### `maxLines`

- **Type:** `number`
- **Required:** No
- **Default:** `-1`

Set to limit number of rows this widget will display

### Example

```html
<script type="text/javascript">
var opts = new Infront.FundAllocationWidgetOptions();
opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
infront.fundAllocationWidget("#fundAllocation", opts);
</script>
...

 <div id="fundAllocation"></div>
        
```
