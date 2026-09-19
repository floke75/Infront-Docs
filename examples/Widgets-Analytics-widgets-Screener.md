---
title: "Screener"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Screener"
example_config: {"title":"Screener","description":"","modify_date":"2020-07-22T18:39:22","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Screener"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Screener

## Script (script.ts)

```typescript
const opts = new Infinancials.ScreenerWidgetOptions();
opts.enableCriteria = true;
opts.nbCriteria = 1;
opts.universe = new Infinancials.ScreenerUniverseOptions();
opts.financials = new Infinancials.ScreenerFinancialsOptions();
opts.columns = [    
    {
    name:"FLAG",
    flag: true,
    heading: "",
    sortable: false
    },
    {
        name: "COMPANY_NAME",
        hover: "FULL_NAME",
        onClick: function(rowId, value) {
            alert("--> rowId" + rowId);
            //window.location.assign(setUrlRoot('/Symbol/' + infrontInstrument.ticker + 'i/' + infrontInstrument.feed));
        }
    }, 
    {
        name: "FIELD",
        heading:  new Infront.Observable(),
        translate: function(rowId, value) {
            var tmpVal = parseFloat(value);
            if (InfrontUtil.isNumber(tmpVal)) {
                return InfrontUtil.formatNumber(tmpVal, 2);
            } else {
                return value;
            }
        }
    },
    {
        name: "FIELD2",
        heading:  new Infront.Observable(),
        translate: function(rowId, value) {
            var tmpVal = parseFloat(value);
            if (InfrontUtil.isNumber(tmpVal)) {
                return InfrontUtil.formatNumber(tmpVal, 2);
            } else {
                return value;
            }
        }
    }, 
    {
        type: "custom",
        name: "ACTION_BUTTON",
        sortable: false,
        content: "<div class='cell-link--chain' title='Update linked widgets'></div>",
        onClick: function(rowId, value) {
            if (rowId.hasOwnProperty(VisualConstants.instrument)) {
                var instrument = rowId[VisualConstants.instrument];
                self.companySelected(instrument);
            }
        }
    }
];
const widget = visual.ScreenerWidget("screener", opts);
```

## Markup (template.html)

```html
 <div class="cell-row">
        <div class="cell cell--w7">
            <div class="cell-content" id="screener"></div>
        </div>
</div>
```

## Styles (style.css)

```css
/* DO NOT EDIT -----------------------------------------------
 * Needs to be here because of highchart dynamic overflow issue
 */
.cell-w-chart-revision .cell-chart--element.cell-clear {
  overflow: visible !important;
}
```

