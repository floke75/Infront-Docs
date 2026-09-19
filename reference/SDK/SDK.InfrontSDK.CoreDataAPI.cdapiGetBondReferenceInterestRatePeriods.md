---
title: "cdapiGetBondReferenceInterestRatePeriods"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondReferenceInterestRatePeriods"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondReferenceInterestRatePeriods"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondReferenceInterestRatePeriods.html"
defines: ["cdapiGetBondReferenceInterestRatePeriods"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondReferenceInterestRatePeriodsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatePeriodsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondReferenceInterestRatePeriods

```ts
cdapiGetBondReferenceInterestRatePeriods(
    options: CdapiGetBondReferenceInterestRatePeriodsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondReferenceInterestRatePeriodsData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondReferenceInterestRatePeriodsData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondReferenceInterestRatePeriodsData>,
>
```

ListReferenceInterestRatePeriodsResponse retrieves reference interest rate
periods that could be filtered by various attributes. available for source:
WM

Calls GET /bond/reference-interest-rate-periods

#### Parameters

- options: [CdapiGetBondReferenceInterestRatePeriodsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondReferenceInterestRatePeriodsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondReferenceInterestRatePeriodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatePeriodsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondReferenceInterestRatePeriodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatePeriodsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiBondReferenceInterestRatePeriodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatePeriodsData.md)>,
>

#### Remarks

CDAPI Operation ID: BondService_ListReferenceInterestRatePeriods
