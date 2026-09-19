---
title: "CdapiEquityCompanyEstimateUnit"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateUnit"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateUnit"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateUnit.html"
defines: ["CdapiEquityCompanyEstimateUnit"]
member_count: 2
members: ["code", "name"]
member_groups:
  "Properties": ["code", "name"]
---

# CdapiEquityCompanyEstimateUnit

Unit describes the scaling unit in which an estimate figure is expressed.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Unit

```ts
interface CdapiEquityCompanyEstimateUnit {
    code: string;
    name: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short unit code (e.g. "M" for millions).

#### `Readonly` name

```ts
name: string
```

Human-readable unit name.
