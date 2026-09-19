---
title: "Customlistwidgets"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Customlistwidgets"
description: "Test snippet for Customlistwidgets"
tags: ["widget", "test", "widget:MyListsWidget", "widget:myListsWidget"]
demonstrates: ["MyListsWidget", "myListsWidget"]
example_config: {"title":"Customlistwidgets","description":"Test snippet for Customlistwidgets","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:MyListsWidget","widget:myListsWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Customlistwidgets"
source_files: ["script.ts", "config.json"]
---

# Customlistwidgets

Test snippet for Customlistwidgets

Demonstrates: `MyListsWidget`, `myListsWidget`

## Script (script.ts)

```typescript
var opts = new Infront.MyListsWidgetOptions();
opts.columns = ['FULL_NAME', 'LAST', 'PCT_CHANGE'];
infront.myListsWidget('#mylist', opts);
```

