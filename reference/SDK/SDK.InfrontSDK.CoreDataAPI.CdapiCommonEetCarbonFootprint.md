---
title: "CdapiCommonEetCarbonFootprint"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetCarbonFootprint"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetCarbonFootprint"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetCarbonFootprint.html"
defines: ["CdapiCommonEetCarbonFootprint"]
member_count: 12
members: ["_meta", "financed_emissions_import", "financed_emissions_intensity_scope_1_2", "financed_emissions_intensity_scope_3", "financed_emissions_prod", "source", "total_financed_emissions_scope_1_2", "total_financed_emissions_scope_3", "weighted_average_carbon_intensity_import", "weighted_average_carbon_intensity_prod", "weighted_average_carbon_intensity_scope_1_2", "weighted_average_carbon_intensity_scope_3"]
member_groups:
  "Properties": ["_meta", "financed_emissions_import", "financed_emissions_intensity_scope_1_2", "financed_emissions_intensity_scope_3", "financed_emissions_prod", "source", "total_financed_emissions_scope_1_2", "total_financed_emissions_scope_3", "weighted_average_carbon_intensity_import", "weighted_average_carbon_intensity_prod", "weighted_average_carbon_intensity_scope_1_2", "weighted_average_carbon_intensity_scope_3"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetCarbonFootprintData", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetCarbonFootprintSource"]
---

# CdapiCommonEetCarbonFootprint

EetCarbonFootprint holds portfolio-level carbon footprint metrics from Clarity AI.
Metrics quantify financed GHG emissions and their intensity for corporate and sovereign exposures.
Source: CLARITY.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetCarbonFootprint

```ts
interface CdapiCommonEetCarbonFootprint {
    _meta: BasedefEntityMeta;
    financed_emissions_import: CdapiCommonEetCarbonFootprintData;
    financed_emissions_intensity_scope_1_2: CdapiCommonEetCarbonFootprintData;
    financed_emissions_intensity_scope_3: CdapiCommonEetCarbonFootprintData;
    financed_emissions_prod: CdapiCommonEetCarbonFootprintData;
    source: CdapiCommonEetCarbonFootprintSource;
    total_financed_emissions_scope_1_2: CdapiCommonEetCarbonFootprintData;
    total_financed_emissions_scope_3: CdapiCommonEetCarbonFootprintData;
    weighted_average_carbon_intensity_import: CdapiCommonEetCarbonFootprintData;
    weighted_average_carbon_intensity_prod: CdapiCommonEetCarbonFootprintData;
    weighted_average_carbon_intensity_scope_1_2: CdapiCommonEetCarbonFootprintData;
    weighted_average_carbon_intensity_scope_3: CdapiCommonEetCarbonFootprintData;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` financed_emissions_import

```ts
financed_emissions_import: CdapiCommonEetCarbonFootprintData
```

Total financed sovereign imported emissions (Scope 2+3).

#### `Readonly` financed_emissions_intensity_scope_1_2

```ts
financed_emissions_intensity_scope_1_2: CdapiCommonEetCarbonFootprintData
```

Company financed emissions intensity Scope 1+2 — per million USD invested.

#### `Readonly` financed_emissions_intensity_scope_3

```ts
financed_emissions_intensity_scope_3: CdapiCommonEetCarbonFootprintData
```

Company financed emissions intensity Scope 3 — per million USD invested.

#### `Readonly` financed_emissions_prod

```ts
financed_emissions_prod: CdapiCommonEetCarbonFootprintData
```

Financed sovereign production-based emissions — based on % of PPP-adjusted GDP owned.

#### `Readonly` source

```ts
source: CdapiCommonEetCarbonFootprintSource
```

##### Remarks

Format: enum

#### `Readonly` total_financed_emissions_scope_1_2

```ts
total_financed_emissions_scope_1_2: CdapiCommonEetCarbonFootprintData
```

Total financed Scope 1+2 emissions — sum of (% ownership × Scope 1+2 emissions) across portfolio, based on EVIC.

#### `Readonly` total_financed_emissions_scope_3

```ts
total_financed_emissions_scope_3: CdapiCommonEetCarbonFootprintData
```

Total financed Scope 3 emissions.

#### `Readonly` weighted_average_carbon_intensity_import

```ts
weighted_average_carbon_intensity_import: CdapiCommonEetCarbonFootprintData
```

Weighted average sovereign imported emissions intensity (Scope 2+3). For mixed-asset portfolios,
sovereign bond weights are scaled to 100%.

#### `Readonly` weighted_average_carbon_intensity_prod

```ts
weighted_average_carbon_intensity_prod: CdapiCommonEetCarbonFootprintData
```

Weighted average sovereign production-based emissions intensity (Scope 1).

#### `Readonly` weighted_average_carbon_intensity_scope_1_2

```ts
weighted_average_carbon_intensity_scope_1_2: CdapiCommonEetCarbonFootprintData
```

Weighted average carbon intensity Scope 1+2 — tCO2e per million USD of investee revenue.

#### `Readonly` weighted_average_carbon_intensity_scope_3

```ts
weighted_average_carbon_intensity_scope_3: CdapiCommonEetCarbonFootprintData
```

Weighted average carbon intensity Scope 3.
