---
title: "EstimatesYear"
qualified_name: "SDK.InfrontSDK.EstimatesYear"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > EstimatesYear"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.EstimatesYear.html"
defines: ["EstimatesYear"]
member_count: 9
members: ["from_date", "high", "low", "mean", "median", "quarter", "report_type", "to_date", "year"]
member_groups:
  "Properties": ["from_date", "high", "low", "mean", "median", "quarter", "report_type", "to_date", "year"]
---

# EstimatesYear

Name Year is actually incorrect since this also represents quarterly data

```ts
type EstimatesYear = {
    from_date: string;
    high: number;
    low: number;
    mean: number;
    median: number;
    quarter: Quarter;
    report_type: EstimatesReportType;
    to_date: string;
    year: number;
}
```

### Properties

#### from_date

```ts
from_date: string
```

From date

#### high

```ts
high: number
```

High estimate value

#### low

```ts
low: number
```

Low estimate value

#### mean

```ts
mean: number
```

Mean estimate value

#### median

```ts
median: number
```

Median estimate value

#### quarter

```ts
quarter: Quarter
```

The quarter

#### report_type

```ts
report_type: EstimatesReportType
```

Report type, either interim or annual

#### to_date

```ts
to_date: string
```

To date

#### year

```ts
year: number
```

The year
