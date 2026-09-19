---
title: "cdapiPostFundClassificationFundTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundClassificationFundTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundClassificationFundTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundClassificationFundTypes.html"
defines: ["cdapiPostFundClassificationFundTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundClassificationFundTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundClassificationFundTypes

```ts
cdapiPostFundClassificationFundTypes(
    options: CdapiPostFundClassificationFundTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiFundClassificationFundTypesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiFundClassificationFundTypesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiFundClassificationFundTypesData>,
>
```

ListClassificationFundTypes

Calls POST /fund/classification/fund-types

#### Parameters

- options: [CdapiPostFundClassificationFundTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundClassificationFundTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundClassificationFundTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundClassificationFundTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundClassificationFundTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListClassificationFundTypes_2
