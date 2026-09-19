---
title: "OrderEntryRootSection"
qualified_name: "WTK.OrderEntryRootSection"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderEntryRootSection"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderEntryRootSection.html"
defines: ["OrderEntryRootSection"]
reference_count: 3
references: ["WTK.OrderEntrySectionBase", "WTK.SectionsContainer", "WTK.ComponentsContainer"]
---

# OrderEntryRootSection

```ts
OrderEntryRootSection: OrderEntrySectionBase & {
    pinned?: "top" | "bottom" | "fullscreen";
} & (SectionsContainer | ComponentsContainer)
```

Represents a root section in the order entry, which can contain either subsections or components.
Supports pinning to top, bottom, or fullscreen.
