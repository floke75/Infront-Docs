---
title: "UserProperty"
qualified_name: "SDK.InfrontSDK.Trading.UserProperty"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > UserProperty"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.Trading.UserProperty.html"
defines: ["UserProperty"]
member_count: 3
members: ["CanCreatePortfolio", "CanMoveToPortfolio", "OnlyAllowInactivateOrder"]
member_groups:
  "Enumeration Members": ["CanCreatePortfolio", "CanMoveToPortfolio", "OnlyAllowInactivateOrder"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.ConnectionData"]
---

# UserProperty

User properties that define the capabilities and restrictions for the logged in user.
May be queried via [ConnectionData.hasUserProperty](./SDK.InfrontSDK.Trading.ConnectionData.md#hasuserproperty) method on the [ConnectionData](./SDK.InfrontSDK.Trading.ConnectionData.md) object.

### Enumeration Members

#### CanCreatePortfolio

```ts
CanCreatePortfolio: "CanCreatePortfolio"
```

#### CanMoveToPortfolio

```ts
CanMoveToPortfolio: "CanMoveToPortfolio"
```

#### OnlyAllowInactivateOrder

```ts
OnlyAllowInactivateOrder: "OnlyAllowInactivateOrder"
```
