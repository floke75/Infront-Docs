---
title: "priipsPostRiskV1PositionDistribution"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionDistribution"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PositionDistribution"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PositionDistribution.html"
defines: ["priipsPostRiskV1PositionDistribution"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PositionDistribution

```ts
priipsPostRiskV1PositionDistribution(
    options: PriipsPostRiskV1PositionDistributionOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PositionDistributionResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionDistributionResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PositionDistributionResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Return the distribution of simulated payoffs for one single position in a given portfolio

Calls POST /risk/v1/position-distribution

#### Parameters

- options: [PriipsPostRiskV1PositionDistributionOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PositionDistributionResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PositionDistributionResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PositionDistributionResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PositionDistributionResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_PositionDistribution
