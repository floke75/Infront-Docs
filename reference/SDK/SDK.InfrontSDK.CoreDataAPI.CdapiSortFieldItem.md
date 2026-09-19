---
title: "CdapiSortFieldItem<FieldName>"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiSortFieldItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiSortFieldItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiSortFieldItem.html"
defines: ["CdapiSortFieldItem"]
member_count: 2
members: ["field", "sort?"]
member_groups:
  "Properties": ["field", "sort?"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiSortDirection"]
---

# CdapiSortFieldItem<FieldName>

A sort specification for a specific field.

Setting a field's `sort` to `'off'` or ` null` will omit it from the data query.
Omitting `sort` or setting it to ` undefined` will send it as-is (which generally means `'asc'`).

```ts
interface CdapiSortFieldItem<FieldName extends string> {
    field: FieldName;
    sort?: CdapiSortDirection;
}
```

#### Type Parameters

- FieldName extends string

### Properties

#### field

```ts
field: FieldName
```

The field to sort on.

#### `Optional` sort

```ts
sort?: CdapiSortDirection
```

The optional sort direction, or `'off' | null` to omit it from the search.
