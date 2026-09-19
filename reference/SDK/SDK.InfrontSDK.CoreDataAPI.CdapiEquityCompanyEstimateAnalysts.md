---
title: "CdapiEquityCompanyEstimateAnalysts"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateAnalysts"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateAnalysts"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateAnalysts.html"
defines: ["CdapiEquityCompanyEstimateAnalysts"]
member_count: 2
members: ["id", "name"]
member_groups:
  "Properties": ["id", "name"]
---

# CdapiEquityCompanyEstimateAnalysts

Analysts holds a single analyst contributing to the consensus.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Analysts

```ts
interface CdapiEquityCompanyEstimateAnalysts {
    id: number;
    name: string;
}
```

### Properties

#### `Readonly` id

```ts
id: number
```

Internal analyst identifier.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Name of the analyst or brokerage firm.
