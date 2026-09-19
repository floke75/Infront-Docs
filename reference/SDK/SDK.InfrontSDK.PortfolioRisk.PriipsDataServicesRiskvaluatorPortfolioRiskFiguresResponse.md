---
title: "PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse"]
member_count: 5
members: ["dividendYield", "maximumDrawdown", "sharpeRatio", "sortinoRatio", "volatility"]
member_groups:
  "Properties": ["dividendYield", "maximumDrawdown", "sharpeRatio", "sortinoRatio", "volatility"]
---

# PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioRiskFiguresResponse

```ts
interface PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse {
    dividendYield: number;
    maximumDrawdown: number;
    sharpeRatio: number;
    sortinoRatio: number;
    volatility: number;
}
```

### Properties

#### `Readonly` dividendYield

```ts
dividendYield: number
```

Dividend yield

##### Remarks

Format: double

#### `Readonly` maximumDrawdown

```ts
maximumDrawdown: number
```

The maximum drawdown, computed only from historical data

##### Remarks

Format: double

#### `Readonly` sharpeRatio

```ts
sharpeRatio: number
```

Sharpe ratio

##### Remarks

Format: double

#### `Readonly` sortinoRatio

```ts
sortinoRatio: number
```

Sortino ratio

##### Remarks

Format: double

#### `Readonly` volatility

```ts
volatility: number
```

The volatility

##### Remarks

Format: double
