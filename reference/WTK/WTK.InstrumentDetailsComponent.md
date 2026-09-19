---
title: "InstrumentDetailsComponent"
qualified_name: "WTK.InstrumentDetailsComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > InstrumentDetailsComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.InstrumentDetailsComponent.html"
defines: ["InstrumentDetailsComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# InstrumentDetailsComponent

```ts
InstrumentDetailsComponent: OrderEntryPredefined & {
    decimals?: number;
    layout?: string;
    predefinedType: "instrumentDetails";
}
```

Displays key information about the selected trading instrument (name, price, spread, etc.).

#### Type Declaration

- ##### `Optional` decimals?: number

  Number of decimal places for price/numeric values.
- ##### `Optional` layout?: string

  Custom layout identifier for arranging displayed fields.
- ##### predefinedType: "instrumentDetails"

  Identifies this as an instrument details display component.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
