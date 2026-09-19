---
title: "PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse.html"
defines: ["PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse"]
member_count: 4
members: ["evaluationDatetime", "expectedShortfall", "valueAtRisk", "varEquivalentVolatility"]
member_groups:
  "Properties": ["evaluationDatetime", "expectedShortfall", "valueAtRisk", "varEquivalentVolatility"]
---

# PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ValueAtRiskHistoryResponse

```ts
interface PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse {
    evaluationDatetime: readonly string[];
    expectedShortfall: readonly number[];
    valueAtRisk: readonly number[];
    varEquivalentVolatility: readonly number[];
}
```

### Properties

#### `Readonly` evaluationDatetime

```ts
evaluationDatetime: readonly string[]
```

The corresponding timestamp where the value at risk has been evaluated

#### `Readonly` expectedShortfall

```ts
expectedShortfall: readonly number[]
```

Expected shortfall

#### `Readonly` valueAtRisk

```ts
valueAtRisk: readonly number[]
```

The list of calculated values at risk

#### `Readonly` varEquivalentVolatility

```ts
varEquivalentVolatility: readonly number[]
```

Var equivalent vola
