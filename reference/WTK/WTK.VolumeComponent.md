---
title: "VolumeComponent"
qualified_name: "WTK.VolumeComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > VolumeComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.VolumeComponent.html"
defines: ["VolumeComponent"]
reference_count: 6
references: ["WTK.OrderEntryPredefined", "WTK.NumberRenderMode", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# VolumeComponent

```ts
VolumeComponent: OrderEntryPredefined & WithRange & {
    decimals?: number;
    modifyVolumeBehavior?: "total" | "remaining";
    predefinedType: "volume";
    renderAs?: NumberRenderMode;
    step?: number;
    validationMessages?: { [K in FieldValidationRule]?: string };
    value?: number | "";
}
```

Volume (quantity) input field with validation for instrument lot sizes.

#### Type Declaration

- ##### `Optional` decimals?: number

  Number of decimal places to display.
- ##### `Optional` modifyVolumeBehavior?: "total" | "remaining"

  Volume behavior when modifying an order.

  - `total`: Modifying uses the full original volume of the order.
  - `remaining`: Modifying uses only the unfilled (remaining) volume.

  #### Default Value

  `total`
- ##### predefinedType: "volume"

  Identifies this as a volume input component.
- ##### `Optional` renderAs?: NumberRenderMode

  Visual style: 'textInput' or 'stepper'.
- ##### `Optional` step?: number

  Increment step (typically the lot size).
- ##### `Optional` validationMessages?: { [K in FieldValidationRule]?: string }

  Custom validation messages for volume field.
- ##### `Optional` value?: number | ""

  Current numeric value (empty string when cleared).

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
