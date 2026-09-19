---
title: "CdapiEquityCompanyEstimateId"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateId"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateId"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateId.html"
defines: ["CdapiEquityCompanyEstimateId"]
member_count: 4
members: ["date", "issuer_id", "report_type", "year"]
member_groups:
  "Properties": ["date", "issuer_id", "report_type", "year"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefFilterParamString", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateIdReportType"]
---

# CdapiEquityCompanyEstimateId

Id is the composite lookup key for a CompanyEstimate query.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Id

```ts
interface CdapiEquityCompanyEstimateId {
    date: BasedefFilterParamString;
    issuer_id: string;
    report_type: readonly CdapiEquityCompanyEstimateIdReportType[];
    year: number;
}
```

### Properties

#### `Readonly` date

```ts
date: BasedefFilterParamString
```

Optional date range filter.

#### `Readonly` issuer_id

```ts
issuer_id: string
```

Issuer identifier.

#### `Readonly` report_type

```ts
report_type: readonly CdapiEquityCompanyEstimateIdReportType[]
```

Requested report type(s).

#### `Readonly` year

```ts
year: number
```

Optional filter for a specific fiscal year.

##### Remarks

Format: int32
