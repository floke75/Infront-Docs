---
title: "PriipsDataServicesRiskvaluatorPositionScatterPlotRequest"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionScatterPlotRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotRequest.html"
defines: ["PriipsDataServicesRiskvaluatorPositionScatterPlotRequest"]
member_count: 3
members: ["numberOfPoints", "position", "valuationDatetime"]
member_groups:
  "Properties": ["numberOfPoints", "position", "valuationDatetime"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioPositionID", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions"]
---

# PriipsDataServicesRiskvaluatorPositionScatterPlotRequest

Request to prepare a scatter plot with the simulated portfolio value on the one axis and their
corresponding position on the other axis

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionScatterPlotRequest

```ts
interface PriipsDataServicesRiskvaluatorPositionScatterPlotRequest {
    numberOfPoints: number;
    position: PriipsDataServicesRiskvaluatorPortfolioPositionID;
    valuationDatetime: string;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionScatterPlotRequest))

- PriipsDataServicesRiskvaluatorPositionScatterPlotRequest

  - PriipsPostRiskV1PositionScatterPlotOptions

### Properties

#### `Readonly` numberOfPoints

```ts
numberOfPoints: number
```

If less than the number of simulated scenarios, a downsampling will be applied

##### Remarks

Format: int32

#### `Readonly` position

```ts
position: PriipsDataServicesRiskvaluatorPortfolioPositionID
```

Position on the x-axis to be shown together with the portfolio value

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp for the position scatter plot valuation

##### Remarks

Format: date-time
