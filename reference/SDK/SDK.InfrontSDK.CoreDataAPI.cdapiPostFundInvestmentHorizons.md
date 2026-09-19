---
title: "cdapiPostFundInvestmentHorizons"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundInvestmentHorizons"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundInvestmentHorizons"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundInvestmentHorizons.html"
defines: ["cdapiPostFundInvestmentHorizons"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundInvestmentHorizonsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundInvestmentHorizons

```ts
cdapiPostFundInvestmentHorizons(
    options: CdapiPostFundInvestmentHorizonsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundInvestmentHorizonsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundInvestmentHorizonsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundInvestmentHorizonsData>>
```

ListInvestmentHorizons

Calls POST /fund/investment-horizons

#### Parameters

- options: [CdapiPostFundInvestmentHorizonsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundInvestmentHorizonsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundInvestmentHorizonsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundInvestmentHorizonsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundInvestmentHorizonsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListInvestmentHorizons_2
