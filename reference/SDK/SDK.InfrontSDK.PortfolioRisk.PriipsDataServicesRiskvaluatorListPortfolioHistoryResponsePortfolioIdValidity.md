---
title: "PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity.html"
defines: ["PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity"]
member_count: 2
members: ["fromTimestamp", "portfolioId"]
member_groups:
  "Properties": ["fromTimestamp", "portfolioId"]
---

# PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ListPortfolioHistoryResponse_PortfolioIdValidity

```ts
interface PriipsDataServicesRiskvaluatorListPortfolioHistoryResponsePortfolioIdValidity {
    fromTimestamp: string;
    portfolioId: string;
}
```

### Properties

#### `Readonly` fromTimestamp

```ts
fromTimestamp: string
```

The starting datetime of validity, it will be valid until the next portfolio from_timestamp

##### Remarks

Format: date-time

#### `Readonly` portfolioId

```ts
portfolioId: string
```

the portfolio id
