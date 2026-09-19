---
title: "CdapiCommonEetEutax"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutax"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetEutax"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutax.html"
defines: ["CdapiCommonEetEutax"]
member_count: 5
members: ["_meta", "capex", "opex", "revenue", "source"]
member_groups:
  "Properties": ["_meta", "capex", "opex", "revenue", "source"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxEutaxFields", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetEutaxSource"]
---

# CdapiCommonEetEutax

EetEutax holds EU Taxonomy alignment data from Clarity AI.
The EU Taxonomy (Regulation 2020/852) classifies environmentally sustainable economic activities.
Data is broken down by financial metric (CapEx, OpEx, Revenue) and by activity type
(enabling, transition, own performance), with alignment stages from eligible through aligned.
Source: CLARITY.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetEutax

```ts
interface CdapiCommonEetEutax {
    _meta: BasedefEntityMeta;
    capex: CdapiCommonEetEutaxEutaxFields;
    opex: CdapiCommonEetEutaxEutaxFields;
    revenue: CdapiCommonEetEutaxEutaxFields;
    source: CdapiCommonEetEutaxSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` capex

```ts
capex: CdapiCommonEetEutaxEutaxFields
```

EU Taxonomy alignment on a capital expenditure (CapEx) basis.

#### `Readonly` opex

```ts
opex: CdapiCommonEetEutaxEutaxFields
```

EU Taxonomy alignment on an operational expenditure (OpEx) basis.

#### `Readonly` revenue

```ts
revenue: CdapiCommonEetEutaxEutaxFields
```

EU Taxonomy alignment on a revenue basis.

#### `Readonly` source

```ts
source: CdapiCommonEetEutaxSource
```

##### Remarks

Format: enum
