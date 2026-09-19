---
title: "PriceComponent"
qualified_name: "WTK.PriceComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > PriceComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.PriceComponent.html"
defines: ["PriceComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# PriceComponent

```ts
PriceComponent: OrderEntryPredefined & WithRange & {
    decimals?: number;
    predefinedType: "price";
    tick?: number;
    validationMessages?: { [K in FieldValidationRule]?: string };
    value?: number | "";
}
```

Price input field with instrument-aware tick size and decimal precision.
Automatically applies min/max constraints based on instrument price limits.

#### Type Declaration

- ##### `Optional` decimals?: number

  Number of decimal places for price display.
- ##### predefinedType: "price"

  Identifies this as a price input component.
- ##### `Optional` tick?: number

  Minimum price increment (tick size) for the instrument.
- ##### `Optional` validationMessages?: { [K in FieldValidationRule]?: string }

  Custom validation messages for price field.
- ##### `Optional` value?: number | ""

  Current price value (empty string when cleared).

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
