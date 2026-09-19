---
title: "CdapiCommonCorporateActionType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonCorporateActionType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionType.html"
defines: ["CdapiCommonCorporateActionType"]
member_count: 2
members: ["code", "source"]
member_groups:
  "Properties": ["code", "source"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionTypeSource"]
---

# CdapiCommonCorporateActionType

CorporateActionType holds the type classification for a corporate action.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.CorporateActionType

```ts
interface CdapiCommonCorporateActionType {
    code: string;
    source: CdapiCommonCorporateActionTypeSource;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying the type (e.g. "DIV", "SPLIT", "DMRGR").

#### `Readonly` source

```ts
source: CdapiCommonCorporateActionTypeSource
```

##### Remarks

Format: enum
