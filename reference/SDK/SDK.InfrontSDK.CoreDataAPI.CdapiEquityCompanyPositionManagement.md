---
title: "CdapiEquityCompanyPositionManagement"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionManagement"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyPositionManagement"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionManagement.html"
defines: ["CdapiEquityCompanyPositionManagement"]
member_count: 4
members: ["ceo", "cfo", "chro", "members"]
member_groups:
  "Properties": ["ceo", "cfo", "chro", "members"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionMembers"]
---

# CdapiEquityCompanyPositionManagement

Management holds the executive leadership team of the company.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyPosition_Management

```ts
interface CdapiEquityCompanyPositionManagement {
    ceo: string;
    cfo: string;
    chro: string;
    members: readonly CdapiEquityCompanyPositionMembers[];
}
```

### Properties

#### `Readonly` ceo

```ts
ceo: string
```

Name of the Chief Executive Officer (CEO).

#### `Readonly` cfo

```ts
cfo: string
```

Name of the Chief Financial Officer (CFO).

#### `Readonly` chro

```ts
chro: string
```

Name of the Chief Human Resources Officer (CHRO).

#### `Readonly` members

```ts
members: readonly CdapiEquityCompanyPositionMembers[]
```

Full list of named management members with their roles.
