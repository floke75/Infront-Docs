---
title: "cdapiGetEquityInstruments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityInstruments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityInstruments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityInstruments.html"
defines: ["cdapiGetEquityInstruments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityInstrumentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityInstruments

```ts
cdapiGetEquityInstruments(
    options: CdapiGetEquityInstrumentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityInstrumentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityInstrumentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityInstrumentsData>>
```

ListInstruments retrieves Instruments.

Calls GET /equity/instruments

#### Parameters

- options: [CdapiGetEquityInstrumentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityInstrumentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityInstrumentsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListInstruments
