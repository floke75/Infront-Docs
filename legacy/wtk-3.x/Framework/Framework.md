---
title: "Framework and layout"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "Framework"
widget_id: "Framework"
source_url: "https://doc.infrontfinance.com/v3/Framework#Framework"
---

# Framework and layout

The Infront frontend framework, named Cell, is a 12 column CSS/[LESS](http://lesscss.org/) based framework.

Content is divided into rows, and given x/12 width.

Cell has no dependencies and will work alongside any Javascript library/CMS. All Cell css-classes are prefixed "cell-" (or simply named "cell"), this prefix should be avoided in classes not related to the framework, to avoid conflicts.

The below example shows two rows. The top one with one 100% cell, the bottom with a 3/12 cell and a 9/12 cell.

```html
<div class="cell-wrapper">
    <div class="cell-row">
        <div class="cell cell--w12">
            <span>Cell with 12/12 (100%) width.</span>
        </div>
    </div>
    <div class="cell-row">
        <div class="cell cell--w3">
            <span>Cell with 3/12 (25%) width.</span>
        </div>
        <div class="cell cell--w9">
            <span>Cell with 9/12 (75%) width.</span>
        </div>
    </div>
</div>
```

The `.cell-wrapper`-div is optional, by default it sets `width: 85%`, `max-width: 1040px` and `margin: 0 auto` and functions as a page frame/main container.

The width of all cells are a percentage of their containing element. A `.cell-row` always spans 100% of its parents width and has no horizontal margin or padding.

#### Preset styles

Building on the last example, adding a `<div class="cell-content"></div>` inside each `<div class="cell cell--wX"></div>` will by default (look and feel depends on the theme) add a border, background color and padding to your Cell-element. This is a part of the default styling, and regardless of how you re-style the `.cell-content` class it's recommended to wrap all content in a `<div class="cell-content"></div>`.

#### Themes

Cell comes with a number of predefined themes. It's optional to use a theme, but we recommend including a theme css-file and modify it directly, or overwrite with your own css-file:

```html
<link rel="stylesheet" type="text/css" href="[path]/InfrontFramework.css" />
<link rel="stylesheet" type="text/css" href="[path]/theme.css" />
<link rel="stylesheet" type="text/css" href="your-css-file.css" /> /* Optional */
```
