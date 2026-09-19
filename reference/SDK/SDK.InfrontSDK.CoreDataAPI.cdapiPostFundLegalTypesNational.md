---
title: "cdapiPostFundLegalTypesNational"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundLegalTypesNational"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundLegalTypesNational"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundLegalTypesNational.html"
defines: ["cdapiPostFundLegalTypesNational"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundLegalTypesNationalOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundLegalTypesNational

```ts
cdapiPostFundLegalTypesNational(
    options: CdapiPostFundLegalTypesNationalOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundLegalTypesNationalData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundLegalTypesNationalData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundLegalTypesNationalData>>
```

ListLegalTypesNational

Calls POST /fund/legal-types-national

#### Parameters

- options: [CdapiPostFundLegalTypesNationalOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundLegalTypesNationalOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundLegalTypesNationalData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundLegalTypesNationalData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundLegalTypesNationalData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListLegalTypesNational_2
