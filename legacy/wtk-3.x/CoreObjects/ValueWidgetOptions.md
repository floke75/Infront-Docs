---
title: "ValueWidgetOptions"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "ValueWidgetOptions"
extends: "SingleInstrumentWidgetOptions"
option_count: 14
options: ["column", "enableChangeStatusColors", "rootElement", "type", "name", "translate", "content", "onClick", "className", "currencyClassName", "computeFields", "compute", "hover", "showCurrency"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#ValueWidgetOptions"
---

# ValueWidgetOptions

Extends [SingleInstrumentWidgetOptions](./SingleInstrumentWidgetOptions.md)

### `column`

- **Type:** `any`

Sets column for the widget

### `enableChangeStatusColors`

- **Type:** `boolean`

If true, columns in the table that indicates a change or percentage change will show a color (actually be assigned a class, you can style it any way you want) to indicate if the change is positive or negative.

### `rootElement`

- **Type:** `string`
- **Default:** `"div"`

Sets root HTML element.

### `type`

- **Type:** `string`

Indicating what form this column should take.

### `name`

- **Type:** `string`

The official field-name, in All caps, or any (non-official) identifier for custom type.

### `translate`

- **Type:** `(lineId: any, value: any) => string`
- **Required:** No

A function to translate the value into any valid HTML that is inserted into the table-cell.

### `content`

- **Type:** `any (can be string or function)`
- **Required:** Required if type is "custom", ignored if not

Content for custom columns.

### `onClick`

- **Type:** `(lineId: any, value: any, extras?: any) => void`

onClick-event for this column

### `className`

- **Type:** `string`

Class-name to add to both header and table-cells of this column.

### `currencyClassName`

- **Type:** `string`

Class-name to add to the currency-part of this widget

### `computeFields`

- **Type:** `string[]`
- **Required:** if type="computed", ignored else

The fields you want as arguments to your computation-function.

### `compute`

- **Type:** `(lineId: any, args: any[]) => any`
- **Required:** if type="computed", ignored else

The function doing your computation.

### `hover`

- **Type:** `string`
- **Required:** No

Reference to a column name with the content you want to show.

### `showCurrency`

- **Type:** `boolean`
- **Required:** No

Shows currency
