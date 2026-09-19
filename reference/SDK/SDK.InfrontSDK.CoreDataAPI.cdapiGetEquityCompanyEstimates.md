---
title: "cdapiGetEquityCompanyEstimates"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyEstimates"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityCompanyEstimates"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyEstimates.html"
defines: ["cdapiGetEquityCompanyEstimates"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityCompanyEstimates

```ts
cdapiGetEquityCompanyEstimates(
    options: CdapiGetEquityCompanyEstimatesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiEquityCompanyEstimatesData>,
    onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyEstimatesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiEquityCompanyEstimatesData>>
```

ListCompanyEstimates retrieves company-data (basic, position, shareholder)

Calls GET /equity/company/estimates

#### Parameters

- options: [CdapiGetEquityCompanyEstimatesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityCompanyEstimatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityCompanyEstimatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityCompanyEstimatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListCompanyEstimates
