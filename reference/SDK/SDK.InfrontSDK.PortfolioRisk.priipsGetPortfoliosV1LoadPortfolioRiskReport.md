---
title: "priipsGetPortfoliosV1LoadPortfolioRiskReport"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadPortfolioRiskReport"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsGetPortfoliosV1LoadPortfolioRiskReport"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsGetPortfoliosV1LoadPortfolioRiskReport.html"
defines: ["priipsGetPortfoliosV1LoadPortfolioRiskReport"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsGetPortfoliosV1LoadPortfolioRiskReport

```ts
priipsGetPortfoliosV1LoadPortfolioRiskReport(
    options: PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions,
    onSuccess?: (
        data: PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse[],
        response: PortfolioRiskResponse<
            PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Load a risk portfolio report

Calls GET /portfolios/v1/load-portfolio-risk-report

#### Parameters

- options: [PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportOptions.md)
- `Optional` onSuccess: (data: [PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsGetPortfoliosV1LoadPortfolioRiskReportResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioLoader_LoadPortfolioRiskReport
