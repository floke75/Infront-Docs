---
title: "OrderEntrySectionBase"
qualified_name: "WTK.OrderEntrySectionBase"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderEntrySectionBase"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.OrderEntrySectionBase.html"
defines: ["OrderEntrySectionBase"]
member_count: 8
members: ["childrenClass?", "className?", "enabled?", "highlighted?", "id", "layout?", "title?", "visible?"]
member_groups:
  "Properties": ["childrenClass?", "className?", "enabled?", "highlighted?", "id", "layout?", "title?", "visible?"]
reference_count: 1
references: ["WTK.FlagValue"]
---

# OrderEntrySectionBase

Base interface for an order entry section, defining common properties.

```ts
interface OrderEntrySectionBase {
    childrenClass?: string;
    className?: string;
    enabled?: FlagValue;
    highlighted?: FlagValue;
    id: string;
    layout?: {
        align?:
            | "center"
            | "right"
            | "left"
            | "middle"
            | "bottom"
            | "top"
            | "justify"
            | "spaced"
            | "stretch";
        count?: number;
        orientation?: "row"
        | "column"
        | "row-reverse"
        | "column-reverse";
    };
    title?: string;
    visible?: FlagValue;
}
```

### Properties

#### `Optional` childrenClass

```ts
childrenClass?: string
```

Optional CSS class name for the section's children.

#### `Optional` className

```ts
className?: string
```

Optional CSS class name for the section.

#### `Optional` enabled

```ts
enabled?: FlagValue
```

Determines if the section is enabled. Can be a boolean or a calculated flag.

#### `Optional` highlighted

```ts
highlighted?: FlagValue
```

Determines if the section is highlighted. Can be a boolean or a calculated flag.

#### id

```ts
id: string
```

Unique identifier for the section.

#### `Optional` layout

```ts
layout?: {
    align?:
        | "center"
        | "right"
        | "left"
        | "middle"
        | "bottom"
        | "top"
        | "justify"
        | "spaced"
        | "stretch";
    count?: number;
    orientation?: "row"
    | "column"
    | "row-reverse"
    | "column-reverse";
}
```

Layout configuration for the section.

##### Type Declaration

- ###### `Optional` align?:
  | "center"
  | "right"
  | "left"
  | "middle"
  | "bottom"
  | "top"
  | "justify"
  | "spaced"
  | "stretch"

  Alignment of items within the layout.
- ###### `Optional` count?: number

  Number of items in the layout.
- ###### `Optional` orientation?: "row" | "column" | "row-reverse" | "column-reverse"

  Orientation of the layout.

#### `Optional` title

```ts
title?: string
```

Optional title for the section.

#### `Optional` visible

```ts
visible?: FlagValue
```

Determines if the section is visible. Can be a boolean or a calculated flag.
