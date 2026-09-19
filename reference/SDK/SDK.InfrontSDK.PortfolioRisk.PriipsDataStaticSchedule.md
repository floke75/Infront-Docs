---
title: "PriipsDataStaticSchedule"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSchedule"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticSchedule"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSchedule.html"
defines: ["PriipsDataStaticSchedule"]
member_count: 5
members: ["day", "dayType", "firstMonth", "frequency", "week"]
member_groups:
  "Properties": ["day", "dayType", "firstMonth", "frequency", "week"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticScheduleDayType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticScheduleFrequency"]
---

# PriipsDataStaticSchedule

Schedule was intended to be used to describe a schedule but it is not used in the calculation

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Schedule

```ts
interface PriipsDataStaticSchedule {
    day: number;
    dayType: PriipsDataStaticScheduleDayType;
    firstMonth: number;
    frequency: PriipsDataStaticScheduleFrequency;
    week: number;
}
```

### Properties

#### `Readonly` day

```ts
day: number
```

WeekDay 1(monday) - 7(sunday)

##### Remarks

Format: int32

#### `Readonly` dayType

```ts
dayType: PriipsDataStaticScheduleDayType
```

##### Remarks

Format: enum

#### `Readonly` firstMonth

```ts
firstMonth: number
```

##### Remarks

Format: int32

#### `Readonly` frequency

```ts
frequency: PriipsDataStaticScheduleFrequency
```

##### Remarks

Format: enum

#### `Readonly` week

```ts
week: number
```

##### Remarks

Format: int32
