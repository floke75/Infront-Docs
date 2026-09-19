---
title: "OrderTypeSelectorComponent"
qualified_name: "WTK.OrderTypeSelectorComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderTypeSelectorComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderTypeSelectorComponent.html"
defines: ["OrderTypeSelectorComponent"]
reference_count: 7
references: ["WTK.OrderEntryPredefined", "WTK.FlagValue", "WTK.OrderTypeNodes", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# OrderTypeSelectorComponent

```ts
OrderTypeSelectorComponent: OrderEntryPredefined & {
    disableUnavailableNodes?: FlagValue;
    hideUnavailableNodes?: FlagValue;
    orderTypeNodes?: OrderTypeNodes;
    predefinedType: "orderTypeSelector";
    selectedNode?: string;
    subLabel: string;
}
```

Hierarchical selector for order types including algorithmic trading strategies.
Displays a tree of available order types (Market, Limit, Stop, etc.) and algo strategies.

#### Type Declaration

- ##### `Optional` disableUnavailableNodes?: FlagValue

  Whether to disable (but show) unavailable order types. Accepts a boolean or a callback (events) => boolean.
- ##### `Optional` hideUnavailableNodes?: FlagValue

  Whether to hide order types not supported by current broker/instrument. Accepts a boolean or a callback (events) => boolean.
- ##### `Optional` orderTypeNodes?: OrderTypeNodes

  Tree structure defining available order types and algos.
- ##### predefinedType: "orderTypeSelector"

  Identifies this as a hierarchical order type selector component.
- ##### `Optional` selectedNode?: string

  Currently selected order type.
- ##### subLabel: string

  Secondary label displayed below the main label.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
