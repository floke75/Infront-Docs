---
title: "ChartFields"
qualified_name: "WTK.ChartFields"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > ChartFields"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.ChartFields.html"
defines: ["ChartFields"]
member_count: 7
members: ["absChange", "currentEndDate", "currentPeriod", "currentStartDate", "lastValidDate", "lastValidTime", "pctChange"]
member_groups:
  "Properties": ["absChange", "currentEndDate", "currentPeriod", "currentStartDate", "lastValidDate", "lastValidTime", "pctChange"]
reference_count: 1
references: ["Utils.InfrontUtil.Observable"]
---

# ChartFields

Chart fields calculated for top-toolbar

```ts
interface ChartFields {
    absChange: Observable<number>;
    currentEndDate: Observable<string>;
    currentPeriod: Observable<string>;
    currentStartDate: Observable<string>;
    lastValidDate: Observable<string>;
    lastValidTime: Observable<string>;
    pctChange: Observable<number>;
}
```

### Properties

#### absChange

```ts
absChange: Observable<number>
```

absolute change of visible chart data

#### currentEndDate

```ts
currentEndDate: Observable<string>
```

current end date

#### currentPeriod

```ts
currentPeriod: Observable<string>
```

current period

#### currentStartDate

```ts
currentStartDate: Observable<string>
```

current start date

#### lastValidDate

```ts
lastValidDate: Observable<string>
```

last valid date

#### lastValidTime

```ts
lastValidTime: Observable<string>
```

last valid time

#### pctChange

```ts
pctChange: Observable<number>
```

relative change of visible chart data
