---
title: "ActiveToggleComponent"
qualified_name: "WTK.ActiveToggleComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > ActiveToggleComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.ActiveToggleComponent.html"
defines: ["ActiveToggleComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# ActiveToggleComponent

```ts
ActiveToggleComponent: OrderEntryPredefined & {
    predefinedType: "activeToggle";
    value?: boolean;
}
```

Toggle for activating/deactivating an order (for modify operations).
Allows temporarily suspending an order without canceling it.

#### Type Declaration

- ##### predefinedType: "activeToggle"

  Identifies this as an order active/inactive toggle component.
- ##### `Optional` value?: boolean

  Whether the order is currently active.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
