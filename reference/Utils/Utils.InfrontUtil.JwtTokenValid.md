---
title: "JwtTokenValid"
qualified_name: "Utils.InfrontUtil.JwtTokenValid"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > JwtTokenValid"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.JwtTokenValid.html"
defines: ["JwtTokenValid"]
reference_count: 1
references: ["Utils.InfrontUtil.JwtTokenParse"]
---

# JwtTokenValid

Checks if token is valid to be used. Currently only checks if it is expired. This function can be used in combination with JwtTokenParse.

#### Param: parsedOrRawToken

Json web token (JWT) to validate or parsed token object.

#### Returns

boolean true if valid, false if not.

```ts
JwtTokenValid(jwtToken: string): boolean
```

#### Parameters

- jwtToken: string

#### Returns boolean

```ts
JwtTokenValid(parsedToken: Object): boolean
```

#### Parameters

- parsedToken: Object

#### Returns boolean
