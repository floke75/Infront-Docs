---
title: "Fund top holdings widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundTopHoldingsWidget"
option_count: 6
options: ["target", "options", "instrument", "decimals", "label", "showCurrency"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#FundTopHoldingsWidget"
---

# Fund top holdings widget

```javascript
var opts = Infront.FundTopHoldingsWidget(target, [options]);
```

The fund top holdings widget shows a list of the top ten individual assets of the fund.

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

### `label`

- **Type:** `"TICKER" | "NAME"`
- **Required:** No
- **Default:** `"NAME"`

Specifies how to identify the holdings.

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
