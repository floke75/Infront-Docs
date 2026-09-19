---
title: "Get Chain Content"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Feeds > Get Chain Content"
example_config: {"title":"Get Chain Content","description":"","modify_date":"2021-02-20T19:48:11","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/Feeds/GetChainContent"
source_files: ["script.ts", "config.json"]
---

# Get Chain Content

## Script (script.ts)

```typescript
//Define info type (https://docs.infrontfinance.com/sdk/api/Feed/FeedContentType/7041)
const contentType = InfrontSDK.FeedContentType.ChainContent

//Define feed
const feed = 17921

//Define chain name
const chainName = 'OMXS30'

//Define provider id
const providerId = 0

//Define onData callback (https://docs.infrontfinance.com/sdk/api/Alerts/onData/136)
const onData = data => console.log("getFeedInfo:", InfrontSDK.FeedContentType[contentType], data);

//Define onError callback (https://docs.infrontfinance.com/sdk/api/Alerts/onError/139)
const onError = error => console.log("Error:", error);

//Define options (https://docs.infrontfinance.com/sdk/api/Feed/FeedContentsOptions/7069)
const options = {
    contentType: contentType,
    feed: feed,
    providerId: providerId,
    chainName: chainName,
    subscribe: false,
    onData: onData,
    onError: onError
};

//Request data
sdk.get(InfrontSDK.feedContents(options));
```

