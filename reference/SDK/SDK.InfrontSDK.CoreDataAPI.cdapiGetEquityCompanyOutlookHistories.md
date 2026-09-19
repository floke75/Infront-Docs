---
title: "cdapiGetEquityCompanyOutlookHistories"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyOutlookHistories"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityCompanyOutlookHistories"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyOutlookHistories.html"
defines: ["cdapiGetEquityCompanyOutlookHistories"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyOutlookHistoriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutlookHistoriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityCompanyOutlookHistories

```ts
cdapiGetEquityCompanyOutlookHistories(
    options: CdapiGetEquityCompanyOutlookHistoriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiEquityCompanyOutlookHistoriesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiEquityCompanyOutlookHistoriesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiEquityCompanyOutlookHistoriesData>,
>
```

ListCompanyOutlookHistories retrieves company-Outlook-history-data

Calls GET /equity/company/outlook-histories

#### Parameters

- options: [CdapiGetEquityCompanyOutlookHistoriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyOutlookHistoriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityCompanyOutlookHistoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutlookHistoriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityCompanyOutlookHistoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutlookHistoriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityCompanyOutlookHistoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutlookHistoriesData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListCompanyOutlookHistories
