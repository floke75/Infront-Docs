---
title: "SortColumnDefinition"
qualified_name: "WTK.SortColumnDefinition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > SortColumnDefinition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.SortColumnDefinition.html"
defines: ["SortColumnDefinition"]
member_count: 2
members: ["column", "sortOrder?"]
member_groups:
  "Properties": ["column", "sortOrder?"]
reference_count: 1
references: ["WTK.SortOrder"]
---

# SortColumnDefinition

SortColumnDefinition

```ts
interface SortColumnDefinition {
    column: string | number;
    sortOrder?: SortOrder;
}
```

### Properties

#### column

```ts
column: string | number
```

sort column

#### `Optional` sortOrder

```ts
sortOrder?: SortOrder
```

sort order
