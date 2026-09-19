---
title: "InternalComponent<T>"
qualified_name: "WTK.InternalComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > InternalComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.InternalComponent.html"
defines: ["InternalComponent"]
reference_count: 1
references: ["WTK.OrderEntryComponent"]
---

# InternalComponent<T>

```ts
InternalComponent: T extends any
    ? Omit<T, "visible" | "predefinedType" | "id"> & {
        id: NonNullable<T["id"]>;
    }
    : never
```

Represents a component after the wrapper layer has processed visibility logic.
This type omits the `visible` property from the base component, as visibility
is handled at the wrapper level and is not needed by the internal renderer components.

Use this type for components passed to low-level renderers where visibility
has already been evaluated by ComponentWrapper.

#### Type Parameters

- T extends OrderEntryComponent = OrderEntryComponent
