---
title: "FundamentalsYear"
qualified_name: "SDK.InfrontSDK.FundamentalsYear"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > FundamentalsYear"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.FundamentalsYear.html"
defines: ["FundamentalsYear"]
member_count: 5
members: ["from_date", "report_type", "to_date", "value", "year"]
member_groups:
  "Properties": ["from_date", "report_type", "to_date", "value", "year"]
reference_count: 1
references: ["SDK.InfrontSDK.FundamentalsReportType"]
---

# FundamentalsYear

Name Year is actually incorrect since this also represents quarterly data

```ts
type FundamentalsYear = {
    from_date: string;
    report_type: FundamentalsReportType;
    to_date: string;
    value: number;
    year: number;
}
```

### Properties

#### from_date

```ts
from_date: string
```

From date

#### report_type

```ts
report_type: FundamentalsReportType
```

Report type, either interim or annual

#### to_date

```ts
to_date: string
```

To date

#### value

```ts
value: number
```

The actual value for the given Figure of the period/year

#### year

```ts
year: number
```

The year
