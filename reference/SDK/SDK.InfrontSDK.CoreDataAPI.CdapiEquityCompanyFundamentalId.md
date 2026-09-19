---
title: "CdapiEquityCompanyFundamentalId"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalId"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalId"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalId.html"
defines: ["CdapiEquityCompanyFundamentalId"]
member_count: 4
members: ["date", "issuer_id", "report_type", "year"]
member_groups:
  "Properties": ["date", "issuer_id", "report_type", "year"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefFilterParamString", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalIdReportType"]
---

# CdapiEquityCompanyFundamentalId

Id is the composite lookup key for a CompanyFundamental query.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Id

```ts
interface CdapiEquityCompanyFundamentalId {
    date: BasedefFilterParamString;
    issuer_id: string;
    report_type: readonly CdapiEquityCompanyFundamentalIdReportType[];
    year: number;
}
```

### Properties

#### `Readonly` date

```ts
date: BasedefFilterParamString
```

Optional date range filter for the report period.

#### `Readonly` issuer_id

```ts
issuer_id: string
```

Issuer identifier.

#### `Readonly` report_type

```ts
report_type: readonly CdapiEquityCompanyFundamentalIdReportType[]
```

Requested report type(s).

#### `Readonly` year

```ts
year: number
```

Optional filter for a specific fiscal year.

##### Remarks

Format: int32
