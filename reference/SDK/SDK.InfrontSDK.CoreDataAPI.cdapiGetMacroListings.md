---
title: "cdapiGetMacroListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetMacroListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetMacroListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetMacroListings.html"
defines: ["cdapiGetMacroListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetMacroListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetMacroListings

```ts
cdapiGetMacroListings(
    options: CdapiGetMacroListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiMacroListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiMacroListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiMacroListingsData>>
```

ListListings retrieves Listings that could be filtered by various attributes.

Calls GET /macro/listings

#### Parameters

- options: [CdapiGetMacroListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetMacroListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiMacroListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiMacroListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiMacroListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingsData.md)>>

#### Remarks

CDAPI Operation ID: MacroService_ListListings
