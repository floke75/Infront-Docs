---
title: "ChartField"
qualified_name: "WTK.ChartField"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartField"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartField.html"
defines: ["ChartField"]
member_count: 5
members: ["blinkDuration?", "blinkType?", "enableStatusColors?", "label?", "name"]
member_groups:
  "Properties": ["blinkDuration?", "blinkType?", "enableStatusColors?", "label?", "name"]
reference_count: 2
references: ["WTK.BlinkDuration", "WTK.BlinkType"]
---

# ChartField

ChartField

```ts
interface ChartField {
    blinkDuration?: BlinkDuration;
    blinkType?: BlinkType;
    enableStatusColors?: boolean;
    label?: string | boolean;
    name: string;
}
```

### Properties

#### `Optional` blinkDuration

```ts
blinkDuration?: BlinkDuration
```

blinkDuration

#### `Optional` blinkType

```ts
blinkType?: BlinkType
```

blinkType, use BlinkType.None to deactivate

#### `Optional` enableStatusColors

```ts
enableStatusColors?: boolean
```

enableStatusColors

#### `Optional` label

```ts
label?: string | boolean
```

label, not implemented yet, as implementation differs from quote field

#### name

```ts
name: string
```

name
