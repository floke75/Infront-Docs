---
title: "cdapiGetBondInterestRateCalculationMethods"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRateCalculationMethods"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondInterestRateCalculationMethods"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRateCalculationMethods.html"
defines: ["cdapiGetBondInterestRateCalculationMethods"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRateCalculationMethodsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateCalculationMethodsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondInterestRateCalculationMethods

```ts
cdapiGetBondInterestRateCalculationMethods(
    options: CdapiGetBondInterestRateCalculationMethodsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondInterestRateCalculationMethodsData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondInterestRateCalculationMethodsData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondInterestRateCalculationMethodsData>,
>
```

ListInterestRateCalculationMethodsResponse retrieves interest rate
calculation methods that could be filtered by various attributes. available
for source: EDI,WM,XID

Calls GET /bond/interest-rate-calculation-methods

#### Parameters

- options: [CdapiGetBondInterestRateCalculationMethodsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRateCalculationMethodsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondInterestRateCalculationMethodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateCalculationMethodsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondInterestRateCalculationMethodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateCalculationMethodsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiBondInterestRateCalculationMethodsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateCalculationMethodsData.md)>,
>

#### Remarks

CDAPI Operation ID: BondService_ListInterestRateCalculationMethods
