---
title: "priipsPostRiskV1PositionRiskFigures"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionRiskFigures"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PositionRiskFigures"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionRiskFigures.html"
defines: ["priipsPostRiskV1PositionRiskFigures"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PositionRiskFigures

```ts
priipsPostRiskV1PositionRiskFigures(
    options: PriipsPostRiskV1PositionRiskFiguresOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PositionRiskFiguresResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionRiskFiguresResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionRiskFiguresResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Return risk figures for the given portfolio position. The nature of the figures is decided
by the risk service and can differ by asset type.

Calls POST /risk/v1/position-risk-figures

#### Parameters

- options: [PriipsPostRiskV1PositionRiskFiguresOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PositionRiskFiguresResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PositionRiskFiguresResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PositionRiskFiguresResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionRiskFiguresResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_PositionRiskFigures
