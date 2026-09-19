---
title: "Save Watch List"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Watch Lists > Save Watch List"
description: "SDK example demonstrating how to save a watch list using WatchListContentAction.SaveWatchList."
tags: ["sdk", "examples", "watch-list", "save-watch-list", "WatchListContentAction", "requests"]
example_config: {"title":"Save Watch List","description":"SDK example demonstrating how to save a watch list using WatchListContentAction.SaveWatchList.","modify_date":"2021-03-02T19:13:12","owner":"","tags":["sdk","examples","watch-list","save-watch-list","WatchListContentAction","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/WatchLists/SaveWatchList"
source_files: ["script.ts", "config.json"]
---

# Save Watch List

SDK example demonstrating how to save a watch list using WatchListContentAction.SaveWatchList.

## Script (script.ts)

```typescript
//Define request action (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const action: InfrontSDK.WatchListContentAction = InfrontSDK.WatchListContentAction.SaveWatchList

//Define onData callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onData = data => console.log("Watch list save: " + (data ? "succeeded" : "failed"));

//Define onError callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onError = err => console.error("Error:", err)

//Define symbolId (https://docs.infrontfinance.com/sdk/api/Symbol/SymbolId/12146)
const symbolId = [
    { feed: 18177, ticker: "DNB" },
    { feed: 18177, ticker: "YAR" },
    { feed: 18177, ticker: "DNO" },
]

//Define options (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const options = {
    action: action,
    listName: "My new watch list",
    symbolId: symbolId,
    onData: onData,
    onError:onError
};

//Request data
sdk.get(InfrontSDK.watchListContent(options));
```

