---
title: "TradingConnectionAction"
qualified_name: "SDK.InfrontSDK.Trading.TradingConnectionAction"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > TradingConnectionAction"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.Trading.TradingConnectionAction.html"
defines: ["TradingConnectionAction"]
member_count: 5
members: ["CancelLogin", "Gateways", "Login", "Logout", "Observe"]
member_groups:
  "Enumeration Members": ["CancelLogin", "Gateways", "Login", "Logout", "Observe"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.connection"]
---

# TradingConnectionAction

Actions for the [connection](./SDK.InfrontSDK.Trading.connection.md) request.

### Enumeration Members

#### CancelLogin

```ts
CancelLogin: "CancelLogin"
```

Cancel ongoing login request.

#### Gateways

```ts
Gateways: "Gateways"
```

Get list of all trading gateways available to the current user.

#### Login

```ts
Login: "Login"
```

Login to the specified trading gateway.

#### Logout

```ts
Logout: "Logout"
```

Logout from the current trading gateway.

#### Observe

```ts
Observe: "Observe"
```

Receive notification when a trading gateway is successfully logged in or logged out.
