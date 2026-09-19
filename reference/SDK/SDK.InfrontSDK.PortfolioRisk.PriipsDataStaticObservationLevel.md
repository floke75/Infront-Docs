---
title: "PriipsDataStaticObservationLevel"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevel"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticObservationLevel"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevel.html"
defines: ["PriipsDataStaticObservationLevel"]
member_count: 5
members: ["levelHit", "observationLevelRatioRelative", "observationLevelValue", "observationType", "payoffType"]
member_groups:
  "Properties": ["levelHit", "observationLevelRatioRelative", "observationLevelValue", "observationType", "payoffType"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierHit", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevelValue", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevelObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevelPayoffType"]
---

# PriipsDataStaticObservationLevel

ObservationLevel is the barrier description for conditional coupons and conditional costs

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ObservationLevel

```ts
interface PriipsDataStaticObservationLevel {
    levelHit: readonly PriipsDataStaticBarrierHit[];
    observationLevelRatioRelative: number;
    observationLevelValue: PriipsDataStaticObservationLevelValue;
    observationType: PriipsDataStaticObservationLevelObservationType;
    payoffType: PriipsDataStaticObservationLevelPayoffType;
}
```

### Properties

#### `Readonly` levelHit

```ts
levelHit: readonly PriipsDataStaticBarrierHit[]
```

To document the barrier hits in the past. A barrier is hit when
(a) for observationType UpIn and UpOut: underlyingPrice > barrier, or
(b) for observationType DownIn and DownOut: underlyingPrice < barrier.

#### `Readonly` observationLevelRatioRelative

```ts
observationLevelRatioRelative: number
```

Not used anywhere

##### Remarks

Format: double

#### `Readonly` observationLevelValue

```ts
observationLevelValue: PriipsDataStaticObservationLevelValue
```

Contains barrier information

#### `Readonly` observationType

```ts
observationType: PriipsDataStaticObservationLevelObservationType
```

Observation type, e.g. UpIn, DownIn, UpOut, DownOut, see observationType for further information

##### Remarks

Format: enum

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticObservationLevelPayoffType
```

Payoff feature of the upper barrier with respect to the underlying (e.g. considering a multi-underlying-basket the payoff
can either be performance of the worst or the best underlying or some linear combination of the underlyings)

##### Remarks

Format: enum
