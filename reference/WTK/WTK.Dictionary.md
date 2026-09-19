---
title: "Dictionary"
qualified_name: "WTK.Dictionary"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > Dictionary"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.Dictionary.html"
defines: ["Dictionary"]
member_count: 3
members: ["isMultilingual?", "strategy?", "translations"]
member_groups:
  "Properties": ["isMultilingual?", "strategy?", "translations"]
reference_count: 1
references: ["WTK.DictionaryStrategy"]
---

# Dictionary

Dictionary

```ts
interface Dictionary {
    isMultilingual?: boolean;
    strategy?: DictionaryStrategy;
    translations: any;
}
```

### Properties

#### `Optional` isMultilingual

```ts
isMultilingual?: boolean
```

Boolean indicating whether or not the Dictionary is multilingual
If set to true, then translations need to start on the first object level with locale iso alpha 2 codes

#### `Optional` strategy

```ts
strategy?: DictionaryStrategy
```

The strategy defines how the Dictionary translations interact with the translations of locale json files, by default DictionaryStrategy.OVERWRITE

#### translations

```ts
translations: any
```

The custom translations of the dictionary
