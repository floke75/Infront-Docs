---
title: "SDKOptions"
qualified_name: "SDK.InfrontSDK.SDKOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SDKOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SDKOptions.html"
defines: ["SDKOptions"]
member_count: 10
members: ["environment?", "language?", "password?", "realm?", "signedToken?", "throttling?", "userId?", "onDisconnect?", "onReady", "onSystemAlert?"]
member_groups:
  "Properties": ["environment?", "language?", "password?", "realm?", "signedToken?", "throttling?", "userId?"]
  "Methods": ["onDisconnect?", "onReady", "onSystemAlert?"]
reference_count: 4
references: ["SDK.InfrontSDK.DisconnectEvent", "SDK.InfrontSDK.ReadyEvent", "SDK.InfrontSDK.SystemAlertEvent", "SDK.InfrontSDK.DisconnectEventReason"]
---

# SDKOptions

SDK options

```ts
interface SDKOptions {
    environment?: string;
    language?: string;
    password?: string;
    realm?: string;
    signedToken?: string;
    throttling?: number;
    userId?: string;
    onDisconnect?(event: DisconnectEvent): void;
    onReady(event: ReadyEvent): void;
    onSystemAlert?(event: SystemAlertEvent): void;
}
```

### Properties

#### `Optional` environment

```ts
environment?: string
```

Set the default work environment.
Use this option in combination with [SDKOptions.userId](#userid) and [SDKOptions.password](#password).

##### Remarks

If [SDKOptions.signedToken](#signedtoken) is used to login, setting this option will not have any effect.

#### `Optional` language

```ts
language?: string
```

The default language to use for API data. Usually set via Infront.UI.

#### `Optional` password

```ts
password?: string
```

password

#### `Optional` realm

```ts
realm?: string
```

Set the default realm.
Use this option in combination with [SDKOptions.userId](#userid) and [SDKOptions.password](#password).

##### Remarks

If [SDKOptions.signedToken](#signedtoken) is used to login, setting this option will not have any effect.

#### `Optional` signedToken

```ts
signedToken?: string
```

signed token

#### `Optional` throttling

```ts
throttling?: number
```

Delay updates by millie-seconds.

#### `Optional` userId

```ts
userId?: string
```

user id

### Methods

#### `Optional` onDisconnect

```ts
onDisconnect?(event: DisconnectEvent): void
```

This event is fired when the user disconnects or fails to log in. The reason parameter indicates the reason for the disconnect.

##### Parameters

- event: DisconnectEvent

##### Returns void

##### See

[DisconnectEventReason](./SDK.InfrontSDK.DisconnectEventReason.md) | DisconnectEvent

#### onReady

```ts
onReady(event: ReadyEvent): void
```

A callback to be called once login is completed successfully.

##### Parameters

- event: ReadyEvent

##### Returns void

##### See

ReadyEvent

#### `Optional` onSystemAlert

```ts
onSystemAlert?(event: SystemAlertEvent): void
```

A callback used to notify about system broadcasts. The alert usually is being sent once, and then marked as read so it is up to the client to visualize the message or ignore it.

##### Parameters

- event: SystemAlertEvent

  System alert object.

##### Returns void
