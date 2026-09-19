---
title: "getNearestMultiple"
qualified_name: "Utils.InfrontUtil.getNearestMultiple"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getNearestMultiple"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getNearestMultiple.html"
defines: ["getNearestMultiple"]
---

# getNearestMultiple

```ts
getNearestMultiple(value: number, step: number): number
```

Finds the nearest multiple of step to the value

E.g.
value = 1.5; step = 0.8; returns 1.6; // as 1.6 is a multiple of 0.8 and the closest multiple to 1.5

#### Parameters

- value: number

  The value to find the nearest multiple of
- step: number

  The multiplicator, determines the valid multiples

#### Returns number

The nearest/closest multiple
