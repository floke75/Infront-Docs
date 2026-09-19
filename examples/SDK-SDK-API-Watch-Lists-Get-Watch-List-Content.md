---
title: "Get Watch List Content"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Watch Lists > Get Watch List Content"
example_config: {"title":"Get Watch List Content","description":"","modify_date":"2021-03-02T19:13:15","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/WatchLists/GetWatchListContent"
source_files: ["script.ts", "config.json"]
---

# Get Watch List Content

## Script (script.ts)

```typescript
//Create if you don't have a watch list (https://docs.infrontfinance.com/sandbox/sdk-api/watch-lists-2/save-watch-list/cG9zdDoxODEw). 
//Or replace this to match you own watchlist name.
const list = 'My new watch list'

//Define request action (https://docs.infrontfinance.com/sdk/api/WatchList/WatchListContentOptions/16856)
const action: InfrontSDK.WatchListContentAction = InfrontSDK.WatchListContentAction.LoadWatchList

//Define reInit binding property(https://docs.infrontfinance.com/sdk/utils/Bindings/IArrayBinding/2423)
const reInit = symbols => symbols.forEach(symbol => console.log("SymbolId:", symbol))

//Define itemAdded binding property(https://docs.infrontfinance.com/sdk/utils/Bindings/IArrayBinding/2423)
const itemAdded = (symbol, index) => console.log("SymbolId:", symbol, "Index: ", index)

//Define binding (https://docs.infrontfinance.com/sdk/utils/Bindings/IArrayBinding/2423)
const binding = {
    reInit: reInit,
    itemAdded: itemAdded
}

//Define onData callback (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11967)
const onData = data => data.observe(binding)

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

