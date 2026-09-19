---
title: "CdapiCommonEptCosts"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptCosts"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptCosts"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptCosts.html"
defines: ["CdapiCommonEptCosts"]
member_count: 11
members: ["has_existing_performance_fees", "has_one_off_costs_portfolio_sliding_exit_cost_indicator", "incidental_costs_portfolio_performance_fees", "one_off_costs_portfolio_entry_cost", "one_off_costs_portfolio_entry_cost_acquired", "one_off_costs_portfolio_exit_cost_at_1_year", "one_off_costs_portfolio_exit_cost_at_half_rhp", "one_off_costs_portfolio_exit_cost_at_rhp", "ongoing_costs_portfolio_management_fees_and_other_administrative_or_operating_costs", "ongoing_costs_portfolio_transaction_costs", "source"]
member_groups:
  "Properties": ["has_existing_performance_fees", "has_one_off_costs_portfolio_sliding_exit_cost_indicator", "incidental_costs_portfolio_performance_fees", "one_off_costs_portfolio_entry_cost", "one_off_costs_portfolio_entry_cost_acquired", "one_off_costs_portfolio_exit_cost_at_1_year", "one_off_costs_portfolio_exit_cost_at_half_rhp", "one_off_costs_portfolio_exit_cost_at_rhp", "ongoing_costs_portfolio_management_fees_and_other_administrative_or_operating_costs", "ongoing_costs_portfolio_transaction_costs", "source"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptCostsSource"]
---

# CdapiCommonEptCosts

EptCosts holds the EPT one-off and ongoing cost data for a portfolio / fund share class.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptCosts

```ts
interface CdapiCommonEptCosts {
    has_existing_performance_fees: boolean;
    has_one_off_costs_portfolio_sliding_exit_cost_indicator: boolean;
    incidental_costs_portfolio_performance_fees: number;
    one_off_costs_portfolio_entry_cost: number;
    one_off_costs_portfolio_entry_cost_acquired: number;
    one_off_costs_portfolio_exit_cost_at_1_year: number;
    one_off_costs_portfolio_exit_cost_at_half_rhp: number;
    one_off_costs_portfolio_exit_cost_at_rhp: number;
    ongoing_costs_portfolio_management_fees_and_other_administrative_or_operating_costs: number;
    ongoing_costs_portfolio_transaction_costs: number;
    source: CdapiCommonEptCostsSource;
}
```

### Properties

#### `Readonly` has_existing_performance_fees

```ts
has_existing_performance_fees: boolean
```

EPT 03090: If true, incidental costs (performance fees) exist.

#### `Readonly` has_one_off_costs_portfolio_sliding_exit_cost_indicator

```ts
has_one_off_costs_portfolio_sliding_exit_cost_indicator: boolean
```

EPT 03050: If true, the exit cost decreases (slides) over the holding period.

#### `Readonly` incidental_costs_portfolio_performance_fees

```ts
incidental_costs_portfolio_performance_fees: number
```

EPT 03095: Performance fee as a % of portfolio value.

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_entry_cost

```ts
one_off_costs_portfolio_entry_cost: number
```

EPT 03010: One-off entry cost at the recommended holding period (RHP).

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_entry_cost_acquired

```ts
one_off_costs_portfolio_entry_cost_acquired: number
```

EPT 03015: One-off entry cost for acquired (existing) positions.

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_exit_cost_at_1_year

```ts
one_off_costs_portfolio_exit_cost_at_1_year: number
```

EPT 03030: One-off exit cost if held for 1 year only.

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_exit_cost_at_half_rhp

```ts
one_off_costs_portfolio_exit_cost_at_half_rhp: number
```

EPT 03040: One-off exit cost at half the RHP.

##### Remarks

Format: double

#### `Readonly` one_off_costs_portfolio_exit_cost_at_rhp

```ts
one_off_costs_portfolio_exit_cost_at_rhp: number
```

EPT 03020: One-off exit cost at the end of the RHP.

##### Remarks

Format: double

#### `Readonly` ongoing_costs_portfolio_management_fees_and_other_administrative_or_operating_costs

```ts
ongoing_costs_portfolio_management_fees_and_other_administrative_or_operating_costs: number
```

EPT 03060: Ongoing annual management fees and administrative/operating costs.

##### Remarks

Format: double

#### `Readonly` ongoing_costs_portfolio_transaction_costs

```ts
ongoing_costs_portfolio_transaction_costs: number
```

EPT 03080: Ongoing transaction costs incurred when buying/selling underlying assets.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiCommonEptCostsSource
```

##### Remarks

Format: enum
