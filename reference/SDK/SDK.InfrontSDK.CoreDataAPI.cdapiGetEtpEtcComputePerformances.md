---
title: "cdapiGetEtpEtcComputePerformances"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtcComputePerformances"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEtpEtcComputePerformances"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtcComputePerformances.html"
defines: ["cdapiGetEtpEtcComputePerformances"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtcComputePerformancesOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEtpEtcComputePerformances

```ts
cdapiGetEtpEtcComputePerformances(
    options: CdapiGetEtpEtcComputePerformancesOptions,
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

Calls GET /etp/etc/compute/performances

#### Parameters

- options: [CdapiGetEtpEtcComputePerformancesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtcComputePerformancesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>>

#### Remarks

CDAPI Operation ID: EtcService_ComputePerformance
