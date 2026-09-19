---
title: "PriipsDataServicesRiskvaluatorPositionScatterPlotResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionScatterPlotResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotResponse.html"
defines: ["PriipsDataServicesRiskvaluatorPositionScatterPlotResponse"]
member_count: 2
members: ["portfolioValues", "positionValues"]
member_groups:
  "Properties": ["portfolioValues", "positionValues"]
---

# PriipsDataServicesRiskvaluatorPositionScatterPlotResponse

Response to prepare a scatter plot with the simulated portfolio value on the one axis and their
corresponding position on the other axis

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionScatterPlotResponse

```ts
interface PriipsDataServicesRiskvaluatorPositionScatterPlotResponse {
    portfolioValues: readonly number[];
    positionValues: readonly number[];
}
```

### Properties

#### `Readonly` portfolioValues

```ts
portfolioValues: readonly number[]
```

List of simulated portfolios values

#### `Readonly` positionValues

```ts
positionValues: readonly number[]
```

List of the corresponding simulated position values
