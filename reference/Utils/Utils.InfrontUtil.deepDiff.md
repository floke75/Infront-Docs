---
title: "deepDiff"
qualified_name: "Utils.InfrontUtil.deepDiff"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > deepDiff"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.deepDiff.html"
defines: ["deepDiff"]
---

# deepDiff

```ts
deepDiff(object1: any, object2: any, path?: string): any[]
```

Performs a deep comparison between two objects and returns an array of differences.

#### Parameters

- object1: any

  The first object to compare.
- object2: any

  The second object to compare.
- path: string = ''

  The current path in the object hierarchy (used internally for recursion).

#### Returns any[]

An array of objects, each representing a difference between the two input objects.
