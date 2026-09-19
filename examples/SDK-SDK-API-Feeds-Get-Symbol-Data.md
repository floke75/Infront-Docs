---
title: "Get Symbol Data"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK API > Feeds > Get Symbol Data"
example_config: {"title":"Get Symbol Data","description":"","modify_date":"2021-02-20T19:56:02","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKAPI/Feeds/GetSymbolData"
source_files: ["script.ts", "config.json"]
---

# Get Symbol Data

## Script (script.ts)

```typescript
//Create an id (https://docs.infrontfinance.com/sdk/api/Symbol/SymbolId/11950)
const id = { feed: 26, ticker: "BMW" }

//Define if you want to subscribe (https://docs.infrontfinance.com/sdk/api/InfrontSDK/DataRequestOptions/11771) 
const subscribe = false

//Define onData callback (https://docs.infrontfinance.com/sdk/api/Alerts/onData/136)
const onData = data => console.log(`Symbol data, Ticker: ${data.get(InfrontSDK.SymbolField.Ticker)}, Full name: ${data.get(InfrontSDK.SymbolField.FullName)}`);

//Define options (https://docs.infrontfinance.com/sdk/api/Symbol/SymbolDataOptions/11963)
const options: InfrontSDK.SymbolDataOptions = {
    //Define symbol data content (https://docs.infrontfinance.com/sdk/api/Symbol/SymbolDataContent/11957)
    content: {
        Basic: true,
        HistoricalPerformance: true,
        CompanyMetaData: true,
        CompanyFundamentals: true,
        FundDetails: true
    },
    id: id,
    subscribe: subscribe,
    onData: onData,
}

//Request data
sdk.get(InfrontSDK.symbolData(options))
```

