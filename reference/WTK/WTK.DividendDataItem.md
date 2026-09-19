---
title: "DividendDataItem"
qualified_name: "WTK.DividendDataItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > DividendDataItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.DividendDataItem.html"
defines: ["DividendDataItem"]
member_count: 4
members: ["dividend?", "text?", "title?", "x"]
member_groups:
  "Properties": ["dividend?", "text?", "title?", "x"]
---

# DividendDataItem

An item that holds (share-) dividend-data

```ts
interface DividendDataItem {
    dividend?: number;
    text?: string;
    title?: string;
    x: number;
}
```

### Properties

#### `Optional` dividend

```ts
dividend?: number
```

dividend value

#### `Optional` text

```ts
text?: string
```

dividend text

#### `Optional` title

```ts
title?: string
```

dividend title

#### x

```ts
x: number
```

timestamp
