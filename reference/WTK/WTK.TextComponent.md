---
title: "TextComponent"
qualified_name: "WTK.TextComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > TextComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.TextComponent.html"
defines: ["TextComponent"]
reference_count: 5
references: ["WTK.OrderEntryBase", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# TextComponent

```ts
TextComponent: OrderEntryBase<"textInput"> & {
    inputmode?: "decimal" | "numeric" | "text";
    placeholder?: string;
    type: "text";
    value?: string;
}
```

Single-line text input field.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
