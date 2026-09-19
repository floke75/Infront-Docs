---
title: "CdapiEquityCompanyFundamentalFigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalFigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalFigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalFigure.html"
defines: ["CdapiEquityCompanyFundamentalFigure"]
member_count: 5
members: ["code", "id", "name", "parent_id", "years"]
member_groups:
  "Properties": ["code", "id", "name", "parent_id", "years"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYears"]
---

# CdapiEquityCompanyFundamentalFigure

Figure represents a single financial line item (e.g. "Revenue", "EBIT")
with its values across multiple reporting periods.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Figure

```ts
interface CdapiEquityCompanyFundamentalFigure {
    code: string;
    id: number;
    name: string;
    parent_id: number;
    years: readonly CdapiEquityCompanyFundamentalYears[];
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying the figure (e.g. "REV", "EBIT").

#### `Readonly` id

```ts
id: number
```

Internal identifier for this figure.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Human-readable name of the figure.

#### `Readonly` parent_id

```ts
parent_id: number
```

Internal identifier of the parent figure in the taxonomy hierarchy.

##### Remarks

Format: int32

#### `Readonly` years

```ts
years: readonly CdapiEquityCompanyFundamentalYears[]
```

Time-series of reported values, one per fiscal year / period.
