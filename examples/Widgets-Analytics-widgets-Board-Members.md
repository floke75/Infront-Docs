---
title: "Board Members"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Board Members"
description: "Displays a board members widget using AnalyticsBoardMembersWidgetOptions for a given instrument."
tags: ["board-members-widget", "AnalyticsBoardMembersWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Board Members","description":"Displays a board members widget using AnalyticsBoardMembersWidgetOptions for a given instrument.","modify_date":"2025-12-08T12:29:04","owner":"","tags":["board-members-widget","AnalyticsBoardMembersWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/BoardMembers"
source_files: ["script.ts", "template.html", "config.json"]
---

# Board Members

Displays a board members widget using AnalyticsBoardMembersWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsBoardMembersWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    maxItems: 15,
    topRolesCssClass: 'cell-table__field--top-roles', // highlight the top roles
    source: 'STANDARD_AND_POORS',
    hasContentCallback: (hasContent) => console.log('AnalyticsBoardMembersWidget hasContent', hasContent),
});

const widget = infront.analyticsBoardMembersWidget('widget1', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

