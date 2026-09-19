---
title: "cdapiGetBondCouponTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondCouponTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondCouponTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondCouponTypes.html"
defines: ["cdapiGetBondCouponTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondCouponTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondListCouponTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondCouponTypes

```ts
cdapiGetBondCouponTypes(
    options: CdapiGetBondCouponTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondListCouponTypesData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondListCouponTypesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondListCouponTypesData>>
```

ListCouponTypesResponse retrieves coupon types that could be filtered by
various attributes. available for source: EDI,XID

Calls GET /bond/coupon-types

#### Parameters

- options: [CdapiGetBondCouponTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondCouponTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondListCouponTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListCouponTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondListCouponTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListCouponTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondListCouponTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListCouponTypesData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListCouponTypes
