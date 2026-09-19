---
title: "Language"
qualified_name: "WTK.Language"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > Language"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.Language.html"
defines: ["Language"]
member_count: 2
members: ["get", "hasTranslation"]
member_groups:
  "Methods": ["get", "hasTranslation"]
---

# Language

Language

### Methods

#### get

```ts
get(module: string, key: string): string
```

Get the translation from the current dectionary. If the translation is not available a key will be returned.

##### Parameters

- module: string
- key: string

##### Returns string

##### See

[hasTranslation](#hastranslation)

#### hasTranslation

```ts
hasTranslation(
    module: string,
    key: string,
    considerFallbacks?: boolean,
): boolean
```

Check if there is a translation in the dictionary.

##### Parameters

- module: string

  the translation moduule
- key: string

  the translation key to look up
- considerFallbacks: boolean = true

  (Optional) Whether to consider fallback languages or only the language file of the active language.

##### Returns boolean

##### See

[get](#get)
