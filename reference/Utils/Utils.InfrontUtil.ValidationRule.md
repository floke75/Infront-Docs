---
title: "ValidationRule<TOptions>"
qualified_name: "Utils.InfrontUtil.ValidationRule"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > ValidationRule"
source_url: "https://docs.infrontfinance.com/docs/interfaces/Utils.InfrontUtil.ValidationRule.html"
defines: ["ValidationRule"]
member_count: 4
members: ["name?", "required?", "type?", "values?"]
member_groups:
  "Properties": ["name?", "required?", "type?", "values?"]
---

# ValidationRule<TOptions>

Validation rules to verify valid options objects
@utils

```ts
interface ValidationRule<TOptions = any> {
    name?: keyof TOptions;
    required?:
        | keyof TOptions
        | (keyof TOptions)[]
        | { [k in string | number | symbol]?: any };
    type?: string | string[] | ((value: any) => string);
    values?: string | string[] | ((options: TOptions) => string | string[]);
}
```

#### Type Parameters

- TOptions = any

### Properties

#### `Optional` name

```ts
name?: keyof TOptions
```

Name of the property to be evaluated.

#### `Optional` required

```ts
required?:
    | keyof TOptions
    | (keyof TOptions)[]
    | { [k in string | number | symbol]?: any }
```

A list of one or more fields that are required. It can be string, array of strings and object.
Setting required for a property to undefined will require that property when the named property has any value (see example).
Setting required for a property to null will require that property when the named property is not assigned.

##### Remarks

- If the rule has no name property, all the specified field(s) are required.
  Format: **<requiredProperty>** or **<requiredProperty: value1, value2, ... valueN>**

##### Example

```typescript
{ //rule 1
 required: ["prop1", "prop2"]
},
{ //rule 2
 required: "prop3"
}
// Rule 1 will require all properties "prop1" and "prop2"
// Rule 2 will require "prop3"
// Validation result will require setting values for "prop1", "prop2" and "prop3".
```

- If one or more values are specified, the requiredProperty is only relevant
  if the property has one of the specified values.

##### Example

```typescript
{
  name: "action",
  values: ["add", "remove", "modify"],
  required: {
      description: ["add", "modify"]
  },
},
// description will be required only if action's value is "add" or "modify"
```

##### Example

```typescript
{
  name: "firstName",
  required: {
      lastName: undefined
  },
},
// lastName will be required only if firstName is assigned.
```

#### `Optional` type

```ts
type?: string | string[] | ((value: any) => string)
```

Valid property types. Can be a string, an array of strings or user defined callback to check the type manually (see example 2). Available values:

- integer
- number
- string
- function

##### Example

```typescript
{
  name: "desc",
  type: "string",
}
// This rule will check data type of desc and it will fail if desc type is not string.
```

##### Example

```typescript
{
  name: "startDate",
  type: (value) => value instanceof Date,
}
// This rule will check data type of startDate and it will fail if startDate type is not instance of Date.
```

#### `Optional` values

```ts
values?: string | string[] | ((options: TOptions) => string | string[])
```

A list of one or more acceptable values for this property

##### Remarks

Currently only accepts a string or an array of strings. Expand as required.
