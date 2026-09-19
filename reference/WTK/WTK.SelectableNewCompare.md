---
title: "SelectableNewCompare"
qualified_name: "WTK.SelectableNewCompare"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > SelectableNewCompare"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.SelectableNewCompare.html"
defines: ["SelectableNewCompare"]
member_count: 2
members: ["collapsable", "list"]
member_groups:
  "Properties": ["collapsable", "list"]
related_types: ["WTK.SelectableNewCompareOptions"]
reference_count: 4
references: ["WTK.COLLAPSABLE", "WTK.SelectableNewCompareInstrument", "WTK.SelectableNewCompareFolder", "WTK.SelectableNewCompareOptions"]
---

# SelectableNewCompare

SelectableNewCompare

```ts
interface SelectableNewCompare {
    collapsable: COLLAPSABLE;
    list: (SelectableNewCompareInstrument | SelectableNewCompareFolder)[];
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.SelectableNewCompare))

- SelectableNewCompareOptions

  - SelectableNewCompare

### Properties

#### collapsable

```ts
collapsable: COLLAPSABLE
```

collapsable

Inherited from SelectableNewCompareOptions.collapsable

#### list

```ts
list: (SelectableNewCompareInstrument | SelectableNewCompareFolder)[]
```

list

Inherited from SelectableNewCompareOptions.list
