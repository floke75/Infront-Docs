---
title: "cdapiGetFundTradingVenues"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundTradingVenues"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundTradingVenues"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundTradingVenues.html"
defines: ["cdapiGetFundTradingVenues"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundTradingVenues

```ts
cdapiGetFundTradingVenues(
    options: CdapiGetFundTradingVenuesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonTradingVenuesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonTradingVenuesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonTradingVenuesData>>
```

ListTradingVenues retrieves TradingVenues.

Calls GET /fund/trading-venues

#### Parameters

- options: [CdapiGetFundTradingVenuesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundTradingVenuesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonTradingVenuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonTradingVenuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonTradingVenuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenuesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListTradingVenues
