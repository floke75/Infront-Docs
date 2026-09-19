---
title: "BasedefEntityMeta"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > BasedefEntityMeta"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta.html"
defines: ["BasedefEntityMeta"]
member_count: 8
members: ["cache_source", "cached", "elapsed_time", "error_code", "error_message", "expire", "request_timestamp", "status"]
member_groups:
  "Properties": ["cache_source", "cached", "elapsed_time", "error_code", "error_message", "expire", "request_timestamp", "status"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMetaCacheSource"]
---

# BasedefEntityMeta

meta information on entity level

#### Remarks

API Schema ID: dev.infrontfinance.basedef.EntityMeta

```ts
interface BasedefEntityMeta {
    cache_source: BasedefEntityMetaCacheSource;
    cached: boolean;
    elapsed_time: number;
    error_code: string;
    error_message: string;
    expire: number;
    request_timestamp: string;
    status: string;
}
```

### Properties

#### `Readonly` cache_source

```ts
cache_source: BasedefEntityMetaCacheSource
```

the source for the cache

##### Remarks

Format: enum

#### `Readonly` cached

```ts
cached: boolean
```

cached flag

#### `Readonly` elapsed_time

```ts
elapsed_time: number
```

the elapsed time indicates how long it took in milliseconds to generate the entity

##### Remarks

Format: int32

#### `Readonly` error_code

```ts
error_code: string
```

field to add an error-code for requests that should not throw

#### `Readonly` error_message

```ts
error_message: string
```

field to add an error-message for requests that should not throw

#### `Readonly` expire

```ts
expire: number
```

expire time in milliseconds

##### Remarks

Format: int32

#### `Readonly` request_timestamp

```ts
request_timestamp: string
```

the request timestamp

#### `Readonly` status

```ts
status: string
```

field to add some status information
