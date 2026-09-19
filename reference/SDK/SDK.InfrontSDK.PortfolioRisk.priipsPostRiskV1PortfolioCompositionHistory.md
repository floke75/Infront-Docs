---
title: "priipsPostRiskV1PortfolioCompositionHistory"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioCompositionHistory"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PortfolioCompositionHistory"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioCompositionHistory.html"
defines: ["priipsPostRiskV1PortfolioCompositionHistory"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PortfolioCompositionHistory

```ts
priipsPostRiskV1PortfolioCompositionHistory(
    options: PriipsPostRiskV1PortfolioCompositionHistoryOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PortfolioCompositionHistoryResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionHistoryResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioCompositionHistoryResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Evaluation of the profits and losses for each position in the given time range

Calls POST /risk/v1/portfolio-composition-history

#### Parameters

- options: [PriipsPostRiskV1PortfolioCompositionHistoryOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PortfolioCompositionHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PortfolioCompositionHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1PortfolioCompositionHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioCompositionHistoryResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_PortfolioCompositionHistory
