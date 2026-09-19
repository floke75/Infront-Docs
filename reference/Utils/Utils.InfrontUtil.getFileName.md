---
title: "getFileName"
qualified_name: "Utils.InfrontUtil.getFileName"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getFileName"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getFileName.html"
defines: ["getFileName"]
---

# getFileName

```ts
getFileName(inputString: string, removeWhitespace?: boolean): string
```

Sanitizes a string by replacing forbidden printable ASCII characters (and optionally whitespace) with underscores.
These characters are typically not allowed in file paths on Linux/Unix and Windows systems.

#### Parameters

- inputString: string

  The input string to be sanitized.
- `Optional` removeWhitespace: boolean = false

  If true, whitespace characters are also replaced with underscores.

#### Returns string

The sanitized string with forbidden characters (and optionally whitespace) replaced by underscores.

#### Example

```ts
// returns "This_is_a_test_"
getFileName('This is a test: /\\|?*<>"');
```

#### Example

```ts
// returns "This_is_a_test_"
getFileName('This is a test: /\\|?*<>"', true);
```
