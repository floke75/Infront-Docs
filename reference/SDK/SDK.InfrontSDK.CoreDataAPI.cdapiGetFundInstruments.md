---
title: "cdapiGetFundInstruments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundInstruments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundInstruments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundInstruments.html"
defines: ["cdapiGetFundInstruments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundInstrumentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundInstruments

```ts
cdapiGetFundInstruments(
    options: CdapiGetFundInstrumentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundInstrumentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundInstrumentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundInstrumentsData>>
```

ListInstruments

Calls GET /fund/instruments

#### Parameters

- options: [CdapiGetFundInstrumentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundInstrumentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListInstruments
