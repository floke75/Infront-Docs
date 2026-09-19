---
title: "cdapiGetEquityListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityListings.html"
defines: ["cdapiGetEquityListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityListings

```ts
cdapiGetEquityListings(
    options: CdapiGetEquityListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityListingsData>>
```

ListListings retrieves Listings.

Calls GET /equity/listings

#### Parameters

- options: [CdapiGetEquityListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityListingsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListListings
