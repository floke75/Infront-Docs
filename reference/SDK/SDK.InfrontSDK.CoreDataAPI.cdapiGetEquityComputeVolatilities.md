---
title: "cdapiGetEquityComputeVolatilities"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeVolatilities"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityComputeVolatilities"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeVolatilities.html"
defines: ["cdapiGetEquityComputeVolatilities"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeVolatilitiesOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsVolatilityResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityComputeVolatilities

```ts
cdapiGetEquityComputeVolatilities(
    options: CdapiGetEquityComputeVolatilitiesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsVolatilityResult,
    >,
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsVolatilityResult,
    >,
): TypedDataRequest<
    CoreDataResponseArray<AnalyticscalculationsVolatilityResult>,
>
```

ComputeVolatility provides an on-the-fly calculation for volatility

Calls GET /equity/compute/volatilities

#### Parameters

- options: [CdapiGetEquityComputeVolatilitiesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeVolatilitiesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsVolatilityResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsVolatilityResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsVolatilityResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsVolatilityResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsVolatilityResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsVolatilityResult.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ComputeVolatility
