---
title: "SubscriptionSignal"
qualified_name: "SDK.InfrontSDK.SubscriptionSignal"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SubscriptionSignal"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.SubscriptionSignal.html"
defines: ["SubscriptionSignal"]
member_count: 5
members: ["aborted", "onabort", "reason", "dispatchEvent", "throwIfAborted"]
member_groups:
  "Properties": ["aborted", "onabort", "reason"]
  "Methods": ["dispatchEvent", "throwIfAborted"]
reference_count: 1
references: ["SDK.InfrontSDK.SubscriptionController"]
---

# SubscriptionSignal

Extended version of the AbortSignal that adds read-only access to the
subscription handling from SubscriptionController.

#### Implements

- AbortSignal

### Properties

#### `Readonly` aborted

```ts
aborted: boolean
```

The **`aborted`** read-only property returns a value that indicates whether the asynchronous operations the signal is communicating with are aborted (` true`) or not (` false`).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/aborted)

Implementation of AbortSignal.aborted

#### onabort

```ts
onabort: (this: AbortSignal, ev: Event) => any
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event)

Implementation of AbortSignal.onabort

#### `Readonly` reason

```ts
reason: any
```

The **`reason`** read-only property returns a JavaScript value that indicates the abort reason.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/reason)

Implementation of AbortSignal.reason

### Methods

#### dispatchEvent

```ts
dispatchEvent(event: Event): boolean
```

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

##### Parameters

- event: Event

##### Returns boolean

Implementation of AbortSignal.dispatchEvent

#### throwIfAborted

```ts
throwIfAborted(): void
```

The **`throwIfAborted()`** method throws the signal's abort AbortSignal.reason if the signal has been aborted; otherwise it does nothing.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/throwIfAborted)

##### Returns void

Implementation of AbortSignal.throwIfAborted
