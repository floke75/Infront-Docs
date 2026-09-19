---
title: "CdapiCommonEetOther"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOther"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOther"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOther.html"
defines: ["CdapiCommonEetOther"]
member_count: 14
members: ["_meta", "alignment_with_sustainable_development_goals", "environmental_topic_or_considered_indicators_for_french_mifid_market", "french_amf_doctrine_approach", "governance_topic_or_considered_indicators_for_french_mifid_market", "has_pai_consideration", "investments_methodology_calculation", "list_of_countries_subject_to_social_violations", "list_of_invested_countries", "percentage_of_minimum_sfdr_8_funds", "percentage_of_minimum_sfdr_9_funds", "social_topic_or_considered_indicators_for_french_mifid_market", "source", "type_of_identification"]
member_groups:
  "Properties": ["_meta", "alignment_with_sustainable_development_goals", "environmental_topic_or_considered_indicators_for_french_mifid_market", "french_amf_doctrine_approach", "governance_topic_or_considered_indicators_for_french_mifid_market", "has_pai_consideration", "investments_methodology_calculation", "list_of_countries_subject_to_social_violations", "list_of_invested_countries", "percentage_of_minimum_sfdr_8_funds", "percentage_of_minimum_sfdr_9_funds", "social_topic_or_considered_indicators_for_french_mifid_market", "source", "type_of_identification"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherSource"]
---

# CdapiCommonEetOther

EetOther holds additional EET product-level fields covering general product info,
SFDR disclosures, ESG engagement metrics, benchmarks, allocation breakdowns,
and negative screening exclusion flags. Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther

```ts
interface CdapiCommonEetOther {
    _meta: BasedefEntityMeta;
    alignment_with_sustainable_development_goals: readonly CdapiCommonDictionary[];
    environmental_topic_or_considered_indicators_for_french_mifid_market: readonly CdapiCommonDictionary[];
    french_amf_doctrine_approach: CdapiCommonDictionary;
    governance_topic_or_considered_indicators_for_french_mifid_market: readonly CdapiCommonDictionary[];
    has_pai_consideration: boolean;
    investments_methodology_calculation: CdapiCommonDictionary;
    list_of_countries_subject_to_social_violations: string;
    list_of_invested_countries: string;
    percentage_of_minimum_sfdr_8_funds: number;
    percentage_of_minimum_sfdr_9_funds: number;
    social_topic_or_considered_indicators_for_french_mifid_market: readonly CdapiCommonDictionary[];
    source: CdapiCommonEetOtherSource;
    type_of_identification: CdapiCommonDictionary;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` alignment_with_sustainable_development_goals

```ts
alignment_with_sustainable_development_goals: readonly CdapiCommonDictionary[]
```

EET 20300: UN Sustainable Development Goals (SDGs) the product is aligned with.

#### `Readonly` environmental_topic_or_considered_indicators_for_french_mifid_market

```ts
environmental_topic_or_considered_indicators_for_french_mifid_market: readonly CdapiCommonDictionary[]
```

EET 60410: Environmental ESG topics/indicators for the French MiFID market.

#### `Readonly` french_amf_doctrine_approach

```ts
french_amf_doctrine_approach: CdapiCommonDictionary
```

EET 60400: French AMF doctrine approach for sustainability reporting.

#### `Readonly` governance_topic_or_considered_indicators_for_french_mifid_market

```ts
governance_topic_or_considered_indicators_for_french_mifid_market: readonly CdapiCommonDictionary[]
```

EET 60430: Governance ESG topics/indicators for the French MiFID market.

#### `Readonly` has_pai_consideration

```ts
has_pai_consideration: boolean
```

EET 20100: If true, the product considers Principal Adverse Impacts (PAI) in its investment strategy.

#### `Readonly` investments_methodology_calculation

```ts
investments_methodology_calculation: CdapiCommonDictionary
```

EET 20410: Methodology used to calculate sustainable investment proportions.

#### `Readonly` list_of_countries_subject_to_social_violations

```ts
list_of_countries_subject_to_social_violations: string
```

EET 100000: Comma-separated list of countries subject to social violations that the product excludes.

#### `Readonly` list_of_invested_countries

```ts
list_of_invested_countries: string
```

EET 100010: Comma-separated list of countries in which the product is invested.

#### `Readonly` percentage_of_minimum_sfdr_8_funds

```ts
percentage_of_minimum_sfdr_8_funds: number
```

EET 20070: % of minimum SFDR Article 8 funds within this product.

##### Remarks

Format: double

#### `Readonly` percentage_of_minimum_sfdr_9_funds

```ts
percentage_of_minimum_sfdr_9_funds: number
```

EET 20080: % of minimum SFDR Article 9 funds within this product.

##### Remarks

Format: double

#### `Readonly` social_topic_or_considered_indicators_for_french_mifid_market

```ts
social_topic_or_considered_indicators_for_french_mifid_market: readonly CdapiCommonDictionary[]
```

EET 60420: Social ESG topics/indicators for the French MiFID market.

#### `Readonly` source

```ts
source: CdapiCommonEetOtherSource
```

##### Remarks

Format: enum

#### `Readonly` type_of_identification

```ts
type_of_identification: CdapiCommonDictionary
```

EET 20010: Type of identification code used (e.g. ISIN, LEI).
