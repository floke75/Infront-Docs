---
title: "cdapiGetStructuredProductLeverageProductListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetStructuredProductLeverageProductListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetStructuredProductLeverageProductListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetStructuredProductLeverageProductListings.html"
defines: ["cdapiGetStructuredProductLeverageProductListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsLeverageProductData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetStructuredProductLeverageProductListings

```ts
cdapiGetStructuredProductLeverageProductListings(
    options: CdapiGetStructuredProductLeverageProductListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiStructuredProductListingsLeverageProductData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiStructuredProductListingsLeverageProductData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiStructuredProductListingsLeverageProductData>,
>
```

ListListings retrieves Listings for LeverageProducts.

Calls GET /structured-product/leverage-product/listings

#### Parameters

- options: [CdapiGetStructuredProductLeverageProductListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<
  [CdapiStructuredProductListingsLeverageProductData](./SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsLeverageProductData.md),
  >
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiStructuredProductListingsLeverageProductData](./SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsLeverageProductData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiStructuredProductListingsLeverageProductData](./SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsLeverageProductData.md)>,
>

#### Remarks

CDAPI Operation ID: LeverageProductService_ListListings
