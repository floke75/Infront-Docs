---
title: "Chart revision"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Chart revision"
example_config: {"title":"Chart revision","description":"","modify_date":"2020-07-22T18:15:44","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Chartrevision"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Chart revision

## Script (script.ts)

```typescript
const opts = new Infinancials.ChartRevisionWidgetOptions();
opts.company = "90103EF";
opts.source = "INQ";
opts.currency = -1;
opts.year = -1;
opts.item = Infinancials.RevisionItemsCharts.EPS_MEDIAN;
opts.title = "REVISIONS";
const widget= visual.ChartRevisionWidget("#chartRevision", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
        <div class="cell cell--w6">
            <div class="cell-content cell-clear" id="chartRevision"></div>
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

