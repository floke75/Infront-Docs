---
title: "RFQ Order entry"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > RFQ Order entry"
description: "Shows how to initialize request for quote RFQ order entry widget."
tags: ["order-entry-widget", "RFQOrderEntryWidgetOptions", "RFQOrderEntryWidget", "widgets", "examples", "wtk", "trading", "rfq"]
example_config: {"title":"RFQ Order entry","description":"Shows how to initialize request for quote RFQ order entry widget","modify_date":"2026-05-06T12:33:48","owner":"","tags":["trading","orderentry","rfq","widget"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/rfqOrderentry"
source_files: ["script.ts", "template.html", "config.json"]
---

# RFQ Order entry

Shows how to initialize request for quote RFQ order entry widget.

## Script (script.ts)

```typescript
infront.rfqOrderEntry('RFQOrderEntryWidget', {
    instrument: { "ticker": "BARC", "feed": 19 },
    clientBIC: 'REDBGB21'
});
```

## Markup (template.html)

```html
<div class="cell-flex-column" style="max-width: fit-content; min-height: 425px;">
    <div class="cell-content">
        <div id="RFQOrderEntryWidget" class="widget-container"></div>
    </div>
</div>
```

