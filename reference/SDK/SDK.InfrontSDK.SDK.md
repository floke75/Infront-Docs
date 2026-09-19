---
title: "SDK"
qualified_name: "SDK.InfrontSDK.SDK"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SDK"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.SDK.html"
defines: ["SDK"]
member_count: 5
members: ["destroy", "get", "getAsync", "isDestroyed", "version"]
member_groups:
  "Methods": ["destroy", "get", "getAsync", "isDestroyed", "version"]
reference_count: 4
references: ["SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.Unsubscribe", "SDK.InfrontSDK.TypedDataRequest", "SDK.InfrontSDK.Requests"]
---

# SDK

[Infront](https://infrontfinance.com/) SDK is a set of tools built to provide real-time market data, news and trading.
Using Infront SDK helps to build custom financial solutions with real-time market data support in a efficient and easy way.
To get started

#### Example

```typescript
// Initiate SDK
const sdk = new Infront.SDK({
	userId: 'USER_NAME',
	password: 'PASSWORD',
	onReady: (event) => { console.log("Logged in successfully"); },
	onDisconnect: (event) => { console.warn("Disconnected:", event); }
});
```

### Methods

#### destroy

```ts
destroy(): void
```

Method to destroy initialized SDK object.
After calling destroy(), the SDK instance should not be used.
Use [isDestroyed](#isdestroyed) to check if the SDK has been destroyed.

##### Returns void

#### get

```ts
get(request: DataRequest): Unsubscribe
```

Use this method to do a request. Request module must be loaded before calling.

##### Parameters

- request: [DataRequest](./SDK.InfrontSDK.DataRequest.md)

##### Returns [Unsubscribe](./SDK.InfrontSDK.Unsubscribe.md)

##### See

[SDK requests](./_module.SDK.InfrontSDK.Requests.md)

#### getAsync

```ts
getAsync<T>(request: TypedDataRequest<T>): Promise<T>
```

Use this method to do a request, and receive a Promise that will resolve when the data is received. Request module must be loaded before calling.

Note: The Promise received does not support streaming itself (such as via `{ subscribe: true }`).

##### Type Parameters

- T

##### Parameters

- request: [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<[T](#getasynct)>

##### Returns Promise<[T](#getasynct)>

##### See

[SDK requests](./_module.SDK.InfrontSDK.Requests.md)

#### isDestroyed

```ts
isDestroyed(): boolean
```

Check if the SDK has been destroyed.

##### Returns boolean

true if the SDK has been destroyed, false otherwise.

#### version

```ts
version(): string
```

SDK version.

##### Returns string
