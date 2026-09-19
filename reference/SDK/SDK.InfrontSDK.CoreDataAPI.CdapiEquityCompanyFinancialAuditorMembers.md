---
title: "CdapiEquityCompanyFinancialAuditorMembers"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditorMembers"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFinancialAuditorMembers"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditorMembers.html"
defines: ["CdapiEquityCompanyFinancialAuditorMembers"]
member_count: 3
members: ["name", "quarter", "year"]
member_groups:
  "Properties": ["name", "quarter", "year"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditorMembersQuarter"]
---

# CdapiEquityCompanyFinancialAuditorMembers

Members represents a single auditor engagement record.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFinancialAuditor_Members

```ts
interface CdapiEquityCompanyFinancialAuditorMembers {
    name: string;
    quarter: CdapiEquityCompanyFinancialAuditorMembersQuarter;
    year: number;
}
```

### Properties

#### `Readonly` name

```ts
name: string
```

Name of the audit firm (e.g. "Deloitte", "PwC", "KPMG", "EY").

#### `Readonly` quarter

```ts
quarter: CdapiEquityCompanyFinancialAuditorMembersQuarter
```

Fiscal quarter of this engagement (if applicable).

##### Remarks

Format: enum

#### `Readonly` year

```ts
year: number
```

Fiscal year of this audit engagement.

##### Remarks

Format: int32
