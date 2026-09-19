---
title: "priipsPostPortfoliosV1Store"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Store"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostPortfoliosV1Store"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Store.html"
defines: ["priipsPostPortfoliosV1Store"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostPortfoliosV1Store

```ts
priipsPostPortfoliosV1Store(
    options: PriipsPostPortfoliosV1StoreOptions,
    onSuccess?: (
        data: PriipsPostPortfoliosV1StoreResponse[],
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1StoreResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Store a portfolio.
Takes a "clientID" (req.portfolio.portfolio.clientID) and a version string, also supplied
by the client (see req.portfolio.portfolio.version for requirements), and returns a "storeID"
(subsequently also simply called portfolio ID) that is a more specific string that uniquely
identifies this portfolio under this version.
This string can be used to perform valuation operations on the portfolio.
If a portfolio with the same clientID and an older version already exists, creates a new version.
If a portfolio with the same clientID and version already exists, overwrites the given version.
Optionally allows for a modifier, stored hierarchically below the clientID, to allow individual
updating of the results of Clone.

Calls POST /portfolios/v1/store

#### Parameters

- options: [PriipsPostPortfoliosV1StoreOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreOptions.md)
- `Optional` onSuccess: (data: [PriipsPostPortfoliosV1StoreResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreResponse.md)[],
  response: PortfolioRiskResponse<[PriipsPostPortfoliosV1StoreResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsPostPortfoliosV1StoreResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StoreResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioStorer_Store
