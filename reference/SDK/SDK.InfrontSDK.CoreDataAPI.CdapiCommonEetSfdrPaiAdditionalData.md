---
title: "CdapiCommonEetSfdrPaiAdditionalData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSfdrPaiAdditionalData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSfdrPaiAdditionalData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSfdrPaiAdditionalData.html"
defines: ["CdapiCommonEetSfdrPaiAdditionalData"]
member_count: 2
members: ["meta", "value"]
member_groups:
  "Properties": ["meta", "value"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSfdrPaiAdditionalDataMeta"]
---

# CdapiCommonEetSfdrPaiAdditionalData

AdditionalData holds supplementary PAI data points (e.g. article classification).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSfdrPai_AdditionalData

```ts
interface CdapiCommonEetSfdrPaiAdditionalData {
    meta: CdapiCommonEetSfdrPaiAdditionalDataMeta;
    value: number;
}
```

### Properties

#### `Readonly` meta

```ts
meta: CdapiCommonEetSfdrPaiAdditionalDataMeta
```

##### Remarks

Format: enum

#### `Readonly` value

```ts
value: number
```

##### Remarks

Format: double
