---
title: "priipsPostRiskV1MacroeconomicScenarios"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1MacroeconomicScenarios"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1MacroeconomicScenarios"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1MacroeconomicScenarios.html"
defines: ["priipsPostRiskV1MacroeconomicScenarios"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1MacroeconomicScenarios

```ts
priipsPostRiskV1MacroeconomicScenarios(
    options: PriipsPostRiskV1MacroeconomicScenariosOptions,
    onSuccess?: (
        data: PriipsPostRiskV1MacroeconomicScenariosResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1MacroeconomicScenariosResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1MacroeconomicScenariosResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Return the macroeconomic scenarios, where the portfolio value is generated according to stress, pessimistic,
moderate and optimistic scenarios for the global market economy, the volatility and the interest rates

Calls POST /risk/v1/macroeconomic-scenarios

#### Parameters

- options: [PriipsPostRiskV1MacroeconomicScenariosOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1MacroeconomicScenariosResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1MacroeconomicScenariosResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1MacroeconomicScenariosResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1MacroeconomicScenariosResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_MacroeconomicScenarios
