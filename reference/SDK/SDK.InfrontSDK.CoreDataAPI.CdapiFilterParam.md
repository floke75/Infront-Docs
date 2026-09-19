---
title: "CdapiFilterParam<T>"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFilterParam"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFilterParam"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFilterParam.html"
defines: ["CdapiFilterParam"]
member_count: 6
members: ["eq?", "ge?", "gt?", "le?", "lt?", "ne?"]
member_groups:
  "Properties": ["eq?", "ge?", "gt?", "le?", "lt?", "ne?"]
---

# CdapiFilterParam<T>

Represents a set of filter parameters.

```ts
interface CdapiFilterParam<T extends number | string> {
    eq?: T;
    ge?: T;
    gt?: T;
    le?: T;
    lt?: T;
    ne?: T;
}
```

#### Type Parameters

- T extends number | string

### Properties

#### `Optional` ` Readonly`eq

```ts
eq?: T
```

Filter on values "equal"

#### `Optional` ` Readonly`ge

```ts
ge?: T
```

Filter on values "greater than or equal"

#### `Optional` ` Readonly`gt

```ts
gt?: T
```

Filter on values "greater than"

#### `Optional` ` Readonly`le

```ts
le?: T
```

Filter on values "less than or equal"

#### `Optional` ` Readonly`lt

```ts
lt?: T
```

Filter on values "less than"

#### `Optional` ` Readonly`ne

```ts
ne?: T
```

Filter on values "not equal"
