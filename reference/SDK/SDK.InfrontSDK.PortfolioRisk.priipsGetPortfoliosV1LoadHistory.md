---
title: "priipsGetPortfoliosV1LoadHistory"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadHistory"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsGetPortfoliosV1LoadHistory"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadHistory.html"
defines: ["priipsGetPortfoliosV1LoadHistory"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsGetPortfoliosV1LoadHistory

```ts
priipsGetPortfoliosV1LoadHistory(
    options: PriipsGetPortfoliosV1LoadHistoryOptions,
    onSuccess?: (
        data: PriipsGetPortfoliosV1LoadHistoryResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadHistoryResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Loads portfolio versions by date range.

Calls GET /portfolios/v1/load-history

#### Parameters

- options: [PriipsGetPortfoliosV1LoadHistoryOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryOptions.md)
- `Optional` onSuccess: (data: [PriipsGetPortfoliosV1LoadHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryResponse.md)[],
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1LoadHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1LoadHistoryResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadHistoryResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioLoader_LoadHistory
