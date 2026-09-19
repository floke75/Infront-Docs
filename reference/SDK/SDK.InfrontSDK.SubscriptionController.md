---
title: "SubscriptionController"
qualified_name: "SDK.InfrontSDK.SubscriptionController"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SubscriptionController"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.SubscriptionController.html"
defines: ["SubscriptionController"]
member_count: 2
members: ["signal", "abort"]
member_groups:
  "Properties": ["signal"]
  "Methods": ["abort"]
reference_count: 1
references: ["SDK.InfrontSDK.SubscriptionSignal"]
---

# SubscriptionController

Extended version of the AbortController that adds subscription management capabilities.

#### Implements

- AbortController

### Properties

#### `Readonly` signal

```ts
signal: SubscriptionSignal
```

The **`signal`** read-only property of the AbortController interface returns an AbortSignal object instance, which can be used to communicate with/abort an asynchronous operation as desired.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)

Implementation of AbortController.signal

### Methods

#### abort

```ts
abort(reason?: any): void
```

The **`abort()`** method of the AbortController interface aborts an asynchronous operation before it has completed.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/abort)

##### Parameters

- `Optional` reason: any

##### Returns void

Implementation of AbortController.abort
