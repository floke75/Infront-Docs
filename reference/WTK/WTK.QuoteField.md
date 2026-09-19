---
title: "QuoteField"
qualified_name: "WTK.QuoteField"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > QuoteField"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.QuoteField.html"
defines: ["QuoteField"]
member_count: 5
members: ["blinkDuration?", "blinkType?", "enableStatusColors?", "label?", "name"]
member_groups:
  "Properties": ["blinkDuration?", "blinkType?", "enableStatusColors?", "label?", "name"]
reference_count: 2
references: ["WTK.BlinkDuration", "WTK.BlinkType"]
---

# QuoteField

QuoteField

```ts
interface QuoteField {
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

label, Reminder: '' != null, take default translations from columns

#### name

```ts
name: string
```

name
