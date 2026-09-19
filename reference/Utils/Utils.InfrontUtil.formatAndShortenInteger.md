---
title: "formatAndShortenInteger"
qualified_name: "Utils.InfrontUtil.formatAndShortenInteger"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > formatAndShortenInteger"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.formatAndShortenInteger.html"
defines: ["formatAndShortenInteger"]
---

# formatAndShortenInteger

```ts
formatAndShortenInteger(val: number, nb?: number): string
```

Formats the value as an integer, but shortens it with k or m (or other letters specified in the language-dictionary):
If val is bigger than 100 000, shorten with k (250 000 => 250k)
If val is bigger than 10 000 000, shorten with m (35 000 000 =>35m)
Otherwise just format as integer.

#### Parameters

- val: number
- `Optional` nb: number

#### Returns string
