---
title: "AlgoParamsComponent"
qualified_name: "WTK.AlgoParamsComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > AlgoParamsComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.AlgoParamsComponent.html"
defines: ["AlgoParamsComponent"]
reference_count: 5
references: ["WTK.OrderEntryPredefined", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# AlgoParamsComponent

```ts
AlgoParamsComponent: OrderEntryPredefined & WithIncludeExclude<string> & {
    algoParamValidationMessages?: Record<
        string,
        { [K in FieldValidationRule]?: string },
    >;
    alignment?: string;
    hideSingleItemSelections?: boolean;
    labelOverrides?: LabelOverride[];
    orientation?: string;
    predefinedType: "algoParams";
}
```

Dynamic form for algorithmic trading parameters based on selected algo strategy.
Renders appropriate input controls for each parameter defined by the algo.

#### Type Declaration

- ##### `Optional` algoParamValidationMessages?: Record<string, { [K in FieldValidationRule]?: string }>

  Custom validation messages per algo parameter ID (raw broker param ID, not prefixed with 'algo-').

  #### Example

  ```ts
  { TriggerPx: { required: 'Trigger price is required' } }
  ```
- ##### `Optional` alignment?: string

  Layout alignment (e.g., 'horizontal' or 'vertical').
- ##### `Optional` hideSingleItemSelections?: boolean

  Whether to hide selection controls when only one option is available.
- ##### `Optional` labelOverrides?: LabelOverride[]

  Custom labels for specific parameter IDs.
- ##### `Optional` orientation?: string

  Layout orientation (e.g., 'row' or 'column').
- ##### predefinedType: "algoParams"

  Identifies this as an algorithmic trading parameters component.

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
