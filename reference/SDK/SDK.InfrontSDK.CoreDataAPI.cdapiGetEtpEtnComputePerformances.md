---
title: "cdapiGetEtpEtnComputePerformances"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtnComputePerformances"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEtpEtnComputePerformances"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtnComputePerformances.html"
defines: ["cdapiGetEtpEtnComputePerformances"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtnComputePerformancesOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEtpEtnComputePerformances

```ts
cdapiGetEtpEtnComputePerformances(
    options: CdapiGetEtpEtnComputePerformancesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsPerformanceResult,
    >,
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsPerformanceResult,
    >,
): TypedDataRequest<
    CoreDataResponseArray<AnalyticscalculationsPerformanceResult>,
>
```

ComputePerformance provides an on-the-fly calculation for performance values

Calls GET /etp/etn/compute/performances

#### Parameters

- options: [CdapiGetEtpEtnComputePerformancesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtnComputePerformancesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>>

#### Remarks

CDAPI Operation ID: EtnService_ComputePerformance
