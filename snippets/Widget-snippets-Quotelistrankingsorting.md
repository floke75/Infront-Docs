---
title: "Quotelistrankingsorting"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Quotelistrankingsorting"
description: "Test snippet for Quotelistrankingsorting"
tags: ["widget", "test", "widget:quoteList"]
demonstrates: ["quoteList"]
example_config: {"title":"Quotelistrankingsorting","description":"Test snippet for Quotelistrankingsorting","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Quotelistrankingsorting"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Quotelistrankingsorting

Test snippet for Quotelistrankingsorting

Demonstrates: `quoteList`

## Script (script.ts)

```typescript
opts2 = new Infront.QuoteListWidgetOptions();
opts2.defaultSortedColumn = 'PCT_CHANGE';
opts2.feed = 4509;
opts2.columns = [
    {
        name: 'FULL_NAME',
        hover: 'TICKER',
        flag: true,
    },
    {
        name: 'LAST_VALID',
    },
    {
        name: 'PCT_CHANGE',
    },
];
opts2.sortable = true;
opts2.defaultSortOrder = 'asc';

widgets.push(infront.quoteList('#quotelist2', opts2));
```

## Markup (template.html)

```html
<div class="container">
    <button onclick="updateSorting(1)">sort asc</button>
    <button onclick="updateSorting(0)">sort desc</button>
    <button onclick="bindingsL()">symbolsToShow.itemsUnbinds</button>
    <div class="cell-row">
        <div class="cell cell--w12" id="quotelist2"></div>
    </div>
</div>
```

## Styles (style.css)

```css
table {
    counter-reset: row-num -1;
}

table tr {
    counter-increment: row-num;
}

table tr td:first-child::before {
    content: counter(row-num) '. ';
}
```

