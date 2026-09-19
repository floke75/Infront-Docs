---
title: "priipsGetPortfoliosV1Products"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Products"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsGetPortfoliosV1Products"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1Products.html"
defines: ["priipsGetPortfoliosV1Products"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsGetPortfoliosV1Products

```ts
priipsGetPortfoliosV1Products(
    options: PriipsGetPortfoliosV1ProductsOptions,
    onSuccess?: (
        data: PriipsGetPortfoliosV1ProductsResponse[],
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsGetPortfoliosV1ProductsResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Returns all products without duplicates contained in all active portfolio of all customers
at a given timestamp.
Will be used internally at Quant to determine instruments for simulations.

Calls GET /portfolios/v1/products

#### Parameters

- options: [PriipsGetPortfoliosV1ProductsOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsOptions.md)
- `Optional` onSuccess: (data: [PriipsGetPortfoliosV1ProductsResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsResponse.md)[],
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1ProductsResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsGetPortfoliosV1ProductsResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1ProductsResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioLoader_ProductUniverse
