---
title: "cdapiGetBondListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondListings.html"
defines: ["cdapiGetBondListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondListings

```ts
cdapiGetBondListings(
    options: CdapiGetBondListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondListingsData>>
```

ListListings retrieves Listings that could be filtered by various
attributes.

Calls GET /bond/listings

#### Parameters

- options: [CdapiGetBondListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListingsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListListings
