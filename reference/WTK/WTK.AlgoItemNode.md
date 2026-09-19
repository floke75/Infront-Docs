---
title: "AlgoItemNode"
qualified_name: "WTK.AlgoItemNode"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > AlgoItemNode"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.AlgoItemNode.html"
defines: ["AlgoItemNode"]
member_count: 3
members: ["algoId", "label?", "translateLabel?"]
member_groups:
  "Properties": ["algoId", "label?", "translateLabel?"]
related_types: ["WTK.AlgoItemOrderTypeNode"]
reference_count: 1
references: ["WTK.AlgoItemOrderTypeNode"]
---

# AlgoItemNode

A leaf node representing an algorithmic trading strategy.
Algos typically require additional parameters defined separately.

```ts
interface AlgoItemNode {
    algoId: string;
    label?: string;
    translateLabel?: boolean;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.AlgoItemNode))

- BaseNode

  - AlgoItemNode

    - AlgoItemOrderTypeNode

### Properties

#### algoId

```ts
algoId: string
```

Unique identifier for the algorithmic strategy (e.g., 'VWAP', 'TWAP', 'Iceberg').

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
