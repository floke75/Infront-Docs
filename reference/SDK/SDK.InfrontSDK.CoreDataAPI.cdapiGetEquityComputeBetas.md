---
title: "cdapiGetEquityComputeBetas"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeBetas"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityComputeBetas"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeBetas.html"
defines: ["cdapiGetEquityComputeBetas"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeBetasOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsBetaResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityComputeBetas

```ts
cdapiGetEquityComputeBetas(
    options: CdapiGetEquityComputeBetasOptions,
    onSuccess?: CoreDataRequestSuccessCallback<AnalyticscalculationsBetaResult>,
    onError?: CoreDataRequestErrorCallback<AnalyticscalculationsBetaResult>,
): TypedDataRequest<CoreDataResponseArray<AnalyticscalculationsBetaResult>>
```

ComputeBeta provides an on-the-fly calculation for beta

Calls GET /equity/compute/betas

#### Parameters

- options: [CdapiGetEquityComputeBetasOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeBetasOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsBetaResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsBetaResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsBetaResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsBetaResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[AnalyticscalculationsBetaResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsBetaResult.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ComputeBeta
