---
title: "Quote  widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "QuoteWidget"
extends: "ValueWidgetOptions"
option_count: 1
options: ["name"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#QuoteWidget"
---

# Quote  widget

```javascript
    Extends ValueWidgetOptions
    InfrontWidget = InfrontUI.quoteWidget(target, [options]);
```

Widget that displays a single quote

### Functions

### `name`

- **Type:** `string`
- **Default:** `"LAST"`

Sets a name for the widget

### Example

```html
<script type="text/javascript">
/* 
*  Single quote example
*/
var opts = new Infront.QuoteWidgetOptions();
opts.instrument = { "feed": 17921, "ticker": "ABB" };
opts.name = "TICKER";
infront.quoteWidget("#quoteWidget", opts);

</script>
...
<div id="quoteWidget"></div>
    
```
