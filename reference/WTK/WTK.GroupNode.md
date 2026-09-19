---
title: "GroupNode"
qualified_name: "WTK.GroupNode"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > GroupNode"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.GroupNode.html"
defines: ["GroupNode"]
member_count: 3
members: ["children", "label?", "translateLabel?"]
member_groups:
  "Properties": ["children", "label?", "translateLabel?"]
reference_count: 2
references: ["WTK.OrderTypeNode", "WTK.AlgoItemOrderTypeNode"]
---

# GroupNode

A grouping node that contains other nodes (order types or algo items).
Used to organize the tree structure with collapsible sections.

Example: A "Limit Orders" group containing "Limit", "Stop Limit", etc.

```ts
interface GroupNode {
    children: (OrderTypeNode | AlgoItemOrderTypeNode)[];
    label?: string;
    translateLabel?: boolean;
}
```

#### Hierarchy

- BaseNode

  - GroupNode

### Properties

#### children

```ts
children: (OrderTypeNode | AlgoItemOrderTypeNode)[]
```

Child nodes which can be order types or algo-wrapped order types.

#### `Optional` label

```ts
label?: string
```

Display label for the node (if not provided, uses default from order type or algo).

Inherited from BaseNode.label

#### `Optional` translateLabel

```ts
translateLabel?: boolean
```

Whether to translate the label using the i18n system (default: true for predefined types).

Inherited from BaseNode.translateLabel
