---
title: "OrderTypeNode"
qualified_name: "WTK.OrderTypeNode"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderTypeNode"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.OrderTypeNode.html"
defines: ["OrderTypeNode"]
member_count: 3
members: ["label?", "orderType", "translateLabel?"]
member_groups:
  "Properties": ["label?", "orderType", "translateLabel?"]
related_types: ["WTK.AlgoItemOrderTypeNode", "WTK.OrderTypeGroupNode"]
reference_count: 2
references: ["WTK.AlgoItemOrderTypeNode", "WTK.OrderTypeGroupNode"]
---

# OrderTypeNode

A leaf node representing a specific order type (Market, Limit, Stop, etc.).
When selected, configures the order entry form for that order type.

```ts
interface OrderTypeNode {
    label?: string;
    orderType: OrderType;
    translateLabel?: boolean;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrderTypeNode))

- BaseNode

  - OrderTypeNode

    - AlgoItemOrderTypeNode
    - OrderTypeGroupNode

### Properties

#### `Optional` label

```ts
label?: string
```

Display label for the node (if not provided, uses default from order type or algo).

Inherited from BaseNode.label

#### orderType

```ts
orderType: OrderType
```

The order type identifier (e.g., 'Market', 'Limit', 'Stop').

#### `Optional` translateLabel

```ts
translateLabel?: boolean
```

Whether to translate the label using the i18n system (default: true for predefined types).

Inherited from BaseNode.translateLabel
