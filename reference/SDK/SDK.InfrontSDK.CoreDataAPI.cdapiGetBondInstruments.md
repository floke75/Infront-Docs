---
title: "cdapiGetBondInstruments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInstruments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondInstruments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInstruments.html"
defines: ["cdapiGetBondInstruments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInstrumentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondInstruments

```ts
cdapiGetBondInstruments(
    options: CdapiGetBondInstrumentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondInstrumentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondInstrumentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondInstrumentsData>>
```

ListInstruments retrieves Instruments that could be filtered by various
attributes.

Calls GET /bond/instruments

#### Parameters

- options: [CdapiGetBondInstrumentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInstrumentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondInstrumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInstrumentsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListInstruments
