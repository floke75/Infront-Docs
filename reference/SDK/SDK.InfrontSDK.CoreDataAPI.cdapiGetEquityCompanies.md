---
title: "cdapiGetEquityCompanies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanies"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityCompanies"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanies.html"
defines: ["cdapiGetEquityCompanies"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompaniesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityCompanies

```ts
cdapiGetEquityCompanies(
    options: CdapiGetEquityCompaniesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityCompaniesData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityCompaniesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityCompaniesData>>
```

ListCompanies retrieves company-data (basic, position, shareholder)

Calls GET /equity/companies

#### Parameters

- options: [CdapiGetEquityCompaniesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityCompaniesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompaniesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityCompaniesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompaniesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityCompaniesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompaniesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListCompanies
