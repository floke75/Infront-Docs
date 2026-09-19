---
title: "cdapiGetEquityComputeRSquareds"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeRSquareds"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityComputeRSquareds"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeRSquareds.html"
defines: ["cdapiGetEquityComputeRSquareds"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeRSquaredsOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsRSquaredResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityComputeRSquareds

```ts
cdapiGetEquityComputeRSquareds(
    options: CdapiGetEquityComputeRSquaredsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsRSquaredResult,
    >,
    onError?: CoreDataRequestErrorCallback<AnalyticscalculationsRSquaredResult>,
): TypedDataRequest<
    CoreDataResponseArray<AnalyticscalculationsRSquaredResult>,
>
```

ComputeRSquared provides an on-the-fly calculation for r-squared (coefficient of determination)

Calls GET /equity/compute/r-squareds

#### Parameters

- options: [CdapiGetEquityComputeRSquaredsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeRSquaredsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsRSquaredResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsRSquaredResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsRSquaredResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsRSquaredResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsRSquaredResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsRSquaredResult.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ComputeRSquared
