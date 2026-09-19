---
title: "CdapiCommonEmtCostsExAnte"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsExAnte"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtCostsExAnte"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsExAnte.html"
defines: ["CdapiCommonEmtCostsExAnte"]
member_count: 18
members: ["borrowing_costs_uk", "costs_reference_date", "distribution_fee", "gross_one_off_costs_maximum_entry_cost_non_acquired", "gross_ongoing_costs", "incidental_costs", "management_fee", "net_one_off_costs_structured_products_entry_cost_non_acquired", "one_off_costs_exit_cost_structured_products_prior_rhp", "one_off_costs_maximum_entry_cost_acquired", "one_off_costs_maximum_entry_cost_fixed_amount_italy", "one_off_costs_maximum_exit_cost_acquired", "one_off_costs_maximum_exit_cost_fixed_amount_italy", "one_off_costs_maximum_exit_cost_non_acquired", "one_off_costs_typical_exit_cost", "structured_securities_notional_reference_amount", "structured_securities_reference_price", "transaction_costs"]
member_groups:
  "Properties": ["borrowing_costs_uk", "costs_reference_date", "distribution_fee", "gross_one_off_costs_maximum_entry_cost_non_acquired", "gross_ongoing_costs", "incidental_costs", "management_fee", "net_one_off_costs_structured_products_entry_cost_non_acquired", "one_off_costs_exit_cost_structured_products_prior_rhp", "one_off_costs_maximum_entry_cost_acquired", "one_off_costs_maximum_entry_cost_fixed_amount_italy", "one_off_costs_maximum_exit_cost_acquired", "one_off_costs_maximum_exit_cost_fixed_amount_italy", "one_off_costs_maximum_exit_cost_non_acquired", "one_off_costs_typical_exit_cost", "structured_securities_notional_reference_amount", "structured_securities_reference_price", "transaction_costs"]
---

# CdapiCommonEmtCostsExAnte

ExAnte holds estimated cost disclosures before a transaction.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtCosts_ExAnte

```ts
interface CdapiCommonEmtCostsExAnte {
    borrowing_costs_uk: number;
    costs_reference_date: string;
    distribution_fee: number;
    gross_one_off_costs_maximum_entry_cost_non_acquired: number;
    gross_ongoing_costs: number;
    incidental_costs: number;
    management_fee: number;
    net_one_off_costs_structured_products_entry_cost_non_acquired: number;
    one_off_costs_exit_cost_structured_products_prior_rhp: number;
    one_off_costs_maximum_entry_cost_acquired: number;
    one_off_costs_maximum_entry_cost_fixed_amount_italy: number;
    one_off_costs_maximum_exit_cost_acquired: number;
    one_off_costs_maximum_exit_cost_fixed_amount_italy: number;
    one_off_costs_maximum_exit_cost_non_acquired: number;
    one_off_costs_typical_exit_cost: number;
    structured_securities_notional_reference_amount: number;
    structured_securities_reference_price: number;
    transaction_costs: number;
}
```

### Properties

#### `Readonly` borrowing_costs_uk

```ts
borrowing_costs_uk: number
```

EMT 07105: Borrowing costs — UK market.

##### Remarks

Format: double

#### `Readonly` costs_reference_date

```ts
costs_reference_date: string
```

EMT 07160: Reference date for these ex-ante cost figures. ISO-8601 recommended.

#### `Readonly` distribution_fee

```ts
distribution_fee: number
```

EMT 07120: Distribution fee paid to distributors.

##### Remarks

Format: double

#### `Readonly` gross_one_off_costs_maximum_entry_cost_non_acquired

```ts
gross_one_off_costs_maximum_entry_cost_non_acquired: number
```

EMT 07020: Maximum entry cost (non-acquired) — gross one-off cost.

##### Remarks

Format: double

#### `Readonly` gross_ongoing_costs

```ts
gross_ongoing_costs: number
```

EMT 07100: Gross ongoing costs — total annual charges.

##### Remarks

Format: double

#### `Readonly` incidental_costs

```ts
incidental_costs: number
```

EMT 07140: Incidental costs (e.g. performance fees).

##### Remarks

Format: double

#### `Readonly` management_fee

```ts
management_fee: number
```

EMT 07110: Annual management fee.

##### Remarks

Format: double

#### `Readonly` net_one_off_costs_structured_products_entry_cost_non_acquired

```ts
net_one_off_costs_structured_products_entry_cost_non_acquired: number
```

EMT 07025: Maximum entry cost (non-acquired) — net one-off cost for structured products.

##### Remarks

Format: double

#### `Readonly` one_off_costs_exit_cost_structured_products_prior_rhp

```ts
one_off_costs_exit_cost_structured_products_prior_rhp: number
```

EMT 07090: Exit cost for structured products redeemed prior to the recommended holding period (RHP).

##### Remarks

Format: double

#### `Readonly` one_off_costs_maximum_entry_cost_acquired

```ts
one_off_costs_maximum_entry_cost_acquired: number
```

EMT 07040: Maximum entry cost for acquired (existing) positions.

##### Remarks

Format: double

#### `Readonly` one_off_costs_maximum_entry_cost_fixed_amount_italy

```ts
one_off_costs_maximum_entry_cost_fixed_amount_italy: number
```

EMT 07030: Maximum entry cost (non-acquired) fixed amount — Italy market.

##### Remarks

Format: double

#### `Readonly` one_off_costs_maximum_exit_cost_acquired

```ts
one_off_costs_maximum_exit_cost_acquired: number
```

EMT 07070: Maximum exit cost for acquired positions.

##### Remarks

Format: double

#### `Readonly` one_off_costs_maximum_exit_cost_fixed_amount_italy

```ts
one_off_costs_maximum_exit_cost_fixed_amount_italy: number
```

EMT 07060: Maximum exit cost fixed amount — Italy market.

##### Remarks

Format: double

#### `Readonly` one_off_costs_maximum_exit_cost_non_acquired

```ts
one_off_costs_maximum_exit_cost_non_acquired: number
```

EMT 07050: Maximum exit cost (non-acquired).

##### Remarks

Format: double

#### `Readonly` one_off_costs_typical_exit_cost

```ts
one_off_costs_typical_exit_cost: number
```

EMT 07080: Typical exit cost.

##### Remarks

Format: double

#### `Readonly` structured_securities_notional_reference_amount

```ts
structured_securities_notional_reference_amount: number
```

EMT 07155: Notional reference amount for structured securities.

##### Remarks

Format: int32

#### `Readonly` structured_securities_reference_price

```ts
structured_securities_reference_price: number
```

EMT 07150: Reference price for structured securities cost calculations.

##### Remarks

Format: double

#### `Readonly` transaction_costs

```ts
transaction_costs: number
```

EMT 07130: Transaction costs incurred by the fund.

##### Remarks

Format: double
