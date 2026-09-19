---
title: "cdapiGetBondInterestRatePeriods"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRatePeriods"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondInterestRatePeriods"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRatePeriods.html"
defines: ["cdapiGetBondInterestRatePeriods"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriodsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondInterestRatePeriods

```ts
cdapiGetBondInterestRatePeriods(
    options: CdapiGetBondInterestRatePeriodsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondInterestRatePeriodsData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiBondInterestRatePeriodsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondInterestRatePeriodsData>>
```

ListInterestRatePeriodsResponse retrieves interest rate periods that could
be filtered by various attributes. available for source: EDI,WM

Calls GET /bond/interest-rate-periods

#### Parameters

- options: [CdapiGetBondInterestRatePeriodsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRatePeriodsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondInterestRatePeriodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriodsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondInterestRatePeriodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriodsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondInterestRatePeriodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRatePeriodsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListInterestRatePeriods
