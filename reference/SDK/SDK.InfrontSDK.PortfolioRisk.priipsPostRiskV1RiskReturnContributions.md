---
title: "priipsPostRiskV1RiskReturnContributions"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1RiskReturnContributions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostRiskV1RiskReturnContributions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostRiskV1RiskReturnContributions.html"
defines: ["priipsPostRiskV1RiskReturnContributions"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostRiskV1RiskReturnContributions

```ts
priipsPostRiskV1RiskReturnContributions(
    options: PriipsPostRiskV1RiskReturnContributionsOptions,
    onSuccess?: (
        data: PriipsPostRiskV1RiskReturnContributionsResponse[],
        response: PortfolioRiskResponse<
            PriipsPostRiskV1RiskReturnContributionsResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostRiskV1RiskReturnContributionsResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Return the risk and return contributions of all positions in the portfolio

Calls POST /risk/v1/risk-return-contributions

#### Parameters

- options: [PriipsPostRiskV1RiskReturnContributionsOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsOptions.md)
- `Optional` onSuccess: (data: [PriipsPostRiskV1RiskReturnContributionsResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1RiskReturnContributionsResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostRiskV1RiskReturnContributionsResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostRiskV1RiskReturnContributionsResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: RiskService_RiskReturnContributions
