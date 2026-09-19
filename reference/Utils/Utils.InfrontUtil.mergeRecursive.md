---
title: "mergeRecursive"
qualified_name: "Utils.InfrontUtil.mergeRecursive"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > mergeRecursive"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.mergeRecursive.html"
defines: ["mergeRecursive"]
---

# mergeRecursive

```ts
mergeRecursive(object1: any, object2: any, deepCopyObjects?: boolean): any
```

Takes object1, merges object2 into object1 and returns object1.
Arrays will always be from object2 if conflicting.

#### Parameters

- object1: any

  Object that will be merged into and returned
- object2: any

  Object that will be applied on the copy of object1
- deepCopyObjects: boolean = true

  Whether objects that only exists on object2 and all arrays within object2 should be deepCopied or referenced

#### Returns any

object1
