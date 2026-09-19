---
title: "Fund Stylemap Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundStylemapWidget"
extends: "SingleInstrumentWidgetOptions"
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FundStylemapWidget"
---

# Fund Stylemap Widget

```javascript
var opts = Infront.FundStylemapWidgetOptions(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

The stylemap widget gives the user a stylemap grid for the fund.

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
