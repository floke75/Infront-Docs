---
title: "cdapiGetCommodityListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommodityListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommodityListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommodityListings.html"
defines: ["cdapiGetCommodityListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommodityListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommodityListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommodityListings

```ts
cdapiGetCommodityListings(
    options: CdapiGetCommodityListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommodityListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommodityListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommodityListingsData>>
```

ListListings retrieves Listings that could be filtered by various attributes.

Calls GET /commodity/listings

#### Parameters

- options: [CdapiGetCommodityListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommodityListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommodityListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommodityListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommodityListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommodityListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommodityListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommodityListingsData.md)>>

#### Remarks

CDAPI Operation ID: CommodityService_ListListings
