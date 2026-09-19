---
title: "RiskListPortfolio"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.RiskListPortfolio"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > RiskListPortfolio"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.RiskListPortfolio.html"
defines: ["RiskListPortfolio"]
member_count: 4
members: ["displayName?", "latestVersion?", "portfolioId", "riskStoreId"]
member_groups:
  "Properties": ["displayName?", "latestVersion?", "portfolioId", "riskStoreId"]
---

# RiskListPortfolio

```ts
interface RiskListPortfolio {
    displayName?: string;
    latestVersion?: string;
    portfolioId: string;
    riskStoreId: string;
}
```

### Properties

#### `Optional` ` Readonly`displayName

```ts
displayName?: string
```

portfolio name as stored from the client application

#### `Optional` ` Readonly`latestVersion

```ts
latestVersion?: string
```

latest version

#### `Readonly` portfolioId

```ts
portfolioId: string
```

"portfolioId" used in client application

#### `Readonly` riskStoreId

```ts
riskStoreId: string
```

"portfolioId" used in iq risk backend / store
