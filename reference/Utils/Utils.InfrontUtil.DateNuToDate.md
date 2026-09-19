---
title: "DateNuToDate"
qualified_name: "Utils.InfrontUtil.DateNuToDate"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > DateNuToDate"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.DateNuToDate.html"
defines: ["DateNuToDate"]
---

# DateNuToDate

```ts
DateNuToDate(dateNu: number, date: Date): boolean
```

Convert from date nu format to date object. Date nu is formatted yyyymmdd.

#### Parameters

- dateNu: number

  Date formatted as number yyyymmdd.
- date: Date

  Output date object. This wil not be changed if the date nu is not formatted correctly

#### Returns boolean

true if date nu is correctly formatted
