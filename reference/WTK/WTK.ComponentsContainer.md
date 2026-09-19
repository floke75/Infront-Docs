---
title: "ComponentsContainer"
qualified_name: "WTK.ComponentsContainer"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > ComponentsContainer"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.ComponentsContainer.html"
defines: ["ComponentsContainer"]
member_count: 2
members: ["components", "sections?"]
member_groups:
  "Properties": ["components", "sections?"]
reference_count: 2
references: ["WTK.OrderEntryComponent", "WTK.OrderEntrySection"]
---

# ComponentsContainer

Container type for components, used to nest components within a section.

#### See

- OrderEntryComponent
- OrderEntrySection

```ts
type ComponentsContainer = {
    components: OrderEntryComponent[];
    sections?: never;
}
```

### Properties

#### components

```ts
components: OrderEntryComponent[]
```

Array of components contained within this section.

#### `Optional` sections

```ts
sections?: never
```

Sections are not allowed in this container.
