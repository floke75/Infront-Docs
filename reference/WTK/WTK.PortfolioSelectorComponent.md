---
title: "PortfolioSelectorComponent"
qualified_name: "WTK.PortfolioSelectorComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > PortfolioSelectorComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.PortfolioSelectorComponent.html"
defines: ["PortfolioSelectorComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# PortfolioSelectorComponent

```ts
PortfolioSelectorComponent: OrderEntryPredefined & {
    predefinedType: "portfolioSelector";
}
```

Dropdown for selecting a portfolio/account for order placement.
Lists available portfolios from connected brokers.

#### Type Declaration

- ##### predefinedType: "portfolioSelector"

  Identifies this as a portfolio selector component.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
