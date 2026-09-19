---
title: "CdapiCommonEptAdditionalGermany"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalGermany"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptAdditionalGermany"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalGermany.html"
defines: ["CdapiCommonEptAdditionalGermany"]
member_count: 9
members: ["annualized_return_volatility", "bonds_weight", "capital_preservation_level", "duration_bonds", "german_multi_option_products_reference_date", "has_existing_capital_preservation", "has_portfolio_insurance", "multiplier_portfolio_insurance", "time_interval_maximum_loss"]
member_groups:
  "Properties": ["annualized_return_volatility", "bonds_weight", "capital_preservation_level", "duration_bonds", "german_multi_option_products_reference_date", "has_existing_capital_preservation", "has_portfolio_insurance", "multiplier_portfolio_insurance", "time_interval_maximum_loss"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary"]
---

# CdapiCommonEptAdditionalGermany

Germany holds additional fields for German multi-option products (MOPs).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptAdditional_Germany

```ts
interface CdapiCommonEptAdditionalGermany {
    annualized_return_volatility: number;
    bonds_weight: number;
    capital_preservation_level: number;
    duration_bonds: number;
    german_multi_option_products_reference_date: string;
    has_existing_capital_preservation: boolean;
    has_portfolio_insurance: boolean;
    multiplier_portfolio_insurance: string;
    time_interval_maximum_loss: CdapiCommonDictionary;
}
```

### Properties

#### `Readonly` annualized_return_volatility

```ts
annualized_return_volatility: number
```

EPT 06020: Annualised return volatility of the portfolio.

##### Remarks

Format: double

#### `Readonly` bonds_weight

```ts
bonds_weight: number
```

EPT 06010: % weighting of bonds within the MOP.

##### Remarks

Format: double

#### `Readonly` capital_preservation_level

```ts
capital_preservation_level: number
```

EPT 06050: % of capital guaranteed to be preserved at maturity.

##### Remarks

Format: double

#### `Readonly` duration_bonds

```ts
duration_bonds: number
```

EPT 06030: Weighted average duration of the bond component (years).

##### Remarks

Format: double

#### `Readonly` german_multi_option_products_reference_date

```ts
german_multi_option_products_reference_date: string
```

EPT 06005: Reference date for German MOP data. ISO-8601 recommended.

#### `Readonly` has_existing_capital_preservation

```ts
has_existing_capital_preservation: boolean
```

EPT 06040: If true, the product includes a capital preservation feature.

#### `Readonly` has_portfolio_insurance

```ts
has_portfolio_insurance: boolean
```

EPT 06070: If true, the product uses portfolio insurance (PI) techniques.

#### `Readonly` multiplier_portfolio_insurance

```ts
multiplier_portfolio_insurance: string
```

EPT 06080: Multiplier used in the portfolio insurance mechanism.

#### `Readonly` time_interval_maximum_loss

```ts
time_interval_maximum_loss: CdapiCommonDictionary
```

EPT 06060: Time interval used to calculate the maximum loss scenario.
