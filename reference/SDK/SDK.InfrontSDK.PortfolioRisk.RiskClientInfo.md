---
title: "RiskClientInfo"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.RiskClientInfo"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > RiskClientInfo"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.RiskClientInfo.html"
defines: ["RiskClientInfo"]
member_count: 3
members: ["portfolioId?", "portfolioSource", "positionId?"]
member_groups:
  "Properties": ["portfolioId?", "portfolioSource", "positionId?"]
---

# RiskClientInfo

Identifier for the client application (aka "source") which is hosting the portfolio.

```ts
interface RiskClientInfo {
    portfolioId?: string | number;
    portfolioSource: string;
    positionId?: string | number;
}
```

### Properties

#### `Optional` portfolioId

```ts
portfolioId?: string | number
```

Identifier for a portfolio inside the client application

#### portfolioSource

```ts
portfolioSource: string
```

Source of the portfolio.

This string maps to a specific risk provider which must be implemented in the client application and
provide the mapping between application's portfolioId and corresponding Risk backend portfolio.

Can be freely defined by the client application, like 'assetmax', 'wtk', 'im', ...

#### `Optional` positionId

```ts
positionId?: string | number
```

Identifier for a position inside the portfolio inside the client application
