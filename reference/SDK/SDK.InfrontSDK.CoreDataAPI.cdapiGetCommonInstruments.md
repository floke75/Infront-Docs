---
title: "cdapiGetCommonInstruments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonInstruments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonInstruments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonInstruments.html"
defines: ["cdapiGetCommonInstruments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonInstrumentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonInstruments

```ts
cdapiGetCommonInstruments(
    options: CdapiGetCommonInstrumentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonInstrumentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonInstrumentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonInstrumentsData>>
```

ListInstruments retrieves Instruments.

Calls GET /common/instruments

#### Parameters

- options: [CdapiGetCommonInstrumentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonInstrumentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListInstruments
