---
title: "Get Markets"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Feeds > Get Markets"
example_config: {"title":"Get Markets","description":"","modify_date":"2021-02-20T19:47:33","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/Feeds/GetMarkets"
source_files: ["script.ts", "config.json"]
---

# Get Markets

## Script (script.ts)

```typescript
//Define list type (https://docs.infrontfinance.com/sdk/api/Feed/FeedListType/6954)
const listType = InfrontSDK.FeedListType.Markets

//Define onData callback (https://docs.infrontfinance.com/sdk/api/Alerts/onData/136)
const onData = data => console.log("feedList:", InfrontSDK.FeedListType[listType], data);

//Define onError callback (https://docs.infrontfinance.com/sdk/api/Alerts/onError/139)
const onError = error => console.log("Error:", error);

//Define options (https://docs.infrontfinance.com/sdk/api/Feed/FeedListOptions/7017)
const options = {
    listType: listType,
    onData: onData,
    onError: onError
}

sdk.get(InfrontSDK.feedList(options));
```

