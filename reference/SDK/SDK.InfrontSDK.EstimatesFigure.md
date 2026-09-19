---
title: "EstimatesFigure"
qualified_name: "SDK.InfrontSDK.EstimatesFigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > EstimatesFigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.EstimatesFigure.html"
defines: ["EstimatesFigure"]
member_count: 3
members: ["code", "name", "years"]
member_groups:
  "Properties": ["code", "name", "years"]
reference_count: 1
references: ["SDK.InfrontSDK.EstimatesYear"]
---

# EstimatesFigure

Taxonomy Figure

```ts
interface EstimatesFigure {
    code: string;
    name: string;
    years: EstimatesYear[];
}
```

### Properties

#### code

```ts
code: string
```

The identifier of the figure

#### name

```ts
name: string
```

Description of the figure

#### years

```ts
years: EstimatesYear[]
```

The list of values for that figure given by year (or even multiple times a year when using interim)
