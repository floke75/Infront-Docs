---
title: "LoginDataFlags"
qualified_name: "SDK.InfrontSDK.LoginDataFlags"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Login"
nav_path: "SDK > InfrontSDK > Login > LoginDataFlags"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.LoginDataFlags.html"
defines: ["LoginDataFlags"]
member_count: 3
members: ["ConnectionStatus", "Features", "LoginDetails"]
member_groups:
  "Enumeration Members": ["ConnectionStatus", "Features", "LoginDetails"]
reference_count: 4
references: ["SDK.InfrontSDK.loginData", "SDK.InfrontSDK.LoginDataOptions", "SDK.InfrontSDK.LoginData", "Utils.InfrontUtil.ObservableArray"]
---

# LoginDataFlags

Specify [loginData](./SDK.InfrontSDK.loginData.md) output by switching on the following flags.

#### See

[LoginDataOptions.flags](./SDK.InfrontSDK.LoginDataOptions.md#flags) | [loginData](./SDK.InfrontSDK.loginData.md) | [LoginData](./SDK.InfrontSDK.LoginData.md).

### Enumeration Members

#### ConnectionStatus

```ts
ConnectionStatus: "ConnectionStatus"
```

Get a list of websocket connections status. The output will be presented as [InfrontUtil.ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)

#### Features

```ts
Features: "Features"
```

Query all available features for the current user.

#### LoginDetails

```ts
LoginDetails: "LoginDetails"
```

Get a snapshot of the login data for the current session.
