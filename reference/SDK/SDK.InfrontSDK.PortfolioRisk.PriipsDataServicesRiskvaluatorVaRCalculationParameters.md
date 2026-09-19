---
title: "PriipsDataServicesRiskvaluatorVaRCalculationParameters"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorVaRCalculationParameters"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorVaRCalculationParameters"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorVaRCalculationParameters.html"
defines: ["PriipsDataServicesRiskvaluatorVaRCalculationParameters"]
member_count: 1
members: ["confidenceLevel"]
member_groups:
  "Properties": ["confidenceLevel"]
---

# PriipsDataServicesRiskvaluatorVaRCalculationParameters

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.VaRCalculationParameters

```ts
interface PriipsDataServicesRiskvaluatorVaRCalculationParameters {
    confidenceLevel: number;
}
```

### Properties

#### `Readonly` confidenceLevel

```ts
confidenceLevel: number
```

The confidence level in unit notation to evaluate the Value at Risk

##### Remarks

Format: double
