---
title: "LoginData"
qualified_name: "SDK.InfrontSDK.LoginData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Login"
nav_path: "SDK > InfrontSDK > Login > LoginData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.LoginData.html"
defines: ["LoginData"]
member_count: 3
members: ["connectionsStatus", "features", "loginDetails"]
member_groups:
  "Properties": ["connectionsStatus", "features", "loginDetails"]
reference_count: 5
references: ["Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.ConnectionStatus", "SDK.InfrontSDK.LoginDetails", "SDK.InfrontSDK.loginData", "SDK.InfrontSDK.LoginDataOptions"]
---

# LoginData

Output interface for [loginData](./SDK.InfrontSDK.loginData.md). Content would be presented based on the selected flags when calling [loginData](./SDK.InfrontSDK.loginData.md).

#### See

LoginDataOptions

```ts
interface LoginData {
    connectionsStatus: ObservableArray<ConnectionStatus>;
    features: object;
    loginDetails: LoginDetails;
}
```

### Properties

#### connectionsStatus

```ts
connectionsStatus: ObservableArray<ConnectionStatus>
```

An [InfrontUtil.ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md) that provides websocket connections status.

#### features

```ts
features: object
```

Available features for the current user. These features are handled by package manager.

#### loginDetails

```ts
loginDetails: LoginDetails
```

A snapshot of the login data for the current session.
