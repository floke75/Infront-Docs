---
title: "timeSeries"
qualified_name: "SDK.InfrontSDK.Requests.timeSeries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Other > Requests > Symbols > timeSeries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.timeSeries.html"
defines: ["timeSeries"]
reference_count: 4
references: ["SDK.InfrontSDK.TimeSeriesOptions", "SDK.InfrontSDK.TypedDataRequest", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.TimeSeries"]
---

# timeSeries

```ts
timeSeries(
    options: TimeSeriesOptions,
): TypedDataRequest<ObservableArray<TimeSeries>>
```

Request for time series for specific symbol. It is possible to request intraday or/and historical trades based on period selected in options.

#### Parameters

- options: [TimeSeriesOptions](./SDK.InfrontSDK.TimeSeriesOptions.md)

  Time series request options.

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<[ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<[TimeSeries](./SDK.InfrontSDK.TimeSeries.md)>>

#### See

[TimeSeries](./SDK.InfrontSDK.TimeSeries.md) | [TimeSeriesOptions](./SDK.InfrontSDK.TimeSeriesOptions.md)
