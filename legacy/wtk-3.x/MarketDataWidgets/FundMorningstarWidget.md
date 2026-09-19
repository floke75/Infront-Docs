---
title: "Fund Morningstar Rating Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundMorningstarWidget"
extends: "SingleInstrumentWidgetOptions"
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FundMorningstarWidget"
---

# Fund Morningstar Rating Widget

```javascript
var opts = Infront.FundMorningstarRatingWidgetOptions(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

The morningstar widget shows the morningstar rating for a fund.

### Example

```html
<script type="text/javascript">
var opts = new Infront.FundMorningstarRatingWidgetOptions();
opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
infront.fundMorningstarRatingWidget("#fundMorningstar", opts);
</script>
...
 <div id="fundMorningstar"></div>
        
```
