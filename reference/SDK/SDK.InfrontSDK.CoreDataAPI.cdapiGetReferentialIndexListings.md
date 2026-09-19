---
title: "cdapiGetReferentialIndexListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetReferentialIndexListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetReferentialIndexListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetReferentialIndexListings.html"
defines: ["cdapiGetReferentialIndexListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiReferentialListingsIndexData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetReferentialIndexListings

```ts
cdapiGetReferentialIndexListings(
    options: CdapiGetReferentialIndexListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiReferentialListingsIndexData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiReferentialListingsIndexData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiReferentialListingsIndexData>,
>
```

ListListings retrieves Listings for indices that could be filtered by various attributes.

Calls GET /referential/index/listings

#### Parameters

- options: [CdapiGetReferentialIndexListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiReferentialListingsIndexData](./SDK.InfrontSDK.CoreDataAPI.CdapiReferentialListingsIndexData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiReferentialListingsIndexData](./SDK.InfrontSDK.CoreDataAPI.CdapiReferentialListingsIndexData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiReferentialListingsIndexData](./SDK.InfrontSDK.CoreDataAPI.CdapiReferentialListingsIndexData.md)>>

#### Remarks

CDAPI Operation ID: IndexService_ListListings
