---
title: "PriipsDataStaticSelectionDate"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSelectionDate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticSelectionDate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSelectionDate.html"
defines: ["PriipsDataStaticSelectionDate"]
member_count: 6
members: ["barrierLevel", "observationCap", "observationDates", "observationFloor", "observationType", "selectionDate"]
member_groups:
  "Properties": ["barrierLevel", "observationCap", "observationDates", "observationFloor", "observationType", "selectionDate"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSelectionDateObservationType"]
---

# PriipsDataStaticSelectionDate

SelectionDate is used in Cliquet and Himalaya options and have different functions for these two options

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.SelectionDate

```ts
interface PriipsDataStaticSelectionDate {
    barrierLevel: PriipsDataStaticLevel;
    observationCap: number;
    observationDates: PriipsDataStaticObservationDates;
    observationFloor: number;
    observationType: PriipsDataStaticSelectionDateObservationType;
    selectionDate: string;
}
```

### Properties

#### `Readonly` barrierLevel

```ts
barrierLevel: PriipsDataStaticLevel
```

For Cliquet it is the barrier for digital coupons (optional)

#### `Readonly` observationCap

```ts
observationCap: number
```

For Cliquet it is the local cap level, for Himalaya it is the cap on one selection date

##### Remarks

Format: double

#### `Readonly` observationDates

```ts
observationDates: PriipsDataStaticObservationDates
```

For Cliquet not relevant. For Himalaya: for Average, Max, Min

#### `Readonly` observationFloor

```ts
observationFloor: number
```

For Cliquet it is the local floor level, for Himalaya it is the floor on one selection date

##### Remarks

Format: double

#### `Readonly` observationType

```ts
observationType: PriipsDataStaticSelectionDateObservationType
```

For Cliquet it is the observation type for the barrier for digital coupons (optional)

##### Remarks

Format: enum

#### `Readonly` selectionDate

```ts
selectionDate: string
```

For Cliquet it is the observation date, for Himalaya it is the selection date
