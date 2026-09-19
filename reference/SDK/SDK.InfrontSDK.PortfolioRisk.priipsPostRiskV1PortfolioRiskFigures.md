---
title: "priipsPostRiskV1PortfolioRiskFigures"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioRiskFigures"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PortfolioRiskFigures"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioRiskFigures.html"
defines: ["priipsPostRiskV1PortfolioRiskFigures"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PortfolioRiskFigures

```ts
priipsPostRiskV1PortfolioRiskFigures(
    options: PriipsPostRiskV1PortfolioRiskFiguresOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PortfolioRiskFiguresResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioRiskFiguresResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioRiskFiguresResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Returns the risk figures aggregated for the entire portfolio based on MC simulation

Calls POST /risk/v1/portfolio-risk-figures

#### Parameters

- options: [PriipsPostRiskV1PortfolioRiskFiguresOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PortfolioRiskFiguresResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PortfolioRiskFiguresResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PortfolioRiskFiguresResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioRiskFiguresResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_SimulatePortfolioRiskFigures
