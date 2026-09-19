---
title: "OpenVolumeComponent"
qualified_name: "WTK.OpenVolumeComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OpenVolumeComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OpenVolumeComponent.html"
defines: ["OpenVolumeComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# OpenVolumeComponent

```ts
OpenVolumeComponent: OrderEntryPredefined & WithRange & {
    predefinedType: "openVolume";
    step?: number;
    value?: number | "";
}
```

Input for modifying the open (unfilled) volume of an existing order.
Only applicable when modifying partially filled orders.

#### Type Declaration

- ##### predefinedType: "openVolume"

  Identifies this as an open volume modification component.
- ##### `Optional` step?: number

  Increment step for volume adjustment.
- ##### `Optional` value?: number | ""

  New open volume (empty string when cleared).

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
