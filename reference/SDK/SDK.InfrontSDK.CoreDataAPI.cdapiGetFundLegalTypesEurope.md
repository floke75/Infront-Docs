---
title: "cdapiGetFundLegalTypesEurope"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundLegalTypesEurope"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundLegalTypesEurope"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundLegalTypesEurope.html"
defines: ["cdapiGetFundLegalTypesEurope"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundLegalTypesEuropeOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundLegalTypesEurope

```ts
cdapiGetFundLegalTypesEurope(
    options: CdapiGetFundLegalTypesEuropeOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundLegalTypesEuropeData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundLegalTypesEuropeData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundLegalTypesEuropeData>>
```

ListLegalTypesEurope

Calls GET /fund/legal-types-europe

#### Parameters

- options: [CdapiGetFundLegalTypesEuropeOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundLegalTypesEuropeOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundLegalTypesEuropeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundLegalTypesEuropeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundLegalTypesEuropeData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundLegalTypesEuropeData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListLegalTypesEurope
