---
title: "cdapiPostFundLegalTypesEurope"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundLegalTypesEurope"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundLegalTypesEurope"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundLegalTypesEurope.html"
defines: ["cdapiPostFundLegalTypesEurope"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundLegalTypesEuropeOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundLegalTypesEurope

```ts
cdapiPostFundLegalTypesEurope(
    options: CdapiPostFundLegalTypesEuropeOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundLegalTypesEuropeData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundLegalTypesEuropeData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundLegalTypesEuropeData>>
```

ListLegalTypesEurope

Calls POST /fund/legal-types-europe

#### Parameters

- options: [CdapiPostFundLegalTypesEuropeOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundLegalTypesEuropeOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundLegalTypesEuropeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundLegalTypesEuropeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundLegalTypesEuropeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListLegalTypesEurope_2
