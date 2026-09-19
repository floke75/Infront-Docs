---
title: "Estimates Table Inquiry widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "EstimatesTableInquiryWidget"
option_count: 14
options: ["target", "options", "company", "item", "period", "valueType", "fieldMode", "dataContent", "title", "currency", "chartElement", "source", "title", "currency"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#EstimatesTableInquiryWidget"
---

# Estimates Table Inquiry widget

```javascript
IAWidget = InfinancialsUI.EstimatesTableInquiryWidget(target, [options]);
```

A widget showing detailed consensus estimates items of the company.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

The company ISIN or Infront code.

### `item`

- **Type:** `EstimatesTableInquiryItem`
- **Required:** No

A class with two static properties

- Infinancials.EstimatesTableInquiryItem.**MAIN** = "main"
- Infinancials.EstimatesTableInquiryItem.**ALL** = "all"

### `period`

- **Type:** `EstimatesTableInquiryPeriodType`
- **Required:** No

Enum to select the field to display

- Infinancials.EstimatesTableInquiryPeriodType.**Yearly**
- Infinancials.EstimatesTableInquiryPeriodType.**Quarterly**

### `valueType`

- **Type:** `EstimatesTableInquiryValueType`
- **Required:** No

- Infinancials.EstimatesTableInquiryValueType.**Reported**
- Infinancials.EstimatesTableInquiryValueType.**Estimates**

### `fieldMode`

- **Type:** `FieldModeItems`
- **Required:** No

- Infinancials.FieldModeItems.**MEAN**
- Infinancials.FieldModeItems.**MEDIAN**
- Infinancials.FieldModeItems.**HIGH**
- Infinancials.FieldModeItems.**LOW**

### `dataContent`

- **Type:** `Object`
- **Required:** No

### `title`

- **Type:** `String`
- **Required:** No

### `currency`

- **Type:** `Number`
- **Required:** No

### `chartElement`

- **Type:** `HTMLElement`
- **Required:** No

Location where to display the chart.

### `source`

- **Type:** `String`
- **Required:** No

### `title`

- **Type:** `String`
- **Required:** No

### `currency`

- **Type:** `Number`
- **Required:** No

### Example

```html
<script type="text/javascript">
var opts = new Infinancials.EstimatesTableWidgetOptions();
opts.company = "90103EF";

var estTableWidget = infinancialsUI.EstimatesTableWidget("estimatesTable", opts);
</script>
...
<div id="estimatesTable"></div>
        
```
