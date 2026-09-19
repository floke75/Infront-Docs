---
title: "NumberComponent"
qualified_name: "WTK.NumberComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > NumberComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.NumberComponent.html"
defines: ["NumberComponent"]
reference_count: 6
references: ["WTK.OrderEntryBase", "WTK.NumberRenderMode", "WTK.OrderEntryComponent", "WTK.OrderEntrySection", "WTK.OrderEntryWidget", "WTK.OrderEntryWidgetOptions"]
---

# NumberComponent

```ts
NumberComponent: OrderEntryBase<NumberRenderMode> & {
    adjustOnBlur: (value: number) => number;
    decimals?: number;
    format: (value: number) => string;
    inputmode: "decimal" | "numeric";
    max?: number;
    min?: number;
    notifyClamped?: boolean;
    parse: (text: string) => number | "" | undefined;
    placeholder?: string;
    recalcKey?: unknown;
    resolveStep?: (
        text: string,
        parsed: number | "" | undefined,
    ) => number | "any";
    step?: number;
    stepAttr: number | "any";
    stepper: (current: number, direction: 1 | -1) => number;
    type: "number";
    value?: number | "";
}
```

Numeric input with optional min/max/step constraints and decimal precision.

#### Type Declaration

- ##### adjustOnBlur: (value: number) => number

  A callback for adjusting the value when the input loses focus.
- ##### `Optional` decimals?: number

  Number of decimal places to display.
- ##### format: (value: number) => string

  A callback for formatting the numeric value as a string.
- ##### inputmode: "decimal" | "numeric"
- ##### `Optional` max?: number

  Maximum allowable value.
- ##### `Optional` min?: number

  Minimum allowable value.
- ##### `Optional` notifyClamped?: boolean

  When true, emits PRICE_CLAMPED_CHANGED when adjustOnBlur changes the value.
- ##### parse: (text: string) => number | "" | undefined

  A callback for parsing, formatting, and adjusting the numeric value.
- ##### `Optional` placeholder?: string

  Placeholder text when input is empty.
- ##### `Optional` recalcKey?: unknown
- ##### `Optional` resolveStep?: (text: string, parsed: number | "" | undefined) => number | "any"

  Optional resolver for finalizing the value on stepper changes.
- ##### `Optional` step?: number

  Increment step for value adjustments.
- ##### stepAttr: number | "any"

  Step attribute for native number input or 'any' for freeform input.
- ##### stepper: (current: number, direction: 1 | -1) => number

  A callback for stepping the value up or down.
- ##### type: "number"

  Identifies this as a numeric input component.
- ##### `Optional` value?: number | ""

  Current numeric value (empty string when cleared).

#### See

- OrderEntryComponent
- OrderEntrySection
- [OrderEntryWidget](./WTK.OrderEntryWidget.md)
- [OrderEntryWidgetOptions](./WTK.OrderEntryWidgetOptions.md)
