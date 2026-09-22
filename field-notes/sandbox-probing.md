---
title: "Probing the live service through the sandbox"
kind: field-note
page_type: field-note
module: SDK
verified: "2026-09-22"
source: "live sandbox, EFN documentation test user, SDK 2.3.1"
---

# Probing the live service through the sandbox

The fastest way to settle a question the docs leave open is to ask the live service. Infront's online
sandbox (`https://docs.infrontfinance.com/sandbox`) runs code against a logged-in SDK, and its result pane
can be driven from outside the editor.

## Getting a handle on the SDK

- **A person signs in**; an agent should not type the credentials. The sign-in page is
  `infront.cloud.eu.infrontservices.com`, reached from the docs site.
- The sandbox's RESULT pane is a **same-origin `blob:` iframe**. It exposes these globals:
  `infront` (a logged-in `Infront.UI`), `sdk` (its `InfrontSDK.SDK`), `InfrontSDK`, `InfrontUtil`, `Infront`,
  `InfrontConstants`, `InfrontTAPIUtils`. The top page has none of them.
- From the top page (for example a browser automation's JavaScript evaluator):

```js
const w = document.querySelector('iframe').contentWindow;
const S = w.InfrontSDK;
w.sdk.version();                      // "2.3.1" on 2026-09-22
```

## Reading results — they arrive after `onData`

Most requests hand `onData` an `InfrontUtil.ObservableArray` that is **still empty** and fills afterwards.
Reading `length()` inside `onData` returns 0. Either observe it, or wait and then read:

```js
// search: observe until results stop arriving
const search = (parameters, limit = 15) => new Promise((resolve) => {
  const got = []; let quiet;
  const settle = () => { clearTimeout(quiet); quiet = setTimeout(() => resolve(got), 1200); };
  setTimeout(() => resolve(got), 8000);
  w.sdk.get(S.symbolSearch({
    parameters, limit,
    fields: ["Feed", "Ticker", "FullName", "SymbolType", "FeedDesc", "FeedAccess", "FeedDelayStr", "Currency"],
    onData: (results) => { results.observe({ reInit: (xs) => { got.push(...xs); settle(); },
                                             itemAdded: (x) => { got.push(x); settle(); } }); settle(); },
  }));
});
// search results are plain objects: r.Feed, r.Ticker, r.FeedAccess, …
```

`symbolData` with an ARRAY of ids is the exception that proves the rule: its `ObservableArray` already
holds the `SymbolData` items, with values, on the first `onData` — see [streaming.md](streaming.md).

## Long-running probes

Automation tools cap a single evaluation (45 s in the one used here). For a subscription you want to watch
for a minute, start it, keep its state on `w`, return, and read it back in a later call:

```js
w.__probe = { events: 0 };
w.__probe.unsub = w.sdk.get(S.timeSeries({ /* … */ subscribe: true,
  onData: (d) => { w.__probe.arr = d; w.__probe.unbind = d.observe({ itemChanged: () => w.__probe.events++ }); } }));
// …later call: read w.__probe, then w.__probe.unbind(); w.__probe.unsub();
```

## Errors: keep all of them

A failing request can call `onError` more than once, and the first call is the informative one (a
`NoAccess` naming the feed and ticker, before a generic `Internal error!`). Push every error into a list;
a probe that keeps only the last one reports the useless error ([errors-and-access.md](errors-and-access.md)).

## Clean up

Call the `Unsubscribe` every `sdk.get` returns and every `Unbind` from `observe`. Unbinding alone does not
end the subscription (`reference/SDK/SDK.InfrontSDK.Unbind.md`).
