---
title: "cdapiGetInformationEventTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEventTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetInformationEventTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEventTypes.html"
defines: ["cdapiGetInformationEventTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetInformationEventTypes

```ts
cdapiGetInformationEventTypes(
    options: CdapiGetInformationEventTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiInformationEventTypesData>,
    onError?: CoreDataRequestErrorCallback<CdapiInformationEventTypesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiInformationEventTypesData>>
```

ListEventTypes retrieves event types.

Calls GET /information/event/types

#### Parameters

- options: [CdapiGetInformationEventTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiInformationEventTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiInformationEventTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiInformationEventTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventTypesData.md)>>

#### Remarks

CDAPI Operation ID: EventService_ListEventTypes
