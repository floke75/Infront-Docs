---
title: "PortfolioValueDescription"
qualified_name: "SDK.InfrontSDK.Trading.PortfolioValueDescription"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > PortfolioValueDescription"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PortfolioValueDescription.html"
defines: ["PortfolioValueDescription"]
member_count: 3
members: ["description", "name", "valueType"]
member_groups:
  "Properties": ["description", "name", "valueType"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.PortfolioData"]
---

# PortfolioValueDescription

Output interface for portfolio values.

#### See

PortfolioData

```ts
interface PortfolioValueDescription {
    description: string;
    name: string;
    valueType: string;
}
```

### Properties

#### description

```ts
description: string
```

Description of the portfolio value

#### name

```ts
name: string
```

Name of portfolio value

#### valueType

```ts
valueType: string
```

Type of portfolio value
