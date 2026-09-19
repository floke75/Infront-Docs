---
title: "PriipsDataServicesRiskvaluatorListResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorListResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorListResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorListResponse.html"
defines: ["PriipsDataServicesRiskvaluatorListResponse"]
member_count: 4
members: ["displayName", "latestVersion", "portfolioClientId", "portfolioId"]
member_groups:
  "Properties": ["displayName", "latestVersion", "portfolioClientId", "portfolioId"]
---

# PriipsDataServicesRiskvaluatorListResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ListResponse

```ts
interface PriipsDataServicesRiskvaluatorListResponse {
    displayName: string;
    latestVersion: string;
    portfolioClientId: string;
    portfolioId: string;
}
```

### Properties

#### `Readonly` displayName

```ts
displayName: string
```

The portfolio's display name.

#### `Readonly` latestVersion

```ts
latestVersion: string
```

The latest version string.

#### `Readonly` portfolioClientId

```ts
portfolioClientId: string
```

The portfolio's clientID.

#### `Readonly` portfolioId

```ts
portfolioId: string
```

The portfolio's ID (storeID).
