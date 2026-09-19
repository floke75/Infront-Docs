---
title: "cdapiGetBondInterestRatePas"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRatePas"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondInterestRatePas"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRatePas.html"
defines: ["cdapiGetBondInterestRatePas"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePasOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePAsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondInterestRatePas

```ts
cdapiGetBondInterestRatePas(
    options: CdapiGetBondInterestRatePasOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondInterestRatePAsData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondInterestRatePAsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondInterestRatePAsData>>
```

ListInterestRatePAsResponse retrieves interest rate pa that could be
filtered by various attributes. available for source: WM

Calls GET /bond/interest-rate-pas

#### Parameters

- options: [CdapiGetBondInterestRatePasOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePasOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondInterestRatePAsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePAsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondInterestRatePAsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePAsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondInterestRatePAsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePAsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListInterestRatePAs
