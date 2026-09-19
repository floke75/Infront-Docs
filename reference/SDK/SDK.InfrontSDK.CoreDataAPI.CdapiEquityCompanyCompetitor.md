---
title: "CdapiEquityCompanyCompetitor"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyCompetitor"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyCompetitor"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyCompetitor.html"
defines: ["CdapiEquityCompanyCompetitor"]
member_count: 3
members: ["id", "members", "source"]
member_groups:
  "Properties": ["id", "members", "source"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyCompetitorMembers", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyCompetitorSource"]
---

# CdapiEquityCompanyCompetitor

CompanyCompetitor holds a list of competitor companies for an issuer.
Source: STANDARD_AND_POORS.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyCompetitor

```ts
interface CdapiEquityCompanyCompetitor {
    id: string;
    members: readonly CdapiEquityCompanyCompetitorMembers[];
    source: CdapiEquityCompanyCompetitorSource;
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
members: readonly CdapiEquityCompanyCompetitorMembers[]
```

List of identified competitor companies.

#### `Readonly` source

```ts
source: CdapiEquityCompanyCompetitorSource
```

Data source for this competitor list.

##### Remarks

Format: enum
