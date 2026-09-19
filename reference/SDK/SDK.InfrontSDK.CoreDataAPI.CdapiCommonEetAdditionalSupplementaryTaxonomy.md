---
title: "CdapiCommonEetAdditionalSupplementaryTaxonomy"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSupplementaryTaxonomy"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetAdditionalSupplementaryTaxonomy"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSupplementaryTaxonomy.html"
defines: ["CdapiCommonEetAdditionalSupplementaryTaxonomy"]
member_count: 26
members: ["current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_including_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_turnover", "is_investing_in_eu_taxonomy_aligned_fossil_gas_activities", "is_investing_in_eu_taxonomy_aligned_nuclear_activities", "minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds"]
member_groups:
  "Properties": ["current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_including_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_turnover", "current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_capex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_opex", "current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_turnover", "is_investing_in_eu_taxonomy_aligned_fossil_gas_activities", "is_investing_in_eu_taxonomy_aligned_nuclear_activities", "minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds", "minimum_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds"]
---

# CdapiCommonEetAdditionalSupplementaryTaxonomy

SupplementaryTaxonomy holds supplementary EU Taxonomy data for fossil gas and nuclear activities,
broken down by minimum/current percentages, CapEx/OpEx/Revenue metrics,
and sovereign bond inclusion/exclusion variants.
Note: field 29 is used instead of 20 for one CapEx field — preserved for backwards compatibility.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetAdditional_SupplementaryTaxonomy

```ts
interface CdapiCommonEetAdditionalSupplementaryTaxonomy {
    current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex: number;
    current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_including_sovereign_bonds_capex: number;
    current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_opex: number;
    current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_turnover: number;
    current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_opex: number;
    current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_turnover: number;
    current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex: number;
    current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_opex: number;
    current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_turnover: number;
    current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_capex: number;
    current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_opex: number;
    current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_turnover: number;
    current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_capex: number;
    current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_opex: number;
    current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_turnover: number;
    current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_capex: number;
    current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_opex: number;
    current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_turnover: number;
    is_investing_in_eu_taxonomy_aligned_fossil_gas_activities: boolean;
    is_investing_in_eu_taxonomy_aligned_nuclear_activities: boolean;
    minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds: number;
    minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds: number;
    minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds: number;
    minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds: number;
    minimum_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds: number;
    minimum_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds: number;
}
```

### Properties

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex

```ts
current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex: number
```

EET 90150: Current % — fossil gas and nuclear, excluding sovereign bonds — CapEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_including_sovereign_bonds_capex

```ts
current_percentage_investments_aligned_eu_taxonomy_fossil_gas_and_nuclear_including_sovereign_bonds_capex: number
```

EET 90140: Current % — fossil gas and nuclear, including sovereign bonds — CapEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_opex

```ts
current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_opex: number
```

EET 90210: Current % — fossil gas, excluding sovereign bonds — OpEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_turnover

```ts
current_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds_turnover: number
```

EET 90090: Current % — fossil gas, excluding sovereign bonds — turnover basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_opex

```ts
current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_opex: number
```

EET 90200: Current % — fossil gas, including sovereign bonds — OpEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_turnover

```ts
current_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds_turnover: number
```

EET 90080: Current % — fossil gas, including sovereign bonds — turnover basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex

```ts
current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_capex: number
```

EET 90190: Current % — no fossil gas and nuclear, excluding sovereign bonds — CapEx basis.
Note: field number 29 in the source (likely a typo for 20) — preserved for backwards compatibility.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_opex

```ts
current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_opex: number
```

EET 90250: Current % — no fossil gas and nuclear, excluding sovereign bonds — OpEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_turnover

```ts
current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds_turnover: number
```

EET 90130: Current % — no fossil gas and nuclear, excluding sovereign bonds — turnover basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_capex

```ts
current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_capex: number
```

EET 90180: Current % — no fossil gas and nuclear, including sovereign bonds — CapEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_opex

```ts
current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_opex: number
```

EET 90240: Current % — no fossil gas and nuclear, including sovereign bonds — OpEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_turnover

```ts
current_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds_turnover: number
```

EET 90120: Current % — no fossil gas and nuclear, including sovereign bonds — turnover basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_capex

```ts
current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_capex: number
```

EET 90170: Current % — nuclear, excluding sovereign bonds — CapEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_opex

```ts
current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_opex: number
```

EET 90230: Current % — nuclear, excluding sovereign bonds — OpEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_turnover

```ts
current_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds_turnover: number
```

EET 90110: Current % — nuclear, excluding sovereign bonds — turnover basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_capex

```ts
current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_capex: number
```

EET 90160: Current % — nuclear, including sovereign bonds — CapEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_opex

```ts
current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_opex: number
```

EET 90220: Current % — nuclear, including sovereign bonds — OpEx basis.

##### Remarks

Format: double

#### `Readonly` current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_turnover

```ts
current_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds_turnover: number
```

EET 90100: Current % — nuclear, including sovereign bonds — turnover basis.

##### Remarks

Format: double

#### `Readonly` is_investing_in_eu_taxonomy_aligned_fossil_gas_activities

```ts
is_investing_in_eu_taxonomy_aligned_fossil_gas_activities: boolean
```

EET 90000: If true, the product invests in EU Taxonomy-aligned fossil gas activities.

#### `Readonly` is_investing_in_eu_taxonomy_aligned_nuclear_activities

```ts
is_investing_in_eu_taxonomy_aligned_nuclear_activities: boolean
```

EET 90030: If true, the product invests in EU Taxonomy-aligned nuclear activities.

#### `Readonly` minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds

```ts
minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_excluding_sovereign_bonds: number
```

EET 90020: Minimum % — fossil gas, excluding sovereign bonds.

##### Remarks

Format: double

#### `Readonly` minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds

```ts
minimum_percentage_investments_aligned_eu_taxonomy_fossil_gas_including_sovereign_bonds: number
```

EET 90010: Minimum % aligned with EU Taxonomy for fossil gas, including sovereign bonds.

##### Remarks

Format: double

#### `Readonly` minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds

```ts
minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_excluding_sovereign_bonds: number
```

EET 90070: Minimum % — no fossil gas and nuclear, excluding sovereign bonds.

##### Remarks

Format: double

#### `Readonly` minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds

```ts
minimum_percentage_investments_aligned_eu_taxonomy_no_fossil_gas_and_nuclear_including_sovereign_bonds: number
```

EET 90060: Minimum % — no fossil gas and nuclear, including sovereign bonds.

##### Remarks

Format: double

#### `Readonly` minimum_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds

```ts
minimum_percentage_investments_aligned_eu_taxonomy_nuclear_excluding_sovereign_bonds: number
```

EET 90050: Minimum % — nuclear, excluding sovereign bonds.

##### Remarks

Format: double

#### `Readonly` minimum_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds

```ts
minimum_percentage_investments_aligned_eu_taxonomy_nuclear_including_sovereign_bonds: number
```

EET 90040: Minimum % — nuclear, including sovereign bonds.

##### Remarks

Format: double
