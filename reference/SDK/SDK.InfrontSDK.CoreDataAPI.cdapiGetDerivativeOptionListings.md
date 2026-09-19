---
title: "cdapiGetDerivativeOptionListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetDerivativeOptionListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetDerivativeOptionListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetDerivativeOptionListings.html"
defines: ["cdapiGetDerivativeOptionListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetDerivativeOptionListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsOptionData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetDerivativeOptionListings

```ts
cdapiGetDerivativeOptionListings(
    options: CdapiGetDerivativeOptionListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiDerivativeListingsOptionData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiDerivativeListingsOptionData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiDerivativeListingsOptionData>,
>
```

ListListings retrieves Listings for options.

Calls GET /derivative/option/listings

#### Parameters

- options: [CdapiGetDerivativeOptionListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetDerivativeOptionListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiDerivativeListingsOptionData](./SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsOptionData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiDerivativeListingsOptionData](./SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsOptionData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiDerivativeListingsOptionData](./SDK.InfrontSDK.CoreDataAPI.CdapiDerivativeListingsOptionData.md)>>

#### Remarks

CDAPI Operation ID: OptionService_ListListings
