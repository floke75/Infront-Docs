---
title: "priipsGetPortfoliosV1Load"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Load"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsGetPortfoliosV1Load"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Load.html"
defines: ["priipsGetPortfoliosV1Load"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsGetPortfoliosV1Load

```ts
priipsGetPortfoliosV1Load(
    options: PriipsGetPortfoliosV1LoadOptions,
    onSuccess?: (
        data: PriipsGetPortfoliosV1LoadResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1LoadResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Loads a specific portfolio version by portfolioID (storeID).

Calls GET /portfolios/v1/load

#### Parameters

- options: [PriipsGetPortfoliosV1LoadOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadOptions.md)
- `Optional` onSuccess: (data: [PriipsGetPortfoliosV1LoadResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadResponse.md)[],
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1LoadResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1LoadResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioLoader_Load
