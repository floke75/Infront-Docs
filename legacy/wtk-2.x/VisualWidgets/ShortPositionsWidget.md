---
title: "Short positions widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ShortPositionsWidget"
option_count: 3
options: ["target", "options", "company"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#ShortPositionsWidget"
---

# Short positions widget

```javascript
InfinWidget = InfinancialsUI.ShortPositionsWidget(target, [options]);
```

List current short positions held on a firm’s securities with event and publication date, holder name, holding percentage and performance (change in %)

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** Yes

The company ISIN or Infinancials code

### Example

```html
<script>        
    var opts = new Infinancials.ShortPositionsWidgetOptions();
    opts.company = "US0378331005" ;
    var spWidget = infinancialsUI.ShortPositionsWidget("shortpositions", opts);
</script>
...
<div id="shortpositions"></div>
```
