---
title: "CdapiCommonMifidCost"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonMifidCost"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonMifidCost"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonMifidCost.html"
defines: ["CdapiCommonMifidCost"]
member_count: 23
members: ["_meta", "entry_costs", "exit_costs", "has_performance_fee", "has_swing_pricing", "issuer_estimated_value", "max_exit_costs_reference_value", "maximum_exit_costs", "min_exit_costs_percent_sign", "min_exit_costs_reference_value", "ongoing_costs", "ongoing_costs_date", "ongoing_incremental_costs", "performance", "source", "total_costs_event_related", "total_costs_from_date", "total_costs_per_nav", "total_costs_per_year", "total_costs_running", "total_costs_to_date", "total_costs_transaction", "transaction_costs"]
member_groups:
  "Properties": ["_meta", "entry_costs", "exit_costs", "has_performance_fee", "has_swing_pricing", "issuer_estimated_value", "max_exit_costs_reference_value", "maximum_exit_costs", "min_exit_costs_percent_sign", "min_exit_costs_reference_value", "ongoing_costs", "ongoing_costs_date", "ongoing_incremental_costs", "performance", "source", "total_costs_event_related", "total_costs_from_date", "total_costs_per_nav", "total_costs_per_year", "total_costs_running", "total_costs_to_date", "total_costs_transaction", "transaction_costs"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonMifidCostSource"]
---

# CdapiCommonMifidCost

MifidCost holds MiFID II cost disclosure data for a financial instrument,
as required under PRIIPs/MiFID II regulations. Source: WM.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.MifidCost

```ts
interface CdapiCommonMifidCost {
    _meta: BasedefEntityMeta;
    entry_costs: number;
    exit_costs: number;
    has_performance_fee: boolean;
    has_swing_pricing: boolean;
    issuer_estimated_value: number;
    max_exit_costs_reference_value: number;
    maximum_exit_costs: number;
    min_exit_costs_percent_sign: string;
    min_exit_costs_reference_value: number;
    ongoing_costs: number;
    ongoing_costs_date: string;
    ongoing_incremental_costs: number;
    performance: number;
    source: CdapiCommonMifidCostSource;
    total_costs_event_related: number;
    total_costs_from_date: string;
    total_costs_per_nav: number;
    total_costs_per_year: number;
    total_costs_running: number;
    total_costs_to_date: string;
    total_costs_transaction: number;
    transaction_costs: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` entry_costs

```ts
entry_costs: number
```

Entry costs charged when purchasing the product.

##### Remarks

Format: double

#### `Readonly` exit_costs

```ts
exit_costs: number
```

Exit costs as a % of the invested amount.

##### Remarks

Format: double

#### `Readonly` has_performance_fee

```ts
has_performance_fee: boolean
```

If true, the product charges a performance fee.

#### `Readonly` has_swing_pricing

```ts
has_swing_pricing: boolean
```

If true, the product applies swing pricing.

#### `Readonly` issuer_estimated_value

```ts
issuer_estimated_value: number
```

Issuer's estimated fair value as a % of the issue price.

##### Remarks

Format: double

#### `Readonly` max_exit_costs_reference_value

```ts
max_exit_costs_reference_value: number
```

##### Remarks

Format: double

#### `Readonly` maximum_exit_costs

```ts
maximum_exit_costs: number
```

Maximum exit cost as a % of the invested amount.

##### Remarks

Format: double

#### `Readonly` min_exit_costs_percent_sign

```ts
min_exit_costs_percent_sign: string
```

Percentage sign qualifier for minimum exit costs (e.g. "%" or "bp").

#### `Readonly` min_exit_costs_reference_value

```ts
min_exit_costs_reference_value: number
```

##### Remarks

Format: double

#### `Readonly` ongoing_costs

```ts
ongoing_costs: number
```

Ongoing costs — annual charges as a % of NAV.

##### Remarks

Format: double

#### `Readonly` ongoing_costs_date

```ts
ongoing_costs_date: string
```

Reference date for the ongoing costs figure. ISO-8601 recommended.

#### `Readonly` ongoing_incremental_costs

```ts
ongoing_incremental_costs: number
```

Incremental ongoing costs (e.g. costs of underlying fund layers).

##### Remarks

Format: double

#### `Readonly` performance

```ts
performance: number
```

Performance-related cost (performance fee) as a % of NAV.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiCommonMifidCostSource
```

##### Remarks

Format: enum

#### `Readonly` total_costs_event_related

```ts
total_costs_event_related: number
```

Total event-related costs (e.g. corporate actions) within the period.

##### Remarks

Format: double

#### `Readonly` total_costs_from_date

```ts
total_costs_from_date: string
```

Start date of the total cost calculation period.

#### `Readonly` total_costs_per_nav

```ts
total_costs_per_nav: number
```

Total costs as a % of NAV.

##### Remarks

Format: double

#### `Readonly` total_costs_per_year

```ts
total_costs_per_year: number
```

Total annualised costs as a % of the invested amount.

##### Remarks

Format: double

#### `Readonly` total_costs_running

```ts
total_costs_running: number
```

Total running/ongoing costs within the period.

##### Remarks

Format: double

#### `Readonly` total_costs_to_date

```ts
total_costs_to_date: string
```

End date of the total cost calculation period.

#### `Readonly` total_costs_transaction

```ts
total_costs_transaction: number
```

Total transaction-related costs within the period.

##### Remarks

Format: double

#### `Readonly` transaction_costs

```ts
transaction_costs: number
```

Transaction costs incurred by the fund.

##### Remarks

Format: double
