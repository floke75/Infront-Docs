---
title: "PriipsDataStaticObservationLevelValue"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevelValue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticObservationLevelValue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevelValue.html"
defines: ["PriipsDataStaticObservationLevelValue"]
member_count: 4
members: ["idType", "observationLevel", "observationValues", "relatedBasketId"]
member_groups:
  "Properties": ["idType", "observationLevel", "observationValues", "relatedBasketId"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevelValueIdType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationValue"]
---

# PriipsDataStaticObservationLevelValue

ObservationLevelValue contains barrier information for conditional coupons

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ObservationLevelValue

```ts
interface PriipsDataStaticObservationLevelValue {
    idType: PriipsDataStaticObservationLevelValueIdType;
    observationLevel: number;
    observationValues: readonly PriipsDataStaticObservationValue[];
    relatedBasketId: number;
}
```

### Properties

#### `Readonly` idType

```ts
idType: PriipsDataStaticObservationLevelValueIdType
```

Not used

##### Remarks

Format: enum

#### `Readonly` observationLevel

```ts
observationLevel: number
```

Relative barrier level (with respect to basket initial fixing value)

##### Remarks

Format: double

#### `Readonly` observationValues

```ts
observationValues: readonly PriipsDataStaticObservationValue[]
```

In case we know initial fixings of the underlyings in the basket, the observation values
contains the absolute barrier value for each underlying in the basket

#### `Readonly` relatedBasketId

```ts
relatedBasketId: number
```

Relevant underlying basket ID

##### Remarks

Format: int32
