---
title: "Order widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "OrderStackWidget"
option_count: 1
options: ["orderClicked"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#OrderStackWidget"
---

# Order widget

```javascript
InfrontWidget = InfrontUI.orderStackWidget(target, [options]);
```

Options class extends [TradingWidgetOptions](../CoreObjects/TradingWidgetOptions.md)

Shows the orders of a given portfolio.

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
