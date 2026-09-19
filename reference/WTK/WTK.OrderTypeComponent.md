---
title: "OrderTypeComponent"
qualified_name: "WTK.OrderTypeComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderTypeComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderTypeComponent.html"
defines: ["OrderTypeComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# OrderTypeComponent

```ts
OrderTypeComponent: OrderEntryPredefined & WithIncludeExclude<OrderType> & {
    onSort?: (a: OrderType, b: OrderType) => number;
    predefinedType: "orderType";
    value?: OrderType;
}
```

Simple dropdown selector for order type (Market, Limit, Stop, etc.).
Alternative to OrderTypeSelectorComponent when hierarchical display is not needed.

#### Type Declaration

- ##### `Optional` onSort?: (a: OrderType, b: OrderType) => number

  Custom sorting function for order type options.
- ##### predefinedType: "orderType"

  Identifies this as a simple order type selector component.
- ##### `Optional` value?: OrderType

  Currently selected order type.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
