---
title: "getPortfolioValue"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.getPortfolioValue"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > getPortfolioValue"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.getPortfolioValue.html"
defines: ["getPortfolioValue"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition"]
---

# getPortfolioValue

```ts
getPortfolioValue(
    positions: PriipsDataServicesRiskvaluatorRiskPosition[],
): number
```

Calculate the portfolio value for all positions of a portfolio.

Please note:
positions must be of type RiskPortfolioEvalPosition to contain enriched data like spot and fxRate!

#### Parameters

- positions: [PriipsDataServicesRiskvaluatorRiskPosition](./SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition.md)[]

  all positions of the portfolio

#### Returns number

- the portfolio value
