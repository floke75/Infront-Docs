---
title: "DateTimeComponent"
qualified_name: "WTK.DateTimeComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > DateTimeComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.DateTimeComponent.html"
defines: ["DateTimeComponent"]
reference_count: 5
references: ["WTK.OrderEntryBase", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# DateTimeComponent

```ts
DateTimeComponent: OrderEntryBase & { type: "datetime"; value?: Date }
```

Combined date and time picker component.

#### Type Declaration

- ##### type: "datetime"

  Identifies this as a date-time picker component.
- ##### `Optional` value?: Date

  Selected date-time as Date object.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
