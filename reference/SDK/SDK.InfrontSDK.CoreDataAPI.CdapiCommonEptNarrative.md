---
title: "CdapiCommonEptNarrative"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptNarrative"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptNarrative"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptNarrative.html"
defines: ["CdapiCommonEptNarrative"]
member_count: 23
members: ["capital_guarantee_early_exit_conditions", "capital_guarantee_level", "capital_guarantee_limitations", "capital_guarantee_portfolio", "cost_dependence_explanation", "description_past_interval_favourable_scenario", "description_past_interval_moderate_scenario", "description_past_interval_unfavourable_scenario", "has_capital_guarantee", "intended_target_market_retail_investor_portfolio", "investment_objective_portfolio", "is_benchmark_used_performance_calculation", "is_comprehension_alert_portfolio", "is_costs_depend_on_invested_amount", "one_off_costs_portfolio_entry_cost_description", "one_off_costs_portfolio_exit_cost_description", "ongoing_costs_portfolio_management_costs_description", "other_materially_relevant_risk_narrative_portfolio", "portfolio_performance_fees_narrative", "possible_maximum_loss_portfolio", "risk_narrative_portfolio", "source", "type_of_underlying_investment_option"]
member_groups:
  "Properties": ["capital_guarantee_early_exit_conditions", "capital_guarantee_level", "capital_guarantee_limitations", "capital_guarantee_portfolio", "cost_dependence_explanation", "description_past_interval_favourable_scenario", "description_past_interval_moderate_scenario", "description_past_interval_unfavourable_scenario", "has_capital_guarantee", "intended_target_market_retail_investor_portfolio", "investment_objective_portfolio", "is_benchmark_used_performance_calculation", "is_comprehension_alert_portfolio", "is_costs_depend_on_invested_amount", "one_off_costs_portfolio_entry_cost_description", "one_off_costs_portfolio_exit_cost_description", "ongoing_costs_portfolio_management_costs_description", "other_materially_relevant_risk_narrative_portfolio", "portfolio_performance_fees_narrative", "possible_maximum_loss_portfolio", "risk_narrative_portfolio", "source", "type_of_underlying_investment_option"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptNarrativeSource"]
---

# CdapiCommonEptNarrative

EptNarrative holds the EPT narrative text fields for a portfolio / fund share class.
Covers target market description, investment objective, risk narratives,
capital guarantee terms, and cost descriptions.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptNarrative

```ts
interface CdapiCommonEptNarrative {
    capital_guarantee_early_exit_conditions: string;
    capital_guarantee_level: number;
    capital_guarantee_limitations: string;
    capital_guarantee_portfolio: string;
    cost_dependence_explanation: string;
    description_past_interval_favourable_scenario: string;
    description_past_interval_moderate_scenario: string;
    description_past_interval_unfavourable_scenario: string;
    has_capital_guarantee: boolean;
    intended_target_market_retail_investor_portfolio: string;
    investment_objective_portfolio: string;
    is_benchmark_used_performance_calculation: boolean;
    is_comprehension_alert_portfolio: boolean;
    is_costs_depend_on_invested_amount: boolean;
    one_off_costs_portfolio_entry_cost_description: string;
    one_off_costs_portfolio_exit_cost_description: string;
    ongoing_costs_portfolio_management_costs_description: string;
    other_materially_relevant_risk_narrative_portfolio: string;
    portfolio_performance_fees_narrative: string;
    possible_maximum_loss_portfolio: number;
    risk_narrative_portfolio: string;
    source: CdapiCommonEptNarrativeSource;
    type_of_underlying_investment_option: string;
}
```

### Properties

#### `Readonly` capital_guarantee_early_exit_conditions

```ts
capital_guarantee_early_exit_conditions: string
```

EPT 04083: Conditions under which the guarantee does not apply on early exit.

#### `Readonly` capital_guarantee_level

```ts
capital_guarantee_level: number
```

EPT 04081: Capital guarantee level as a % of invested amount.

##### Remarks

Format: double

#### `Readonly` capital_guarantee_limitations

```ts
capital_guarantee_limitations: string
```

EPT 04082: Limitations applying to the capital guarantee.

#### `Readonly` capital_guarantee_portfolio

```ts
capital_guarantee_portfolio: string
```

EPT 04084: Free-text capital guarantee description.

#### `Readonly` cost_dependence_explanation

```ts
cost_dependence_explanation: string
```

EPT 04160: Explanation of how costs depend on the invested amount.

#### `Readonly` description_past_interval_favourable_scenario

```ts
description_past_interval_favourable_scenario: string
```

EPT 04088: Description of the past interval for the favourable performance scenario.

#### `Readonly` description_past_interval_moderate_scenario

```ts
description_past_interval_moderate_scenario: string
```

EPT 04087: Description of the past interval for the moderate performance scenario.

#### `Readonly` description_past_interval_unfavourable_scenario

```ts
description_past_interval_unfavourable_scenario: string
```

EPT 04086: Description of the past interval for the unfavourable performance scenario.

#### `Readonly` has_capital_guarantee

```ts
has_capital_guarantee: boolean
```

EPT 04080: If true, the product has a capital guarantee feature.

#### `Readonly` intended_target_market_retail_investor_portfolio

```ts
intended_target_market_retail_investor_portfolio: string
```

EPT 04030: Description of the intended retail investor target market.

#### `Readonly` investment_objective_portfolio

```ts
investment_objective_portfolio: string
```

EPT 04040: Investment objective of the portfolio.

#### `Readonly` is_benchmark_used_performance_calculation

```ts
is_benchmark_used_performance_calculation: boolean
```

EPT 04089: If true, a benchmark was used in the past performance calculation.

#### `Readonly` is_comprehension_alert_portfolio

```ts
is_comprehension_alert_portfolio: boolean
```

EPT 04020: If true, a comprehension alert applies (product is complex/requires warning).

#### `Readonly` is_costs_depend_on_invested_amount

```ts
is_costs_depend_on_invested_amount: boolean
```

EPT 04150: If true, costs depend on the amount invested.

#### `Readonly` one_off_costs_portfolio_entry_cost_description

```ts
one_off_costs_portfolio_entry_cost_description: string
```

EPT 04120: Description of one-off entry costs.

#### `Readonly` one_off_costs_portfolio_exit_cost_description

```ts
one_off_costs_portfolio_exit_cost_description: string
```

EPT 04130: Description of one-off exit costs.

#### `Readonly` ongoing_costs_portfolio_management_costs_description

```ts
ongoing_costs_portfolio_management_costs_description: string
```

EPT 04140: Description of ongoing management costs.

#### `Readonly` other_materially_relevant_risk_narrative_portfolio

```ts
other_materially_relevant_risk_narrative_portfolio: string
```

EPT 04060: Other materially relevant risk narrative.

#### `Readonly` portfolio_performance_fees_narrative

```ts
portfolio_performance_fees_narrative: string
```

EPT 04090: Narrative description of performance fees and carried interest.

#### `Readonly` possible_maximum_loss_portfolio

```ts
possible_maximum_loss_portfolio: number
```

EPT 04085: Maximum possible loss as a % of invested amount.

##### Remarks

Format: double

#### `Readonly` risk_narrative_portfolio

```ts
risk_narrative_portfolio: string
```

EPT 04050: Risk narrative — description of the main risks for the retail investor.

#### `Readonly` source

```ts
source: CdapiCommonEptNarrativeSource
```

##### Remarks

Format: enum

#### `Readonly` type_of_underlying_investment_option

```ts
type_of_underlying_investment_option: string
```

EPT 04070: Type of underlying investment option (for MOPs/ILPs).
