---
title: "Country"
qualified_name: "SDK.InfrontSDK.Country"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Country"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Country.html"
defines: ["Country"]
member_count: 6
members: ["alpha2", "alpha3", "code", "count", "id", "name"]
member_groups:
  "Properties": ["alpha2", "alpha3", "code", "count", "id", "name"]
reference_count: 1
references: ["SDK.InfrontSDK.countryList"]
---

# Country

A country object as returned by the [countryList](./SDK.InfrontSDK.countryList.md) function.

```ts
interface Country {
    alpha2: string;
    alpha3: string;
    code: number;
    count: number;
    id: number;
    name: string;
}
```

### Properties

#### alpha2

```ts
alpha2: string
```

country ISO Alpha-2 code

#### alpha3

```ts
alpha3: string
```

country ISO Alpha-3 code

#### code

```ts
code: number
```

country ISO Numeric country code

#### count

```ts
count: number
```

amount of items in this country, active filters applied

#### id

```ts
id: number
```

id of country

#### name

```ts
name: string
```

country name
