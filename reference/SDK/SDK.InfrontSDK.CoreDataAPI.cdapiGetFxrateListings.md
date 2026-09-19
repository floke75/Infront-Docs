---
title: "cdapiGetFxrateListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFxrateListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFxrateListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFxrateListings.html"
defines: ["cdapiGetFxrateListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFxrateListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFxrateListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFxrateListings

```ts
cdapiGetFxrateListings(
    options: CdapiGetFxrateListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFxrateListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFxrateListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFxrateListingsData>>
```

ListListings retrieves Listings that could be filtered by various
attributes.

Calls GET /fxrate/listings

#### Parameters

- options: [CdapiGetFxrateListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFxrateListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFxrateListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFxrateListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFxrateListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFxrateListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFxrateListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFxrateListingsData.md)>>

#### Remarks

CDAPI Operation ID: FxrateService_ListListings
