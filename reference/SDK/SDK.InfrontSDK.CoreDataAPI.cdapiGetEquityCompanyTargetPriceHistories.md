---
title: "cdapiGetEquityCompanyTargetPriceHistories"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyTargetPriceHistories"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityCompanyTargetPriceHistories"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyTargetPriceHistories.html"
defines: ["cdapiGetEquityCompanyTargetPriceHistories"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyTargetPriceHistoriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistoriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityCompanyTargetPriceHistories

```ts
cdapiGetEquityCompanyTargetPriceHistories(
    options: CdapiGetEquityCompanyTargetPriceHistoriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiEquityCompanyTargetPriceHistoriesData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiEquityCompanyTargetPriceHistoriesData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiEquityCompanyTargetPriceHistoriesData>,
>
```

ListCompanyTargetPriceHistories retrieves company-target-price-history-data

Calls GET /equity/company/target-price-histories

#### Parameters

- options: [CdapiGetEquityCompanyTargetPriceHistoriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyTargetPriceHistoriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityCompanyTargetPriceHistoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistoriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityCompanyTargetPriceHistoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistoriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<
CoreDataResponseArray<[CdapiEquityCompanyTargetPriceHistoriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistoriesData.md)>,
>

#### Remarks

CDAPI Operation ID: EquityService_ListCompanyTargetPriceHistories
