---
title: "cdapiGetInformationEvents"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEvents"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetInformationEvents"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEvents.html"
defines: ["cdapiGetInformationEvents"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetInformationEvents

```ts
cdapiGetInformationEvents(
    options: CdapiGetInformationEventsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiInformationEventsData>,
    onError?: CoreDataRequestErrorCallback<CdapiInformationEventsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiInformationEventsData>>
```

ListEvents retrieves events.

Calls GET /information/events

#### Parameters

- options: [CdapiGetInformationEventsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiInformationEventsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiInformationEventsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiInformationEventsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventsData.md)>>

#### Remarks

CDAPI Operation ID: EventService_ListEvents
