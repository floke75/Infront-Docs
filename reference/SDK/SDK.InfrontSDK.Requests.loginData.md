---
title: "loginData"
qualified_name: "SDK.InfrontSDK.Requests.loginData"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Login"
nav_path: "SDK > InfrontSDK > Other > Requests > Login > loginData"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.loginData.html"
defines: ["loginData"]
reference_count: 2
references: ["SDK.InfrontSDK.LoginDataOptions", "SDK.InfrontSDK.DataRequest"]
---

# loginData

```ts
loginData(options: LoginDataOptions): DataRequest
```

Get detailed information about current session. It is possible to turn on/off login information by assigning the corresponding option.

#### Parameters

- options: [LoginDataOptions](./SDK.InfrontSDK.LoginDataOptions.md)

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

Unsubscribe function. To unsubscribe connection status update, call the returned function.

#### See

[LoginDataOptions](./SDK.InfrontSDK.LoginDataOptions.md)
