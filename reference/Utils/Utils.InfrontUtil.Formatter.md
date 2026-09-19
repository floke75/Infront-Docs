---
title: "Formatter"
qualified_name: "Utils.InfrontUtil.Formatter"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > Formatter"
source_url: "https://docs.infrontfinance.com/docs/interfaces/Utils.InfrontUtil.Formatter.html"
defines: ["Formatter"]
member_count: 3
members: ["cleanupFormatter?", "format", "listen?"]
member_groups:
  "Methods": ["cleanupFormatter?", "format", "listen?"]
related_types: ["Utils.InfrontUtil.NumberFormatter"]
reference_count: 1
references: ["Utils.InfrontUtil.NumberFormatter"]
---

# Formatter

A Formatter is responsible for transforming the value into a format. An example is formatting a number into a string for displaying to the user.

```ts
interface Formatter {
    cleanupFormatter?(): void;
    format(value: any): any;
    listen?(updateCallback: () => void): void;
}
```

#### Implemented by

- [NumberFormatter](./Utils.InfrontUtil.NumberFormatter.md)

### Methods

#### `Optional` cleanupFormatter

```ts
cleanupFormatter?(): void
```

Use this methode to remove bindings and reset.

##### Returns void

#### format

```ts
format(value: any): any
```

This will format the passed value

##### Parameters

- value: any

##### Returns any

#### `Optional` listen

```ts
listen?(updateCallback: () => void): void
```

Use this methode to get notified when the value has updated.

##### Parameters

- updateCallback: () => void

##### Returns void
