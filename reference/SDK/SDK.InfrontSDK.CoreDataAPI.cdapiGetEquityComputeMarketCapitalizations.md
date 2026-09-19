---
title: "cdapiGetEquityComputeMarketCapitalizations"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeMarketCapitalizations"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityComputeMarketCapitalizations"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputeMarketCapitalizations.html"
defines: ["cdapiGetEquityComputeMarketCapitalizations"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeMarketCapitalizationsOptions", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsMarketCapitalizationResult", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityComputeMarketCapitalizations

```ts
cdapiGetEquityComputeMarketCapitalizations(
    options: CdapiGetEquityComputeMarketCapitalizationsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsMarketCapitalizationResult,
    >,
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsMarketCapitalizationResult,
    >,
): TypedDataRequest<
    CoreDataResponseArray<AnalyticscalculationsMarketCapitalizationResult>,
>
```

ComputeMarketCapitalization provides an on-the-fly calculation for market capitalization

Calls GET /equity/compute/market-capitalizations

#### Parameters

- options: [CdapiGetEquityComputeMarketCapitalizationsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputeMarketCapitalizationsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[AnalyticscalculationsMarketCapitalizationResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsMarketCapitalizationResult.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[AnalyticscalculationsMarketCapitalizationResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsMarketCapitalizationResult.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[AnalyticscalculationsMarketCapitalizationResult](./SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsMarketCapitalizationResult.md)>,
>

#### Remarks

CDAPI Operation ID: EquityService_ComputeMarketCapitalization
