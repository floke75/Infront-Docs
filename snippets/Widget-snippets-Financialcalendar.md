---
title: "Financialcalendar"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Financialcalendar"
description: "Test snippet for Financialcalendar"
tags: ["widget", "test", "widget:FinancialCalendarWidget", "widget:FundAllocationPieChartWidget", "widget:FundAllocationWidget", "widget:financialCalendarWidget", "widget:fundAllocationPieChartWidget", "widget:fundAllocationWidget"]
demonstrates: ["FinancialCalendarWidget", "FundAllocationPieChartWidget", "FundAllocationWidget", "financialCalendarWidget", "fundAllocationPieChartWidget", "fundAllocationWidget"]
example_config: {"title":"Financialcalendar","description":"Test snippet for Financialcalendar","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FinancialCalendarWidget","widget:FundAllocationPieChartWidget","widget:FundAllocationWidget","widget:financialCalendarWidget","widget:fundAllocationPieChartWidget","widget:fundAllocationWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js","../js/infrontUI-latest.c.js","http://code.highcharts.com/stock/5.0.14/highstock.src.js"],"styles":["http://fonts.googleapis.com/css?family=Roboto:light,regular,thin,italic,bold"]}
source_url: "https://docs.infrontfinance.com/tests/Financialcalendar"
source_files: ["script.ts", "config.json"]
---

# Financialcalendar

Test snippet for Financialcalendar

Demonstrates: `FinancialCalendarWidget`, `FundAllocationPieChartWidget`, `FundAllocationWidget`, `financialCalendarWidget`, `fundAllocationPieChartWidget`, `fundAllocationWidget`

## Script (script.ts)

```typescript
var financialCalendarWidgetOptions = new Infront.FinancialCalendarWidgetOptions();
financialCalendarWidgetOptions.countryCodes = ['GB'];
financialCalendarWidgetOptions.endDate = InfrontUtil.addMonths(new Date(), 6);
financialCalendarWidgetOptions.paging = true;
financialCalendarWidgetOptions.layout = Infront.FinancialCalendarLayout.EXPANDED;
financialCalendarWidgetOptions.hasContentCallback = (hasContent, content) => {
    content;
    hasContent;
};
financialCalendarWidgetOptions.defaultContent = 'No data available';
infront.financialCalendarWidget('#financialcal', financialCalendarWidgetOptions);

var fundAllocationWidget = new Infront.FundAllocationWidgetOptions();
fundAllocationWidget.instrument = new Infront.Instrument(2260, '0P00000MVB');
infront.fundAllocationWidget('#fundAllocation', fundAllocationWidget);

var fundPieOpts = new Infront.FundAllocationPieChartWidgetOptions();
fundPieOpts.instruments = [
    new Infront.Instrument(2260, '0P00000F92'),
    new Infront.Instrument(2260, '0P00000MVB'),
];
fundPieOpts.allocationType = 'Country';
fundPieOpts.innerSize = '33%';
fundPieOpts.legend = true;
infront.fundAllocationPieChartWidget('#fundAllocationPie', fundPieOpts);
```

