---
title: "ChartLogo"
qualified_name: "WTK.ChartLogo"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartLogo"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartLogo.html"
defines: ["ChartLogo"]
member_count: 8
members: ["className?", "height?", "infrontLogo?", "offset?", "opacity?", "position?", "src?", "width?"]
member_groups:
  "Properties": ["className?", "height?", "infrontLogo?", "offset?", "opacity?", "position?", "src?", "width?"]
reference_count: 2
references: ["WTK.LogoType", "WTK.LogoPosition"]
---

# ChartLogo

Chart logo

```ts
interface ChartLogo {
    className?: string;
    height?: number;
    infrontLogo?: LogoType;
    offset?: number;
    opacity?: number;
    position?: LogoPosition;
    src?: string;
    width?: number;
}
```

### Properties

#### `Optional` className

```ts
className?: string
```

an optional CSS class name

#### `Optional` height

```ts
height?: number
```

the logo image height

#### `Optional` infrontLogo

```ts
infrontLogo?: LogoType
```

the logo type

##### See

[LogoType](./WTK.LogoType.md)

#### `Optional` offset

```ts
offset?: number
```

the logo offset

#### `Optional` opacity

```ts
opacity?: number
```

the logo opacity

#### `Optional` position

```ts
position?: LogoPosition
```

the logo position

##### See

[LogoPosition](./WTK.LogoPosition.md)

#### `Optional` src

```ts
src?: string
```

src can be url to a png, jpg, svg

#### `Optional` width

```ts
width?: number
```

the logo image width
