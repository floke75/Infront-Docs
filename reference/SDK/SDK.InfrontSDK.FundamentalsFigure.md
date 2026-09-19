---
title: "FundamentalsFigure"
qualified_name: "SDK.InfrontSDK.FundamentalsFigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > FundamentalsFigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.FundamentalsFigure.html"
defines: ["FundamentalsFigure"]
member_count: 3
members: ["code", "name", "years"]
member_groups:
  "Properties": ["code", "name", "years"]
reference_count: 1
references: ["SDK.InfrontSDK.FundamentalsYear"]
---

# FundamentalsFigure

Taxonomy Figure

```ts
interface FundamentalsFigure {
    code: string;
    name: string;
    years: FundamentalsYear[];
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
years: FundamentalsYear[]
```

The list of values for that figure given by year (or even multiple times a year when using interim)
