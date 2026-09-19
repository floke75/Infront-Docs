---
title: "CdapiCommonEetSustainabilityProductInformationSustainableInvestments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationSustainableInvestments"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSustainabilityProductInformationSustainableInvestments"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationSustainableInvestments.html"
defines: ["CdapiCommonEetSustainabilityProductInformationSustainableInvestments"]
member_count: 9
members: ["art8_minimum_share", "art9_minimum_share_environmental", "art9_minimum_share_social", "has_art8", "has_art8_environmental_non_eu_taxonomy", "has_art8_eu_taxonomy", "has_art9_environmental_eu_taxonomy", "has_art9_environmental_non_eu_taxonomy", "has_sustainable_investments_art8_social_objective"]
member_groups:
  "Properties": ["art8_minimum_share", "art9_minimum_share_environmental", "art9_minimum_share_social", "has_art8", "has_art8_environmental_non_eu_taxonomy", "has_art8_eu_taxonomy", "has_art9_environmental_eu_taxonomy", "has_art9_environmental_non_eu_taxonomy", "has_sustainable_investments_art8_social_objective"]
---

# CdapiCommonEetSustainabilityProductInformationSustainableInvestments

SustainableInvestments holds SFDR Article 8/9 classification flags and minimum shares.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSustainabilityProductInformation_SustainableInvestments

```ts
interface CdapiCommonEetSustainabilityProductInformationSustainableInvestments {
    art8_minimum_share: number;
    art9_minimum_share_environmental: number;
    art9_minimum_share_social: number;
    has_art8: boolean;
    has_art8_environmental_non_eu_taxonomy: boolean;
    has_art8_eu_taxonomy: boolean;
    has_art9_environmental_eu_taxonomy: boolean;
    has_art9_environmental_non_eu_taxonomy: boolean;
    has_sustainable_investments_art8_social_objective: boolean;
}
```

### Properties

#### `Readonly` art8_minimum_share

```ts
art8_minimum_share: number
```

EET 20180: Minimum % of sustainable investments for Art. 8.

##### Remarks

Format: double

#### `Readonly` art9_minimum_share_environmental

```ts
art9_minimum_share_environmental: number
```

EET 20220: Minimum % of Art. 9 sustainable investments with environmental objective.

##### Remarks

Format: double

#### `Readonly` art9_minimum_share_social

```ts
art9_minimum_share_social: number
```

EET 20250: Minimum % of Art. 9 sustainable investments with social objective.

##### Remarks

Format: double

#### `Readonly` has_art8

```ts
has_art8: boolean
```

EET 20170: If true, qualifies as SFDR Article 8.

#### `Readonly` has_art8_environmental_non_eu_taxonomy

```ts
has_art8_environmental_non_eu_taxonomy: boolean
```

EET 20200: If true, Art. 8 product has environmental investments not Taxonomy-aligned.

#### `Readonly` has_art8_eu_taxonomy

```ts
has_art8_eu_taxonomy: boolean
```

EET 20190: If true, Art. 8 product has EU Taxonomy-aligned sustainable investments.

#### `Readonly` has_art9_environmental_eu_taxonomy

```ts
has_art9_environmental_eu_taxonomy: boolean
```

EET 20230: If true, Art. 9 product has EU Taxonomy-aligned environmental investments.

#### `Readonly` has_art9_environmental_non_eu_taxonomy

```ts
has_art9_environmental_non_eu_taxonomy: boolean
```

EET 20240: If true, Art. 9 product has environmental investments not Taxonomy-aligned.

#### `Readonly` has_sustainable_investments_art8_social_objective

```ts
has_sustainable_investments_art8_social_objective: boolean
```

EET 20210: If true, Art. 8 product has sustainable investments with a social objective.
