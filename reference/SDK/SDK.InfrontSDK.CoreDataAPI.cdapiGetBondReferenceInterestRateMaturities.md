---
title: "cdapiGetBondReferenceInterestRateMaturities"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondReferenceInterestRateMaturities"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondReferenceInterestRateMaturities"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondReferenceInterestRateMaturities.html"
defines: ["cdapiGetBondReferenceInterestRateMaturities"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondReferenceInterestRateMaturitiesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRateMaturitiesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondReferenceInterestRateMaturities

```ts
cdapiGetBondReferenceInterestRateMaturities(
    options: CdapiGetBondReferenceInterestRateMaturitiesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondReferenceInterestRateMaturitiesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondReferenceInterestRateMaturitiesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondReferenceInterestRateMaturitiesData>,
>
```

ListReferenceInterestRateMaturitiesResponse retrieves reference interest
rate maturities that could be filtered by various attributes. available for
source: EDI,WM

Calls GET /bond/reference-interest-rate-maturities

#### Parameters

- options: [CdapiGetBondReferenceInterestRateMaturitiesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondReferenceInterestRateMaturitiesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondReferenceInterestRateMaturitiesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRateMaturitiesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondReferenceInterestRateMaturitiesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRateMaturitiesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiBondReferenceInterestRateMaturitiesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRateMaturitiesData.md)>,
>

#### Remarks

CDAPI Operation ID: BondService_ListReferenceInterestRateMaturities
