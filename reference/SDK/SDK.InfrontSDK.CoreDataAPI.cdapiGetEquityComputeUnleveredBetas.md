---
title: "cdapiGetEquityComputeUnleveredBetas"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeUnleveredBetas"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityComputeUnleveredBetas"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeUnleveredBetas.html"
defines: ["cdapiGetEquityComputeUnleveredBetas"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeUnleveredBetasOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsUnleveredBetaResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityComputeUnleveredBetas

```ts
cdapiGetEquityComputeUnleveredBetas(
    options: CdapiGetEquityComputeUnleveredBetasOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsUnleveredBetaResult,
    >,
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsUnleveredBetaResult,
    >,
): TypedDataRequest<
    CoreDataResponseArray<AnalyticscalculationsUnleveredBetaResult>,
>
```

ComputeUnleveredBeta provides an on-the-fly calculation for unlevered beta

Calls GET /equity/compute/unlevered-betas

#### Parameters

- options: [CdapiGetEquityComputeUnleveredBetasOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeUnleveredBetasOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsUnleveredBetaResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsUnleveredBetaResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsUnleveredBetaResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsUnleveredBetaResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[AnalyticscalculationsUnleveredBetaResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsUnleveredBetaResult.md)>,
>

#### Remarks

CDAPI Operation ID: EquityService_ComputeUnleveredBeta
