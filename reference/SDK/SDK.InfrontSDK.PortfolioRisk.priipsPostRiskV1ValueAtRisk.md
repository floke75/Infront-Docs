---
title: "priipsPostRiskV1ValueAtRisk"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1ValueAtRisk"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1ValueAtRisk"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1ValueAtRisk.html"
defines: ["priipsPostRiskV1ValueAtRisk"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1ValueAtRisk

```ts
priipsPostRiskV1ValueAtRisk(
    options: PriipsPostRiskV1ValueAtRiskOptions,
    onSuccess?: (
        data: PriipsPostRiskV1ValueAtRiskResponse[],
        response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsPostRiskV1ValueAtRiskResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Return the value at risk of the portfolio

Calls POST /risk/v1/value-at-risk

#### Parameters

- options: [PriipsPostRiskV1ValueAtRiskOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1ValueAtRiskResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskResponse.md)[],
  response: PortfolioRiskResponse<[PriipsPostRiskV1ValueAtRiskResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsPostRiskV1ValueAtRiskResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1ValueAtRiskResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_ValueAtRisk
