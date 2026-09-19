---
title: "CdapiEquityCompanyEstimateFigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateFigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateFigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateFigure.html"
defines: ["CdapiEquityCompanyEstimateFigure"]
member_count: 5
members: ["code", "id", "name", "parent_id", "years"]
member_groups:
  "Properties": ["code", "id", "name", "parent_id", "years"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateYears"]
---

# CdapiEquityCompanyEstimateFigure

Figure represents a single estimated financial line item with its consensus values over time.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Figure

```ts
interface CdapiEquityCompanyEstimateFigure {
    code: string;
    id: number;
    name: string;
    parent_id: number;
    years: readonly CdapiEquityCompanyEstimateYears[];
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying the figure.

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
years: readonly CdapiEquityCompanyEstimateYears[]
```

Time-series of consensus estimates, one per period.
