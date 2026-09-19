---
title: "Get Feed Meta Data"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Feeds > Get Feed Meta Data"
example_config: {"title":"Get Feed Meta Data","description":"","modify_date":"2021-02-20T19:51:18","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/Feeds/GetFeedMetaData"
source_files: ["script.ts", "config.json"]
---

# Get Feed Meta Data

## Script (script.ts)

```typescript
//Define info type (https://docs.infrontfinance.com/sdk/api/Feed/FeedInfoType/7028)
const infoType = InfrontSDK.FeedInfoType.MetaData

//Create a list of feeds
const feeds = [18177, 17921, 15]

//Define onData callback (https://docs.infrontfinance.com/sdk/api/Alerts/onData/136)
const onData = data => console.log("getFeedInfo:", InfrontSDK.FeedInfoType[infoType], data);

//Define onError callback (https://docs.infrontfinance.com/sdk/api/Alerts/onError/139)
const onError = error => console.log("Error:", error);

//Define options (https://docs.infrontfinance.com/sdk/api/Feed/FeedInfoOptions/7031)
const options = {
    infoType: infoType,
    feed: feeds,
    onData: onData,
    onError: onError,
};

//Request data
sdk.get(InfrontSDK.feedInfo(options));
```

