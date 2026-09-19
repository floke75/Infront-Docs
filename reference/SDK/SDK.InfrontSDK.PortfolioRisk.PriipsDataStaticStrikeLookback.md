---
title: "PriipsDataStaticStrikeLookback"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticStrikeLookback"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticStrikeLookback"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticStrikeLookback.html"
defines: ["PriipsDataStaticStrikeLookback"]
member_count: 5
members: ["cap", "current", "dates", "floor", "lookbackType"]
member_groups:
  "Properties": ["cap", "current", "dates", "floor", "lookbackType"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFixedStrike", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticStrikeLookbackLookbackType"]
---

# PriipsDataStaticStrikeLookback

StrikeLookback describes the period for Himalaya options when the strike level is determined in a lookback. For all underlyings
it will determine the best or worst underlying performance within the lookback period and this underlying value/lookback
value will be used as the strike in the Himalaya option.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.StrikeLookback

```ts
interface PriipsDataStaticStrikeLookback {
    cap: number;
    current: readonly PriipsDataStaticFixedStrike[];
    dates: PriipsDataStaticObservationDates;
    floor: number;
    lookbackType: PriipsDataStaticStrikeLookbackLookbackType;
}
```

### Properties

#### `Readonly` cap

```ts
cap: number
```

Cap level for the lookback value

##### Remarks

Format: double

#### `Readonly` current

```ts
current: readonly PriipsDataStaticFixedStrike[]
```

In case the calculationDate is during the strikeLookBack we need the current lookback value

#### `Readonly` dates

```ts
dates: PriipsDataStaticObservationDates
```

Dates that need to be considered for the lookback of the strike

#### `Readonly` floor

```ts
floor: number
```

Floor level for the lookback value

##### Remarks

Format: double

#### `Readonly` lookbackType

```ts
lookbackType: PriipsDataStaticStrikeLookbackLookbackType
```

Determines which type is used for the lookback, only worstOf and bestOf allowed

##### Remarks

Format: enum
