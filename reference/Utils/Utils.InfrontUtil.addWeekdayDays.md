---
title: "addWeekdayDays"
qualified_name: "Utils.InfrontUtil.addWeekdayDays"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > addWeekdayDays"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.addWeekdayDays.html"
defines: ["addWeekdayDays"]
---

# addWeekdayDays

```ts
addWeekdayDays(startDate: Date, weekdays: number): Date
```

Search for number of weekdays backward or forward in time from the given start-date.
Done by stepping through days and skipping weekends, until the number of given weekdays has been reached.
Does not know about weekdays being trading holidays, those will be treated as normal weekdays!

#### Parameters

- startDate: Date

  {Date} - start-date from where to search
- weekdays: number

  {number} - number of weekdays backward (negative) or forward (positive) in time

#### Returns Date

resulting date which is weekdays away from `startDate`
