---
title: "DataRequestOptions<DataType>"
qualified_name: "SDK.InfrontSDK.DataRequestOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > DataRequestOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.DataRequestOptions.html"
defines: ["DataRequestOptions"]
member_count: 5
members: ["signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.SubscribeAlertsOptions", "SDK.InfrontSDK.AlertListOptions", "SDK.InfrontSDK.AlertUpdateOptions", "SDK.InfrontSDK.AlertDeviceOptions", "SDK.InfrontSDK.HistoryOptions", "SDK.InfrontSDK.DocumentsOptions", "SDK.InfrontSDK.DocumentOptions", "SDK.InfrontSDK.DocumentUrlOptions", "SDK.InfrontSDK.FeedInfoOptions", "SDK.InfrontSDK.FeedContentsOptions", "SDK.InfrontSDK.FinancialCalendarOptions", "SDK.InfrontSDK.LoginDataOptions", "SDK.InfrontSDK.SymbolDataOptions", "SDK.InfrontSDK.ListingsOptionsBase", "SDK.InfrontSDK.CompanySymbolsOptions", "SDK.InfrontSDK.SectorsOptions", "SDK.InfrontSDK.SectorCompaniesOptions", "SDK.InfrontSDK.InfrontSectorsOptions", "SDK.InfrontSDK.KeyfiguresOptions", "SDK.InfrontSDK.ListingDetailsOptions", "SDK.InfrontSDK.CountryListOptions", "SDK.InfrontSDK.NewsHeadlinesOptions", "SDK.InfrontSDK.NewsStoryOptionsByFeedAndID", "SDK.InfrontSDK.NewsStoryOptionsByHeadline", "SDK.InfrontSDK.OrderbookOptions"]
reference_count: 55
references: ["SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.SubscribeAlertsOptions", "SDK.InfrontSDK.AlertListOptions", "SDK.InfrontSDK.AlertUpdateOptions", "SDK.InfrontSDK.AlertDeviceOptions", "SDK.InfrontSDK.HistoryOptions", "SDK.InfrontSDK.DocumentsOptions", "SDK.InfrontSDK.DocumentOptions", "SDK.InfrontSDK.DocumentUrlOptions", "SDK.InfrontSDK.FeedInfoOptions", "SDK.InfrontSDK.FeedContentsOptions", "SDK.InfrontSDK.FinancialCalendarOptions", "SDK.InfrontSDK.LoginDataOptions", "SDK.InfrontSDK.SymbolDataOptions", "SDK.InfrontSDK.ListingsOptionsBase", "SDK.InfrontSDK.CompanySymbolsOptions", "SDK.InfrontSDK.SectorsOptions", "SDK.InfrontSDK.SectorCompaniesOptions", "SDK.InfrontSDK.InfrontSectorsOptions", "SDK.InfrontSDK.KeyfiguresOptions", "SDK.InfrontSDK.ListingDetailsOptions", "SDK.InfrontSDK.CountryListOptions", "SDK.InfrontSDK.NewsHeadlinesOptions", "SDK.InfrontSDK.NewsStoryOptionsByFeedAndID", "SDK.InfrontSDK.NewsStoryOptionsByHeadline", "SDK.InfrontSDK.OrderbookOptions", "SDK.InfrontSDK.ConsolidatedOrderbookOptions", "SDK.InfrontSDK.SymbolSearchOptions", "SDK.InfrontSDK.FieldSearchOptions", "SDK.InfrontSDK.TAPILoginOptions", "SDK.InfrontSDK.TAPIOrdersOptions", "SDK.InfrontSDK.TAPIResourceOptions", "SDK.InfrontSDK.TAPIKeepAliveOptions", "SDK.InfrontSDK.TAPIRFQGetQuoteOptions", "SDK.InfrontSDK.TAPIRFQGetQuoteResultsOptions", "SDK.InfrontSDK.TAPIRFQAcceptQuoteOptions", "SDK.InfrontSDK.TAPIRFQUnsubOptions", "SDK.InfrontSDK.TAPIRequestQuoteOptions", "SDK.InfrontSDK.TAPIRequestQuoteResultsOptions", "SDK.InfrontSDK.TAPIAcceptQuoteOptions", "SDK.InfrontSDK.TimeSeriesOptions", "SDK.InfrontSDK.TradesOptions", "SDK.InfrontSDK.WatchListsObservableArrayOptions", "SDK.InfrontSDK.WatchListsOptions", "SDK.InfrontSDK.WatchListTitlesOptions", "SDK.InfrontSDK.WatchListContentOptions", "SDK.InfrontSDK.Trading.ExposureOptions", "SDK.InfrontSDK.Trading.PortfolioListOptions", "SDK.InfrontSDK.Trading.PortfolioOptions"]
---

# DataRequestOptions<DataType>

Base interface for SDK options.

```ts
interface DataRequestOptions<DataType = any> {
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: DataType): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Type Parameters

- DataType = any

  Represents the data type for the callback [DataRequestOptions.onData](#ondata).

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.DataRequestOptions))

- DataRequestOptions

  - SubscribeAlertsOptions
  - AlertListOptions
  - AlertUpdateOptions
  - AlertDeviceOptions
  - HistoryOptions
  - DocumentsOptions
  - DocumentOptions
  - DocumentUrlOptions
  - FeedInfoOptions
  - FeedContentsOptions
  - FinancialCalendarOptions
  - LoginDataOptions
  - SymbolDataOptions
  - ListingsOptionsBase
  - CompanySymbolsOptions
  - SectorsOptions
  - SectorCompaniesOptions
  - InfrontSectorsOptions
  - KeyfiguresOptions
  - ListingDetailsOptions
  - CountryListOptions
  - NewsHeadlinesOptions
  - NewsStoryOptionsByFeedAndID
  - NewsStoryOptionsByHeadline
  - OrderbookOptions
  - ConsolidatedOrderbookOptions
  - SymbolSearchOptions
  - FieldSearchOptions
  - TAPILoginOptions
  - TAPIOrdersOptions
  - TAPIResourceOptions
  - TAPIKeepAliveOptions
  - TAPIRFQGetQuoteOptions
  - TAPIRFQGetQuoteResultsOptions
  - TAPIRFQAcceptQuoteOptions
  - TAPIRFQUnsubOptions
  - TAPIRequestQuoteOptions
  - TAPIRequestQuoteResultsOptions
  - TAPIAcceptQuoteOptions
  - TimeSeriesOptions
  - TradesOptions
  - WatchListsObservableArrayOptions
  - WatchListsOptions
  - WatchListTitlesOptions
  - WatchListContentOptions
  - ExposureOptions
  - PortfolioListOptions
  - PortfolioOptions
  - ChannelOptions
  - OrderEntryOptions
  - FxDealingOptions
  - QuoteVolumeOptions
  - AcceptQuoteOrderOptions

### Properties

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

### Methods

#### onData

```ts
onData(data: DataType): void
```

A callback to be called to pass the output.

##### Parameters

- data: [DataType](#datatype)

  Output should be passed here.

##### Returns void

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

#### `Optional` onStatus

```ts
onStatus?(
    requestName: string,
    status: RequestStatus,
    extra?: RequestDetails,
): void
```

Request status callback. Use this callback to get more details about the current state of the request.

##### Parameters

- requestName: string
- status: [RequestStatus](./SDK.InfrontSDK.RequestStatus.md)

  Request status.
- `Optional` extra: RequestDetails

  Detailed information.

##### Returns void
