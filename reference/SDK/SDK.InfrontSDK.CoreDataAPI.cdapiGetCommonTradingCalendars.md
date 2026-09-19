---
title: "cdapiGetCommonTradingCalendars"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTradingCalendars"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonTradingCalendars"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonTradingCalendars.html"
defines: ["cdapiGetCommonTradingCalendars"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTradingCalendarsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendarsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonTradingCalendars

```ts
cdapiGetCommonTradingCalendars(
    options: CdapiGetCommonTradingCalendarsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonTradingCalendarsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonTradingCalendarsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonTradingCalendarsData>>
```

ListTradingCalendars retrieves TradingCalendars.

Calls GET /common/trading-calendars

#### Parameters

- options: [CdapiGetCommonTradingCalendarsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonTradingCalendarsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonTradingCalendarsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendarsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonTradingCalendarsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendarsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonTradingCalendarsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendarsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListTradingCalendars
