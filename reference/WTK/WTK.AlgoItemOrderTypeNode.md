---
title: "AlgoItemOrderTypeNode"
qualified_name: "WTK.AlgoItemOrderTypeNode"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > AlgoItemOrderTypeNode"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.AlgoItemOrderTypeNode.html"
defines: ["AlgoItemOrderTypeNode"]
member_count: 4
members: ["algoId", "label?", "orderType", "translateLabel?"]
member_groups:
  "Properties": ["algoId", "label?", "orderType", "translateLabel?"]
related_types: ["WTK.AlgoItemNode", "WTK.OrderTypeNode"]
reference_count: 2
references: ["WTK.AlgoItemNode", "WTK.OrderTypeNode"]
---

# AlgoItemOrderTypeNode

A hybrid node that combines both an order type and an algo identifier.
Used when an algo strategy is associated with a specific order type.

Example: A "VWAP Limit" algo that uses Limit orders with VWAP execution

```ts
interface AlgoItemOrderTypeNode {
    algoId: string;
    label?: string;
    orderType: OrderType;
    translateLabel?: boolean;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.AlgoItemOrderTypeNode))

- AlgoItemNode
- OrderTypeNode

  - AlgoItemOrderTypeNode

### Properties

#### algoId

```ts
algoId: string
```

Unique identifier for the algorithmic strategy (e.g., 'VWAP', 'TWAP', 'Iceberg').

Inherited from AlgoItemNode.algoId

#### `Optional` label

```ts
label?: string
```

Display label for the node (if not provided, uses default from order type or algo).

Inherited from AlgoItemNode.label

#### orderType

```ts
orderType: OrderType
```

The order type identifier (e.g., 'Market', 'Limit', 'Stop').

Inherited from OrderTypeNode.orderType

#### `Optional` translateLabel

```ts
translateLabel?: boolean
```

Whether to translate the label using the i18n system (default: true for predefined types).

Inherited from AlgoItemNode.translateLabel
