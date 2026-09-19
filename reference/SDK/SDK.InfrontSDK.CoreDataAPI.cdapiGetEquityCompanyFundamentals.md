---
title: "cdapiGetEquityCompanyFundamentals"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyFundamentals"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityCompanyFundamentals"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyFundamentals.html"
defines: ["cdapiGetEquityCompanyFundamentals"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityCompanyFundamentals

```ts
cdapiGetEquityCompanyFundamentals(
    options: CdapiGetEquityCompanyFundamentalsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiEquityCompanyFundamentalsData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyFundamentalsData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiEquityCompanyFundamentalsData>,
>
```

ListCompanyFundamentals retrieves company-data (basic, position, shareholder)

Calls GET /equity/company/fundamentals

#### Parameters

- options: [CdapiGetEquityCompanyFundamentalsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityCompanyFundamentalsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityCompanyFundamentalsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityCompanyFundamentalsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListCompanyFundamentals
