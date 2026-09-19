---
title: "OrderEntryButton"
qualified_name: "WTK.OrderEntryButton"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > OrderEntryButton"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.OrderEntryButton.html"
defines: ["OrderEntryButton"]
member_count: 2
members: ["label", "onClick"]
member_groups:
  "Properties": ["label", "onClick"]
---

# OrderEntryButton

Order-entry button

```ts
interface OrderEntryButton {
    label: string;
    onClick: (event: Event) => void;
}
```

### Properties

#### label

```ts
label: string
```

button label

#### onClick

```ts
onClick: (event: Event) => void
```

button on-click event
