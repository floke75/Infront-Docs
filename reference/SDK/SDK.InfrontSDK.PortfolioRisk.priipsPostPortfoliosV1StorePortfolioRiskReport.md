---
title: "priipsPostPortfoliosV1StorePortfolioRiskReport"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1StorePortfolioRiskReport"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > priipsPostPortfoliosV1StorePortfolioRiskReport"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.priipsPostPortfoliosV1StorePortfolioRiskReport.html"
defines: ["priipsPostPortfoliosV1StorePortfolioRiskReport"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StorePortfolioRiskReportOptions", "SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StorePortfolioRiskReportResponse", "SDK.InfrontSDK.DataRequest"]
---

# priipsPostPortfoliosV1StorePortfolioRiskReport

```ts
priipsPostPortfoliosV1StorePortfolioRiskReport(
    options: PriipsPostPortfoliosV1StorePortfolioRiskReportOptions,
    onSuccess?: (
        data: PriipsPostPortfoliosV1StorePortfolioRiskReportResponse[],
        response: PortfolioRiskResponse<
            PriipsPostPortfoliosV1StorePortfolioRiskReportResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
    onError?: (
        data: Error,
        response: PortfolioRiskResponse<
            PriipsPostPortfoliosV1StorePortfolioRiskReportResponse,
        >,
    ) => void
    | DataRequest
    | readonly DataRequest[],
): DataRequest
```

Store a risk portfolio report

Calls POST /portfolios/v1/store-portfolio-risk-report

#### Parameters

- options: [PriipsPostPortfoliosV1StorePortfolioRiskReportOptions](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StorePortfolioRiskReportOptions.md)
- `Optional` onSuccess: (data: [PriipsPostPortfoliosV1StorePortfolioRiskReportResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StorePortfolioRiskReportResponse.md)[],
  response: PortfolioRiskResponse<
  [PriipsPostPortfoliosV1StorePortfolioRiskReportResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StorePortfolioRiskReportResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]
- `Optional` onError: (data: Error,
  response: PortfolioRiskResponse<
  [PriipsPostPortfoliosV1StorePortfolioRiskReportResponse](./SDK.InfrontSDK.PortfolioRisk.PriipsPostPortfoliosV1StorePortfolioRiskReportResponse.md),
  >,) => void
  | [DataRequest](./SDK.InfrontSDK.DataRequest.md)
  | readonly [DataRequest](./SDK.InfrontSDK.DataRequest.md)[]

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### Remarks

PRIIPS Operation ID: PortfolioStorer_StorePortfolioRiskReport
