---
title: "OrderTypeGroupNode"
qualified_name: "WTK.OrderTypeGroupNode"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderTypeGroupNode"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.OrderTypeGroupNode.html"
defines: ["OrderTypeGroupNode"]
member_count: 4
members: ["children", "label?", "orderType", "translateLabel?"]
member_groups:
  "Properties": ["children", "label?", "orderType", "translateLabel?"]
related_types: ["WTK.OrderTypeNode"]
reference_count: 2
references: ["WTK.AlgoItemNode", "WTK.OrderTypeNode"]
---

# OrderTypeGroupNode

A node representing an order type that can have multiple algorithmic variants.
The order type acts as a parent with algo strategies as children.

Example: A "Limit" order type with child algos like "Iceberg Limit", "Hidden Limit"

```ts
interface OrderTypeGroupNode {
    children: AlgoItemNode[];
    label?: string;
    orderType: OrderType;
    translateLabel?: boolean;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.OrderTypeGroupNode))

- OrderTypeNode

  - OrderTypeGroupNode

### Properties

#### children

```ts
children: AlgoItemNode[]
```

Algorithmic strategies available for this order type.

#### `Optional` label

```ts
label?: string
```

Display label for the node (if not provided, uses default from order type or algo).

Inherited from OrderTypeNode.label

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

Inherited from OrderTypeNode.translateLabel
