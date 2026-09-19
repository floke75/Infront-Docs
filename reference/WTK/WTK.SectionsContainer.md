---
title: "SectionsContainer"
qualified_name: "WTK.SectionsContainer"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > SectionsContainer"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.SectionsContainer.html"
defines: ["SectionsContainer"]
member_count: 2
members: ["components?", "sections"]
member_groups:
  "Properties": ["components?", "sections"]
reference_count: 3
references: ["WTK.OrderEntrySubSection", "WTK.OrderEntryComponent", "WTK.OrderEntrySection"]
---

# SectionsContainer

Container type for sections, used to nest subsections within a section.

#### See

- OrderEntryComponent
- OrderEntrySection

```ts
type SectionsContainer = {
    components?: never;
    sections: OrderEntrySubSection[];
}
```

### Properties

#### `Optional` components

```ts
components?: never
```

Components are not allowed in this container.

#### sections

```ts
sections: OrderEntrySubSection[]
```

Array of subsections contained within this section.
