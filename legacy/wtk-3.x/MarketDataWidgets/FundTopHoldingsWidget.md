---
title: "Fund top holdings widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundTopHoldingsWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 1
options: ["showCurrency"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FundTopHoldingsWidget"
---

# Fund top holdings widget

```javascript
var opts = Infront.FundTopHoldingsWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

The fund top holdings widget shows a list of the top ten individual assets of the fund.

### `showCurrency`

- **Type:** `boolean`
- **Required:** No
- **Default:** `true`

If set to true, the widget will show the associated currency with each holding.

### Example

```html
<script type="text/javascript">
var opts = new Infront.FundTopHoldingsWidgetOptions();
opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
infront.fundTopHoldingsWidget("#fundTopHoldings", opts);
</script>
...

 <div id="fundTopHoldings"></div>
        
```
