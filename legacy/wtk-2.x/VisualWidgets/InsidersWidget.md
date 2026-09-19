---
title: "Insiders widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "InsidersWidget"
option_count: 3
options: ["target", "options", "company"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#InsidersWidget"
---

# Insiders widget

```javascript
InfinWidget = InfinancialsUI.InsidersWidget(target, [options]);
```

Lists the owners of firm securities including the type of transaction, volume, date and status.

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

The company ISIN or Infinancials code

### Example

```html
<script>
    var opts = new Infinancials.InsidersWidgetOptions();
    opts.company = "US0378331005";
    var iWidget = infinancialsUI.InsidersWidget("insiders", opts);
</script>
...
<div id="insiders"></div>
```
