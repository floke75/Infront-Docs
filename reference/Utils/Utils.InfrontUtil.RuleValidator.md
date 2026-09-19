---
title: "RuleValidator"
qualified_name: "Utils.InfrontUtil.RuleValidator"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > RuleValidator"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.RuleValidator.html"
defines: ["RuleValidator"]
member_count: 3
members: ["constructor", "getValidationResult", "isValid"]
member_groups:
  "Constructors": ["constructor"]
  "Methods": ["getValidationResult", "isValid"]
reference_count: 1
references: ["Utils.InfrontUtil.ValidationRule"]
---

# RuleValidator

Validator class to validate an options object against a set of validation rules
@utils

### Constructors

#### constructor

```ts
new RuleValidator(options: any, rules: ValidationRule<any>[]): RuleValidator
```

Create and validate options object against a set of validation rules

##### Parameters

- options: any

  The options object to be validated
- rules: [ValidationRule](./Utils.InfrontUtil.ValidationRule.md)<any>[]

  The validation rules
  @utils

##### Returns RuleValidator

### Methods

#### getValidationResult

```ts
getValidationResult(): string[]
```

Return the output from all validation rules that failed.

##### Returns string[]

#### isValid

```ts
isValid(): boolean
```

Return true if evaluation passes.
If validation does not pass, the details can be found in the console or by calling
[getValidationResult](#getvalidationresult).

##### Returns boolean
