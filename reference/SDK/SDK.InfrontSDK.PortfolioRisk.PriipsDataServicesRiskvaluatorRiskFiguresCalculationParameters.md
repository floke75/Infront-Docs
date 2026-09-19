---
title: "PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters.html"
defines: ["PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters"]
member_count: 3
members: ["calculationMethod", "monthsOfHistory", "useProxies"]
member_groups:
  "Properties": ["calculationMethod", "monthsOfHistory", "useProxies"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskFiguresCalculationParametersCalculationMethod"]
---

# PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.RiskFiguresCalculationParameters

```ts
interface PriipsDataServicesRiskvaluatorRiskFiguresCalculationParameters {
    calculationMethod: PriipsDataServicesRiskvaluatorRiskFiguresCalculationParametersCalculationMethod;
    monthsOfHistory: number;
    useProxies: boolean;
}
```

### Properties

#### `Readonly` calculationMethod

```ts
calculationMethod: PriipsDataServicesRiskvaluatorRiskFiguresCalculationParametersCalculationMethod
```

The calculation method

##### Remarks

Format: enum

#### `Readonly` monthsOfHistory

```ts
monthsOfHistory: number
```

Number of months to be included in the history to estimate the historical risk figures

##### Remarks

Format: int32

#### `Readonly` useProxies

```ts
useProxies: boolean
```

Use proxies if the history is not enough to cover the requested months of history
