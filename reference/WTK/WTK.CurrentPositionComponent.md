---
title: "CurrentPositionComponent"
qualified_name: "WTK.CurrentPositionComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > CurrentPositionComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.CurrentPositionComponent.html"
defines: ["CurrentPositionComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# CurrentPositionComponent

```ts
CurrentPositionComponent: OrderEntryPredefined & {
    predefinedType: "currentPosition";
}
```

Displays the user's current position in the selected instrument.
Shows quantity held, average price, and unrealized P&L.

#### Type Declaration

- ##### predefinedType: "currentPosition"

  Identifies this as position field display component.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
