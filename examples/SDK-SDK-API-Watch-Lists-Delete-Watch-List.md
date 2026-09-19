---
title: "Delete Watch List"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Watch Lists > Delete Watch List"
description: "SDK example demonstrating how to delete a watch list using WatchListContentAction.DeleteWatchList."
tags: ["sdk", "examples", "watch-list", "delete-watch-list", "WatchListContentAction", "requests"]
example_config: {"title":"Delete Watch List","description":"SDK example demonstrating how to delete a watch list using WatchListContentAction.DeleteWatchList.","modify_date":"2021-03-02T19:13:17","owner":"","tags":["sdk","examples","watch-list","delete-watch-list","WatchListContentAction","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/WatchLists/DeleteWatchList"
source_files: ["script.ts", "config.json"]
---

# Delete Watch List

SDK example demonstrating how to delete a watch list using WatchListContentAction.DeleteWatchList.

## Script (script.ts)

```typescript
//Create if you don't have a watch list (https://docs.infrontfinance.com/sandbox/sdk-api/watch-lists-2/save-watch-list/cG9zdDoxODEw). 
//Or replace this to match you own watchlist name.
const list = 'My new watch list'

//Define request action (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const action: InfrontSDK.WatchListContentAction = InfrontSDK.WatchListContentAction.DeleteWatchList

//Define onData callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onData = data => console.log("Watch list delete: " + (data ? "succeeded" : "failed"))

//Define onError callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onError = err => console.error("Error:", err)

//Define options (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const options: InfrontSDK.WatchListContentOptions = {
    action: action,
    listName: list,
    onData: onData,
    onError: onError,
}

//Request data
sdk.get(InfrontSDK.watchListContent(options))
```

