---
title: "OverridableObservable"
qualified_name: "Utils.InfrontUtil.OverridableObservable"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > OverridableObservable"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.OverridableObservable.html"
defines: ["OverridableObservable"]
member_count: 4
members: ["count", "hasValue", "isNull", "onetimeBind"]
member_groups:
  "Methods": ["count", "hasValue", "isNull", "onetimeBind"]
related_types: ["Utils.InfrontUtil.Observable"]
reference_count: 1
references: ["Utils.InfrontUtil.Observable"]
---

# OverridableObservable

An implementation of Observable that has an override-method. This is intended to allow for forcing the value without
having if-statements everywhere.
It saves any changes to the value while the override is in effect so nothing will be lost.

#### Hierarchy ([View Summary](../type-hierarchy.md#Utils.InfrontUtil.OverridableObservable))

- Observable

  - OverridableObservable

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
