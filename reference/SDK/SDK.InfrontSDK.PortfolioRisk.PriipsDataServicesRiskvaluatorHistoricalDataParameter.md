---
title: "PriipsDataServicesRiskvaluatorHistoricalDataParameter"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorHistoricalDataParameter"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorHistoricalDataParameter"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorHistoricalDataParameter.html"
defines: ["PriipsDataServicesRiskvaluatorHistoricalDataParameter"]
member_count: 2
members: ["monthsOfHistory", "useProxies"]
member_groups:
  "Properties": ["monthsOfHistory", "useProxies"]
---

# PriipsDataServicesRiskvaluatorHistoricalDataParameter

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.HistoricalDataParameter

```ts
interface PriipsDataServicesRiskvaluatorHistoricalDataParameter {
    monthsOfHistory: number;
    useProxies: boolean;
}
```

### Properties

#### `Readonly` monthsOfHistory

```ts
monthsOfHistory: number
```

Number of months to be included in the history

##### Remarks

Format: int32

#### `Readonly` useProxies

```ts
useProxies: boolean
```

Use proxies to fill gaps in the underlying/interest rate histories
