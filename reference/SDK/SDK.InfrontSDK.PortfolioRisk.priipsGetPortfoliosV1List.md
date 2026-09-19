---
title: "priipsGetPortfoliosV1List"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1List"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsGetPortfoliosV1List"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1List.html"
defines: ["priipsGetPortfoliosV1List"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsGetPortfoliosV1List

```ts
priipsGetPortfoliosV1List(
    options: PriipsGetPortfoliosV1ListOptions,
    onSuccess?: (
        data: PriipsGetPortfoliosV1ListResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ListResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ListResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

List all portfolios that this request is entitled to view, returning
the portfolio clientID, the latest version string, and the portfolio ID (storeID).
TODO: Does the caller need to know if there are modifications to the portfolio? To be spec'd out.

Calls GET /portfolios/v1/list

#### Parameters

- options: [PriipsGetPortfoliosV1ListOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListOptions.md)
- `Optional` onSuccess: (data: [PriipsGetPortfoliosV1ListResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListResponse.md)[],
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1ListResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1ListResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ListResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioLoader_List
