---
title: "cdapiGetCommonIssuerCountries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerCountries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonIssuerCountries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerCountries.html"
defines: ["cdapiGetCommonIssuerCountries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerCountriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonIssuerCountries

```ts
cdapiGetCommonIssuerCountries(
    options: CdapiGetCommonIssuerCountriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuerCountriesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuerCountriesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuerCountriesData>>
```

ListIssuerCountries retrieves issuer sector.

Calls GET /common/issuer/countries

#### Parameters

- options: [CdapiGetCommonIssuerCountriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerCountriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuerCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuerCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuerCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerCountriesData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListIssuerCountries
