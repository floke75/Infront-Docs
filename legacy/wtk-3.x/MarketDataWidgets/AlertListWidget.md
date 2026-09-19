---
title: "Alert list widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "AlertListWidget"
extends: "WidgetBaseOptions"
option_count: 4
options: ["columns", "openModifyAlertClick", "closeModifyAlert", "alertListMini"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#AlertListWidget"
---

# Alert list widget

```javascript
InfrontWidget = Infront.alertWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

This widgets shows a list of all the alerts you currently have in our system.

Options class extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

### `columns`

- **Type:** `Array`
- **Default:** `["TYPE", "SOURCE", "CONDITION", "RECURRENCE", "COMMENT"]`

An array of columns/values for the table.

### `openModifyAlertClick`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the edit button in alert list is clicked

### `closeModifyAlert`

- **Type:** `() => void`
- **Required:** No

Closes modify alert

### `alertListMini`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Displays mini version of alert list

### Example

```html
<script type="text/javascript">
/* This configuration creates a list of all your alerts.*/
    var opts = new Infront.AlertListWidgetOptions();
    infront.alertListWidget("alertList", opts);
</script>
...
<div id="alertList"></div>
        
```
