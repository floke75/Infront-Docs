---
title: "getPositionValue"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.getPositionValue"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > getPositionValue"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.PortfolioRisk.getPositionValue.html"
defines: ["getPositionValue"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition"]
---

# getPositionValue

Calculate the position value for a specific position in a portfolio.

Please note:
position must be of type RiskPortfolioEvalPosition to contain enriched data like spot and fxRate!

#### Param: positionsOrPosition

a list of positions in which to search for the position or the position itself

#### Param: positionId

positionId to search in the list of positions

#### Returns

- the position value

```ts
getPositionValue(
    positions: PriipsDataServicesRiskvaluatorRiskPosition[],
    positionId: string | number,
): number
```

Calculate the position value for a specific position in a portfolio.

Please note:
position must be of type RiskPortfolioEvalPosition to contain enriched data like spot and fxRate!

#### Parameters

- positions: [PriipsDataServicesRiskvaluatorRiskPosition](./SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition.md)[]

  a list of positions in which to search for the position by positionId
- positionId: string | number

  positionId to search in the list of positions

#### Returns number

- the position value

```ts
getPositionValue(position: PriipsDataServicesRiskvaluatorRiskPosition): number
```

Calculate the position value for a specific position in a portfolio.

Please note:
position must be of type RiskPortfolioEvalPosition to contain enriched data like spot and fxRate!

#### Parameters

- position: [PriipsDataServicesRiskvaluatorRiskPosition](./SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition.md)

  the position

#### Returns number

- the position value
