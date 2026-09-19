---
title: "cdapiGetBondReferenceInterestRates"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondReferenceInterestRates"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondReferenceInterestRates"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondReferenceInterestRates.html"
defines: ["cdapiGetBondReferenceInterestRates"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondReferenceInterestRatesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondReferenceInterestRates

```ts
cdapiGetBondReferenceInterestRates(
    options: CdapiGetBondReferenceInterestRatesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondReferenceInterestRatesData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiBondReferenceInterestRatesData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondReferenceInterestRatesData>,
>
```

ListReferenceInterestRatesResponse retrieves reference interest rates that
could be filtered by various attributes. available for source: WM

Calls GET /bond/reference-interest-rates

#### Parameters

- options: [CdapiGetBondReferenceInterestRatesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondReferenceInterestRatesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondReferenceInterestRatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondReferenceInterestRatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondReferenceInterestRatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondReferenceInterestRatesData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListReferenceInterestRates
