---
title: "cdapiGetFundClassificationFundTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundClassificationFundTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundClassificationFundTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundClassificationFundTypes.html"
defines: ["cdapiGetFundClassificationFundTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundClassificationFundTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundClassificationFundTypes

```ts
cdapiGetFundClassificationFundTypes(
    options: CdapiGetFundClassificationFundTypesOptions,
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

Calls GET /fund/classification/fund-types

#### Parameters

- options: [CdapiGetFundClassificationFundTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundClassificationFundTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundClassificationFundTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundClassificationFundTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundClassificationFundTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundTypesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListClassificationFundTypes
