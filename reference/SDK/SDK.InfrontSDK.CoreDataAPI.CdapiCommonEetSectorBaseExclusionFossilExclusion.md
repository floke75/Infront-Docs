---
title: "CdapiCommonEetSectorBaseExclusionFossilExclusion"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionFossilExclusion"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSectorBaseExclusionFossilExclusion"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionFossilExclusion.html"
defines: ["CdapiCommonEetSectorBaseExclusionFossilExclusion"]
member_count: 4
members: ["energy_mix_absolute_cap", "energy_mix_relative_cap", "has_new_infrastructure", "relative_threshold"]
member_groups:
  "Properties": ["energy_mix_absolute_cap", "energy_mix_relative_cap", "has_new_infrastructure", "relative_threshold"]
---

# CdapiCommonEetSectorBaseExclusionFossilExclusion

FossilExclusion extends Exclusion with energy-mix caps for fossil fuel sectors.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSectorBaseExclusion_FossilExclusion

```ts
interface CdapiCommonEetSectorBaseExclusionFossilExclusion {
    energy_mix_absolute_cap: string;
    energy_mix_relative_cap: number;
    has_new_infrastructure: boolean;
    relative_threshold: number;
}
```

### Properties

#### `Readonly` energy_mix_absolute_cap

```ts
energy_mix_absolute_cap: string
```

Absolute cap on energy from this fossil source.

#### `Readonly` energy_mix_relative_cap

```ts
energy_mix_relative_cap: number
```

Relative cap on energy from this fossil source.

##### Remarks

Format: double

#### `Readonly` has_new_infrastructure

```ts
has_new_infrastructure: boolean
```

If true, new infrastructure for this fossil fuel is also excluded.

#### `Readonly` relative_threshold

```ts
relative_threshold: number
```

##### Remarks

Format: double
