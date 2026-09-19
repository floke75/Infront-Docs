---
title: "PriipsDataServicesRiskvaluatorPortfolioRiskReport"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskReport"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioRiskReport"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskReport.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioRiskReport"]
member_count: 11
members: ["macroeconomicScenarios", "portfolioComposition", "portfolioId", "portfolioRiskFigures", "portfolioScenarios", "positionRiskFigures", "positionScatterPlot", "riskReturnContributions", "valuationDatetime", "valueAtRisk", "valueAtRiskHistory"]
member_groups:
  "Properties": ["macroeconomicScenarios", "portfolioComposition", "portfolioId", "portfolioRiskFigures", "portfolioScenarios", "positionRiskFigures", "positionScatterPlot", "riskReturnContributions", "valuationDatetime", "valueAtRisk", "valueAtRiskHistory"]
reference_count: 9
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioScenarioResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskResponse", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse"]
---

# PriipsDataServicesRiskvaluatorPortfolioRiskReport

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioRiskReport

```ts
interface PriipsDataServicesRiskvaluatorPortfolioRiskReport {
    macroeconomicScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse;
    portfolioComposition: PriipsDataServicesRiskvaluatorPortfolioCompositionResponse;
    portfolioId: string;
    portfolioRiskFigures: PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse;
    portfolioScenarios: PriipsDataServicesRiskvaluatorPortfolioScenarioResponse;
    positionRiskFigures: readonly PriipsDataServicesRiskvaluatorPositionRiskFiguresResponse[];
    positionScatterPlot: readonly PriipsDataServicesRiskvaluatorPositionScatterPlotResponse[];
    riskReturnContributions: PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse;
    valuationDatetime: string;
    valueAtRisk: PriipsDataServicesRiskvaluatorValueAtRiskResponse;
    valueAtRiskHistory: PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse;
}
```

### Properties

#### `Readonly` macroeconomicScenarios

```ts
macroeconomicScenarios: PriipsDataServicesRiskvaluatorMacroeconomicScenariosResponse
```

Macroeconomic scenarios

#### `Readonly` portfolioComposition

```ts
portfolioComposition: PriipsDataServicesRiskvaluatorPortfolioCompositionResponse
```

Portfolio composition

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Internal unique identifier of the portfolio

#### `Readonly` portfolioRiskFigures

```ts
portfolioRiskFigures: PriipsDataServicesRiskvaluatorPortfolioRiskFiguresResponse
```

The portfolio risk figures

#### `Readonly` portfolioScenarios

```ts
portfolioScenarios: PriipsDataServicesRiskvaluatorPortfolioScenarioResponse
```

Portfolio scenarios

#### `Readonly` positionRiskFigures

```ts
positionRiskFigures: readonly PriipsDataServicesRiskvaluatorPositionRiskFiguresResponse[]
```

List of the position risk figures

#### `Readonly` positionScatterPlot

```ts
positionScatterPlot: readonly PriipsDataServicesRiskvaluatorPositionScatterPlotResponse[]
```

List of the simulated position paths, stored as they appear in the portfolio

#### `Readonly` riskReturnContributions

```ts
riskReturnContributions: PriipsDataServicesRiskvaluatorRiskReturnContributionsResponse
```

Risk-return contribution

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the portfolio report valuation

##### Remarks

Format: date-time

#### `Readonly` valueAtRisk

```ts
valueAtRisk: PriipsDataServicesRiskvaluatorValueAtRiskResponse
```

Value at risk

#### `Readonly` valueAtRiskHistory

```ts
valueAtRiskHistory: PriipsDataServicesRiskvaluatorValueAtRiskHistoryResponse
```

Value at risk history
