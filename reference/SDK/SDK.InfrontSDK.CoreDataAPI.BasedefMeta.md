---
title: "BasedefMeta"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.BasedefMeta"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > BasedefMeta"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.BasedefMeta.html"
defines: ["BasedefMeta"]
member_count: 5
members: ["elapsed_time", "expire", "page_size", "request_timestamp", "size"]
member_groups:
  "Properties": ["elapsed_time", "expire", "page_size", "request_timestamp", "size"]
---

# BasedefMeta

global meta information for the request

#### Remarks

API Schema ID: dev.infrontfinance.basedef.Meta

```ts
interface BasedefMeta {
    elapsed_time: number;
    expire: number;
    page_size: number;
    request_timestamp: string;
    size: number;
}
```

### Properties

#### `Readonly` elapsed_time

```ts
elapsed_time: number
```

the elapsed time indicates how long it took in milliseconds to generate the entity

##### Remarks

Format: int32

#### `Readonly` expire

```ts
expire: number
```

expire time in milliseconds

##### Remarks

Format: int32

#### `Readonly` page_size

```ts
page_size: number
```

deprecated, use page_size from Pagination message instead

##### Remarks

Format: int32

#### `Readonly` request_timestamp

```ts
request_timestamp: string
```

the request timestamp

#### `Readonly` size

```ts
size: number
```

deprecated, use size from Pagination message instead

##### Remarks

Format: int32
