---
title: "cdapiGetCommonListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonListings.html"
defines: ["cdapiGetCommonListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonListings

```ts
cdapiGetCommonListings(
    options: CdapiGetCommonListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonListingsData>>
```

ListListings retrieves Listings.

Calls GET /common/listings

#### Parameters

- options: [CdapiGetCommonListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListListings
