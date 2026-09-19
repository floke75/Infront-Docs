---
title: "TimeNuToDate"
qualified_name: "Utils.InfrontUtil.TimeNuToDate"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > TimeNuToDate"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.TimeNuToDate.html"
defines: ["TimeNuToDate"]
---

# TimeNuToDate

```ts
TimeNuToDate(timeNu: number, date: Date, minOfs: number): boolean
```

Convert from time nu format to date object. Time nu is formatted hhmmss.

#### Parameters

- timeNu: number

  Date formatted as number hhmmss.
- date: Date

  Output date object. This wil not be changed if the date nu is not formatted correctly
- minOfs: number

  offset in minutes

#### Returns boolean

true if date nu is correctly formatted
