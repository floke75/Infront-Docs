---
title: "Fundamentals Screener"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Fundamentals Screener"
description: "Displays a fundamentals screener widget using AnalyticsFundamentalsScreenerWidget for financial data analysis."
tags: ["fundamentals-screener-widget", "AnalyticsFundamentalsScreenerWidget", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Fundamentals Screener","description":"Displays a fundamentals screener widget using AnalyticsFundamentalsScreenerWidget for financial data analysis.","modify_date":"2025-12-08T12:26:46","owner":"","tags":["fundamentals-screener-widget","AnalyticsFundamentalsScreenerWidget","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/FundamentalsScreener"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fundamentals Screener

Displays a fundamentals screener widget using AnalyticsFundamentalsScreenerWidget for financial data analysis.

## Script (script.ts)

```typescript
const initialColumns = [
    { field: 'name', width: 280 },
    { field: 'ticker', width: 160 },
    { field: 'currency', width: 160 },

    { field: 'gprv_total_score', width: 90 },
    { field: 'gprv_growth_score', width: 90 },
    { field: 'gprv_profitability_score', width: 90 },
    { field: 'gprv_risk_score', width: 90 },
    { field: 'gprv_value_score', width: 90 },

    { field: 'enterprise_value_sales_ratio', width: 90 },
    { field: 'gics_sector_name', width: 160 },
    { field: 'price_earnings_ratio', width: 180 },
    { field: 'dividend_yield', width: 90 },
    { field: 'enterprise_value_ebitda_ratio', width: 90 },
    { field: 'price_sales_ratio', width: 90 },
    { field: 'price_bookvalue_ratio', width: 90 },
    { field: 'market_capitalization_eur', width: 90 },
];

const groupableColumnIds = new Set(); // filled after widget has been constructed

const widget = infront.analyticsFundamentalsScreenerWidget('AnalyticsFundamentalsScreenerWidget', {
    id: 'DemoAnalyticsFundamentalsScreenerWidget',
    persistState: true,
    minimumMarketCap: { currency: 'EUR', value: 5e06 },
    autoSizeColumns: true,
    allowColumnDragRemove: true,
    allowColumnMove : true,
    columns: initialColumns,
    sortColumns: [{ name: 'name', sort: 'desc' }],
    columnDefOverwrites: {
        'name': {
            overwrites: {
                onCellClicked: function() {
                    console.log('[AnalyticsFundamentalsScreener] onCellClicked name', arguments);
                },
            },
            strategy: 'merge-prio',
        },
    },
    onColumnsChanged(eventData) {
        console.log('AnalyticsFundamentalsScreenerWidget onColumnsChanged', eventData);
        const selectedColumns = eventData?.map(c => c.field).filter(n => groupableColumnIds.has(n)) ?? [];
        columnPickerWidget?.modify({ selectedColumns });
    },
    onFilterChanged(eventData) {
    },
    hasContentCallback(hasContent, data) {
        console.log('AnalyticsFundamentalsScreenerWidget hasContent', { hasContent, data });
    },
    onDataAvailable(data) {
        console.log('AnalyticsFundamentalsScreenerWidget onDataAvailable', data);
    },
    onInstrumentClicked(symbol) {
        console.log(symbol);
    },
    onPinnedTopRowIsinsChanged: (isins) => {
        console.log('Pinned top rows changed', isins);
    },
    onPinnedBottomRowIsinsChanged: (isins) => {
        console.log('Pinned bottom rows changed', isins);
    },
});

console.info('AnalyticsFundamentalsScreenerWidget:', widget);

const availableColumnGroups = widget.getAvailableColumnPickerGroups();

for (const item of availableColumnGroups.flatMap(g => g.items)) {
    groupableColumnIds.add(item.id);
}

const columnPickerWidget = infront.columnPickerWidget('ColumnPickerWidget', {
    groups: availableColumnGroups,
    selectedColumns: widget.getCurrentColumns().filter(n => groupableColumnIds.has(n.name)).map(n => n.name),
    onSelectionChanged: (selectedColumns) => {
        widget.modify({ columns: [ 'name', ...selectedColumns ]}); // re-add name column
    },
    hasContentCallback: (hasContent, item) => {
    },
    onReady: () => {
    },
});
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div class="filter-header">
                <div class="cell-flex-row cell-flex-align-right">
                    <div class="cell-flex-column cell-flex-shrink cell-flex-collapse">
                        <div id="ColumnPickerWidget"></div>
                    </div>
                </div>
            </div>

            <div id="AnalyticsFundamentalsScreenerWidget" style="width: 100%; height: 400px"></div>
        </div>
    </div>
</div>
```

