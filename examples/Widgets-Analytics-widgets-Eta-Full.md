---
title: "Eta Full"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Eta Full"
example_config: {"title":"Eta Full","description":"","modify_date":"2020-12-06T15:40:17","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/EtaFull"
source_files: ["script.ts", "template.html", "config.json"]
---

# Eta Full

## Script (script.ts)

```typescript
let opts = new Infinancials.EtaWidgetOptions();
opts.company = "01462SS";
opts.view = Infinancials.EtaView.FULL;
opts.mode = Infinancials.EtaMode.SCORE;
opts.forceUniverse = true;
opts.showFaq = true;
opts.buttonList = [{
    label: "Switch Company",
    cssClass: "my-css-class",
    action: (item) => {
        console.log(item);
        var message = new InterLibraryLink.Message(InterLibraryLink.DataType.isin, item.isin);
        InterLibraryLink.ControllerLinkFactory.getInstance().broadcastMessage(message);
    }
},{
    label: "Alert",
    cssClass: "my-alert-class",
    action: (item) => {
        console.log(item);
        alert("Company Name : "+ item.name);
    }
}];
opts.isInfrontWT = true;
let widget = visual.EtaWidget("#etaFull-widget", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="etaFull-widget"></div>
    </div>
</div>
```

