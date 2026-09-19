---
title: "Documents"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Documents"
description: "Test snippet for Documents"
tags: ["widget", "test", "widget:DocumentsWidget", "widget:QuoteListWidget", "widget:documentsWidget", "widget:quoteList"]
demonstrates: ["DocumentsWidget", "QuoteListWidget", "documentsWidget", "quoteList"]
example_config: {"title":"Documents","description":"Test snippet for Documents","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:DocumentsWidget","widget:QuoteListWidget","widget:documentsWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Documents"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Documents

Test snippet for Documents

Demonstrates: `DocumentsWidget`, `QuoteListWidget`, `documentsWidget`, `quoteList`

## Script (script.ts)

```typescript
Infront.DEBUG_REQUESTS = true;
var opts = new Infront.DocumentsWidgetOptions();
opts.showSearchWidget = true;
// opts.id = 'doc-widget';
// opts.instrument = new Infront.Instrument(2358, "OG7U");
opts.instrument = { isin: 'DE0008474511' };
//opts.widgetTitle = "My docs";
opts.tickerInHeader = true;

//COUNTRIES OPTIONS
opts.showOnlyAvailableCountries = true;
// opts.showCountriesSelector = false;
// opts.defaultCountry = "NO";
// opts.overrideCountryList = [
//     { name: "Italy", alpha2: "IT" },
//     { name: "Germany", alpha2: "DE" },
//     { name: "United States", alpha2: "US" },
//     { name: "Norway", alpha2: "NO" },
// ];

//LANGUAGES OPTIONS
// opts.defaultLanguage = "en";
// opts.defaultLanguage = "DE";
// opts.defaultLanguage = "NO";
// opts.showLanguagesSelector = true;
opts.showOnlyAvailableLanguages = true;
// opts.overrideLanguageList = [
//     { name: "English", alpha2: "EN" },
//     { name: "German", alpha2: "DE" },
//     { name: "Arabic", alpha2: "AR" },
//     { name: "Norwegian", alpha2: "NO" },
//     { name: "Swedish", alpha2: "SW" },
// ];

//TYPES OPTIONS
// opts.showOnlyAvailableTypes = true;
// opts.showTypesSelector = true;
//opts.defaultType = "KIID";

//opts.limit = 5;

opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Append;
// opts.group = "language";
opts.group = 'type';
// opts.group = "author";
// opts.group = "country";
opts.useEmbeddedViewer = true;
opts.onLoadDocument = (link, content) => {
    console.log('Dlocument', link, content);
    // downloadDocument('Document-' + InfrontUtil.formatDateTime(new Date(), "yyyy-MM-dd HH-mm-ss") + '.pdf', content);
};
infront.documentsWidget('#documents', opts);

var opts = new Infront.QuoteListWidgetOptions();
opts.instruments = [
    new Infront.Instrument(2358, 'D5Y1'),
    new Infront.Instrument(2358, 'EUN3'),
    new Infront.Instrument(2358, 'XMWK'),
    new Infront.Instrument(2358, 'L4OB'),
    new Infront.Instrument(2358, 'HJUF'),
    new Infront.Instrument(2358, 'JYJB'),
    new Infront.Instrument(2358, 'DJK'),
    new Infront.Instrument(2358, 'FT98'),
    new Infront.Instrument(2358, '03AA'),
];
//opts.feed = 2358;
opts.columns = ['TICKER', 'FULL_NAME', 'CURRENCY', 'LAST'];
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Append;
opts.usePerfectScrollbar = true;
infront.quoteList('quoteList', opts);
```

## Markup (template.html)

```html
<div class="cell cell--w4">
    <div class="cell-content" id="quoteList"></div>
</div>
<div class="cell cell--w4">
    <div class="cell-flex-content" id="documents"></div>
</div>
```

## Styles (style.css)

```css
.cell-table-wrapper {
    height: 500px;
}
```

