---
title: "mergeRecursiveCopy"
qualified_name: "Utils.InfrontUtil.mergeRecursiveCopy"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > mergeRecursiveCopy"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.mergeRecursiveCopy.html"
defines: ["mergeRecursiveCopy"]
---

# mergeRecursiveCopy

```ts
mergeRecursiveCopy(object1: any, object2: any, deepCopyObjects?: boolean): any
```

Copies object1, merges object2 into the copy and returns the copy.
Arrays will always be from object2 if conflicting.

#### Parameters

- object1: any

  Defaults.
- object2: any

  Object that will be applied on the copy of object1
- deepCopyObjects: boolean = true

  Whether objects that only exists on object2 and all arrays within object2 should be deepCopied or referenced

#### Returns any

a deep copy of object1 with object2 merged in
