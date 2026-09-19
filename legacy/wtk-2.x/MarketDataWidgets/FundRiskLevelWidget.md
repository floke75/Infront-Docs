---
title: "Fund RiskLevel Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundRiskLevelWidget"
option_count: 4
options: ["target", "options", "instrument", "decimals"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#FundRiskLevelWidget"
---

# Fund RiskLevel Widget

```javascript
var opts = Infront.FundRiskLevelWidgetOptions(target, [options]);
```

The risk level widget shows the risk rating of a fund.

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
var opts = new Infront.FundRiskLevelWidgetOptions();
opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
infront.fundRiskLevelWidget("#fundRiskLevel", opts);
</script>
...
 <div id="fundRiskLevel"></div>
        
```
