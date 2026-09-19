---
title: "ChartPlotlineOptions"
qualified_name: "WTK.ChartPlotlineOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartPlotlineOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartPlotlineOptions.html"
defines: ["ChartPlotlineOptions"]
member_count: 4
members: ["dashStyle?", "label?", "width?", "zIndex?"]
member_groups:
  "Properties": ["dashStyle?", "label?", "width?", "zIndex?"]
---

# ChartPlotlineOptions

Vendor-agnostic subset of plotline options for chart overlays.

```ts
interface ChartPlotlineOptions {
    dashStyle?: string;
    label?: {
        align?: string;
        text?: string;
        verticalAlign?: string;
        x?: number;
        y?: number;
    };
    width?: number;
    zIndex?: number;
}
```

### Properties

#### `Optional` dashStyle

```ts
dashStyle?: string
```

The dash style of the plotline (e.g., 'Solid', 'Dash', 'Dot').

#### `Optional` label

```ts
label?: {
    align?: string;
    text?: string;
    verticalAlign?: string;
    x?: number;
    y?: number;
}
```

Label configuration for the plotline.

##### Type Declaration

- ###### `Optional` align?: string

  The alignment of the label (e.g., 'left', 'center', 'right').
- ###### `Optional` text?: string

  The text to display in the label.
- ###### `Optional` verticalAlign?: string

  The vertical alignment of the label (e.g., 'top', 'middle', 'bottom').
- ###### `Optional` x?: number

  Horizontal pixel offset for the label.
- ###### `Optional` y?: number

  Vertical pixel offset for the label.

#### `Optional` width

```ts
width?: number
```

The width of the plotline (in pixels).

#### `Optional` zIndex

```ts
zIndex?: number
```

The z-index of the plotline (controls stacking order).
