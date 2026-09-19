---
title: "Financial Statements"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Financial Statements"
example_config: {"title":"Financial Statements","description":"","modify_date":"2025-12-08T12:27:24","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/FinancialStatements"
source_files: ["script.ts", "template.html", "config.json"]
---

# Financial Statements

## Script (script.ts)

```typescript
const opts = new Infront.AnalyticsFinancialStatementsWidgetOptions({
    instrument: { ticker: 'BMW', feed: 26 },
    showColumnDirectionDropdown: true,
    hasContentCallback: (hasContent) => console.log('AnalyticsFinancialStatementsWidget hasContent', hasContent),
    onReportTypeChanged: (reportType) => {
       console.log('AnalyticsFinancialStatementsWidget onReportTypeChanged:', reportType);
    },
    onReportPeriodCountChanged: (count) => {
        console.log('AnalyticsFinancialStatementsWidget onReportPeriodCountChanged:', count);
    },
    onColumnDirectionChanged: (columnDirection) => {
        console.log('AnalyticsFinancialStatementsWidget onColumnDirectionChanged:', columnDirection);
    },
});

const widget = infront.analyticsFinancialStatementsWidget("widget1", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget1"></div>
    </div>
</div>
```

