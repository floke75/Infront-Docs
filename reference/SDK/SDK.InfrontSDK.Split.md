---
title: "Split"
qualified_name: "SDK.InfrontSDK.Split"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Split"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Split.html"
defines: ["Split"]
member_count: 2
members: ["date", "factor"]
member_groups:
  "Properties": ["date", "factor"]
reference_count: 1
references: ["SDK.InfrontSDK.History"]
---

# Split

Split details representation.

#### See

History

```ts
interface Split {
    date: Date;
    factor: number;
}
```

### Properties

#### date

```ts
date: Date
```

Split date.

#### factor

```ts
factor: number
```

Split factor.
