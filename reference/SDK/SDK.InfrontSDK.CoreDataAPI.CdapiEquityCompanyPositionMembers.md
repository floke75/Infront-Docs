---
title: "CdapiEquityCompanyPositionMembers"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionMembers"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyPositionMembers"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionMembers.html"
defines: ["CdapiEquityCompanyPositionMembers"]
member_count: 2
members: ["name", "role"]
member_groups:
  "Properties": ["name", "role"]
---

# CdapiEquityCompanyPositionMembers

Members represents a named person in a specific role.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyPosition_Members

```ts
interface CdapiEquityCompanyPositionMembers {
    name: string;
    role: string;
}
```

### Properties

#### `Readonly` name

```ts
name: string
```

Full name of the person.

#### `Readonly` role

```ts
role: string
```

Role or title of this person (e.g. "Chief Operating Officer").
