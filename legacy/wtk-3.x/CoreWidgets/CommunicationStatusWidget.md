---
title: "Communication status widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreWidgets"
widget_id: "CommunicationStatusWidget"
extends: "CommonListOptions"
option_count: 3
options: ["id", "sortOrder", "sortable"]
source_url: "https://doc.infrontfinance.com/v3/CoreWidgets#CommunicationStatusWidget"
---

# Communication status widget

```javascript
InfrontWidget = Infront.communicationStatus(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

This widget displays a list of connections status

### `id`

- **Type:** `String`

Widget id

### `sortOrder`

- **Type:** `Infront.SortOrder`
- **Default:** `Infront.SortOrder.Desc`

Sort Order for the widget

### `sortable`

- **Type:** `boolean`
- **Default:** `true`

Enables sorting by column

### Example

```javascript
var opts = new Infront.CommunicationStatusWidgetOptions();
opts.sortable = true;
widget = infront.communicationStatus("#communicationStatus", opts);
```
