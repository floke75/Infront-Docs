---
title: "TradesFilter"
qualified_name: "SDK.InfrontSDK.Trading.TradesFilter"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > TradesFilter"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.TradesFilter.html"
defines: ["TradesFilter"]
member_count: 2
members: ["showHistoricTrades?", "showTodaysTrades?"]
member_groups:
  "Properties": ["showHistoricTrades?", "showTodaysTrades?"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.PortfolioData"]
---

# TradesFilter

Filter for including or excluding trade items from positions method on PortfolioData

#### See

PortfolioData

```ts
interface TradesFilter {
    showHistoricTrades?: boolean;
    showTodaysTrades?: boolean;
}
```

### Properties

#### `Optional` showHistoricTrades

```ts
showHistoricTrades?: boolean
```

Include historical trades. Note that a default portfolio request does not include historical dates.
These must be requested explicitly. This is a heavy server request that should only used when invoked by the user.

#### `Optional` showTodaysTrades

```ts
showTodaysTrades?: boolean
```

Include trades from today.
