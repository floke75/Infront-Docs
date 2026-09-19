---
title: "Trading power widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "TradingPowerWidget"
extends: "ValueWidgetOptions"
option_count: 1
options: ["base"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#TradingPowerWidget"
---

# Trading power widget

```javascript
InfrontWidget = InfrontUI.tradingPowerWidget(target, [options]);
```

Extends [ValueWidgetOptions](../CoreObjects/ValueWidgetOptions.md)

Shows trading power.

### `base`

- **Type:** `boolean`
- **Default:** `false`

Sets base initial values when the widget is created

### Example

```html
<script type="text/javascript">
var opts = new Infront.ValueWidgetOptions();
infrontUI.tradingPowerWidget("#tradingPower", opts);
</script>
...
<div id="tradingPower"></div>
        
```
