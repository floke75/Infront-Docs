---
title: "CdapiEquityCompanyFinancialAuditor"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditor"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFinancialAuditor"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditor.html"
defines: ["CdapiEquityCompanyFinancialAuditor"]
member_count: 3
members: ["id", "members", "source"]
member_groups:
  "Properties": ["id", "members", "source"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditorMembers", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFinancialAuditorSource"]
---

# CdapiEquityCompanyFinancialAuditor

CompanyFinancialAuditor holds the audit firm history for a company's financial statements.
Source: STANDARD_AND_POORS.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFinancialAuditor

```ts
interface CdapiEquityCompanyFinancialAuditor {
    id: string;
    members: readonly CdapiEquityCompanyFinancialAuditorMembers[];
    source: CdapiEquityCompanyFinancialAuditorSource;
}
```

### Properties

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` members

```ts
members: readonly CdapiEquityCompanyFinancialAuditorMembers[]
```

Historical list of auditor engagements for this company.

#### `Readonly` source

```ts
source: CdapiEquityCompanyFinancialAuditorSource
```

Data source for this auditor data.

##### Remarks

Format: enum
