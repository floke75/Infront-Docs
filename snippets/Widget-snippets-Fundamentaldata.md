---
title: "Fundamentaldata"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundamentaldata"
description: "Test snippet for Fundamentaldata"
tags: ["widget", "test", "widget:getModel"]
demonstrates: ["getModel"]
example_config: {"title":"Fundamentaldata","description":"Test snippet for Fundamentaldata","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:getModel"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Fundamentaldata"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Fundamentaldata

Test snippet for Fundamentaldata

Demonstrates: `getModel`

## Script (script.ts)

```typescript
//infront.getModel().fundamentalDataPromise(17921, "ABB", [2371, 2372], 'swe').then((companyInfo) => {
//infront.getModel().fundamentalDataPromise(17921, "ERIC B", 2372, 'swe').then((companyInfo) => {
infront
    .getModel()
    .fundamentalDataPromise(17921, 'HM B', [2371], 'swe')
    .then((companyInfo) => {
        var el = document.getElementById('name');
        el.innerText = companyInfo.name;
        if (companyInfo.urls && companyInfo.urls.length > 0) el.href = companyInfo.urls[0];
        document.getElementById('desc').innerText = companyInfo.descr;
        document.getElementById('obj').innerHTML = syntaxHighlight(
            JSON.stringify(companyInfo, null, 4),
        );
        console.log(companyInfo);
    });
console.log(companyInfo);
```

## Markup (template.html)

```html
<div style="font-size: larger; font-weight: 600; margin-bottom: 10px">
    <a href="/" id="name"></a>
</div>
<div id="desc"></div>
<pre id="obj"></pre>
```

## Styles (style.css)

```css
.key {
    color: maroon;
}
.string {
    color: red;
}
.number {
    color: blueviolet;
}
.boolean,
.null {
    color: aquamarine;
}
```

