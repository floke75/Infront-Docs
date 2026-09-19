---
title: "Beta widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "BetaWidget"
option_count: 3
options: ["target", "options", "company"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#BetaWidget"
---

# Beta widget

Heads up! These docs are for v2. Check out the latest version of Infront Web Toolkit!

```javascript
InfinWidget = InfinancialsUI.BetaWidget(target, [options]);
```

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

The company ISIN or Infinancials code If no company is sent or the company is not available in Infinancials, the message: "Information not available for this instrument" is displayed.

### Example

```html
<script type="text/javascript">
    var opts = new Infinancials.BetaWidgetOptions();
    opts.company = "US0378331005";
    var betaWidget = infinancialsUI.BetaWidget("beta", opts);
</script>
...
<div id="beta"></div>
```
