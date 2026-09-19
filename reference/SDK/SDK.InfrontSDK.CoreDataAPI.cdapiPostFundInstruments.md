---
title: "cdapiPostFundInstruments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundInstruments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundInstruments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundInstruments.html"
defines: ["cdapiPostFundInstruments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundInstrumentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundInstruments

```ts
cdapiPostFundInstruments(
    options: CdapiPostFundInstrumentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundInstrumentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundInstrumentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundInstrumentsData>>
```

ListInstruments

Calls POST /fund/instruments

#### Parameters

- options: [CdapiPostFundInstrumentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundInstrumentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListInstruments_2
