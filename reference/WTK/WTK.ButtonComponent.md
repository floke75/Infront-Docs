---
title: "ButtonComponent"
qualified_name: "WTK.ButtonComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > ButtonComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.ButtonComponent.html"
defines: ["ButtonComponent"]
reference_count: 5
references: ["WTK.OrderEntryBase", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# ButtonComponent

```ts
ButtonComponent: OrderEntryBase & {
    event?: EventName;
    payload?: unknown;
    type: "button";
}
```

Clickable button that emits an event when pressed.

#### Type Declaration

- ##### `Optional` event?: EventName

  Event to emit on click.

  #### Default Value

  `'orderAction'`
- ##### `Optional` payload?: unknown

  Optional data to include with the event.
- ##### type: "button"

  Identifies this as a button component.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
