---
title: "cdapiGetBondClassificationBondTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondClassificationBondTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondClassificationBondTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondClassificationBondTypes.html"
defines: ["cdapiGetBondClassificationBondTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondClassificationBondTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondClassificationBondTypes

```ts
cdapiGetBondClassificationBondTypes(
    options: CdapiGetBondClassificationBondTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondClassificationBondTypesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondClassificationBondTypesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondClassificationBondTypesData>,
>
```

ListClassificationBondTypesResponse retrieves bond types that could be filtered by
various attributes. available for source: EDI,XID

Calls GET /bond/classification/bond-types

#### Parameters

- options: [CdapiGetBondClassificationBondTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondClassificationBondTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondClassificationBondTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondClassificationBondTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondClassificationBondTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondTypesData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListClassificationBondTypes
