---
title: "CdapiEquityCompanyBasicNumberOfEmployees"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyBasicNumberOfEmployees"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyBasicNumberOfEmployees"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyBasicNumberOfEmployees.html"
defines: ["CdapiEquityCompanyBasicNumberOfEmployees"]
member_count: 2
members: ["count", "date"]
member_groups:
  "Properties": ["count", "date"]
---

# CdapiEquityCompanyBasicNumberOfEmployees

NumberOfEmployees holds an employee count snapshot at a specific date.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyBasic_NumberOfEmployees

```ts
interface CdapiEquityCompanyBasicNumberOfEmployees {
    count: number;
    date: string;
}
```

### Properties

#### `Readonly` count

```ts
count: number
```

Number of employees at this date.

##### Remarks

Format: int32

#### `Readonly` date

```ts
date: string
```

Date of the employee count. ISO-8601 recommended.
