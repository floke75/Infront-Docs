---
title: "CdapiGetEquityComputePerformancesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputePerformancesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityComputePerformancesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputePerformancesOptions.html"
defines: ["CdapiGetEquityComputePerformancesOptions"]
member_count: 8
members: ["asset_class_category_code?", "bvi_method?", "do_corporate_action_adjustment?", "end_date?", "onData?", "onError?", "onFinally?", "start_date?"]
member_groups:
  "Properties": ["asset_class_category_code?", "bvi_method?", "do_corporate_action_adjustment?", "end_date?", "onData?", "onError?", "onFinally?", "start_date?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityComputePerformancesOptionsAssetClassCategoryCode", "SDK.InfrontSDK.CoreDataAPI.AnalyticscalculationsPerformanceResult", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputePerformances"]
---

# CdapiGetEquityComputePerformancesOptions

Request options for [cdapiGetEquityComputePerformances](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityComputePerformances.md)

```ts
interface CdapiGetEquityComputePerformancesOptions {
    asset_class_category_code?: CdapiGetEquityComputePerformancesOptionsAssetClassCategoryCode;
    bvi_method?: boolean;
    do_corporate_action_adjustment?: boolean;
    end_date?: string;
    onData?: CoreDataRequestSuccessCallback<
        AnalyticscalculationsPerformanceResult,
    >;
    onError?: CoreDataRequestErrorCallback<
        AnalyticscalculationsPerformanceResult,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        AnalyticscalculationsPerformanceResult,
    >;
    start_date?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<AnalyticscalculationsPerformanceResult>

  - CdapiGetEquityComputePerformancesOptions

### Properties

#### `Optional` ` Readonly`asset_class_category_code

```ts
asset_class_category_code?: CdapiGetEquityComputePerformancesOptionsAssetClassCategoryCode
```

for which asset class category to calculate the performance
equity (stocks) and funds are handled internally differently regarding dividends and listing lookup

#### `Optional` ` Readonly`bvi_method

```ts
bvi_method?: boolean
```

Only applicable in the case of funds.
If this field is set to true, the fund-performance will be calculated by re-investing dividends, i.e., consider the fund to be accumulating.

#### `Optional` ` Readonly`do_corporate_action_adjustment

```ts
do_corporate_action_adjustment?: boolean
```

apply corrections to the historic price due to corporate actions like dividend payments and stock splits

#### `Optional` ` Readonly`end_date

```ts
end_date?: string
```

ISO-8601 format YYYY-MM-DD.

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<AnalyticscalculationsPerformanceResult>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<AnalyticscalculationsPerformanceResult>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    AnalyticscalculationsPerformanceResult,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`start_date

```ts
start_date?: string
```

ISO-8601 format YYYY-MM-DD.
