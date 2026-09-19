---
title: "Get Symbol Ids"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Feeds > Get Symbol Ids"
example_config: {"title":"Get Symbol Ids","description":"","modify_date":"2021-02-20T19:52:58","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/Feeds/GetSymbolIds"
source_files: ["script.ts", "config.json"]
---

# Get Symbol Ids

## Script (script.ts)

```typescript
//Define info type (https://docs.infrontfinance.com/sdk/api/Feed/FeedContentType/7041)
const contentType = InfrontSDK.FeedContentType.SymbolIds

//Define feed
const feed = 17921

//Define onData callback (https://docs.infrontfinance.com/sdk/api/Alerts/onData/136)
const onData = data => console.log("getFeedInfo:", InfrontSDK.FeedContentType[contentType], data);

//Define onError callback (https://docs.infrontfinance.com/sdk/api/Alerts/onError/139)
const onError = error => console.log("Error:", error);

//Define options (https://docs.infrontfinance.com/sdk/api/Feed/FeedContentsOptions/7069)
const options = {
    contentType: contentType,
    feed: feed,
    providerId: null,
    chainName: null,
    subscribe: false,
    onData: onData,
    onError: onError
};
//Request data
sdk.get(InfrontSDK.feedContents(options));
```

