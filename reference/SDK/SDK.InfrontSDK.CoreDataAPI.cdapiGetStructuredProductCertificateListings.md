---
title: "cdapiGetStructuredProductCertificateListings"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetStructuredProductCertificateListings"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetStructuredProductCertificateListings"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetStructuredProductCertificateListings.html"
defines: ["cdapiGetStructuredProductCertificateListings"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductCertificateListingsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsCertificateData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetStructuredProductCertificateListings

```ts
cdapiGetStructuredProductCertificateListings(
    options: CdapiGetStructuredProductCertificateListingsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiStructuredProductListingsCertificateData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiStructuredProductListingsCertificateData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiStructuredProductListingsCertificateData>,
>
```

ListListings retrieves Listings for certificates.

Calls GET /structured-product/certificate/listings

#### Parameters

- options: [CdapiGetStructuredProductCertificateListingsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductCertificateListingsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiStructuredProductListingsCertificateData](./SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsCertificateData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiStructuredProductListingsCertificateData](./SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsCertificateData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiStructuredProductListingsCertificateData](./SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsCertificateData.md)>,
>

#### Remarks

CDAPI Operation ID: CertificateService_ListListings
