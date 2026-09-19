---
title: "AnalyticscalculationsOTFCalculation"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsOTFCalculation"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > AnalyticscalculationsOTFCalculation"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsOTFCalculation.html"
defines: ["AnalyticscalculationsOTFCalculation"]
member_count: 5
members: ["date_period_code", "frequency_code", "reference_type_code", "used_quotes_count", "value"]
member_groups:
  "Properties": ["date_period_code", "frequency_code", "reference_type_code", "used_quotes_count", "value"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsOTFCalculationDatePeriodCode", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsOTFCalculationFrequencyCode", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsOTFCalculationReferenceTypeCode"]
---

# AnalyticscalculationsOTFCalculation

#### Remarks

API Schema ID: dev.infrontfinance.analyticscalculations.OTFCalculation

```ts
interface AnalyticscalculationsOTFCalculation {
    date_period_code: AnalyticscalculationsOTFCalculationDatePeriodCode;
    frequency_code: AnalyticscalculationsOTFCalculationFrequencyCode;
    reference_type_code: AnalyticscalculationsOTFCalculationReferenceTypeCode;
    used_quotes_count: number;
    value: number;
}
```

### Properties

#### `Readonly` date_period_code

```ts
date_period_code: AnalyticscalculationsOTFCalculationDatePeriodCode
```

##### Remarks

Format: enum

#### `Readonly` frequency_code

```ts
frequency_code: AnalyticscalculationsOTFCalculationFrequencyCode
```

##### Remarks

Format: enum

#### `Readonly` reference_type_code

```ts
reference_type_code: AnalyticscalculationsOTFCalculationReferenceTypeCode
```

##### Remarks

Format: enum

#### `Readonly` used_quotes_count

```ts
used_quotes_count: number
```

##### Remarks

Format: int32

#### `Readonly` value

```ts
value: number
```

##### Remarks

Format: double
