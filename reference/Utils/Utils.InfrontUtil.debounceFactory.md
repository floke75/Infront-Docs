---
title: "debounceFactory"
qualified_name: "Utils.InfrontUtil.debounceFactory"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > debounceFactory"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.debounceFactory.html"
defines: ["debounceFactory"]
---

# debounceFactory

```ts
debounceFactory(
    delay: number,
    skipCount?: number,
    doImmediateFirstCall?: boolean,
): <T extends (...args: readonly any[]) => void>(callback: T) => T
```

Method to debounce a function call with a two step approach. First create the debounce method with the delay and skipCount. Then call the returned method with the callback.
to debounce. Skip is used to completely skip the first x calls. This is useful when you want to skip the first call and only debounce the following calls.
The first call that isn't skipped will be called without delay.

The reason for the two step approach is that we need a closure to hold state needed for the debounce.

#### Parameters

- delay: number

  Milliseconds for the debounce delay.
- skipCount: number = 0

  Number of calls to skip.
- doImmediateFirstCall: boolean = true

#### Returns <T extends (...args: readonly any[]) => void>(callback: T) => T

A method that takes a callback to debounce.
