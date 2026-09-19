---
title: "CdapiEquityAdvisor"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisor"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityAdvisor"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisor.html"
defines: ["CdapiEquityAdvisor"]
member_count: 4
members: ["_meta", "id", "members", "source"]
member_groups:
  "Properties": ["_meta", "id", "members", "source"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorMembers", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorSource"]
---

# CdapiEquityAdvisor

Advisor holds the fund advisor / management company information for an issuer.
Source: MORNINGSTAR.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.Advisor

```ts
interface CdapiEquityAdvisor {
    _meta: BasedefEntityMeta;
    id: string;
    members: readonly CdapiEquityAdvisorMembers[];
    source: CdapiEquityAdvisorSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record.

#### `Readonly` members

```ts
members: readonly CdapiEquityAdvisorMembers[]
```

List of advisor contacts associated with this issuer.

#### `Readonly` source

```ts
source: CdapiEquityAdvisorSource
```

Data source for this advisor record.

##### Remarks

Format: enum
