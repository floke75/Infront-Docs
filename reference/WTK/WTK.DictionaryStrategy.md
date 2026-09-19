---
title: "DictionaryStrategy"
qualified_name: "WTK.DictionaryStrategy"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > DictionaryStrategy"
source_url: "https://docs.infrontfinance.com/docs/enums/WTK.DictionaryStrategy.html"
defines: ["DictionaryStrategy"]
member_count: 3
members: ["FILL", "OVERWRITE", "STANDALONE"]
member_groups:
  "Enumeration Members": ["FILL", "OVERWRITE", "STANDALONE"]
---

# DictionaryStrategy

Dictionary Strategy

### Enumeration Members

#### FILL

```ts
FILL: "fill"
```

Only fill missing key/value entries in locale json files.

#### OVERWRITE

```ts
OVERWRITE: "overwrite"
```

Let custom translations overwrite locale json file key/value entries.

#### STANDALONE

```ts
STANDALONE: "standalone"
```

Only use custom translations as the dictionary. Translations from locale json files will be ignored.
