---
title: "CdapiCommonEmtCostsExPost"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsExPost"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtCostsExPost"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsExPost.html"
defines: ["CdapiCommonEmtCostsExPost"]
member_count: 15
members: ["beginning_of_reference_period", "borrowing_costs_uk", "distribution_fee", "end_of_reference_period", "gross_one_off_costs_structured_securities_entry_cost", "incidental_costs", "management_fee", "net_one_off_costs_structured_securities_entry_cost", "one_off_costs_entry_cost_acquired", "one_off_costs_structured_securities_exit_cost", "ongoing_costs", "structured_securities_notional_reference_amount", "structured_securities_ongoing_costs_accumulated", "structured_securities_reference_price", "transaction_costs"]
member_groups:
  "Properties": ["beginning_of_reference_period", "borrowing_costs_uk", "distribution_fee", "end_of_reference_period", "gross_one_off_costs_structured_securities_entry_cost", "incidental_costs", "management_fee", "net_one_off_costs_structured_securities_entry_cost", "one_off_costs_entry_cost_acquired", "one_off_costs_structured_securities_exit_cost", "ongoing_costs", "structured_securities_notional_reference_amount", "structured_securities_ongoing_costs_accumulated", "structured_securities_reference_price", "transaction_costs"]
---

# CdapiCommonEmtCostsExPost

ExPost holds historical actual cost disclosures after a holding period.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtCosts_ExPost

```ts
interface CdapiCommonEmtCostsExPost {
    beginning_of_reference_period: string;
    borrowing_costs_uk: number;
    distribution_fee: number;
    end_of_reference_period: string;
    gross_one_off_costs_structured_securities_entry_cost: number;
    incidental_costs: number;
    management_fee: number;
    net_one_off_costs_structured_securities_entry_cost: number;
    one_off_costs_entry_cost_acquired: number;
    one_off_costs_structured_securities_exit_cost: number;
    ongoing_costs: number;
    structured_securities_notional_reference_amount: number;
    structured_securities_ongoing_costs_accumulated: number;
    structured_securities_reference_price: number;
    transaction_costs: number;
}
```

### Properties

#### `Readonly` beginning_of_reference_period

```ts
beginning_of_reference_period: string
```

EMT 08090: Start date of the ex-post reference period. ISO-8601 recommended.

#### `Readonly` borrowing_costs_uk

```ts
borrowing_costs_uk: number
```

EMT 08045: Borrowing costs — UK market (actual).

##### Remarks

Format: double

#### `Readonly` distribution_fee

```ts
distribution_fee: number
```

EMT 08060: Actual distribution fee.

##### Remarks

Format: double

#### `Readonly` end_of_reference_period

```ts
end_of_reference_period: string
```

EMT 08100: End date of the ex-post reference period. ISO-8601 recommended.

#### `Readonly` gross_one_off_costs_structured_securities_entry_cost

```ts
gross_one_off_costs_structured_securities_entry_cost: number
```

EMT 08010: Gross one-off entry cost for structured securities (actual).

##### Remarks

Format: double

#### `Readonly` incidental_costs

```ts
incidental_costs: number
```

EMT 08080: Actual incidental costs.

##### Remarks

Format: double

#### `Readonly` management_fee

```ts
management_fee: number
```

EMT 08050: Actual management fee.

##### Remarks

Format: double

#### `Readonly` net_one_off_costs_structured_securities_entry_cost

```ts
net_one_off_costs_structured_securities_entry_cost: number
```

EMT 08015: Net one-off entry cost for structured securities (actual).

##### Remarks

Format: int32

#### `Readonly` one_off_costs_entry_cost_acquired

```ts
one_off_costs_entry_cost_acquired: number
```

EMT 08025: One-off entry cost for acquired positions (actual).

##### Remarks

Format: double

#### `Readonly` one_off_costs_structured_securities_exit_cost

```ts
one_off_costs_structured_securities_exit_cost: number
```

EMT 08020: One-off exit cost for structured securities (actual).

##### Remarks

Format: double

#### `Readonly` ongoing_costs

```ts
ongoing_costs: number
```

EMT 08030: Actual ongoing costs over the reference period.

##### Remarks

Format: double

#### `Readonly` structured_securities_notional_reference_amount

```ts
structured_securities_notional_reference_amount: number
```

EMT 08120: Notional reference amount for structured securities ex-post.

##### Remarks

Format: int32

#### `Readonly` structured_securities_ongoing_costs_accumulated

```ts
structured_securities_ongoing_costs_accumulated: number
```

EMT 08040: Accumulated ongoing costs for structured securities over the period.

##### Remarks

Format: double

#### `Readonly` structured_securities_reference_price

```ts
structured_securities_reference_price: number
```

EMT 08110: Reference price for structured securities ex-post calculations.

##### Remarks

Format: double

#### `Readonly` transaction_costs

```ts
transaction_costs: number
```

EMT 08070: Actual transaction costs.

##### Remarks

Format: double
