---
title: "PriipsDataStaticHimalaya"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHimalaya"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticHimalaya"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHimalaya.html"
defines: ["PriipsDataStaticHimalaya"]
member_count: 14
members: ["componentId", "current", "dates", "examinationType", "globalCap", "globalFloor", "lockedPerformance", "lockedUnderlyings", "lookback", "relatedBasketIds", "selectionDates", "selectionType", "strikeLevel", "weight"]
member_groups:
  "Properties": ["componentId", "current", "dates", "examinationType", "globalCap", "globalFloor", "lockedPerformance", "lockedUnderlyings", "lookback", "relatedBasketIds", "selectionDates", "selectionType", "strikeLevel", "weight"]
reference_count: 6
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFixedStrike", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHimalayaExaminationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticStrikeLookback", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSelectionDate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHimalayaSelectionType"]
---

# PriipsDataStaticHimalaya

Himalaya option selects always one underlying of its unlocked underlyings in its underlying basket and locks its performance in
each period. At maturity it then pays the arithmetic average of the locked performances.
I.e. in each period the option first examines the performances of the underlyings (calculating the underlying performance)
which is described in the examination type. Then it selects the best or worst of the examined underlyings where the type is
described in the selection type.
INTERNAL: This product component is intended for Santander but they had no time to test it. By the time Santander cancelled our
INTERNAL: contract, so Himalaya options are not used right now.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Himalaya

```ts
interface PriipsDataStaticHimalaya {
    componentId: number;
    current: readonly PriipsDataStaticFixedStrike[];
    dates: PriipsDataStaticBasicProductDates;
    examinationType: PriipsDataStaticHimalayaExaminationType;
    globalCap: number;
    globalFloor: number;
    lockedPerformance: number;
    lockedUnderlyings: readonly number[];
    lookback: PriipsDataStaticStrikeLookback;
    relatedBasketIds: readonly number[];
    selectionDates: readonly PriipsDataStaticSelectionDate[];
    selectionType: PriipsDataStaticHimalayaSelectionType;
    strikeLevel: number;
    weight: number;
}
```

### Properties

#### `Readonly` componentId

```ts
componentId: number
```

Component ID for product component

##### Remarks

Format: int32

#### `Readonly` current

```ts
current: readonly PriipsDataStaticFixedStrike[]
```

Current performances within selection period, i.e. when examinationType is WorstOf, it stores the worst of performance of
each underlying. If the examinationType is BestOf, it stores the best performance of each underlying during the current
period. If the examinationType is Average, it stores the current average performance for each underlying. For european this
field is not relevant.

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Dates of the component, finalRedemptionDate is the paymentDate

#### `Readonly` examinationType

```ts
examinationType: PriipsDataStaticHimalayaExaminationType
```

Type to calculate the underlying performance within the period, only average, worstOf, bestOf can be used, default will be
European style. e.g. if the examinationType is worstOf, the underlyingPerformance of an underlying is the minimum spot
during the period.

##### Remarks

Format: enum

#### `Readonly` globalCap

```ts
globalCap: number
```

Cap level for overall payoff at the end

##### Remarks

Format: double

#### `Readonly` globalFloor

```ts
globalFloor: number
```

Floor level for overall payoff at the end

##### Remarks

Format: double

#### `Readonly` lockedPerformance

```ts
lockedPerformance: number
```

Locked (current) average performance for the payoff

##### Remarks

Format: double

#### `Readonly` lockedUnderlyings

```ts
lockedUnderlyings: readonly number[]
```

INTERNAL: List of already locked underlyings (in case the issue date is already in the past), IQ-internal ID (aka Â»edgIDÂ«)

#### `Readonly` lookback

```ts
lookback: PriipsDataStaticStrikeLookback
```

Period to determine strikeLevel (optional). If we have no strike level, then each underlying performance is
underlyingSpot / initialReferencePrice. If we have a strikeLookback, then the underlying performance is
considered as underlyingSpot / strike.

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Corresponding underlying basket ID (for now only one basket expected)

#### `Readonly` selectionDates

```ts
selectionDates: readonly PriipsDataStaticSelectionDate[]
```

List the date at which we need to lock a new underlying

#### `Readonly` selectionType

```ts
selectionType: PriipsDataStaticHimalayaSelectionType
```

Type to describe which underlying to pick of the non-locked underlyings at each selection date.
Only worstOf or bestOf is allowed.

##### Remarks

Format: enum

#### `Readonly` strikeLevel

```ts
strikeLevel: number
```

Strike level if it has been fixed in the past, but it is not implemented because Santander only wanted to calculate the
product when it is stil in subscription

##### Remarks

Format: double

#### `Readonly` weight

```ts
weight: number
```

Payoff multiplier

##### Remarks

Format: double
