---
title: "CdapiCommonListingsData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingsData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonListingsData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingsData.html"
defines: ["CdapiCommonListingsData"]
member_count: 3
members: ["mifid_costs", "preferred_trading_venue", "tick_size"]
member_groups:
  "Properties": ["mifid_costs", "preferred_trading_venue", "tick_size"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonMifidCost", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenue", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTickSize"]
---

# CdapiCommonListingsData

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.ListingsData

```ts
interface CdapiCommonListingsData {
    mifid_costs: CdapiCommonMifidCost;
    preferred_trading_venue: CdapiCommonTradingVenue;
    tick_size: CdapiCommonTickSize;
}
```

### Properties

#### `Readonly` mifid_costs

```ts
mifid_costs: CdapiCommonMifidCost
```

ClassificationCommonResponse classification = 15;

#### `Readonly` preferred_trading_venue

```ts
preferred_trading_venue: CdapiCommonTradingVenue
```

add the preferred trading venue (only strategy=PRIMARY_TRADING_VENUE is supported at the moment)

#### `Readonly` tick_size

```ts
tick_size: CdapiCommonTickSize
```

ticksize entity showing how to format figures
