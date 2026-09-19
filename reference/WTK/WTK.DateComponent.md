---
title: "DateComponent"
qualified_name: "WTK.DateComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > DateComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.DateComponent.html"
defines: ["DateComponent"]
reference_count: 5
references: ["WTK.OrderEntryBase", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# DateComponent

```ts
DateComponent: OrderEntryBase & {
    event?: EventName;
    maxDate?: Date | string;
    minDate?: Date | string;
    type: "date";
    value?: Date | string;
}
```

Date picker component with optional min/max date constraints.

#### Type Declaration

- ##### `Optional` event?: EventName

  Optional event to emit on value change.

  #### Default Value

  `'inputCommitted'`
- ##### `Optional` maxDate?: Date | string

  Latest selectable date.
- ##### `Optional` minDate?: Date | string

  Earliest selectable date.
- ##### type: "date"

  Identifies this as a date picker component.
- ##### `Optional` value?: Date | string

  Selected date (Date object or ISO string).

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
