---
title: "priipsPostRiskV1PortfolioScenarios"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioScenarios"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1PortfolioScenarios"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1PortfolioScenarios.html"
defines: ["priipsPostRiskV1PortfolioScenarios"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1PortfolioScenarios

```ts
priipsPostRiskV1PortfolioScenarios(
    options: PriipsPostRiskV1PortfolioScenariosOptions,
    onSuccess?: (
        data: PriipsPostRiskV1PortfolioScenariosResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioScenariosResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1PortfolioScenariosResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Simulate the optimistic, moderate, pessimistic and stress scenarios of the portfolios

Calls POST /risk/v1/portfolio-scenarios

#### Parameters

- options: [PriipsPostRiskV1PortfolioScenariosOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1PortfolioScenariosResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosResponse.md)[],
  response: PortfolioRiskResponse<[PriipsPostRiskV1PortfolioScenariosResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<[PriipsPostRiskV1PortfolioScenariosResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1PortfolioScenariosResponse.md)>,) => void | [DataRequest](./SDK.InfrontSDK.DataRequest.md) | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_PortfolioScenarios
