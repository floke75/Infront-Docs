---
title: "InputPortfolio"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.InputPortfolio"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > InputPortfolio"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.InputPortfolio.html"
defines: ["InputPortfolio"]
member_count: 5
members: ["currency", "displayName", "portfolioId", "positions", "valuationDatetime?"]
member_groups:
  "Properties": ["currency", "displayName", "portfolioId", "positions", "valuationDatetime?"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.InputPortfolioPosition", "SDK.InfrontSDK.PortfolioRisk.RiskClientInfo"]
---

# InputPortfolio

RiskPortfolio defines the portfolio information that needs to be delivered by the application.

```ts
interface InputPortfolio {
    currency: string;
    displayName: string;
    portfolioId: string | number;
    positions: InputPortfolioPosition[];
    valuationDatetime?: Date;
}
```

### Properties

#### currency

```ts
currency: string
```

iso3 string, base currency of the portfolio

#### displayName

```ts
displayName: string
```

name or description of the portfolio in its original system

#### portfolioId

```ts
portfolioId: string | number
```

id of the portfolio in its original system

see RiskClientInfo

#### positions

```ts
positions: InputPortfolioPosition[]
```

positions of the portfolio

#### `Optional` valuationDatetime

```ts
valuationDatetime?: Date
```

valuation datetime
