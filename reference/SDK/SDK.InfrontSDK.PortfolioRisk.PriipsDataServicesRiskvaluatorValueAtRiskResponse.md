---
title: "PriipsDataServicesRiskvaluatorValueAtRiskResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorValueAtRiskResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskResponse.html"
defines: ["PriipsDataServicesRiskvaluatorValueAtRiskResponse"]
member_count: 3
members: ["expectedShortfall", "valueAtRisk", "varEquivalentVolatility"]
member_groups:
  "Properties": ["expectedShortfall", "valueAtRisk", "varEquivalentVolatility"]
---

# PriipsDataServicesRiskvaluatorValueAtRiskResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ValueAtRiskResponse

```ts
interface PriipsDataServicesRiskvaluatorValueAtRiskResponse {
    expectedShortfall: number;
    valueAtRisk: number;
    varEquivalentVolatility: number;
}
```

### Properties

#### `Readonly` expectedShortfall

```ts
expectedShortfall: number
```

The expected shortfall

##### Remarks

Format: double

#### `Readonly` valueAtRisk

```ts
valueAtRisk: number
```

The value at risk

##### Remarks

Format: double

#### `Readonly` varEquivalentVolatility

```ts
varEquivalentVolatility: number
```

The var equivalent vola

##### Remarks

Format: double
