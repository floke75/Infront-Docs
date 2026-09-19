---
title: "GrossAmountComponent"
qualified_name: "WTK.GrossAmountComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > GrossAmountComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.GrossAmountComponent.html"
defines: ["GrossAmountComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# GrossAmountComponent

```ts
GrossAmountComponent: OrderEntryPredefined & {
    decimals?: number;
    displayCurrency?: boolean;
    estimatedLabel?: string;
    predefinedType: "grossAmount";
}
```

Displays the calculated gross order amount (price × volume × contract size).
Shows estimated value before order execution.

#### Type Declaration

- ##### `Optional` decimals?: number

  Number of decimal places for amount display.
- ##### `Optional` displayCurrency?: boolean

  Whether to show the currency symbol/code.
- ##### `Optional` estimatedLabel?: string

  Label to display when value is estimated (not final).
- ##### predefinedType: "grossAmount"

  Identifies this as a gross amount display component.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
