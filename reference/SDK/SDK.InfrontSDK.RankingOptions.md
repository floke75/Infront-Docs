---
title: "RankingOptions"
qualified_name: "SDK.InfrontSDK.RankingOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > RankingOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.RankingOptions.html"
defines: ["RankingOptions"]
member_count: 3
members: ["customRanking?", "field", "sortOrder?"]
member_groups:
  "Properties": ["customRanking?", "field", "sortOrder?"]
reference_count: 5
references: ["SDK.InfrontSDK.CustomRanking", "SDK.InfrontSDK.RankingField", "SDK.InfrontSDK", "SDK.InfrontSDK.SortOrder", "SDK.InfrontSDK.feedContents"]
---

# RankingOptions

Ranking request extra options.

#### See

[feedContents](./SDK.InfrontSDK.feedContents.md)

```ts
interface RankingOptions {
    customRanking?: CustomRanking;
    field: RankingField;
    sortOrder?: InfrontSDK.SortOrder;
}
```

### Properties

#### `Optional` customRanking

```ts
customRanking?: CustomRanking
```

Allows to rank on a pre-defined list instead of the whole feed.

##### Remarks

Custom ranking is limited to rank only on field `RankingField.Change`. If custom ranking option is assigned [field](#field) option will be overridden to ` RankingField.Change`.

#### field

```ts
field: RankingField
```

Ranking field.

#### `Optional` sortOrder

```ts
sortOrder?: InfrontSDK.SortOrder
```

Define ranking order. Use this option to display winners or losers. Default value is `SortOrder.Desc`
