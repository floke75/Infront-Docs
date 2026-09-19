---
title: "Alert widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "AlertWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 4
options: ["alertAddedClick", "alert", "hideSearchBox", "customSearchClicked"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#AlertWidget"
---

# Alert widget

```javascript
InfrontWidget = Infront.alertWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

This widget is used for adding and modifying alerts.

### `alertAddedClick`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the Add Alert button is clicked

### `alert`

- **Type:** `InfrontAlert | undefined`
- **Required:** No

Sets alert

### `hideSearchBox`

- **Type:** `boolean`
- **Required:** No

Hides search box

### `customSearchClicked`

- **Type:** `() => void`
- **Required:** No

Callback that indicates whether the custom search is clicked

### Example

```html
<script type="text/javascript">
    /* This configuration creates a window to add or modify alerts.
     */
    var opts = new Infront.AlertWidgetOptions();
    infront.alertWidget("#alert", opts);
</script>
...
<div id="alert"></div>
```
