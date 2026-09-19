---
title: "CdapiCommonEetAdditionalSpai"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSpai"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetAdditionalSpai"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSpai.html"
defines: ["CdapiCommonEetAdditionalSpai"]
member_count: 6
members: ["derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments", "derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned", "funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments", "funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned", "has_use_of_derivative_exposure_in_taxonomy_and_sfdr_alignment", "use_of_proceeds_asset_pooling"]
member_groups:
  "Properties": ["derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments", "derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned", "funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments", "funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned", "has_use_of_derivative_exposure_in_taxonomy_and_sfdr_alignment", "use_of_proceeds_asset_pooling"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonSpaiData"]
---

# CdapiCommonEetAdditionalSpai

Spai holds SFDR-related Structured Product Alignment Indicators.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetAdditional_Spai

```ts
interface CdapiCommonEetAdditionalSpai {
    derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments: number;
    derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned: number;
    funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments: number;
    funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned: number;
    has_use_of_derivative_exposure_in_taxonomy_and_sfdr_alignment: boolean;
    use_of_proceeds_asset_pooling: CdapiCommonSpaiData;
}
```

### Properties

#### `Readonly` derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments

```ts
derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments: number
```

EET 80030: Derivative-exposure-related minimum/planned SFDR sustainable investments.

##### Remarks

Format: double

#### `Readonly` derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned

```ts
derivate_exposure_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned: number
```

EET 80050: Derivative-exposure-related Taxonomy-aligned minimum/planned sustainable investments.

##### Remarks

Format: double

#### `Readonly` funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments

```ts
funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments: number
```

EET 80020: Funding-related minimum/planned SFDR sustainable investments (decimal).

##### Remarks

Format: double

#### `Readonly` funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned

```ts
funding_related_eu_sfdr_minimum_or_planned_investments_sustainable_investments_taxonomy_aligned: number
```

EET 80040: Funding-related Taxonomy-aligned minimum/planned sustainable investments.

##### Remarks

Format: double

#### `Readonly` has_use_of_derivative_exposure_in_taxonomy_and_sfdr_alignment

```ts
has_use_of_derivative_exposure_in_taxonomy_and_sfdr_alignment: boolean
```

EET 80010: If true, derivative exposure is used in taxonomy and SFDR alignment calculations.

#### `Readonly` use_of_proceeds_asset_pooling

```ts
use_of_proceeds_asset_pooling: CdapiCommonSpaiData
```

EET 80000: Use of proceeds asset pooling — how proceeds are pooled and allocated.
