---
title: "PortfolioValueComponent"
qualified_name: "WTK.PortfolioValueComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > PortfolioValueComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.PortfolioValueComponent.html"
defines: ["PortfolioValueComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# PortfolioValueComponent

```ts
PortfolioValueComponent: OrderEntryPredefined & {
    decimals?: number;
    displayCurrency?: boolean;
    predefinedType: "portfolioValue";
    value?: string | number;
    valueKey: string;
}
```

Displays a specific value from the selected portfolio (e.g., cash balance, buying power).

#### Type Declaration

- ##### `Optional` decimals?: number

  Number of decimal places to display.
- ##### `Optional` displayCurrency?: boolean

  Whether to show the currency symbol/code.
- ##### predefinedType: "portfolioValue"

  Identifies this as a portfolio value display component.
- ##### `Optional` value?: string | number

  Current value (can be string or number).
- ##### valueKey: string

  Key identifying which portfolio metric to display.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
