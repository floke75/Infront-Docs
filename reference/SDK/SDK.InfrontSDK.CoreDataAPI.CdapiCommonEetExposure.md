---
title: "CdapiCommonEetExposure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetExposure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetExposure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetExposure.html"
defines: ["CdapiCommonEetExposure"]
member_count: 44
members: ["_meta", "abortifacients_production", "adult_entertainment", "agrochemical_products_production", "alcohol_participation", "alcohol_production", "animal_cruelty", "animal_testing", "animal_testing_cosmetics", "anti_personnel_landmines_participation", "arctic_oil_gas", "armament_participation", "armament_production", "cannabis", "cluster_bombs_participation", "cluster_bombs_production", "coal_mining_participation", "coal_mining_production", "coal_power_generation_participation", "coal_power_generation_production", "contraceptives_production", "embryonic_stem_cell_research_participation", "fossil_fuel_participation", "fossil_fuel_production", "fur_leathers", "gambling", "gambling_production", "gmo_products_participation", "gmo_research_participation", "meat_products_production", "nuclear_energy_participation", "nuclear_energy_production", "nuclear_weapons_participation", "nuclear_weapons_production", "oil_sands_participation", "oil_sands_production", "palm_oil", "pork_products_production", "predatory_lending", "small_arms", "source", "stem_cell_research", "tobacco_participation", "tobacco_production"]
member_groups:
  "Properties": ["_meta", "abortifacients_production", "adult_entertainment", "agrochemical_products_production", "alcohol_participation", "alcohol_production", "animal_cruelty", "animal_testing", "animal_testing_cosmetics", "anti_personnel_landmines_participation", "arctic_oil_gas", "armament_participation", "armament_production", "cannabis", "cluster_bombs_participation", "cluster_bombs_production", "coal_mining_participation", "coal_mining_production", "coal_power_generation_participation", "coal_power_generation_production", "contraceptives_production", "embryonic_stem_cell_research_participation", "fossil_fuel_participation", "fossil_fuel_production", "fur_leathers", "gambling", "gambling_production", "gmo_products_participation", "gmo_research_participation", "meat_products_production", "nuclear_energy_participation", "nuclear_energy_production", "nuclear_weapons_participation", "nuclear_weapons_production", "oil_sands_participation", "oil_sands_production", "palm_oil", "pork_products_production", "predatory_lending", "small_arms", "source", "stem_cell_research", "tobacco_participation", "tobacco_production"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetExposureData", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetExposureSource"]
---

# CdapiCommonEetExposure

EetExposure holds binary and range-based exposure flags across controversial activity sectors.
For each activity, has_exposure indicates whether the product is exposed, and
optional revenue range bounds (min_revenue/max_revenue) may be provided.
Source: CLARITY.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetExposure

```ts
interface CdapiCommonEetExposure {
    _meta: BasedefEntityMeta;
    abortifacients_production: CdapiCommonEetExposureData;
    adult_entertainment: CdapiCommonEetExposureData;
    agrochemical_products_production: CdapiCommonEetExposureData;
    alcohol_participation: CdapiCommonEetExposureData;
    alcohol_production: CdapiCommonEetExposureData;
    animal_cruelty: CdapiCommonEetExposureData;
    animal_testing: CdapiCommonEetExposureData;
    animal_testing_cosmetics: CdapiCommonEetExposureData;
    anti_personnel_landmines_participation: CdapiCommonEetExposureData;
    arctic_oil_gas: CdapiCommonEetExposureData;
    armament_participation: CdapiCommonEetExposureData;
    armament_production: CdapiCommonEetExposureData;
    cannabis: CdapiCommonEetExposureData;
    cluster_bombs_participation: CdapiCommonEetExposureData;
    cluster_bombs_production: CdapiCommonEetExposureData;
    coal_mining_participation: CdapiCommonEetExposureData;
    coal_mining_production: CdapiCommonEetExposureData;
    coal_power_generation_participation: CdapiCommonEetExposureData;
    coal_power_generation_production: CdapiCommonEetExposureData;
    contraceptives_production: CdapiCommonEetExposureData;
    embryonic_stem_cell_research_participation: CdapiCommonEetExposureData;
    fossil_fuel_participation: CdapiCommonEetExposureData;
    fossil_fuel_production: CdapiCommonEetExposureData;
    fur_leathers: CdapiCommonEetExposureData;
    gambling: CdapiCommonEetExposureData;
    gambling_production: CdapiCommonEetExposureData;
    gmo_products_participation: CdapiCommonEetExposureData;
    gmo_research_participation: CdapiCommonEetExposureData;
    meat_products_production: CdapiCommonEetExposureData;
    nuclear_energy_participation: CdapiCommonEetExposureData;
    nuclear_energy_production: CdapiCommonEetExposureData;
    nuclear_weapons_participation: CdapiCommonEetExposureData;
    nuclear_weapons_production: CdapiCommonEetExposureData;
    oil_sands_participation: CdapiCommonEetExposureData;
    oil_sands_production: CdapiCommonEetExposureData;
    palm_oil: CdapiCommonEetExposureData;
    pork_products_production: CdapiCommonEetExposureData;
    predatory_lending: CdapiCommonEetExposureData;
    small_arms: CdapiCommonEetExposureData;
    source: CdapiCommonEetExposureSource;
    stem_cell_research: CdapiCommonEetExposureData;
    tobacco_participation: CdapiCommonEetExposureData;
    tobacco_production: CdapiCommonEetExposureData;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` abortifacients_production

```ts
abortifacients_production: CdapiCommonEetExposureData
```

Manufacturing of abortifacient products (drugs/chemicals causing pregnancy termination).

#### `Readonly` adult_entertainment

```ts
adult_entertainment: CdapiCommonEetExposureData
```

Adult entertainment — pornography distribution and sex toy manufacturing.

#### `Readonly` agrochemical_products_production

```ts
agrochemical_products_production: CdapiCommonEetExposureData
```

Direct manufacturing of agrochemical products (insecticides, herbicides, synthetic fertilizers).

#### `Readonly` alcohol_participation

```ts
alcohol_participation: CdapiCommonEetExposureData
```

Indirect involvement in alcohol (retail, wholesale, stakes in producers).

#### `Readonly` alcohol_production

```ts
alcohol_production: CdapiCommonEetExposureData
```

Direct production of alcoholic beverages (fermentation, distillation, brewing).

#### `Readonly` animal_cruelty

```ts
animal_cruelty: CdapiCommonEetExposureData
```

Animal cruelty (unclean farms, live export with suffering, improper slaughter).

#### `Readonly` animal_testing

```ts
animal_testing: CdapiCommonEetExposureData
```

Animal testing for product safety/efficacy including cosmetics.

#### `Readonly` animal_testing_cosmetics

```ts
animal_testing_cosmetics: CdapiCommonEetExposureData
```

Animal testing specifically for cosmetic products.

#### `Readonly` anti_personnel_landmines_participation

```ts
anti_personnel_landmines_participation: CdapiCommonEetExposureData
```

Anti-personnel landmines or IED component production.

#### `Readonly` arctic_oil_gas

```ts
arctic_oil_gas: CdapiCommonEetExposureData
```

Arctic oil and gas exploration/production.

#### `Readonly` armament_participation

```ts
armament_participation: CdapiCommonEetExposureData
```

Military equipment services (maintenance, repair, logistics, training).

#### `Readonly` armament_production

```ts
armament_production: CdapiCommonEetExposureData
```

Direct manufacturing of military aerospace/defense equipment.

#### `Readonly` cannabis

```ts
cannabis: CdapiCommonEetExposureData
```

Cannabis and cannabis-based products (pharmaceutical, agricultural, retail).

#### `Readonly` cluster_bombs_participation

```ts
cluster_bombs_participation: CdapiCommonEetExposureData
```

Cluster munitions involvement.

#### `Readonly` cluster_bombs_production

```ts
cluster_bombs_production: CdapiCommonEetExposureData
```

Direct cluster munitions manufacturing.

#### `Readonly` coal_mining_participation

```ts
coal_mining_participation: CdapiCommonEetExposureData
```

Indirect involvement in coal mining (equipment, services, contract drilling).

#### `Readonly` coal_mining_production

```ts
coal_mining_production: CdapiCommonEetExposureData
```

Direct coal mining (surface/underground) and coke production.

#### `Readonly` coal_power_generation_participation

```ts
coal_power_generation_participation: CdapiCommonEetExposureData
```

Indirect involvement in coal power generation.

#### `Readonly` coal_power_generation_production

```ts
coal_power_generation_production: CdapiCommonEetExposureData
```

Direct coal power generation.

#### `Readonly` contraceptives_production

```ts
contraceptives_production: CdapiCommonEetExposureData
```

Contraceptive and fertility control products.

#### `Readonly` embryonic_stem_cell_research_participation

```ts
embryonic_stem_cell_research_participation: CdapiCommonEetExposureData
```

Research on human embryos or cloning.

#### `Readonly` fossil_fuel_participation

```ts
fossil_fuel_participation: CdapiCommonEetExposureData
```

Indirect fossil fuel involvement (engineering, electricity, drilling equipment).

#### `Readonly` fossil_fuel_production

```ts
fossil_fuel_production: CdapiCommonEetExposureData
```

Direct fossil fuel extraction (coal, crude oil, natural gas) and services.

#### `Readonly` fur_leathers

```ts
fur_leathers: CdapiCommonEetExposureData
```

Fur and exotic leather (production, trapping, slaughter for fur).

#### `Readonly` gambling

```ts
gambling: CdapiCommonEetExposureData
```

Gambling (casinos, lottery, betting, gambling machine manufacturing).

#### `Readonly` gambling_production

```ts
gambling_production: CdapiCommonEetExposureData
```

Direct gambling activities.

#### `Readonly` gmo_products_participation

```ts
gmo_products_participation: CdapiCommonEetExposureData
```

Production/sale of genetically modified products for agriculture/consumption.

#### `Readonly` gmo_research_participation

```ts
gmo_research_participation: CdapiCommonEetExposureData
```

GMO research and development (including GMO vaccines).

#### `Readonly` meat_products_production

```ts
meat_products_production: CdapiCommonEetExposureData
```

Direct meat production (animal farming, slaughter, processing — excluding fish).

#### `Readonly` nuclear_energy_participation

```ts
nuclear_energy_participation: CdapiCommonEetExposureData
```

Indirect involvement in nuclear energy (equipment, services).

#### `Readonly` nuclear_energy_production

```ts
nuclear_energy_production: CdapiCommonEetExposureData
```

Direct nuclear power generation (owning/operating nuclear power stations).

#### `Readonly` nuclear_weapons_participation

```ts
nuclear_weapons_participation: CdapiCommonEetExposureData
```

Nuclear weapons involvement (production, components, stakes).

#### `Readonly` nuclear_weapons_production

```ts
nuclear_weapons_production: CdapiCommonEetExposureData
```

Direct nuclear weapons manufacturing.

#### `Readonly` oil_sands_participation

```ts
oil_sands_participation: CdapiCommonEetExposureData
```

Indirect involvement in oil sands (equipment, storage, transport).

#### `Readonly` oil_sands_production

```ts
oil_sands_production: CdapiCommonEetExposureData
```

Direct oil sands extraction or refining.

#### `Readonly` palm_oil

```ts
palm_oil: CdapiCommonEetExposureData
```

Palm oil — farming/extracting from palm fruit or kernel.

#### `Readonly` pork_products_production

```ts
pork_products_production: CdapiCommonEetExposureData
```

Direct pork production (pig breeding, slaughtering, processing).

#### `Readonly` predatory_lending

```ts
predatory_lending: CdapiCommonEetExposureData
```

Predatory lending (payday loans, pawn loans, abusive interest rates).

#### `Readonly` small_arms

```ts
small_arms: CdapiCommonEetExposureData
```

Small arms manufacturing/retailing (handguns, rifles, ammunition).

#### `Readonly` source

```ts
source: CdapiCommonEetExposureSource
```

##### Remarks

Format: enum

#### `Readonly` stem_cell_research

```ts
stem_cell_research: CdapiCommonEetExposureData
```

Stem cell research (human embryos, fetal tissue, adult tissue).

#### `Readonly` tobacco_participation

```ts
tobacco_participation: CdapiCommonEetExposureData
```

Indirect tobacco involvement (retail, wholesale, marketing, acetate tow for filters).

#### `Readonly` tobacco_production

```ts
tobacco_production: CdapiCommonEetExposureData
```

Direct tobacco production (cigarettes, cigars, snuff, pipe tobacco, growing).
