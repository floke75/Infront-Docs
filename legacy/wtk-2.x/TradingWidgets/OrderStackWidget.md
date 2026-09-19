---
title: "Order widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "OrderStackWidget"
option_count: 3
options: ["target", "options", "orderClicked"]
source_url: "https://doc.infrontfinance.com/v2/TradingWidgets#OrderStackWidget"
---

# Order widget

```javascript
InfrontWidget = InfrontUI.orderStackWidget(target, [options]);
```

Shows the orders of a given portfolio.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `orderClicked`

- **Type:** `(portfolio:string, orderId:number)=>void`

Onclick-event

### Example

```html
<script type="text/javascript">
/* Shows current orders.
*/
var opts = new Infront.OrderStackWidgetOptions();
infrontUI.orderStackWidget("#orderStack", opts);
</script>
...
<div id="orderStack"></div>
        
```
