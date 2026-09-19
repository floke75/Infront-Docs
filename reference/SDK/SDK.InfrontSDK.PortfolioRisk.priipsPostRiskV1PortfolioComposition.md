---
title: "priipsPostRiskV1PortfolioComposition"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioComposition"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PortfolioComposition"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioComposition.html"
defines: ["priipsPostRiskV1PortfolioComposition"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PortfolioComposition

```ts
priipsPostRiskV1PortfolioComposition(
    options: PriipsPostRiskV1PortfolioCompositionOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PortfolioCompositionResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Return the actual portfolio composition, evaluated with the latest market prices

Calls POST /risk/v1/portfolio-composition

#### Parameters

- options: [PriipsPostRiskV1PortfolioCompositionOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PortfolioCompositionResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PortfolioCompositionResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PortfolioCompositionResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_PortfolioComposition
