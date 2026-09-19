---
title: "Realtime Handler"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Realtime Handler"
description: "Test snippet for Realtimehandler"
tags: ["widget", "test"]
example_config: {"title":"Realtime Handler","description":"Test snippet for Realtimehandler","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["CommonFramework-2.7.2.min.js","../../include/init.js"]}
source_url: "https://docs.infrontfinance.com/tests/Realtimehandler"
source_files: ["script.ts", "template.html", "config.json"]
---

# Realtime Handler

Test snippet for Realtimehandler

## Script (script.ts)

```typescript
document.getElementById('btn-feed-sub').disabled = false;
document.getElementById('btn-feed-un-sub').disabled = false;
document.getElementById('btn-symbol-sub').disabled = false;
document.getElementById('btn-symbol-un-sub').disabled = false;
```

## Markup (template.html)

```html
<h1>
    Simple realtime parser
    <div>Please check the console.</div>
    <h2>Feeds</h2>
    <table id="stream"></table>
    <button disabled="" id="btn-feed-sub" onclick="subscribeFeed()">Subscribe</button>
    <button disabled="" id="btn-feed-un-sub" onclick="unsubscribeFeed()">Unsubscribe</button>
    <h2>Symbols</h2>
    <button disabled="" id="btn-symbol-sub" onclick="subscribeSymbol()">Subscribe</button>
    <button disabled="" id="btn-symbol-un-sub" onclick="unsubscribeSymbol()">Unsubscribe</button>
    <br />
</h1>
```

