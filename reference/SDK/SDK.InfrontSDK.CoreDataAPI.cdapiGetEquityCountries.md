---
title: "cdapiGetEquityCountries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCountries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityCountries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCountries.html"
defines: ["cdapiGetEquityCountries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCountriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityCountries

```ts
cdapiGetEquityCountries(
    options: CdapiGetEquityCountriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonCountriesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonCountriesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonCountriesData>>
```

ListCountries retrieves Countries.

Calls GET /equity/countries

#### Parameters

- options: [CdapiGetEquityCountriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCountriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListCountries
