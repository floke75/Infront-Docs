---
title: "cdapiGetCommonTechnicalAnalysis"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTechnicalAnalysis"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonTechnicalAnalysis"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTechnicalAnalysis.html"
defines: ["cdapiGetCommonTechnicalAnalysis"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTechnicalAnalysisOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonTechnicalAnalysis

```ts
cdapiGetCommonTechnicalAnalysis(
    options: CdapiGetCommonTechnicalAnalysisOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonTechnicalAnalysisData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiCommonTechnicalAnalysisData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonTechnicalAnalysisData>>
```

ListTechnicalAnalysis retrieves technical analysis.

Calls GET /common/technical-analysis

#### Parameters

- options: [CdapiGetCommonTechnicalAnalysisOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTechnicalAnalysisOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonTechnicalAnalysisData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonTechnicalAnalysisData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonTechnicalAnalysisData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTechnicalAnalysisData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListTechnicalAnalysis
