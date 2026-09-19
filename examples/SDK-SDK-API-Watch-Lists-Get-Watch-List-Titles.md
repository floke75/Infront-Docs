---
title: "Get Watch List Titles"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Watch Lists > Get Watch List Titles"
description: "SDK example demonstrating how to retrieve watch list titles using WatchListTitlesOptions."
tags: ["sdk", "examples", "watch-list", "get-watch-list-titles", "WatchListTitlesOptions", "requests"]
example_config: {"title":"Get Watch List Titles","description":"SDK example demonstrating how to retrieve watch list titles using WatchListTitlesOptions.","modify_date":"2021-03-02T18:25:38","owner":"","tags":["sdk","examples","watch-list","get-watch-list-titles","WatchListTitlesOptions","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/WatchLists/GetWatchListTitles"
source_files: ["script.ts", "config.json"]
---

# Get Watch List Titles

SDK example demonstrating how to retrieve watch list titles using WatchListTitlesOptions.

## Script (script.ts)

```typescript
//Define onData callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onData = data => console.log("Watchlist titles: ", data)

//Define onError callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onError = err => console.error(err)

//Define options (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListTitlesOptions/16842)
const options: InfrontSDK.WatchListTitlesOptions = {
    onData: onData,
    onError: onError
};

sdk.get(InfrontSDK.watchListTitles(options));
```

