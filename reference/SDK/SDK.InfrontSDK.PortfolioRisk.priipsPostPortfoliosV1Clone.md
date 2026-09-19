---
title: "priipsPostPortfoliosV1Clone"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Clone"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostPortfoliosV1Clone"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1Clone.html"
defines: ["priipsPostPortfoliosV1Clone"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostPortfoliosV1Clone

```ts
priipsPostPortfoliosV1Clone(
    options: PriipsPostPortfoliosV1CloneOptions,
    onSuccess?: (
        data: PriipsPostPortfoliosV1CloneResponse[],
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
    ) => void | DataRequest | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<PriipsPostPortfoliosV1CloneResponse>,
    ) => void | DataRequest | readonly DataRequest[],
): DataRequest
```

Clone an existing portfolio using a storeID, giving a "modifier" string as clone target.
The cloned repository will share its history up to this point with its copy.
Attempting to clone into a target (clientID+modifier) that already exists is an error.

Calls POST /portfolios/v1/clone

#### Parameters

- options: [PriipsPostPortfoliosV1CloneOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneOptions.md)
- `Optional` onSuccess: (data: [PriipsPostPortfoliosV1CloneResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneResponse.md)[],
  response: PortfolioRiskResponse<[PriipsPostPortfoliosV1CloneResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsPostPortfoliosV1CloneResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1CloneResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioStorer_Clone
