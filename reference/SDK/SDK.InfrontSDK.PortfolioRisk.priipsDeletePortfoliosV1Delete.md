---
title: "priipsDeletePortfoliosV1Delete"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsDeletePortfoliosV1Delete"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsDeletePortfoliosV1Delete"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsDeletePortfoliosV1Delete.html"
defines: ["priipsDeletePortfoliosV1Delete"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsDeletePortfoliosV1Delete

```ts
priipsDeletePortfoliosV1Delete(
    options: PriipsDeletePortfoliosV1DeleteOptions,
    onSuccess?: (
        data: PriipsDeletePortfoliosV1DeleteResponse[],
        response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsDeletePortfoliosV1DeleteResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Delete the portfolio by clientID. This deletes the whole version history of this portfolio.
Optionally allows only deleting one clientID+modifier combination.
TODO: Should it be possible to delete singular versions? If so, need to clarify behaviour of
List (see below) and cascading if the last version is deleted.

Calls DELETE /portfolios/v1/delete

#### Parameters

- options: [PriipsDeletePortfoliosV1DeleteOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteOptions.md)
- `Optional` onSuccess: (data: [PriipsDeletePortfoliosV1DeleteResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteResponse.md)[],
  response: PortfolioRiskResponse<[PriipsDeletePortfoliosV1DeleteResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsDeletePortfoliosV1DeleteResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsDeletePortfoliosV1DeleteResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioStorer_Delete
