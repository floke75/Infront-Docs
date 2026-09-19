---
title: "CheckboxComponent"
qualified_name: "WTK.CheckboxComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > CheckboxComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.CheckboxComponent.html"
defines: ["CheckboxComponent"]
reference_count: 6
references: ["WTK.OrderEntryBase", "WTK.CheckboxRenderMode", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# CheckboxComponent

```ts
CheckboxComponent: OrderEntryBase<CheckboxRenderMode> & {
    type: "checkbox";
    value?: boolean;
}
```

Checkbox or toggle switch for boolean values.

#### Type Declaration

- ##### type: "checkbox"
- ##### `Optional` value?: boolean

  Current boolean state.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
