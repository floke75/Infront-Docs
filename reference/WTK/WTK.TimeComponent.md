---
title: "TimeComponent"
qualified_name: "WTK.TimeComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > TimeComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.TimeComponent.html"
defines: ["TimeComponent"]
reference_count: 5
references: ["WTK.OrderEntryBase", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# TimeComponent

```ts
TimeComponent: OrderEntryBase & { type: "time"; value?: string }
```

Time picker component for selecting time values.

#### Type Declaration

- ##### type: "time"

  Identifies this as a time picker component.
- ##### `Optional` value?: string

  Selected time as string (e.g., "14:30").

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
