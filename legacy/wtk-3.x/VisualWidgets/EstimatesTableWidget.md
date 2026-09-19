---
title: "Estimates Table widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "EstimatesTableWidget"
option_count: 9
options: ["target", "options", "company", "dataContent", "item", "fieldMode", "source", "currency", "title"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#EstimatesTableWidget"
---

# Estimates Table widget

```javascript
InfinWidget = InfinancialsUI.EstimatesTableWidget(target, [options]);
```

A widget showing key consensus estimates items of the company.

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

### `dataContent`

- **Type:** `Object`
- **Required:** No

### `item`

- **Type:** `EstimatesTableItem`
- **Required:** No

A class with two static properties

- Infinancials.EstimatesTableInquiryItem.**MAIN** = "main"
- Infinancials.EstimatesTableInquiryItem.**ALL** = "all"

### `fieldMode`

- **Type:** `FieldModeItems`
- **Required:** No

- Infinancials.FieldModeItems.**MEAN**
- Infinancials.FieldModeItems.**MEDIAN**
- Infinancials.FieldModeItems.**HIGH**
- Infinancials.FieldModeItems.**LOW**

### `source`

- **Type:** `String`
- **Required:** No

### `currency`

- **Type:** `Number`
- **Required:** No

### `title`

- **Type:** `String`
- **Required:** No

### Example

```html
<script type="text/javascript">
    var opts = new Infinancials.EstimatesTableWidgetOptions();
    opts.company = "US0378331005";
    var estimatesTableWidget = infinancialsUI.EstimatesTableWidget("estimatesTable", opts);
</script>
...
<div id="estimatesTable"></div>
```
