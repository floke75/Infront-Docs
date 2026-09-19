---
title: "Get Accessible Feeds"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Feeds > Get Accessible Feeds"
description: "SDK example demonstrating how to retrieve accessible feeds using FeedListType.AccessibleFeeds."
tags: ["sdk", "examples", "feeds", "get-accessible-feeds", "FeedListType", "requests"]
example_config: {"title":"Get Accessible Feeds","description":"SDK example demonstrating how to retrieve accessible feeds using FeedListType.AccessibleFeeds.","modify_date":"2021-02-20T19:56:57","owner":"Infront","tags":["sdk","examples","feeds","get-accessible-feeds","FeedListType","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/Feeds/GetAccessibleFeeds"
source_files: ["script.ts", "config.json"]
---

# Get Accessible Feeds

SDK example demonstrating how to retrieve accessible feeds using FeedListType.AccessibleFeeds.

## Script (script.ts)

```typescript
//Define list type (https://docs.infrontfinance.com/sdk/api/Feed/FeedListType/6954)
const listType = InfrontSDK.FeedListType.AccessibleFeeds

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

