---
title: "cdapiGetBondInterestRateMonths"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRateMonths"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondInterestRateMonths"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRateMonths.html"
defines: ["cdapiGetBondInterestRateMonths"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRateMonthsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateMonthsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondInterestRateMonths

```ts
cdapiGetBondInterestRateMonths(
    options: CdapiGetBondInterestRateMonthsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondInterestRateMonthsData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondInterestRateMonthsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondInterestRateMonthsData>>
```

ListInterestRateMonthsResponse retrieves interest rate months that could be
filtered by various attributes. available for source: WM

Calls GET /bond/interest-rate-months

#### Parameters

- options: [CdapiGetBondInterestRateMonthsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRateMonthsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondInterestRateMonthsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateMonthsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondInterestRateMonthsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateMonthsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondInterestRateMonthsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateMonthsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListInterestRateMonths
