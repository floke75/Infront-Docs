---
title: "PriipsDataStaticBestIn"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestIn"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBestIn"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestIn.html"
defines: ["PriipsDataStaticBestIn"]
member_count: 5
members: ["bestInValues", "dates", "fixingType", "period", "relatedBasketIds"]
member_groups:
  "Properties": ["bestInValues", "dates", "fixingType", "period", "relatedBasketIds"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestInValue", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestInFixingType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod"]
---

# PriipsDataStaticBestIn

BestIn is used to determine the best or worst underlying price within a time period and set it as initial fixing instead of the
usual initialReferencePrice.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.BestIn

```ts
interface PriipsDataStaticBestIn {
    bestInValues: readonly PriipsDataStaticBestInValue[];
    dates: PriipsDataStaticObservationDates;
    fixingType: PriipsDataStaticBestInFixingType;
    period: PriipsDataStaticObservationPeriod;
    relatedBasketIds: readonly number[];
}
```

### Properties

#### `Readonly` bestInValues

```ts
bestInValues: readonly PriipsDataStaticBestInValue[]
```

For each underlying a current value for the observed values in the past.

#### `Readonly` dates

```ts
dates: PriipsDataStaticObservationDates
```

List of dates which we consider to determine the best or worst underlying price. Only one of period or date must be set.

#### `Readonly` fixingType

```ts
fixingType: PriipsDataStaticBestInFixingType
```

Describes if we pick up the worst or best underlying price. Default: WorstOf.

##### Remarks

Format: enum

#### `Readonly` period

```ts
period: PriipsDataStaticObservationPeriod
```

Period in which we determine the best or worst underlying price (must not be set together with dates).

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relevant underlying basket ID (for now only one basket expected).
