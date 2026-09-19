---
title: "CustomFieldsComponent"
qualified_name: "WTK.CustomFieldsComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > CustomFieldsComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.CustomFieldsComponent.html"
defines: ["CustomFieldsComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# CustomFieldsComponent

```ts
CustomFieldsComponent: OrderEntryPredefined & WithIncludeExclude & {
    alignment?: string;
    labelOverrides?: LabelOverride[];
    orientation?: string;
    predefinedType: "customFields";
    value?:
        | Record<number | string, string>
        | ((e: EventState) => Record<number | string, string>);
}
```

Dynamic form for broker-specific custom fields.
Renders appropriate input controls based on field definitions from the broker.

#### Type Declaration

- ##### `Optional` alignment?: string

  Layout alignment (e.g., 'horizontal' or 'vertical').
- ##### `Optional` labelOverrides?: LabelOverride[]

  Custom display labels for specific field IDs.
- ##### `Optional` orientation?: string

  Layout orientation (e.g., 'row' or 'column').
- ##### predefinedType: "customFields"

  Identifies this as order custom fields component.
- ##### `Optional` value?:
  | Record<number | string, string>
  | ((e: EventState) => Record<number | string, string>)

  Map of custom field IDs to their current values, or a value getter callback.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
