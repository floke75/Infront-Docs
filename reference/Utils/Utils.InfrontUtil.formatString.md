---
title: "formatString"
qualified_name: "Utils.InfrontUtil.formatString"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > formatString"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.formatString.html"
defines: ["formatString"]
---

# formatString

```ts
formatString(format: string, params: any[]): string
```

Returns a formatted string using the specified format string and arguments.

#### Parameters

- format: string

  A format string
- params: any[]

  Arguments referenced by the format specifiers in the format string.
  If there are more arguments than format specifiers, the extra arguments are ignored.

#### Returns string

A formatted string.

#### Example

```ts
<pre>
       let msg = 'Hello {0}, {1} and {2}';
       let sentence = InfrontUtil.formatString(msg, ['World', 'Foo', 'Bar']);
</pre>
```
