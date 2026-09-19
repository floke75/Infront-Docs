---
title: "cdapiGetFundInvestmentHorizons"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundInvestmentHorizons"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundInvestmentHorizons"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundInvestmentHorizons.html"
defines: ["cdapiGetFundInvestmentHorizons"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundInvestmentHorizonsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundInvestmentHorizons

```ts
cdapiGetFundInvestmentHorizons(
    options: CdapiGetFundInvestmentHorizonsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundInvestmentHorizonsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundInvestmentHorizonsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundInvestmentHorizonsData>>
```

ListInvestmentHorizons

Calls GET /fund/investment-horizons

#### Parameters

- options: [CdapiGetFundInvestmentHorizonsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundInvestmentHorizonsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundInvestmentHorizonsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundInvestmentHorizonsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundInvestmentHorizonsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundInvestmentHorizonsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListInvestmentHorizons
