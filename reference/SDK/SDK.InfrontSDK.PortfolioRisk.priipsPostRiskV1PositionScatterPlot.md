---
title: "priipsPostRiskV1PositionScatterPlot"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionScatterPlot"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PositionScatterPlot"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionScatterPlot.html"
defines: ["priipsPostRiskV1PositionScatterPlot"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PositionScatterPlot

```ts
priipsPostRiskV1PositionScatterPlot(
    options: PriipsPostRiskV1PositionScatterPlotOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PositionScatterPlotResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionScatterPlotResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionScatterPlotResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Return the portfolio and the corresponding position values for the simulated paths to show how the two correlate

Calls POST /risk/v1/position-scatter-plot

#### Parameters

- options: [PriipsPostRiskV1PositionScatterPlotOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PositionScatterPlotResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PositionScatterPlotResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PositionScatterPlotResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionScatterPlotResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_PositionScatterPlot
