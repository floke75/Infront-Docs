---
title: "CdapiCommonEptAdditionalCosts"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalCosts"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptAdditionalCosts"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalCosts.html"
defines: ["CdapiCommonEptAdditionalCosts"]
member_count: 12
members: ["first_possible_call_date", "incidental_costs_portfolio_performance_fees_riy", "one_off_costs_portfolio_entry_cost_riy", "one_off_costs_portfolio_exit_cost_riy", "ongoing_costs_other_ongoing_costs_riy", "ongoing_costs_portfolio_transaction_costs_riy", "riy_1_year", "riy_half_rhp", "riy_rhp", "total_cost_1_year", "total_cost_half_rhp", "total_cost_rhp"]
member_groups:
  "Properties": ["first_possible_call_date", "incidental_costs_portfolio_performance_fees_riy", "one_off_costs_portfolio_entry_cost_riy", "one_off_costs_portfolio_exit_cost_riy", "ongoing_costs_other_ongoing_costs_riy", "ongoing_costs_portfolio_transaction_costs_riy", "riy_1_year", "riy_half_rhp", "riy_rhp", "total_cost_1_year", "total_cost_half_rhp", "total_cost_rhp"]
---

# CdapiCommonEptAdditionalCosts

Costs holds RIY (Reduction in Yield) cost metrics — the impact of total costs
expressed as a reduction in the annual return over different time horizons.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptAdditional_Costs

```ts
interface CdapiCommonEptAdditionalCosts {
    first_possible_call_date: string;
    incidental_costs_portfolio_performance_fees_riy: number;
    one_off_costs_portfolio_entry_cost_riy: number;
    one_off_costs_portfolio_exit_cost_riy: number;
    ongoing_costs_other_ongoing_costs_riy: number;
    ongoing_costs_portfolio_transaction_costs_riy: number;
    riy_1_year: number;
    riy_half_rhp: number;
    riy_rhp: number;
    total_cost_1_year: number;
    total_cost_half_rhp: number;
    total_cost_rhp: number;
}
```

### Properties

#### `Readonly` first_possible_call_date

```ts
first_possible_call_date: string
```

EPT 07005: First possible call date for autocallable products. ISO-8601 recommended.

#### `Readonly` incidental_costs_portfolio_performance_fees_riy

```ts
incidental_costs_portfolio_performance_fees_riy: number
```

EPT 07110: RIY contribution from incidental costs (performance fees, carried interest).

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_entry_cost_riy

```ts
one_off_costs_portfolio_entry_cost_riy: number
```

EPT 07070: RIY contribution from one-off entry costs.

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_exit_cost_riy

```ts
one_off_costs_portfolio_exit_cost_riy: number
```

EPT 07080: RIY contribution from one-off exit costs.

##### Remarks

Format: double

#### `Readonly` ongoing_costs_other_ongoing_costs_riy

```ts
ongoing_costs_other_ongoing_costs_riy: number
```

EPT 07100: RIY contribution from other ongoing costs (management fees, admin).

##### Remarks

Format: double

#### `Readonly` ongoing_costs_portfolio_transaction_costs_riy

```ts
ongoing_costs_portfolio_transaction_costs_riy: number
```

EPT 07090: RIY contribution from ongoing transaction costs.

##### Remarks

Format: double

#### `Readonly` riy_1_year

```ts
riy_1_year: number
```

EPT 07020: RIY at 1 year or first call date — % reduction in annualised return due to costs.

##### Remarks

Format: double

#### `Readonly` riy_half_rhp

```ts
riy_half_rhp: number
```

EPT 07040: RIY at half the RHP.

##### Remarks

Format: double

#### `Readonly` riy_rhp

```ts
riy_rhp: number
```

EPT 07060: RIY at the full RHP.

##### Remarks

Format: double

#### `Readonly` total_cost_1_year

```ts
total_cost_1_year: number
```

EPT 07010: Total cost at 1 year or first call date.

##### Remarks

Format: double

#### `Readonly` total_cost_half_rhp

```ts
total_cost_half_rhp: number
```

EPT 07030: Total cost at half the RHP.

##### Remarks

Format: double

#### `Readonly` total_cost_rhp

```ts
total_cost_rhp: number
```

EPT 07050: Total cost at the full RHP.

##### Remarks

Format: double
