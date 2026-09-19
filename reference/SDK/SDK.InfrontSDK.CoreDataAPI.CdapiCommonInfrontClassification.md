---
title: "CdapiCommonInfrontClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonInfrontClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassification.html"
defines: ["CdapiCommonInfrontClassification"]
member_count: 5
members: ["asset_class_category", "asset_class_group", "asset_class_superordinate", "asset_class_type", "routing"]
member_groups:
  "Properties": ["asset_class_category", "asset_class_group", "asset_class_superordinate", "asset_class_type", "routing"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassificationAssetClass", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassificationRouting"]
---

# CdapiCommonInfrontClassification

InfrontClassification holds the Infront internal asset class hierarchy and API routing.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.InfrontClassification

```ts
interface CdapiCommonInfrontClassification {
    asset_class_category: CdapiCommonInfrontClassificationAssetClass;
    asset_class_group: CdapiCommonInfrontClassificationAssetClass;
    asset_class_superordinate: CdapiCommonInfrontClassificationAssetClass;
    asset_class_type: CdapiCommonInfrontClassificationAssetClass;
    routing: CdapiCommonInfrontClassificationRouting;
}
```

### Properties

#### `Readonly` asset_class_category

```ts
asset_class_category: CdapiCommonInfrontClassificationAssetClass
```

Category asset class — second level (e.g. code: "OPT", name: "Option").

#### `Readonly` asset_class_group

```ts
asset_class_group: CdapiCommonInfrontClassificationAssetClass
```

Group asset class — third level (e.g. code: "CERT_DISC", name: "Discount Certificate").

#### `Readonly` asset_class_superordinate

```ts
asset_class_superordinate: CdapiCommonInfrontClassificationAssetClass
```

Superordinate asset class — broadest level (e.g. code: "DVT", name: "DERIVATIVE").

#### `Readonly` asset_class_type

```ts
asset_class_type: CdapiCommonInfrontClassificationAssetClass
```

Type asset class — most granular level (e.g. code: "CERT_DISC_CLASSIC", name: "Classic Discount Certificate").

#### `Readonly` routing

```ts
routing: CdapiCommonInfrontClassificationRouting
```

API routing identifiers for gRPC and REST.
