---
title: "getSVGPathVector"
qualified_name: "Utils.InfrontUtil.getSVGPathVector"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getSVGPathVector"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getSVGPathVector.html"
defines: ["getSVGPathVector"]
reference_count: 1
references: ["Utils.InfrontUtil.SVGPath"]
---

# getSVGPathVector

```ts
getSVGPathVector(
    svgPathObject: SVGPath[],
    startPointIndex: number,
    endPointIndex: number,
): { x: number; y: number }
```

#### Parameters

- svgPathObject: [SVGPath](./Utils.InfrontUtil.SVGPath.md)[]

  (Array of SVGPath/'s that contains x and y coords of svg path properties like 'L' or 'M')
- startPointIndex: number

  (the index of the starting point - SVGPath array index)
- endPointIndex: number

  (the index of the end point - SVGPath array index)

#### Returns { x: number; y: number }

the vector between two points (of an SVGPath array)
