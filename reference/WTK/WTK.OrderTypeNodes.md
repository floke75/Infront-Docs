---
title: "OrderTypeNodes"
qualified_name: "WTK.OrderTypeNodes"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderTypeNodes"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderTypeNodes.html"
defines: ["OrderTypeNodes"]
reference_count: 4
references: ["WTK.GroupNode", "WTK.OrderTypeGroupNode", "WTK.OrderTypeNode", "WTK.AlgoItemOrderTypeNode"]
---

# OrderTypeNodes

```ts
OrderTypeNodes: (
    GroupNode
    | OrderTypeGroupNode
    | OrderTypeNode
    | AlgoItemOrderTypeNode
)[]
```

Array defining the complete hierarchical structure of available order types and algorithms.
This tree structure is rendered by the OrderTypeSelectorComponent.

The tree supports multiple levels of nesting:

- GroupNode: Pure organizational groups
- OrderTypeGroupNode: Order types with algo variants
- OrderTypeNode: Simple order types
- AlgoItemOrderTypeNode: Combined order type + algo

Example structure:

```typescript
[
  { orderType: 'Market' },
  {
    orderType: 'Limit',
    children: [
      { algoId: 'Iceberg' },
      { algoId: 'TWAP' }
    ]
  },
  {
    label: 'Advanced Orders',
    children: [
      { orderType: 'Stop' },
      { orderType: 'StopLimit' }
    ]
  }
]
```
