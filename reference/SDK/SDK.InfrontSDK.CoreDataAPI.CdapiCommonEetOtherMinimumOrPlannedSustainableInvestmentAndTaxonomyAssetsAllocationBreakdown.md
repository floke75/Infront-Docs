---
title: "CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown.html"
defines: ["CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"]
member_count: 5
members: ["investments_sustainable_investments_environmental", "investments_sustainable_investments_other_environmental", "investments_sustainable_investments_taxonomy_aligned", "investments_with_environmental_or_social_characteristics", "other_investments_with_environmental_or_social_characteristics"]
member_groups:
  "Properties": ["investments_sustainable_investments_environmental", "investments_sustainable_investments_other_environmental", "investments_sustainable_investments_taxonomy_aligned", "investments_with_environmental_or_social_characteristics", "other_investments_with_environmental_or_social_characteristics"]
---

# CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown

MinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown holds
planned/minimum sustainable investment allocation percentages under SFDR.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_MinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown

```ts
interface CdapiCommonEetOtherMinimumOrPlannedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown {
    investments_sustainable_investments_environmental: number;
    investments_sustainable_investments_other_environmental: number;
    investments_sustainable_investments_taxonomy_aligned: number;
    investments_with_environmental_or_social_characteristics: number;
    other_investments_with_environmental_or_social_characteristics: number;
}
```

### Properties

#### `Readonly` investments_sustainable_investments_environmental

```ts
investments_sustainable_investments_environmental: number
```

EET 20440: Minimum % of sustainable investments with an environmental objective.

##### Remarks

Format: double

#### `Readonly` investments_sustainable_investments_other_environmental

```ts
investments_sustainable_investments_other_environmental: number
```

EET 20460: Minimum % of sustainable investments with other environmental objectives.

##### Remarks

Format: double

#### `Readonly` investments_sustainable_investments_taxonomy_aligned

```ts
investments_sustainable_investments_taxonomy_aligned: number
```

EET 20450: Minimum % of sustainable investments that are EU Taxonomy-aligned.

##### Remarks

Format: double

#### `Readonly` investments_with_environmental_or_social_characteristics

```ts
investments_with_environmental_or_social_characteristics: number
```

EET 20400: Minimum % of investments with E/S characteristics.

##### Remarks

Format: double

#### `Readonly` other_investments_with_environmental_or_social_characteristics

```ts
other_investments_with_environmental_or_social_characteristics: number
```

EET 20430: Minimum % of other investments with E/S characteristics.

##### Remarks

Format: double
