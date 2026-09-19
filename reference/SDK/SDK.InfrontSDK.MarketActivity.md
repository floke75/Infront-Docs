---
title: "MarketActivity"
qualified_name: "SDK.InfrontSDK.MarketActivity"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > MarketActivity"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.MarketActivity.html"
defines: ["MarketActivity"]
member_count: 6
members: ["down", "downPercent", "unchanged", "unchangedPercent", "up", "upPercent"]
member_groups:
  "Properties": ["down", "downPercent", "unchanged", "unchangedPercent", "up", "upPercent"]
---

# MarketActivity

```ts
interface MarketActivity {
    down: number;
    downPercent: number;
    unchanged: number;
    unchangedPercent: number;
    up: number;
    upPercent: number;
}
```

### Properties

#### down

```ts
down: number
```

Number of instruments with a negative change today

#### downPercent

```ts
downPercent: number
```

Percent of instruments with a negative change today

#### unchanged

```ts
unchanged: number
```

Number of instruments unchanged today

#### unchangedPercent

```ts
unchangedPercent: number
```

Percent of instruments unchanged today

#### up

```ts
up: number
```

Number of instruments with a positive change today

#### upPercent

```ts
upPercent: number
```

Percent of instruments with a positive change today
