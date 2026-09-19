---
title: "Screeneractivefilters"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Screeneractivefilters"
description: "Test snippet for Screeneractivefilters"
tags: ["widget", "test", "widget:ScreenerActiveFiltersWidget", "widget:ScreenerWidget", "widget:activeFiltersWidget", "widget:screenerWidget"]
demonstrates: ["ScreenerActiveFiltersWidget", "ScreenerWidget", "activeFiltersWidget", "screenerWidget"]
example_config: {"title":"Screeneractivefilters","description":"Test snippet for Screeneractivefilters","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:ScreenerActiveFiltersWidget","widget:ScreenerWidget","widget:activeFiltersWidget","widget:screenerWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Screeneractivefilters"
source_files: ["script.ts", "template.html", "config.json"]
---

# Screeneractivefilters

Test snippet for Screeneractivefilters

Demonstrates: `ScreenerActiveFiltersWidget`, `ScreenerWidget`, `activeFiltersWidget`, `screenerWidget`

## Script (script.ts)

```typescript
var opts = new Infront.ScreenerWidgetOptions();
opts.feed = 18197;
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Append;
opts.title = 'Filters';
opts.collapsable = true;
opts.filters = [
    {
        defaultExpanded: true,
        filterField: 'STAR_RATING',
        header: 'Morningstar Rating',
        filterItems: [
            new Infront.FilterItem('Not Rated', (val) => {
                return typeof val == 'undefined' || val == 0;
            }),
            new Infront.FilterItem('★', (val) => {
                return val == 1;
            }),
            new Infront.FilterItem('★★', (val) => {
                return val == 2;
            }),
            new Infront.FilterItem('★★★', (val) => {
                return val == 3;
            }),
            new Infront.FilterItem('★★★★', (val) => {
                return val == 4;
            }),
            new Infront.FilterItem('★★★★★', (val) => {
                return val == 5;
            }),
        ],
    },
    Infront.FilterEnum.Risklevel,
];
opts.searchBox = {
    filterField: ['FULL_NAME', 'RISK_LEVEL'],
    header: 'NAME CONTAINING',
    placeholder: 'Search here',
};

var activeOpts = new Infront.ScreenerActiveFiltersWidgetOptions();
activeOpts.linkChannels = [4555];
activeOpts.linkAction = Infront.LinkAction.Append;
infront.activeFiltersWidget('activeFilters', activeOpts);
infront.screenerWidget('screener', opts);
```

## Markup (template.html)

```html
<div id="screener"></div>
<div id="activeFilters"></div>
```

