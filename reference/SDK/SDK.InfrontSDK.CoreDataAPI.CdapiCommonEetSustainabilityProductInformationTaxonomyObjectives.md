---
title: "CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives.html"
defines: ["CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives"]
member_count: 6
members: ["climate_change_adaption_percentage", "climate_change_mitigation_percentage", "pollution_prevention_and_control_percentage", "protection_restoration_of_biodiversity_ecosystems_percentage", "sustainable_use_prot_of_water_marine_resources_percentage", "transition_to_a_circular_economy_percentage"]
member_groups:
  "Properties": ["climate_change_adaption_percentage", "climate_change_mitigation_percentage", "pollution_prevention_and_control_percentage", "protection_restoration_of_biodiversity_ecosystems_percentage", "sustainable_use_prot_of_water_marine_resources_percentage", "transition_to_a_circular_economy_percentage"]
---

# CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives

TaxonomyObjectives holds flags and percentages for each EU Taxonomy environmental objective.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSustainabilityProductInformation_TaxonomyObjectives

```ts
interface CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives {
    climate_change_adaption_percentage: number;
    climate_change_mitigation_percentage: number;
    pollution_prevention_and_control_percentage: number;
    protection_restoration_of_biodiversity_ecosystems_percentage: number;
    sustainable_use_prot_of_water_marine_resources_percentage: number;
    transition_to_a_circular_economy_percentage: number;
}
```

### Properties

#### `Readonly` climate_change_adaption_percentage

```ts
climate_change_adaption_percentage: number
```

EET 20731: % aligned with climate change adaptation.

##### Remarks

Format: double

#### `Readonly` climate_change_mitigation_percentage

```ts
climate_change_mitigation_percentage: number
```

EET 20721: % of investments aligned with climate change mitigation.

##### Remarks

Format: double

#### `Readonly` pollution_prevention_and_control_percentage

```ts
pollution_prevention_and_control_percentage: number
```

EET 20761: % aligned with pollution prevention and control.

##### Remarks

Format: double

#### `Readonly` protection_restoration_of_biodiversity_ecosystems_percentage

```ts
protection_restoration_of_biodiversity_ecosystems_percentage: number
```

EET 20771: % aligned with protection and restoration of biodiversity and ecosystems.

##### Remarks

Format: double

#### `Readonly` sustainable_use_prot_of_water_marine_resources_percentage

```ts
sustainable_use_prot_of_water_marine_resources_percentage: number
```

EET 20741: % aligned with sustainable use/protection of water and marine resources.

##### Remarks

Format: double

#### `Readonly` transition_to_a_circular_economy_percentage

```ts
transition_to_a_circular_economy_percentage: number
```

EET 20751: % aligned with transition to a circular economy.

##### Remarks

Format: double
