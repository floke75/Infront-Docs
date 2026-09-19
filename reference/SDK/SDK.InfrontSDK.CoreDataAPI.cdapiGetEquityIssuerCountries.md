---
title: "cdapiGetEquityIssuerCountries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerCountries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityIssuerCountries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityIssuerCountries.html"
defines: ["cdapiGetEquityIssuerCountries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerCountriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityIssuerCountries

```ts
cdapiGetEquityIssuerCountries(
    options: CdapiGetEquityIssuerCountriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuerCountriesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuerCountriesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuerCountriesData>>
```

ListIssuerCountries retrieves issuer country.

Calls GET /equity/issuer/countries

#### Parameters

- options: [CdapiGetEquityIssuerCountriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityIssuerCountriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuerCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuerCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuerCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListIssuerCountries
