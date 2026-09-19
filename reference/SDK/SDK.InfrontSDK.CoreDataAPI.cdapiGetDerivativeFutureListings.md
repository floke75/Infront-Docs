---
title: "cdapiGetDerivativeFutureListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetDerivativeFutureListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetDerivativeFutureListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetDerivativeFutureListings.html"
defines: ["cdapiGetDerivativeFutureListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetDerivativeFutureListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsFutureData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetDerivativeFutureListings

```ts
cdapiGetDerivativeFutureListings(
    options: CdapiGetDerivativeFutureListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiDerivativeListingsFutureData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiDerivativeListingsFutureData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiDerivativeListingsFutureData>,
>
```

ListListings retrieves Listings for futures.

Calls GET /derivative/future/listings

#### Parameters

- options: [CdapiGetDerivativeFutureListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetDerivativeFutureListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiDerivativeListingsFutureData](./SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsFutureData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiDerivativeListingsFutureData](./SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsFutureData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiDerivativeListingsFutureData](./SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsFutureData.md)>>

#### Remarks

CDAPI Operation ID: FutureService_ListListings
