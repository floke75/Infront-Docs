---
title: "OrderState"
qualified_name: "SDK.InfrontSDK.Trading.OrderState"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > OrderState"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.Trading.OrderState.html"
defines: ["OrderState"]
member_count: 37
members: ["Active", "Delete", "Deleted", "DeletedExecuted", "DeletedModify", "DeletedRefused", "DoneForDay", "ErrorCommunication", "ErrorLimit", "ErrorSystem", "ErrorTradingPower", "Exchange", "Executed", "Expired", "FxDealDone", "FxDealPending", "FxDealQuoted", "FxDealRequestAccepted", "FxDealRequestExpired", "FxDealRequestRejected", "FxDealRequestWithdrawn", "FxQuoteExpired", "FxQuoteRejected", "FxQuoteWithdrawn", "Inactive", "Internal", "ModifiedNew", "Monitor", "Offline", "Parent", "Pending", "PendingDelete", "PendingInsert", "PendingModify", "Rejected", "Request", "Working"]
member_groups:
  "Enumeration Members": ["Active", "Delete", "Deleted", "DeletedExecuted", "DeletedModify", "DeletedRefused", "DoneForDay", "ErrorCommunication", "ErrorLimit", "ErrorSystem", "ErrorTradingPower", "Exchange", "Executed", "Expired", "FxDealDone", "FxDealPending", "FxDealQuoted", "FxDealRequestAccepted", "FxDealRequestExpired", "FxDealRequestRejected", "FxDealRequestWithdrawn", "FxQuoteExpired", "FxQuoteRejected", "FxQuoteWithdrawn", "Inactive", "Internal", "ModifiedNew", "Monitor", "Offline", "Parent", "Pending", "PendingDelete", "PendingInsert", "PendingModify", "Rejected", "Request", "Working"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.PortfolioData"]
---

# OrderState

Order states used for order filtering order items in from orders method on [PortfolioData](./SDK.InfrontSDK.Trading.PortfolioData.md)

#### See

[PortfolioData](./SDK.InfrontSDK.Trading.PortfolioData.md)

### Enumeration Members

#### Active

```ts
Active: "Active"
```

Order is in active state and will be executed once the conditions are met.

#### Delete

```ts
Delete: "Delete"
```

#### Deleted

```ts
Deleted: "Deleted"
```

#### DeletedExecuted

```ts
DeletedExecuted: "DeletedExecuted"
```

#### DeletedModify

```ts
DeletedModify: "DeletedModify"
```

#### DeletedRefused

```ts
DeletedRefused: "DeletedRefused"
```

#### DoneForDay

```ts
DoneForDay: "DoneForDay"
```

#### ErrorCommunication

```ts
ErrorCommunication: "ErrorCommunication"
```

#### ErrorLimit

```ts
ErrorLimit: "ErrorLimit"
```

#### ErrorSystem

```ts
ErrorSystem: "ErrorSystem"
```

#### ErrorTradingPower

```ts
ErrorTradingPower: "ErrorTradingPower"
```

#### Exchange

```ts
Exchange: "Exchange"
```

Represent active orders.

##### Deprecated

Use [Active](#active) instead.

#### Executed

```ts
Executed: "Executed"
```

#### Expired

```ts
Expired: "Expired"
```

#### FxDealDone

```ts
FxDealDone: "FxDealDone"
```

#### FxDealPending

```ts
FxDealPending: "FxDealPending"
```

#### FxDealQuoted

```ts
FxDealQuoted: "FxDealQuoted"
```

#### FxDealRequestAccepted

```ts
FxDealRequestAccepted: "FxDealRequestAccepted"
```

#### FxDealRequestExpired

```ts
FxDealRequestExpired: "FxDealRequestExpired"
```

#### FxDealRequestRejected

```ts
FxDealRequestRejected: "FxDealRequestRejected"
```

#### FxDealRequestWithdrawn

```ts
FxDealRequestWithdrawn: "FxDealRequestWithdrawn"
```

#### FxQuoteExpired

```ts
FxQuoteExpired: "FxQuoteExpired"
```

#### FxQuoteRejected

```ts
FxQuoteRejected: "FxQuoteRejected"
```

#### FxQuoteWithdrawn

```ts
FxQuoteWithdrawn: "FxQuoteWithdrawn"
```

#### Inactive

```ts
Inactive: "Inactive"
```

The order is paused. This state represents orders that will not be executed until they are activated manually.

#### Internal

```ts
Internal: "Internal"
```

#### ModifiedNew

```ts
ModifiedNew: "ModifiedNew"
```

#### Monitor

```ts
Monitor: "Monitor"
```

#### Offline

```ts
Offline: "Offline"
```

#### Parent

```ts
Parent: "Parent"
```

#### Pending

```ts
Pending: "Pending"
```

#### PendingDelete

```ts
PendingDelete: "PendingDelete"
```

#### PendingInsert

```ts
PendingInsert: "PendingInsert"
```

#### PendingModify

```ts
PendingModify: "PendingModify"
```

#### Rejected

```ts
Rejected: "Rejected"
```

#### Request

```ts
Request: "Request"
```

#### Working

```ts
Working: "Working"
```
