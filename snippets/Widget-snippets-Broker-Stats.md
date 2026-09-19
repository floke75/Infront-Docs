---
title: "Broker Stats"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Broker Stats"
description: "Test snippet for Brokerstats"
tags: ["widget", "test", "widget:BrokerstatsWidget", "widget:brokerstatsWidget"]
demonstrates: ["BrokerstatsWidget", "brokerstatsWidget"]
example_config: {"title":"Broker Stats","description":"Test snippet for Brokerstats","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:BrokerstatsWidget","widget:brokerstatsWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Brokerstats"
source_files: ["script.ts", "template.html", "config.json"]
---

# Broker Stats

Test snippet for Brokerstats

Demonstrates: `BrokerstatsWidget`, `brokerstatsWidget`

## Script (script.ts)

```typescript
var opts = new Infront.BrokerstatsWidgetOptions();
//opts.feed = 17921;
opts.instrument = new Infront.Instrument(17921, 'ABB');
opts.columns = ['NAME', 'FULLNAME', 'BUY_VALUE', 'SELL_VALUE', 'TOTAL_VALUE'];
opts.period = InfrontConstants.BrokerStatsPeriods.INTRADAY;
opts.sortable = true;
opts.defaultSortedColumn = 4;
opts.enablePeriodSelector = true;

infront.brokerstatsWidget('#brokerstats', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="brokerstats"></div>
    </div>
</div>
```

