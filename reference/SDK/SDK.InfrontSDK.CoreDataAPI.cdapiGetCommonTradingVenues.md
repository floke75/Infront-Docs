---
title: "cdapiGetCommonTradingVenues"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTradingVenues"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonTradingVenues"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTradingVenues.html"
defines: ["cdapiGetCommonTradingVenues"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTradingVenuesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonTradingVenues

```ts
cdapiGetCommonTradingVenues(
    options: CdapiGetCommonTradingVenuesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonTradingVenuesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonTradingVenuesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonTradingVenuesData>>
```

ListTradingVenues retrieves TradingVenues.

Calls GET /common/trading-venues

#### Parameters

- options: [CdapiGetCommonTradingVenuesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTradingVenuesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonTradingVenuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonTradingVenuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonTradingVenuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListTradingVenues
