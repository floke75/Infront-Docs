---
title: "cdapiGetEquityComputePerformances"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputePerformances"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityComputePerformances"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputePerformances.html"
defines: ["cdapiGetEquityComputePerformances"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputePerformancesOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityComputePerformances

```ts
cdapiGetEquityComputePerformances(
    options: CdapiGetEquityComputePerformancesOptions,
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

Calls GET /equity/compute/performances

#### Parameters

- options: [CdapiGetEquityComputePerformancesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputePerformancesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsPerformanceResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ComputePerformance
