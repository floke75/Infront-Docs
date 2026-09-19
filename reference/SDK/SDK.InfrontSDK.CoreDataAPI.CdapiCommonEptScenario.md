---
title: "CdapiCommonEptScenario"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptScenario"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptScenario"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptScenario.html"
defines: ["CdapiCommonEptScenario"]
member_count: 32
members: ["autocall_date_favourable_scenario", "autocall_date_moderate_scenario", "autocall_date_stress_scenario", "autocall_date_unfavourable_scenario", "is_autocall_applied_favourable_scenario", "is_autocall_applied_moderate_scenario", "is_autocall_applied_stress_scenario", "is_autocall_applied_unfavourable_scenario", "is_portfolio_past_performance_disclosure_required", "past_performance_link", "past_performance_number_of_years", "portfolio_mean_observed_returns_m1", "portfolio_number_of_observed_return_m0", "portfolio_observed_excess_kurtosis", "portfolio_observed_sigma", "portfolio_observed_skewness", "portfolio_observed_stressed_volatility", "portfolio_return_favourable_scenario_1_year", "portfolio_return_favourable_scenario_half_rhp", "portfolio_return_favourable_scenario_rhp", "portfolio_return_moderate_scenario_1_year", "portfolio_return_moderate_scenario_half_rhp", "portfolio_return_moderate_scenario_rhp", "portfolio_return_stress_scenario_1_year", "portfolio_return_stress_scenario_half_rhp", "portfolio_return_stress_scenario_rhp", "portfolio_return_unfavourable_scenario_1_year", "portfolio_return_unfavourable_scenario_half_rhp", "portfolio_return_unfavourable_scenario_rhp", "previous_performance_scenarios_calculation_link", "reference_invested_amount", "source"]
member_groups:
  "Properties": ["autocall_date_favourable_scenario", "autocall_date_moderate_scenario", "autocall_date_stress_scenario", "autocall_date_unfavourable_scenario", "is_autocall_applied_favourable_scenario", "is_autocall_applied_moderate_scenario", "is_autocall_applied_stress_scenario", "is_autocall_applied_unfavourable_scenario", "is_portfolio_past_performance_disclosure_required", "past_performance_link", "past_performance_number_of_years", "portfolio_mean_observed_returns_m1", "portfolio_number_of_observed_return_m0", "portfolio_observed_excess_kurtosis", "portfolio_observed_sigma", "portfolio_observed_skewness", "portfolio_observed_stressed_volatility", "portfolio_return_favourable_scenario_1_year", "portfolio_return_favourable_scenario_half_rhp", "portfolio_return_favourable_scenario_rhp", "portfolio_return_moderate_scenario_1_year", "portfolio_return_moderate_scenario_half_rhp", "portfolio_return_moderate_scenario_rhp", "portfolio_return_stress_scenario_1_year", "portfolio_return_stress_scenario_half_rhp", "portfolio_return_stress_scenario_rhp", "portfolio_return_unfavourable_scenario_1_year", "portfolio_return_unfavourable_scenario_half_rhp", "portfolio_return_unfavourable_scenario_rhp", "previous_performance_scenarios_calculation_link", "reference_invested_amount", "source"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptScenarioSource"]
---

# CdapiCommonEptScenario

EptScenario holds the EPT performance scenario data for a portfolio / fund share class.
Scenarios show how the product might perform in unfavourable, moderate, favourable,
and stress conditions over 1 year, half the RHP, and the full RHP.
Autocall-specific fields are included for autocallable products.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptScenario

```ts
interface CdapiCommonEptScenario {
    autocall_date_favourable_scenario: string;
    autocall_date_moderate_scenario: string;
    autocall_date_stress_scenario: string;
    autocall_date_unfavourable_scenario: string;
    is_autocall_applied_favourable_scenario: boolean;
    is_autocall_applied_moderate_scenario: boolean;
    is_autocall_applied_stress_scenario: boolean;
    is_autocall_applied_unfavourable_scenario: boolean;
    is_portfolio_past_performance_disclosure_required: boolean;
    past_performance_link: string;
    past_performance_number_of_years: number;
    portfolio_mean_observed_returns_m1: number;
    portfolio_number_of_observed_return_m0: number;
    portfolio_observed_excess_kurtosis: number;
    portfolio_observed_sigma: number;
    portfolio_observed_skewness: number;
    portfolio_observed_stressed_volatility: number;
    portfolio_return_favourable_scenario_1_year: number;
    portfolio_return_favourable_scenario_half_rhp: number;
    portfolio_return_favourable_scenario_rhp: number;
    portfolio_return_moderate_scenario_1_year: number;
    portfolio_return_moderate_scenario_half_rhp: number;
    portfolio_return_moderate_scenario_rhp: number;
    portfolio_return_stress_scenario_1_year: number;
    portfolio_return_stress_scenario_half_rhp: number;
    portfolio_return_stress_scenario_rhp: number;
    portfolio_return_unfavourable_scenario_1_year: number;
    portfolio_return_unfavourable_scenario_half_rhp: number;
    portfolio_return_unfavourable_scenario_rhp: number;
    previous_performance_scenarios_calculation_link: string;
    reference_invested_amount: number;
    source: CdapiCommonEptScenarioSource;
}
```

### Properties

#### `Readonly` autocall_date_favourable_scenario

```ts
autocall_date_favourable_scenario: string
```

EPT 02095: Autocall date in the favourable scenario.

#### `Readonly` autocall_date_moderate_scenario

```ts
autocall_date_moderate_scenario: string
```

EPT 02065: Autocall date in the moderate scenario.

#### `Readonly` autocall_date_stress_scenario

```ts
autocall_date_stress_scenario: string
```

EPT 02125: Autocall date in the stress scenario.

#### `Readonly` autocall_date_unfavourable_scenario

```ts
autocall_date_unfavourable_scenario: string
```

EPT 02035: Autocall date in the unfavourable scenario. ISO-8601 recommended.

#### `Readonly` is_autocall_applied_favourable_scenario

```ts
is_autocall_applied_favourable_scenario: boolean
```

EPT 02092: If true, autocall triggered in the favourable scenario.

#### `Readonly` is_autocall_applied_moderate_scenario

```ts
is_autocall_applied_moderate_scenario: boolean
```

EPT 02062: If true, autocall triggered in the moderate scenario.

#### `Readonly` is_autocall_applied_stress_scenario

```ts
is_autocall_applied_stress_scenario: boolean
```

EPT 02122: If true, autocall triggered in the stress scenario.

#### `Readonly` is_autocall_applied_unfavourable_scenario

```ts
is_autocall_applied_unfavourable_scenario: boolean
```

EPT 02032: If true, autocall triggered in the unfavourable scenario.

#### `Readonly` is_portfolio_past_performance_disclosure_required

```ts
is_portfolio_past_performance_disclosure_required: boolean
```

EPT 02185: If true, past performance disclosure is required for this product.

#### `Readonly` past_performance_link

```ts
past_performance_link: string
```

EPT 02190: Link to past performance data.

#### `Readonly` past_performance_number_of_years

```ts
past_performance_number_of_years: number
```

EPT 02210: Number of years of past performance shown.

##### Remarks

Format: int32

#### `Readonly` portfolio_mean_observed_returns_m1

```ts
portfolio_mean_observed_returns_m1: number
```

EPT 02140: Mean of observed returns (M1) — first moment.

##### Remarks

Format: double

#### `Readonly` portfolio_number_of_observed_return_m0

```ts
portfolio_number_of_observed_return_m0: number
```

EPT 02130: Number of observed return observations (M0) used in the scenario calculation.

##### Remarks

Format: double

#### `Readonly` portfolio_observed_excess_kurtosis

```ts
portfolio_observed_excess_kurtosis: number
```

EPT 02170: Observed excess kurtosis — fourth standardised moment minus 3, measures tail risk.

##### Remarks

Format: double

#### `Readonly` portfolio_observed_sigma

```ts
portfolio_observed_sigma: number
```

EPT 02150: Observed sigma — standard deviation of returns.

##### Remarks

Format: double

#### `Readonly` portfolio_observed_skewness

```ts
portfolio_observed_skewness: number
```

EPT 02160: Observed skewness — third standardised moment, measures return asymmetry.

##### Remarks

Format: double

#### `Readonly` portfolio_observed_stressed_volatility

```ts
portfolio_observed_stressed_volatility: number
```

EPT 02180: Observed stressed volatility — VEV used for the stress scenario.

##### Remarks

Format: double

#### `Readonly` portfolio_return_favourable_scenario_1_year

```ts
portfolio_return_favourable_scenario_1_year: number
```

EPT 02070: Portfolio return — favourable scenario — 1 year.

##### Remarks

Format: double

#### `Readonly` portfolio_return_favourable_scenario_half_rhp

```ts
portfolio_return_favourable_scenario_half_rhp: number
```

EPT 02080: Portfolio return — favourable scenario — half RHP.

##### Remarks

Format: double

#### `Readonly` portfolio_return_favourable_scenario_rhp

```ts
portfolio_return_favourable_scenario_rhp: number
```

EPT 02090: Portfolio return — favourable scenario — RHP or first call date.

##### Remarks

Format: double

#### `Readonly` portfolio_return_moderate_scenario_1_year

```ts
portfolio_return_moderate_scenario_1_year: number
```

EPT 02040: Portfolio return — moderate scenario — 1 year.

##### Remarks

Format: double

#### `Readonly` portfolio_return_moderate_scenario_half_rhp

```ts
portfolio_return_moderate_scenario_half_rhp: number
```

EPT 02050: Portfolio return — moderate scenario — half RHP.

##### Remarks

Format: double

#### `Readonly` portfolio_return_moderate_scenario_rhp

```ts
portfolio_return_moderate_scenario_rhp: number
```

EPT 02060: Portfolio return — moderate scenario — RHP or first call date.

##### Remarks

Format: double

#### `Readonly` portfolio_return_stress_scenario_1_year

```ts
portfolio_return_stress_scenario_1_year: number
```

EPT 02100: Portfolio return — stress scenario — 1 year.

##### Remarks

Format: double

#### `Readonly` portfolio_return_stress_scenario_half_rhp

```ts
portfolio_return_stress_scenario_half_rhp: number
```

EPT 02110: Portfolio return — stress scenario — half RHP.

##### Remarks

Format: double

#### `Readonly` portfolio_return_stress_scenario_rhp

```ts
portfolio_return_stress_scenario_rhp: number
```

EPT 02120: Portfolio return — stress scenario — RHP or first call date.

##### Remarks

Format: double

#### `Readonly` portfolio_return_unfavourable_scenario_1_year

```ts
portfolio_return_unfavourable_scenario_1_year: number
```

EPT 02010: Portfolio return — unfavourable scenario — 1 year.

##### Remarks

Format: double

#### `Readonly` portfolio_return_unfavourable_scenario_half_rhp

```ts
portfolio_return_unfavourable_scenario_half_rhp: number
```

EPT 02020: Portfolio return — unfavourable scenario — half RHP.

##### Remarks

Format: double

#### `Readonly` portfolio_return_unfavourable_scenario_rhp

```ts
portfolio_return_unfavourable_scenario_rhp: number
```

EPT 02030: Portfolio return — unfavourable scenario — RHP or first call date.

##### Remarks

Format: double

#### `Readonly` previous_performance_scenarios_calculation_link

```ts
previous_performance_scenarios_calculation_link: string
```

EPT 02200: Link to previous performance scenario calculations.

#### `Readonly` reference_invested_amount

```ts
reference_invested_amount: number
```

EPT 02220: Reference invested amount used in the scenario calculations.

##### Remarks

Format: int32

#### `Readonly` source

```ts
source: CdapiCommonEptScenarioSource
```

##### Remarks

Format: enum
