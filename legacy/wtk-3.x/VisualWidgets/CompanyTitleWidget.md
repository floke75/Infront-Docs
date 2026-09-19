---
title: "Company Title Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "CompanyTitleWidget"
option_count: 4
options: ["target", "options", "company", "enable_search"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#CompanyTitleWidget"
---

# Company Title Widget

```javascript
InfinWidget = InfinancialsUI.CompanyTitleWidget(target, [options]);
```

This widget includes short business summary of a company as well as, last annual revenues, current market capitalization and number of employees.

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

The company ISIN or Infront code. When the company is not sent or not available in Infront Analytics, the message: "Information not available for this instrument" is displayed.

### `enable_search`

- **Type:** `Boolean`
- **Required:** No
- **Default:** `FALSE`

### Example

```html
<script type="text/javascript">
    var opts = new Infinancials.CompanyTitleWidgetOptions();
    opts.company = "US0378331005";
    opts.enable_search = false;
    var companyTitleWidget = infinancialsUI.CompanyTitleWidget("companyTitle", opts);
</script>
...
<div id="companyTitle"></div>
```
