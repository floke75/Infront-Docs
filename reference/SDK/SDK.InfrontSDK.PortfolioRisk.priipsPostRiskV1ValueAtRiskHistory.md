---
title: "priipsPostRiskV1ValueAtRiskHistory"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1ValueAtRiskHistory"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1ValueAtRiskHistory"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1ValueAtRiskHistory.html"
defines: ["priipsPostRiskV1ValueAtRiskHistory"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1ValueAtRiskHistory

```ts
priipsPostRiskV1ValueAtRiskHistory(
    options: PriipsPostRiskV1ValueAtRiskHistoryOptions,
    onSuccess?: (
        data: PriipsPostRiskV1ValueAtRiskHistoryResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1ValueAtRiskHistoryResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1ValueAtRiskHistoryResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Historical evaluation of the value at risk in a given time range

Calls POST /risk/v1/value-at-risk-history

#### Parameters

- options: [PriipsPostRiskV1ValueAtRiskHistoryOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1ValueAtRiskHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryResponse.md)[],
  response: PortfolioRiskResponse<[PriipsPostRiskV1ValueAtRiskHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsPostRiskV1ValueAtRiskHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskHistoryResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_ValueAtRiskHistory
