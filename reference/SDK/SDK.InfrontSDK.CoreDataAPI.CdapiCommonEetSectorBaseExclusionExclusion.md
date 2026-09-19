---
title: "CdapiCommonEetSectorBaseExclusionExclusion"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionExclusion"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSectorBaseExclusionExclusion"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionExclusion.html"
defines: ["CdapiCommonEetSectorBaseExclusionExclusion"]
member_count: 3
members: ["part_of_value_chain", "relative_threshold", "threshold_type"]
member_groups:
  "Properties": ["part_of_value_chain", "relative_threshold", "threshold_type"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary"]
---

# CdapiCommonEetSectorBaseExclusionExclusion

Exclusion defines the criteria for a non-fossil-fuel sector exclusion.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSectorBaseExclusion_Exclusion

```ts
interface CdapiCommonEetSectorBaseExclusionExclusion {
    part_of_value_chain: CdapiCommonDictionary;
    relative_threshold: number;
    threshold_type: CdapiCommonDictionary;
}
```

### Properties

#### `Readonly` part_of_value_chain

```ts
part_of_value_chain: CdapiCommonDictionary
```

Whether the exclusion covers the full value chain or only direct production.

#### `Readonly` relative_threshold

```ts
relative_threshold: number
```

Relative revenue threshold (e.g. 0.05 = companies with >5% revenue excluded).

##### Remarks

Format: double

#### `Readonly` threshold_type

```ts
threshold_type: CdapiCommonDictionary
```

Type of threshold applied (e.g. "RELATIVE", "ABSOLUTE").
