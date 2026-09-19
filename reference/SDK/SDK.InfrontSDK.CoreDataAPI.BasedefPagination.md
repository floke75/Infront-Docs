---
title: "BasedefPagination"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.BasedefPagination"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > BasedefPagination"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.BasedefPagination.html"
defines: ["BasedefPagination"]
member_count: 3
members: ["index", "page_size", "size"]
member_groups:
  "Properties": ["index", "page_size", "size"]
---

# BasedefPagination

pagination helping to navigate through the results

#### Remarks

API Schema ID: dev.infrontfinance.basedef.Pagination

```ts
interface BasedefPagination {
    index: number;
    page_size: number;
    size: number;
}
```

### Properties

#### `Readonly` index

```ts
index: number
```

##### Remarks

Format: int32

#### `Readonly` page_size

```ts
page_size: number
```

##### Remarks

Format: int32

#### `Readonly` size

```ts
size: number
```

##### Remarks

Format: int32
