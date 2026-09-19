---
title: "CdapiCommonEetSectorBaseExclusion"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusion"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetSectorBaseExclusion"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusion.html"
defines: ["CdapiCommonEetSectorBaseExclusion"]
member_count: 41
members: ["_meta", "adult_entertainment", "alcohol", "animal_testing", "cannabis", "coal", "conventional_weapons", "factory_farming", "fur", "gambling", "gas", "genetic_engineering", "gmo", "has_corruption_exclusion", "has_death_sentence_exclusion", "has_esg_biodiversity_monitoring", "has_esg_energy_consumption_monitoring", "has_esg_environmental_health_monitoring", "has_esg_ghg_emission_monitoring", "has_esg_safety_monitoring", "has_esg_supplier_monitoring", "has_esg_waste_fiion_monitoring", "has_esg_water_consumption_monitoring", "has_ilo_exclusion", "has_non_proliferation_treaty_of_nuclear_weapons", "has_non_ratification_of_paris_agreement_exclusion", "has_oecd_guidelines_exclusion", "has_sle_nuclear_weapons_exclusion", "has_ungc_exclusion", "has_war_exclusion", "nuclear_energy", "nuclear_weapons", "oil", "other_fossil_fuel", "palm_oil", "pesticides", "qualitative_exclusion_of_countries", "research_on_human_embryos", "source", "tobacco", "unconventional_weapons"]
member_groups:
  "Properties": ["_meta", "adult_entertainment", "alcohol", "animal_testing", "cannabis", "coal", "conventional_weapons", "factory_farming", "fur", "gambling", "gas", "genetic_engineering", "gmo", "has_corruption_exclusion", "has_death_sentence_exclusion", "has_esg_biodiversity_monitoring", "has_esg_energy_consumption_monitoring", "has_esg_environmental_health_monitoring", "has_esg_ghg_emission_monitoring", "has_esg_safety_monitoring", "has_esg_supplier_monitoring", "has_esg_waste_fiion_monitoring", "has_esg_water_consumption_monitoring", "has_ilo_exclusion", "has_non_proliferation_treaty_of_nuclear_weapons", "has_non_ratification_of_paris_agreement_exclusion", "has_oecd_guidelines_exclusion", "has_sle_nuclear_weapons_exclusion", "has_ungc_exclusion", "has_war_exclusion", "nuclear_energy", "nuclear_weapons", "oil", "other_fossil_fuel", "palm_oil", "pesticides", "qualitative_exclusion_of_countries", "research_on_human_embryos", "source", "tobacco", "unconventional_weapons"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionExclusion", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionFossilExclusion", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetSectorBaseExclusionSource"]
---

# CdapiCommonEetSectorBaseExclusion

EetSectorBaseExclusion holds the product's sector-based exclusion criteria under the EET.
Each field represents a specific sector and whether the product excludes companies in it.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetSectorBaseExclusion

```ts
interface CdapiCommonEetSectorBaseExclusion {
    _meta: BasedefEntityMeta;
    adult_entertainment: CdapiCommonEetSectorBaseExclusionExclusion;
    alcohol: CdapiCommonEetSectorBaseExclusionExclusion;
    animal_testing: CdapiCommonEetSectorBaseExclusionExclusion;
    cannabis: CdapiCommonEetSectorBaseExclusionExclusion;
    coal: CdapiCommonEetSectorBaseExclusionFossilExclusion;
    conventional_weapons: CdapiCommonEetSectorBaseExclusionExclusion;
    factory_farming: CdapiCommonEetSectorBaseExclusionExclusion;
    fur: CdapiCommonEetSectorBaseExclusionExclusion;
    gambling: CdapiCommonEetSectorBaseExclusionExclusion;
    gas: CdapiCommonEetSectorBaseExclusionFossilExclusion;
    genetic_engineering: CdapiCommonEetSectorBaseExclusionExclusion;
    gmo: CdapiCommonEetSectorBaseExclusionExclusion;
    has_corruption_exclusion: boolean;
    has_death_sentence_exclusion: boolean;
    has_esg_biodiversity_monitoring: boolean;
    has_esg_energy_consumption_monitoring: boolean;
    has_esg_environmental_health_monitoring: boolean;
    has_esg_ghg_emission_monitoring: boolean;
    has_esg_safety_monitoring: boolean;
    has_esg_supplier_monitoring: boolean;
    has_esg_waste_fiion_monitoring: boolean;
    has_esg_water_consumption_monitoring: boolean;
    has_ilo_exclusion: boolean;
    has_non_proliferation_treaty_of_nuclear_weapons: boolean;
    has_non_ratification_of_paris_agreement_exclusion: boolean;
    has_oecd_guidelines_exclusion: boolean;
    has_sle_nuclear_weapons_exclusion: boolean;
    has_ungc_exclusion: boolean;
    has_war_exclusion: boolean;
    nuclear_energy: CdapiCommonEetSectorBaseExclusionExclusion;
    nuclear_weapons: CdapiCommonEetSectorBaseExclusionExclusion;
    oil: CdapiCommonEetSectorBaseExclusionFossilExclusion;
    other_fossil_fuel: CdapiCommonEetSectorBaseExclusionFossilExclusion;
    palm_oil: CdapiCommonEetSectorBaseExclusionExclusion;
    pesticides: CdapiCommonEetSectorBaseExclusionExclusion;
    qualitative_exclusion_of_countries: CdapiCommonDictionary;
    research_on_human_embryos: CdapiCommonEetSectorBaseExclusionExclusion;
    source: CdapiCommonEetSectorBaseExclusionSource;
    tobacco: CdapiCommonEetSectorBaseExclusionExclusion;
    unconventional_weapons: CdapiCommonEetSectorBaseExclusionExclusion;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` adult_entertainment

```ts
adult_entertainment: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50100-50130: Adult entertainment / pornography exclusion.

#### `Readonly` alcohol

```ts
alcohol: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50200-50230: Alcohol exclusion.

#### `Readonly` animal_testing

```ts
animal_testing: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50300-50330: Animal testing exclusion.

#### `Readonly` cannabis

```ts
cannabis: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50400-50430: Cannabis exclusion.

#### `Readonly` coal

```ts
coal: CdapiCommonEetSectorBaseExclusionFossilExclusion
```

EET 50600-50660: Coal exclusion (fossil fuel — includes energy mix caps).

#### `Readonly` conventional_weapons

```ts
conventional_weapons: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50500-50530: Conventional weapons exclusion.

#### `Readonly` factory_farming

```ts
factory_farming: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50700-50730: Factory farming exclusion.

#### `Readonly` fur

```ts
fur: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50800-50830: Fur and exotic leather exclusion.

#### `Readonly` gambling

```ts
gambling: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 50900-50930: Gambling exclusion.

#### `Readonly` gas

```ts
gas: CdapiCommonEetSectorBaseExclusionFossilExclusion
```

EET 51000-51060: Natural gas exclusion (fossil fuel — includes energy mix caps).

#### `Readonly` genetic_engineering

```ts
genetic_engineering: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51100-51130: Genetic engineering exclusion.

#### `Readonly` gmo

```ts
gmo: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51200-51230: GMO exclusion.

#### `Readonly` has_corruption_exclusion

```ts
has_corruption_exclusion: boolean
```

EET 53030: If true, companies in high-corruption jurisdictions are excluded.

#### `Readonly` has_death_sentence_exclusion

```ts
has_death_sentence_exclusion: boolean
```

EET 53040: If true, companies in countries practising the death sentence are excluded.

#### `Readonly` has_esg_biodiversity_monitoring

```ts
has_esg_biodiversity_monitoring: boolean
```

EET 54070: If true, the product monitors biodiversity impact.

#### `Readonly` has_esg_energy_consumption_monitoring

```ts
has_esg_energy_consumption_monitoring: boolean
```

EET 54000: If true, the product monitors investee companies' energy consumption.

#### `Readonly` has_esg_environmental_health_monitoring

```ts
has_esg_environmental_health_monitoring: boolean
```

EET 54040: If true, the product monitors environmental health impact.

#### `Readonly` has_esg_ghg_emission_monitoring

```ts
has_esg_ghg_emission_monitoring: boolean
```

EET 54010: If true, the product monitors GHG emissions of investee companies.

#### `Readonly` has_esg_safety_monitoring

```ts
has_esg_safety_monitoring: boolean
```

EET 54060: If true, the product monitors workplace safety.

#### `Readonly` has_esg_supplier_monitoring

```ts
has_esg_supplier_monitoring: boolean
```

EET 54050: If true, the product monitors supply chain ESG practices.

#### `Readonly` has_esg_waste_fiion_monitoring

```ts
has_esg_waste_fiion_monitoring: boolean
```

EET 54030: If true, the product monitors waste generation of investee companies.
Note: field name contains a typo ("fiion") — preserved for backwards compatibility.

#### `Readonly` has_esg_water_consumption_monitoring

```ts
has_esg_water_consumption_monitoring: boolean
```

EET 54020: If true, the product monitors water consumption of investee companies.

#### `Readonly` has_ilo_exclusion

```ts
has_ilo_exclusion: boolean
```

EET 52220: If true, companies violating ILO core conventions are excluded.

#### `Readonly` has_non_proliferation_treaty_of_nuclear_weapons

```ts
has_non_proliferation_treaty_of_nuclear_weapons: boolean
```

EET 53010: If true, companies violating the Nuclear Non-Proliferation Treaty are excluded.

#### `Readonly` has_non_ratification_of_paris_agreement_exclusion

```ts
has_non_ratification_of_paris_agreement_exclusion: boolean
```

EET 53060: If true, companies in countries that have not ratified the Paris Agreement are excluded.

#### `Readonly` has_oecd_guidelines_exclusion

```ts
has_oecd_guidelines_exclusion: boolean
```

EET 52210: If true, companies violating OECD Guidelines for Multinational Enterprises are excluded.

#### `Readonly` has_sle_nuclear_weapons_exclusion

```ts
has_sle_nuclear_weapons_exclusion: boolean
```

EET 53000: If true, companies involved in nuclear weapons (SLE/controversial weapons) are excluded.

#### `Readonly` has_ungc_exclusion

```ts
has_ungc_exclusion: boolean
```

EET 52200: If true, companies violating the UN Global Compact are excluded.

#### `Readonly` has_war_exclusion

```ts
has_war_exclusion: boolean
```

EET 53050: If true, companies in countries engaged in active armed conflict are excluded.

#### `Readonly` nuclear_energy

```ts
nuclear_energy: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51300-51320: Nuclear energy exclusion. Note: part_of_value_chain (51330) not available.

#### `Readonly` nuclear_weapons

```ts
nuclear_weapons: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51400-51430: Nuclear weapons exclusion.

#### `Readonly` oil

```ts
oil: CdapiCommonEetSectorBaseExclusionFossilExclusion
```

EET 51500-51560: Oil exclusion (fossil fuel — includes energy mix caps).

#### `Readonly` other_fossil_fuel

```ts
other_fossil_fuel: CdapiCommonEetSectorBaseExclusionFossilExclusion
```

EET 51600-51660: Other fossil fuel exclusion.

#### `Readonly` palm_oil

```ts
palm_oil: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51700-51730: Palm oil exclusion.

#### `Readonly` pesticides

```ts
pesticides: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51800-51830: Pesticides exclusion.

#### `Readonly` qualitative_exclusion_of_countries

```ts
qualitative_exclusion_of_countries: CdapiCommonDictionary
```

EET 53020: Qualitative country exclusion criteria. Moved from field 29.

#### `Readonly` research_on_human_embryos

```ts
research_on_human_embryos: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 51900-51930: Research on human embryos exclusion.

#### `Readonly` source

```ts
source: CdapiCommonEetSectorBaseExclusionSource
```

##### Remarks

Format: enum

#### `Readonly` tobacco

```ts
tobacco: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 52000-52030: Tobacco exclusion.

#### `Readonly` unconventional_weapons

```ts
unconventional_weapons: CdapiCommonEetSectorBaseExclusionExclusion
```

EET 52100-52130: Unconventional weapons exclusion.
