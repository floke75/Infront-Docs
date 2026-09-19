---
title: "OrderEntrySubSection"
qualified_name: "WTK.OrderEntrySubSection"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderEntrySubSection"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderEntrySubSection.html"
defines: ["OrderEntrySubSection"]
reference_count: 5
references: ["WTK.OrderEntrySectionBase", "WTK.SectionsContainer", "WTK.ComponentsContainer", "WTK.OrderEntryComponent", "WTK.PredefinedComponent"]
---

# OrderEntrySubSection

```ts
OrderEntrySubSection: OrderEntrySectionBase & { pinned?: never } & (
    SectionsContainer
    | ComponentsContainer
)
```

Represents a subsection in the order entry, which can contain either subsections or components.
Subsections cannot be pinned.

#### See

OrderEntryComponent | PredefinedComponent
