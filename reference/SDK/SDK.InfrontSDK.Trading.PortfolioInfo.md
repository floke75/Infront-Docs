---
title: "PortfolioInfo"
qualified_name: "SDK.InfrontSDK.Trading.PortfolioInfo"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > PortfolioInfo"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PortfolioInfo.html"
defines: ["PortfolioInfo"]
member_count: 4
members: ["description", "displayName", "name", "portfolioType"]
member_groups:
  "Properties": ["description", "displayName", "name", "portfolioType"]
---

# PortfolioInfo

Output interface containing details of a portfolio name and type.
Sent as an array of PortfolioInfo items when the available portfolios changes.

```ts
interface PortfolioInfo {
    description: string;
    displayName: string;
    name: string;
    portfolioType: string;
}
```

### Properties

#### description

```ts
description: string
```

Additional description of the portfolio.

#### displayName

```ts
displayName: string
```

Descriptive name of the portfolio combining the name and the description.

#### name

```ts
name: string
```

The id of the portfolio.

#### portfolioType

```ts
portfolioType: string
```

The type of the portfolio. Should be "Equity" for tradable equity portfolios.
