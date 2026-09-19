---
title: "NumberFormatter"
qualified_name: "Utils.InfrontUtil.NumberFormatter"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > NumberFormatter"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.NumberFormatter.html"
defines: ["NumberFormatter"]
member_count: 2
members: ["constructor", "format"]
member_groups:
  "Constructors": ["constructor"]
  "Methods": ["format"]
related_types: ["Utils.InfrontUtil.Formatter"]
reference_count: 1
references: ["Utils.InfrontUtil.Formatter"]
---

# NumberFormatter

Formats a number

#### Implements

- [Formatter](./Utils.InfrontUtil.Formatter.md)

### Constructors

#### constructor

```ts
new NumberFormatter(decimals: number, allowZero?: boolean): NumberFormatter
```

Create a number formatter.

##### Parameters

- decimals: number

  number of decimals.
- allowZero: boolean = null

  if this is true it will allow to display zero instead of empty value. default value is false.

##### Returns NumberFormatter

### Methods

#### format

```ts
format(value: any): any
```

This will format the passed value

##### Parameters

- value: any

##### Returns any

Implementation of [Formatter](./Utils.InfrontUtil.Formatter.md).[format](./Utils.InfrontUtil.Formatter.md#format)
