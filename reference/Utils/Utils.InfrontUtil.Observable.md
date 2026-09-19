---
title: "Observable<T>"
qualified_name: "Utils.InfrontUtil.Observable"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > Observable"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.Observable.html"
defines: ["Observable"]
member_count: 4
members: ["count", "hasValue", "isNull", "onetimeBind"]
member_groups:
  "Methods": ["count", "hasValue", "isNull", "onetimeBind"]
related_types: ["Utils.InfrontUtil.OverridableObservable", "Utils.InfrontUtil.ComputedObservable"]
reference_count: 2
references: ["Utils.InfrontUtil.OverridableObservable", "Utils.InfrontUtil.ComputedObservable"]
---

# Observable<T>

Lets you subscribe to a value (usually a primitive) and receive updates when it changes.

#### Type Parameters

- T = any

#### Hierarchy ([View Summary](../type-hierarchy.md#Utils.InfrontUtil.Observable))

- Observable

  - OverridableObservable
  - ComputedObservable

### Methods

#### count

```ts
count(): number
```

Returns the number of bindings to this observable.

##### Returns number

The number of bindings.

#### hasValue

```ts
hasValue(): boolean
```

Determines if the observable has a non-null, non-undefined, non-zero and non-empty value.

##### Returns boolean

Returns true if the observable's value is assigned.

#### isNull

```ts
isNull(): boolean
```

Determines if the observable has a null value.

##### Returns boolean

Returns true if the observable's value is null.

#### onetimeBind

```ts
onetimeBind(callback: (value: any) => void): void
```

Observe value changes for only one value update.

##### Parameters

- callback: (value: any) => void

##### Returns void
