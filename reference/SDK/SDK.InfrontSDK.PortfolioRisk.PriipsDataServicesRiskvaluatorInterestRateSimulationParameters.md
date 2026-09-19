---
title: "PriipsDataServicesRiskvaluatorInterestRateSimulationParameters"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorInterestRateSimulationParameters"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorInterestRateSimulationParameters"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorInterestRateSimulationParameters.html"
defines: ["PriipsDataServicesRiskvaluatorInterestRateSimulationParameters"]
member_count: 2
members: ["interestRatesPcaComponents", "pillars"]
member_groups:
  "Properties": ["interestRatesPcaComponents", "pillars"]
---

# PriipsDataServicesRiskvaluatorInterestRateSimulationParameters

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.InterestRateSimulationParameters

```ts
interface PriipsDataServicesRiskvaluatorInterestRateSimulationParameters {
    interestRatesPcaComponents: number;
    pillars: readonly number[];
}
```

### Properties

#### `Readonly` interestRatesPcaComponents

```ts
interestRatesPcaComponents: number
```

Number of PCA components for interest rates

##### Remarks

Format: int32

#### `Readonly` pillars

```ts
pillars: readonly number[]
```

Pillars used for the interpolation of the interest rate and spread curves
