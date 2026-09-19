---
title: "CdapiCommonClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonClassification.html"
defines: ["CdapiCommonClassification"]
member_count: 7
members: ["_meta", "common_cfi", "common_gics", "common_infront", "common_wm", "common_xid", "id"]
member_groups:
  "Properties": ["_meta", "common_cfi", "common_gics", "common_infront", "common_wm", "common_xid", "id"]
reference_count: 6
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCfiClassification", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonGicsClassification", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassification", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonWmClassification", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonXidClassification"]
---

# CdapiCommonClassification

Classification holds all criteria used to classify a listing across multiple schemes.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Classification

```ts
interface CdapiCommonClassification {
    _meta: BasedefEntityMeta;
    common_cfi: CdapiCommonCfiClassification;
    common_gics: CdapiCommonGicsClassification;
    common_infront: CdapiCommonInfrontClassification;
    common_wm: CdapiCommonWmClassification;
    common_xid: CdapiCommonXidClassification;
    id: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata.

#### `Readonly` common_cfi

```ts
common_cfi: CdapiCommonCfiClassification
```

CFI (Classification of Financial Instruments) classification — ISO 10962.

#### `Readonly` common_gics

```ts
common_gics: CdapiCommonGicsClassification
```

GICS (Global Industry Classification Standard) classification.

#### `Readonly` common_infront

```ts
common_infront: CdapiCommonInfrontClassification
```

Infront internal classification.

#### `Readonly` common_wm

```ts
common_wm: CdapiCommonWmClassification
```

WM Datenservice classification.

#### `Readonly` common_xid

```ts
common_xid: CdapiCommonXidClassification
```

XID classification.

#### `Readonly` id

```ts
id: string
```

Internal listing identifier.
