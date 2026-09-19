---
title: "cdapiGetFundComputePerformances"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundComputePerformances"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundComputePerformances"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundComputePerformances.html"
defines: ["cdapiGetFundComputePerformances"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundComputePerformancesOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundComputePerformances

```ts
cdapiGetFundComputePerformances(
    options: CdapiGetFundComputePerformancesOptions,
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

Calls GET /fund/compute/performances

#### Parameters

- options: [CdapiGetFundComputePerformancesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundComputePerformancesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>>

#### Remarks

CDAPI Operation ID: FundService_ComputePerformance
