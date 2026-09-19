---
title: "PriipsDataServicesRiskvaluatorStoreResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorStoreResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorStoreResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorStoreResponse.html"
defines: ["PriipsDataServicesRiskvaluatorStoreResponse"]
member_count: 1
members: ["portfolioId"]
member_groups:
  "Properties": ["portfolioId"]
---

# PriipsDataServicesRiskvaluatorStoreResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.StoreResponse

```ts
interface PriipsDataServicesRiskvaluatorStoreResponse {
    portfolioId: string;
}
```

### Properties

#### `Readonly` portfolioId

```ts
portfolioId: string
```

Internal unique identifier of the newly stored portfolio. ("storeID")
For consumers of this API: This is an arbitrary string that is given out by this API
and should be treated as opaque.

INTERNAL:
Proposal: based on the "name" field of the portfolio (i. e. the clientID), create something like
"//

//(mod//)" as storeID, e. g.
"coba/wmueller@commerzbank.de/assetmax/mygreatportfolio/mod/nvidia/0003"
We can then store in S3 hierarchically and leverage sharding to efficiently find
a version for a given date, and will also store a pointer to the latest version.
