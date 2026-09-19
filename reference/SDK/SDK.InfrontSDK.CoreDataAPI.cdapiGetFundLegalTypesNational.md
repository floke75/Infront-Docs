---
title: "cdapiGetFundLegalTypesNational"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundLegalTypesNational"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundLegalTypesNational"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundLegalTypesNational.html"
defines: ["cdapiGetFundLegalTypesNational"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundLegalTypesNationalOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundLegalTypesNational

```ts
cdapiGetFundLegalTypesNational(
    options: CdapiGetFundLegalTypesNationalOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundLegalTypesNationalData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundLegalTypesNationalData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundLegalTypesNationalData>>
```

ListLegalTypesNational

Calls GET /fund/legal-types-national

#### Parameters

- options: [CdapiGetFundLegalTypesNationalOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundLegalTypesNationalOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundLegalTypesNationalData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundLegalTypesNationalData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundLegalTypesNationalData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesNationalData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListLegalTypesNational
