---
title: "Add Instrument to Watch List"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Watch Lists > Add Instrument to Watch List"
example_config: {"title":"Add Instrument to Watch List","description":"","modify_date":"2021-03-02T19:32:13","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/WatchLists/AddInstrumenttoWatchList"
source_files: ["script.ts", "config.json"]
---

# Add Instrument to Watch List

## Script (script.ts)

```typescript
//Create if you don't have a watch list (https://docs.infrontfinance.com/sandbox/sdk-api/watch-lists-2/save-watch-list/cG9zdDoxODEw). 
//Or replace this to match you own watchlist name.
const list = "My new watch list"

//Define request action (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const action: InfrontSDK.WatchListContentAction = InfrontSDK.WatchListContentAction.AddSymbolId

//Define symbolId (https://docs.infrontfinance.com/sdk/api/Symbol/SymbolId/12146)
const symbolId = {feed: 18177, ticker: "NHY"}

//Define onData callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onData = data => console.log("symbolId", options.symbolId, "added to list", options.listName)

//Define onError callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onError = err => console.error('Adding symbol: ', options.symbolId,' to the list ', list, 'failed. Error: ', err)

//Define options (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const options: InfrontSDK.WatchListContentOptions = {
    action: action,
    listName: list,
    symbolId: symbolId,
    onData: onData,
    onError: onError,
}

//Request data
sdk.get(InfrontSDK.watchListContent(options))
```

