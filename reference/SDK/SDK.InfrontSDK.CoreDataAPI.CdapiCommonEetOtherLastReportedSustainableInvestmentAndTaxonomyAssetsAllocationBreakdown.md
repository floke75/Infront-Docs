---
title: "CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown.html"
defines: ["CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown"]
member_count: 4
members: ["investments_not_sustainable_other", "investments_sustainable_investments_other_environmental", "investments_with_environmental_or_social_characteristics", "other_investments_with_environmental_or_social_characteristics"]
member_groups:
  "Properties": ["investments_not_sustainable_other", "investments_sustainable_investments_other_environmental", "investments_with_environmental_or_social_characteristics", "other_investments_with_environmental_or_social_characteristics"]
---

# CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown

LastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown holds
the most recently reported actual sustainable investment allocation.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_LastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown

```ts
interface CdapiCommonEetOtherLastReportedSustainableInvestmentAndTaxonomyAssetsAllocationBreakdown {
    investments_not_sustainable_other: number;
    investments_sustainable_investments_other_environmental: number;
    investments_with_environmental_or_social_characteristics: number;
    other_investments_with_environmental_or_social_characteristics: number;
}
```

### Properties

#### `Readonly` investments_not_sustainable_other

```ts
investments_not_sustainable_other: number
```

EET 20500: Last reported % of investments that are not sustainable (other).

##### Remarks

Format: double

#### `Readonly` investments_sustainable_investments_other_environmental

```ts
investments_sustainable_investments_other_environmental: number
```

EET 20550: Last reported % of sustainable investments with other environmental objectives.

##### Remarks

Format: double

#### `Readonly` investments_with_environmental_or_social_characteristics

```ts
investments_with_environmental_or_social_characteristics: number
```

EET 20490: Last reported % of investments with E/S characteristics.

##### Remarks

Format: double

#### `Readonly` other_investments_with_environmental_or_social_characteristics

```ts
other_investments_with_environmental_or_social_characteristics: number
```

EET 20520: Last reported % of other investments with E/S characteristics.

##### Remarks

Format: double
