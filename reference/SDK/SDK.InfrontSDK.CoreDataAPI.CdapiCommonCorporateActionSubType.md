---
title: "CdapiCommonCorporateActionSubType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionSubType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonCorporateActionSubType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionSubType.html"
defines: ["CdapiCommonCorporateActionSubType"]
member_count: 2
members: ["code", "source"]
member_groups:
  "Properties": ["code", "source"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionSubTypeSource"]
---

# CdapiCommonCorporateActionSubType

CorporateActionSubType holds the sub-type classification for a corporate action,
providing additional granularity beyond the main type.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.CorporateActionSubType

```ts
interface CdapiCommonCorporateActionSubType {
    code: string;
    source: CdapiCommonCorporateActionSubTypeSource;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying the sub-type.

#### `Readonly` source

```ts
source: CdapiCommonCorporateActionSubTypeSource
```

##### Remarks

Format: enum
