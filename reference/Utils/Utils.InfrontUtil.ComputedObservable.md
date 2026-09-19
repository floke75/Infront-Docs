---
title: "ComputedObservable"
qualified_name: "Utils.InfrontUtil.ComputedObservable"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > ComputedObservable"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.ComputedObservable.html"
defines: ["ComputedObservable"]
member_count: 5
members: ["constructor", "count", "hasValue", "isNull", "onetimeBind"]
member_groups:
  "Constructors": ["constructor"]
  "Methods": ["count", "hasValue", "isNull", "onetimeBind"]
related_types: ["Utils.InfrontUtil.Observable", "Utils.InfrontUtil.Binding"]
reference_count: 2
references: ["Utils.InfrontUtil.Observable", "Utils.InfrontUtil.Binding"]
---

# ComputedObservable

A bastardization of Observable that doesn't actually have its own value. Instead it subscribes to
one or more other Observables and runs the provided computation-function whenever one or more of them
changes their value (and then updates its own listeners).

#### Hierarchy ([View Summary](../type-hierarchy.md#Utils.InfrontUtil.ComputedObservable))

- Observable

  - ComputedObservable

#### Implements

- [Binding](./Utils.InfrontUtil.Binding.md)

### Constructors

#### constructor

```ts
new ComputedObservable(
    args: Observable<any>[],
    computation: (args: any[]) => any,
    needAllArgs?: boolean,
): ComputedObservable
```

##### Parameters

- args: Observable<any>[]

  Observables that should be used in computation function
- computation: (args: any[]) => any

  Function to process args and return the ComputedObservables updated value
- needAllArgs: boolean = false

  Pass true to prevent computation from firing until all args have received a non-null value

##### Returns ComputedObservable

Overrides Observable.constructor

### Methods

#### count

```ts
count(): number
```

Returns the number of bindings to this observable.

##### Returns number

The number of bindings.

Inherited from Observable.count

#### hasValue

```ts
hasValue(): boolean
```

Determines if the observable has a non-null, non-undefined, non-zero and non-empty value.

##### Returns boolean

Returns true if the observable's value is assigned.

Inherited from Observable.hasValue

#### isNull

```ts
isNull(): boolean
```

Determines if the observable has a null value.

##### Returns boolean

Returns true if the observable's value is null.

Inherited from Observable.isNull

#### onetimeBind

```ts
onetimeBind(callback: (value: any) => void): void
```

Observe value changes for only one value update.

##### Parameters

- callback: (value: any) => void

##### Returns void

Inherited from Observable.onetimeBind
