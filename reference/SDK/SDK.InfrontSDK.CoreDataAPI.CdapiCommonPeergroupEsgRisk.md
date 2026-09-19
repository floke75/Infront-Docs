---
title: "CdapiCommonPeergroupEsgRisk"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonPeergroupEsgRisk"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonPeergroupEsgRisk"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonPeergroupEsgRisk.html"
defines: ["CdapiCommonPeergroupEsgRisk"]
member_count: 2
members: ["_meta", "source"]
member_groups:
  "Properties": ["_meta", "source"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonPeergroupEsgRiskSource"]
---

# CdapiCommonPeergroupEsgRisk

PeergroupEsgRisk holds peer-group-averaged ESG risk scores at level 1 and level 2 only.
Used to benchmark a company's ESG scores against its industry peers. Source: CLARITY.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.PeergroupEsgRisk

```ts
interface CdapiCommonPeergroupEsgRisk {
    _meta: BasedefEntityMeta;
    source: CdapiCommonPeergroupEsgRiskSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` source

```ts
source: CdapiCommonPeergroupEsgRiskSource
```

##### Remarks

Format: enum
