---
title: "Outlook widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "OutlookWidget"
option_count: 6
options: ["target", "options", "company", "dataContent", "source", "currency"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#OutlookWidget"
---

# Outlook widget

```javascript
IAWidget = InfinancialsUI.OutlookWidget(target, [options]);
```

The widget is showing several key financial indicators for the company such as: Upside Target Pr, Dividend Yield, EPS Momentum, P/E, Consensus.

### `target`

- **Type:** `String or HTMLElement`

Target element identifier, interpreted as an element id when it's a String.

### `options`

- **Type:** `Object`

A map of configuration options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

The company ISIN or Infront code.

### `dataContent`

- **Type:** `Object`
- **Required:** No

### `source`

- **Type:** `String`
- **Required:** No

### `currency`

- **Type:** `String`
- **Required:** No

### Example

```html
<script type="text/javascript">
var opts = new Infinancials.OutlookWidgetOptions();
opts.company = "US0378331005";

var outlookWidget = infinancialsUI.OutlookWidget("outlook", opts);
</script>
...
<div id="outlook"></div>
        
```
