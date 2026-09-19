---
title: "Beta"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Beta"
example_config: {"title":"Beta","description":"","modify_date":"2021-05-26T11:15:01","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Beta"
source_files: ["script.ts", "template.html", "config.json"]
---

# Beta

## Script (script.ts)

```typescript
var opts = new Infinancials.BetaWidgetOptions();
opts.company = "US0378331005";
var betaWidget = infinancialsUI.BetaWidget("beta", opts);
```

## Markup (template.html)

```html
<div id="beta"></div>
```

