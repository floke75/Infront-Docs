---
title: "StrategyComponent"
qualified_name: "WTK.StrategyComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > StrategyComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.StrategyComponent.html"
defines: ["StrategyComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# StrategyComponent

```ts
StrategyComponent: OrderEntryPredefined & {
    predefinedType: "strategy";
    value?: string;
}
```

Selector for predefined trading strategies (if supported by broker).

#### Type Declaration

- ##### predefinedType: "strategy"

  Identifies this as a trading strategy display component.
- ##### `Optional` value?: string

  Currently selected strategy identifier.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
