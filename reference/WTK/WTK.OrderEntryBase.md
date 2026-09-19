---
title: "OrderEntryBase<TRenderers>"
qualified_name: "WTK.OrderEntryBase"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderEntryBase"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderEntryBase.html"
defines: ["OrderEntryBase"]
member_count: 9
members: ["className?", "enabled?", "highlighted?", "id?", "label?", "meta?", "readonly?", "required?", "visible?"]
member_groups:
  "Properties": ["className?", "enabled?", "highlighted?", "id?", "label?", "meta?", "readonly?", "required?", "visible?"]
reference_count: 1
references: ["WTK.OrderBuilderMeta"]
---

# OrderEntryBase<TRenderers>

Base interface for every piece of UI inside a Section (Section Group).
The optional `renderAs` field lets consumers choose between
multiple renderers for the same logical component type.

```ts
type OrderEntryBase<TRenderers extends string | undefined = undefined> = {
    className?: string;
    enabled?: boolean;
    highlighted?: boolean;
    id?: string;
    label?: string;
    meta?: OrderBuilderMeta;
    readonly?: boolean;
    required?: boolean;
    visible?: boolean;
}
```

#### Type Parameters

- TRenderers extends string | undefined = undefined

### Properties

#### `Optional` className

```ts
className?: string
```

Additional CSS class names for styling.

#### `Optional` enabled

```ts
enabled?: boolean
```

Whether the component is enabled for interaction.

#### `Optional` highlighted

```ts
highlighted?: boolean
```

Whether the component should be visually highlighted.

#### `Optional` id

```ts
id?: string
```

Unique identifier for the component.

#### `Optional` label

```ts
label?: string
```

Display label for the component.

#### `Optional` meta

```ts
meta?: OrderBuilderMeta
```

Metadata for order building and event emission.

#### `Optional` readonly

```ts
readonly?: boolean
```

Whether the component is read-only.

#### `Optional` required

```ts
required?: boolean
```

Whether the component must have a value before order submission.

#### `Optional` visible

```ts
visible?: boolean
```

Whether the component is visible in the UI.
