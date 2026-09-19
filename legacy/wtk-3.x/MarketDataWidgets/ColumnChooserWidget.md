---
title: "Column chooser widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "ColumnChooserWidget"
extends: "WidgetBaseOptions"
option_count: 7
options: ["listWidget", "showTitle", "overrideTitle", "allowDirectUpdate", "allowDragAndDrop", "onClose", "onAdd"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#ColumnChooserWidget"
---

# Column chooser widget

```javascript
InfrontWidget = InfrontUI.columnChooserWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

Allows to show displayed columns for list widgets

### `listWidget`

- **Type:** `CommonListWidgetBase`

Links list widget that provides columns

### `showTitle`

- **Type:** `boolean`
- **Default:** `false`

Displays title

### `overrideTitle`

- **Type:** `string`

Overrides default title

### `allowDirectUpdate`

- **Type:** `boolean`
- **Default:** `true`

Allows updating list widget directly

### `allowDragAndDrop`

- **Type:** `boolean`
- **Default:** `true`

Allows drag and drop

### `onClose`

- **Type:** `(state: number) => void`

Callback that is triggered when widget is closed.

### `onAdd`

- **Type:** `() => void`

Callback that is triggered when item is added.

### Example

```html
<script type="text/javascript">
var ccOpts = new Infront.ColumnChooserWidgetOptions();
...
infrontUI.portfolioRankingWidget("#columnChooser", ccOpts);
</script>
...
<div id="columnChooser"></div>

        
```
