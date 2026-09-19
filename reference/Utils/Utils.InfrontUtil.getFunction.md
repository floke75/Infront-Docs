---
title: "getFunction"
qualified_name: "Utils.InfrontUtil.getFunction"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getFunction"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getFunction.html"
defines: ["getFunction"]
---

# getFunction

```ts
getFunction<Context extends object, Fn extends Function>(
    obj: Context,
    fnKey: string,
): Fn
```

Retrieves a function from an object by key in a type-safe manner.

This utility checks whether the given key exists in the object
and whether its value is a function before returning it.
If the key does not exist or is not a function, it returns undefined.

#### Type Parameters

- Context extends object

  The type of the object being searched.
- Fn extends Function

  The expected function type to retrieve.

#### Parameters

- obj: [Context](#getfunctioncontext)

  The object to search in.
- fnKey: string

  The property key that may reference a function.

#### Returns [Fn](#getfunctionfn)

The function at fnKey if it exists and is a function, otherwise undefined.

#### Example

```ts
const utils = {
  greet: (name: string) => `Hello, ${name}!`,
};

const greetFn = getFunction(utils, "greet");

console.log(greetFn?.("Alex")); // "Hello, Alex!"
```
