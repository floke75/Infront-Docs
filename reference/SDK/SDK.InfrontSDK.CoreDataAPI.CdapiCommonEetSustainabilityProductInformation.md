---
title: "CdapiCommonEetSustainabilityProductInformation"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformation"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSustainabilityProductInformation"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformation.html"
defines: ["CdapiCommonEetSustainabilityProductInformation"]
member_count: 29
members: ["_meta", "does_consider_end_client_sustainability_preferences", "enabling_activities", "environmental_investments", "environmental_thematic_characteristics", "esg_main_focus", "governance_thematic_characteristics", "has_esg_existing_thematic_characteristics", "has_objective_of_a_reduction_in_carbon_emissions", "is_aligned_with_paris_agreement", "is_statement_subject_to_an_external_review_by_third_party", "methodology_used_for_alignment_calc_with_eu_taxonomy", "minimum_asset_allocation_date", "minimum_pct_invs_aligned_eu_taxonomy_excluding_sovereign_bonds", "minimum_pct_invs_aligned_eu_taxonomy_including_sovereign_bonds", "percentage_taxonomy_aligned", "reported_asset_allocation_date", "sfdr_product_type", "sfdr_product_type_eligible", "share_social_investments", "social_thematic_characteristics", "source", "sustainability_label", "sustainability_preference_germany", "sustainable_investments", "taxonomy_aligned_investments", "taxonomy_objectives", "total_sustainable_investments", "transition_activities"]
member_groups:
  "Properties": ["_meta", "does_consider_end_client_sustainability_preferences", "enabling_activities", "environmental_investments", "environmental_thematic_characteristics", "esg_main_focus", "governance_thematic_characteristics", "has_esg_existing_thematic_characteristics", "has_objective_of_a_reduction_in_carbon_emissions", "is_aligned_with_paris_agreement", "is_statement_subject_to_an_external_review_by_third_party", "methodology_used_for_alignment_calc_with_eu_taxonomy", "minimum_asset_allocation_date", "minimum_pct_invs_aligned_eu_taxonomy_excluding_sovereign_bonds", "minimum_pct_invs_aligned_eu_taxonomy_including_sovereign_bonds", "percentage_taxonomy_aligned", "reported_asset_allocation_date", "sfdr_product_type", "sfdr_product_type_eligible", "share_social_investments", "social_thematic_characteristics", "source", "sustainability_label", "sustainability_preference_germany", "sustainable_investments", "taxonomy_aligned_investments", "taxonomy_objectives", "total_sustainable_investments", "transition_activities"]
reference_count: 7
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationData", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationSustainableInvestments", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives"]
---

# CdapiCommonEetSustainabilityProductInformation

EetSustainabilityProductInformation holds SFDR/EET sustainability product information.
Covers SFDR article classification, taxonomy alignment, sustainable investment objectives,
and ESG thematic characteristics. Sources: WM, INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSustainabilityProductInformation

```ts
interface CdapiCommonEetSustainabilityProductInformation {
    _meta: BasedefEntityMeta;
    does_consider_end_client_sustainability_preferences: string;
    enabling_activities: CdapiCommonEetSustainabilityProductInformationData;
    environmental_investments: CdapiCommonEetSustainabilityProductInformationData;
    environmental_thematic_characteristics: readonly CdapiCommonDictionary[];
    esg_main_focus: CdapiCommonDictionary;
    governance_thematic_characteristics: readonly CdapiCommonDictionary[];
    has_esg_existing_thematic_characteristics: boolean;
    has_objective_of_a_reduction_in_carbon_emissions: boolean;
    is_aligned_with_paris_agreement: boolean;
    is_statement_subject_to_an_external_review_by_third_party: boolean;
    methodology_used_for_alignment_calc_with_eu_taxonomy: CdapiCommonDictionary;
    minimum_asset_allocation_date: string;
    minimum_pct_invs_aligned_eu_taxonomy_excluding_sovereign_bonds: number;
    minimum_pct_invs_aligned_eu_taxonomy_including_sovereign_bonds: number;
    percentage_taxonomy_aligned: CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned;
    reported_asset_allocation_date: string;
    sfdr_product_type: CdapiCommonDictionary;
    sfdr_product_type_eligible: CdapiCommonDictionary;
    share_social_investments: CdapiCommonEetSustainabilityProductInformationData;
    social_thematic_characteristics: readonly CdapiCommonDictionary[];
    source: CdapiCommonEetSustainabilityProductInformationSource;
    sustainability_label: readonly CdapiCommonDictionary[];
    sustainability_preference_germany: readonly CdapiCommonDictionary[];
    sustainable_investments: CdapiCommonEetSustainabilityProductInformationSustainableInvestments;
    taxonomy_aligned_investments: CdapiCommonEetSustainabilityProductInformationData;
    taxonomy_objectives: CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives;
    total_sustainable_investments: CdapiCommonEetSustainabilityProductInformationData;
    transition_activities: CdapiCommonEetSustainabilityProductInformationData;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` does_consider_end_client_sustainability_preferences

```ts
does_consider_end_client_sustainability_preferences: string
```

EET 20590: Whether and how the product considers end-client sustainability preferences.

#### `Readonly` enabling_activities

```ts
enabling_activities: CdapiCommonEetSustainabilityProductInformationData
```

Share of enabling activities within Taxonomy-aligned investments.

#### `Readonly` environmental_investments

```ts
environmental_investments: CdapiCommonEetSustainabilityProductInformationData
```

Environmental sustainable investment share (minimum and last reported).

#### `Readonly` environmental_thematic_characteristics

```ts
environmental_thematic_characteristics: readonly CdapiCommonDictionary[]
```

EET 20270: Environmental thematic characteristics (e.g. "Climate Change", "Water").

#### `Readonly` esg_main_focus

```ts
esg_main_focus: CdapiCommonDictionary
```

EET 20090: Main ESG focus (e.g. "Climate", "Social", "Governance").

#### `Readonly` governance_thematic_characteristics

```ts
governance_thematic_characteristics: readonly CdapiCommonDictionary[]
```

EET 20290: Governance thematic characteristics (e.g. "Board Diversity", "Transparency").

#### `Readonly` has_esg_existing_thematic_characteristics

```ts
has_esg_existing_thematic_characteristics: boolean
```

EET 20260: If true, the product has thematic ESG characteristics.

#### `Readonly` has_objective_of_a_reduction_in_carbon_emissions

```ts
has_objective_of_a_reduction_in_carbon_emissions: boolean
```

EET 20570: If true, the product has an objective of reducing carbon emissions.

#### `Readonly` is_aligned_with_paris_agreement

```ts
is_aligned_with_paris_agreement: boolean
```

EET 20580: If true, the product is aligned with the Paris Agreement.

#### `Readonly` is_statement_subject_to_an_external_review_by_third_party

```ts
is_statement_subject_to_an_external_review_by_third_party: boolean
```

EET 20620: If true, the sustainability statement was reviewed by an external third party.

#### `Readonly` methodology_used_for_alignment_calc_with_eu_taxonomy

```ts
methodology_used_for_alignment_calc_with_eu_taxonomy: CdapiCommonDictionary
```

EET 20630: Methodology used to calculate EU Taxonomy alignment.

#### `Readonly` minimum_asset_allocation_date

```ts
minimum_asset_allocation_date: string
```

EET 20390: Date of the minimum/planned asset allocation. ISO-8601 recommended.

#### `Readonly` minimum_pct_invs_aligned_eu_taxonomy_excluding_sovereign_bonds

```ts
minimum_pct_invs_aligned_eu_taxonomy_excluding_sovereign_bonds: number
```

EET 20610: Minimum % aligned with EU Taxonomy excluding sovereign bonds.

##### Remarks

Format: double

#### `Readonly` minimum_pct_invs_aligned_eu_taxonomy_including_sovereign_bonds

```ts
minimum_pct_invs_aligned_eu_taxonomy_including_sovereign_bonds: number
```

EET 20600: Minimum % aligned with EU Taxonomy including sovereign bonds.

##### Remarks

Format: double

#### `Readonly` percentage_taxonomy_aligned

```ts
percentage_taxonomy_aligned: CdapiCommonEetSustainabilityProductInformationPercentageTaxonomyAligned
```

EU Taxonomy alignment percentages by sovereign inclusion and financial metric.

#### `Readonly` reported_asset_allocation_date

```ts
reported_asset_allocation_date: string
```

EET 20480: Date of the last reported asset allocation. ISO-8601 recommended.

#### `Readonly` sfdr_product_type

```ts
sfdr_product_type: CdapiCommonDictionary
```

EET 20040: SFDR product type (Art. 6, Art. 8, or Art. 9).

#### `Readonly` sfdr_product_type_eligible

```ts
sfdr_product_type_eligible: CdapiCommonDictionary
```

EET 20050: Eligible SFDR product type — what could be claimed based on available data.

#### `Readonly` share_social_investments

```ts
share_social_investments: CdapiCommonEetSustainabilityProductInformationData
```

Social sustainable investment share.

#### `Readonly` social_thematic_characteristics

```ts
social_thematic_characteristics: readonly CdapiCommonDictionary[]
```

EET 20280: Social thematic characteristics (e.g. "Gender Diversity", "Human Rights").

#### `Readonly` source

```ts
source: CdapiCommonEetSustainabilityProductInformationSource
```

##### Remarks

Format: enum

#### `Readonly` sustainability_label

```ts
sustainability_label: readonly CdapiCommonDictionary[]
```

EET 20060: Sustainability labels or standards the product complies with.

#### `Readonly` sustainability_preference_germany

```ts
sustainability_preference_germany: readonly CdapiCommonDictionary[]
```

EET 60440: Sustainability indicators for the German MiFID market.

#### `Readonly` sustainable_investments

```ts
sustainable_investments: CdapiCommonEetSustainabilityProductInformationSustainableInvestments
```

SFDR Art. 8/9 classification details.

#### `Readonly` taxonomy_aligned_investments

```ts
taxonomy_aligned_investments: CdapiCommonEetSustainabilityProductInformationData
```

EU Taxonomy-aligned investment share.

#### `Readonly` taxonomy_objectives

```ts
taxonomy_objectives: CdapiCommonEetSustainabilityProductInformationTaxonomyObjectives
```

EU Taxonomy environmental objectives (flags and percentages per objective).

#### `Readonly` total_sustainable_investments

```ts
total_sustainable_investments: CdapiCommonEetSustainabilityProductInformationData
```

Total sustainable investment share.

#### `Readonly` transition_activities

```ts
transition_activities: CdapiCommonEetSustainabilityProductInformationData
```

Share of transition activities within Taxonomy-aligned investments.
