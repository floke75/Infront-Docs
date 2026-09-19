---
title: "CdapiCommonEptAdditional"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditional"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptAdditional"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditional.html"
defines: ["CdapiCommonEptAdditional"]
member_count: 5
members: ["_meta", "costs", "germany", "source", "uk"]
member_groups:
  "Properties": ["_meta", "costs", "germany", "source", "uk"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalCosts", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalGermany", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalUk"]
---

# CdapiCommonEptAdditional

EptAdditional holds EPT additional data fields including Reduction in Yield (RIY) cost metrics,
UK-specific PRIIPs disclosures, and German MOP-specific data.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptAdditional

```ts
interface CdapiCommonEptAdditional {
    _meta: BasedefEntityMeta;
    costs: CdapiCommonEptAdditionalCosts;
    germany: CdapiCommonEptAdditionalGermany;
    source: CdapiCommonEptAdditionalSource;
    uk: CdapiCommonEptAdditionalUk;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` costs

```ts
costs: CdapiCommonEptAdditionalCosts
```

RIY cost metrics across different holding period horizons.

#### `Readonly` germany

```ts
germany: CdapiCommonEptAdditionalGermany
```

German MOP-specific disclosure fields.

#### `Readonly` source

```ts
source: CdapiCommonEptAdditionalSource
```

##### Remarks

Format: enum

#### `Readonly` uk

```ts
uk: CdapiCommonEptAdditionalUk
```

UK-specific PRIIPs/UCITS disclosure fields.
