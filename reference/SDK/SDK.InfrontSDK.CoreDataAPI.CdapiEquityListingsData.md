---
title: "CdapiEquityListingsData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityListingsData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityListingsData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityListingsData.html"
defines: ["CdapiEquityListingsData"]
member_count: 1
members: ["preferred_trading_venue"]
member_groups:
  "Properties": ["preferred_trading_venue"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenue"]
---

# CdapiEquityListingsData

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.ListingsData

```ts
interface CdapiEquityListingsData {
    preferred_trading_venue: CdapiCommonTradingVenue;
}
```

### Properties

#### `Readonly` preferred_trading_venue

```ts
preferred_trading_venue: CdapiCommonTradingVenue
```

add the preferred trading venue (only strategy=PRIMARY_TRADING_VENUE is supported at the moment)
