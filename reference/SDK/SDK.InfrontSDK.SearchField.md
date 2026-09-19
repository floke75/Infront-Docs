---
title: "SearchField"
qualified_name: "SDK.InfrontSDK.SearchField"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SearchField"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SearchField.html"
defines: ["SearchField"]
member_count: 4
members: ["ChainFeed", "ChainName", "SearchFreeText", "SearchFreeTextFields"]
member_groups:
  "Properties": ["ChainFeed", "ChainName", "SearchFreeText", "SearchFreeTextFields"]
reference_count: 1
references: ["SDK.InfrontSDK.SearchParameters"]
---

# SearchField

Available search fields. This can be used as key for [search parameters](./SDK.InfrontSDK.SearchParameters.md)

```ts
interface SearchField {
    ChainFeed: number | number[];
    ChainName: string | string[];
    SearchFreeText: string;
    SearchFreeTextFields: (keyof SearchField)[];
}
```

### Properties

#### ChainFeed

```ts
ChainFeed: number | number[]
```

Search in specific chain only. This must be used in combination with [ChainName](#chainname).

#### ChainName

```ts
ChainName: string | string[]
```

Search in specific chain only. This must be used in combination with [ChainFeed](#chainfeed).

#### SearchFreeText

```ts
SearchFreeText: string
```

Search for passed free text. This can be used in combination with [SearchField.SearchFreeTextFields](#searchfreetextfields) to specify search fields. If no search field is specified it will search in all available fields.

#### SearchFreeTextFields

```ts
SearchFreeTextFields: (keyof SearchField)[]
```

Select fields used to search for free text. This must be used with [SearchField.SearchFreeText](#searchfreetext)
