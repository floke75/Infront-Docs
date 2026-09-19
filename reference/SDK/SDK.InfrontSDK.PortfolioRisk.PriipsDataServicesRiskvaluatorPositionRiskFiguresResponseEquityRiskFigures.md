---
title: "PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures.html"
defines: ["PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures"]
member_count: 2
members: ["greeks", "marketHistoricalRiskFigures"]
member_groups:
  "Properties": ["greeks", "marketHistoricalRiskFigures"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresGreeks", "SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresMarketHistoricalRiskFigures"]
---

# PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PositionRiskFiguresResponse_EquityRiskFigures

```ts
interface PriipsDataServicesRiskvaluatorPositionRiskFiguresResponseEquityRiskFigures {
    greeks: PriipsDataRiskfiguresGreeks;
    marketHistoricalRiskFigures: PriipsDataRiskfiguresMarketHistoricalRiskFigures;
}
```

### Properties

#### `Readonly` greeks

```ts
greeks: PriipsDataRiskfiguresGreeks
```

The greeks, for a stock position only delta and the corresponding underlying identifier
will be filled for convenience

#### `Readonly` marketHistoricalRiskFigures

```ts
marketHistoricalRiskFigures: PriipsDataRiskfiguresMarketHistoricalRiskFigures
```

Historical risk figures
