---
title: "WTK — Setup"
kind: guide
page_type: guide
product: "Infront Web Toolkit"
version: "4.3.1"
source_url: "https://docs.infrontfinance.com/docs/index.html"
library: "WTK"
guide_section: "Setup"
guide_order: 3
part_of: "getting-started"
---

# WTK — Setup

### 1. Add the required files

Add the cell css framework to the `<head>` section of your site.
CSS files should always be included before JavaScript files, also keep in mind that the order of the CSS files matters.
A "theme.css" file is not required, but we recommend using it as a starting point, and adding your own CSS on top.

Add the toolkit JavaScript files to the `<head>` section of your site.

> Note: CommonFramework is already included in InfrontUI

```html
<link type="text/css" rel="stylesheet" href="//wtk.infrontservices.com/css/InfrontFramework-4.3.1.css" />
<link type="text/css" rel="stylesheet" href="//wtk.infrontservices.com/themes/light-4.3.1/theme.css" />
```

```html
<script type="text/javascript" src="//wtk.infrontservices.com/js/CommonFramework-3.3.1.min.js"></script>
<script type="text/javascript" src="//wtk.infrontservices.com/js/InfrontUI-4.3.1.min.js"></script>
```

### 2. Instantiate the toolkit

Now that all files are included we instantiate the toolkit with the desired options. In this example, we tell the toolkit to handle the user login, give us streaming data and to store the session so we don't have to login for every new page load.

For ease of use, it is recommended to include this as a separate file.

```html
<script>
/* Instantiate Infront web toolkit and run it when document is ready */
var infront;
document.addEventListener("DOMContentLoaded", function(event) {
    infront = new Infront.UI({
        "signed_token": '<TOKEN>',
        "streaming": true,
        "enableLoginDialog": true,
        "store_session": true
    });
    infront.registerEventObserver("onReady", infrontReady);
    infront.init();
});
</script>
```

### 3. Make widgets

Everything is in place, and we can make our first widget: An index overview of the Frankfurt DAX index.

```html
<script>
/* Infront web toolkit ready to go, defining widgets inside the infrontReady function */
function infrontReady() {
    /* Create a index overview widget */
    var opts = new Infront.IndexOverviewWidgetOptions();

    /* We define an instrument by its feed number and ticker */

    opts.instrument = new Infront.Instrument(2098, "DAX");
    /* Bind the widget to a html element */
    infront.indexOverviewWidget("#index-overview", opts);
}
</script>
```

### 4. Markup

Using the Cell CSS framework, controlling the layout is simple. Here we create a row containing a 4/12 wide stacking container, which points to our the widget we created (#index-overview).

More information about the Cell framework can be found here.

Alternatively, if you don't want to use the cell framework for layout, all you need is an element with the correct id:

```html
<div class="cell-row">
    <div class="cell  cell--w4">
        <div class="cell-content" id="index-overview"></div>
    </div>
</div>
```

```html
<div id="index-overview"></div>
```

### 5. Wrapping HTML elements

This step is optional, but recommended if you are using cell for page layout.

```html
<body class="cell-body">
    <div class="cell-wrapper">
     <!-- Your code -->
    </div>
</body>
```

### 6. Everything glued together

For your copy/paste convenience, here's the markup of the entire html file.

```html
<!DOCTYPE html>
<html>
<head>
    <link type="text/css" rel="stylesheet" href="//wtk.infrontservices.com/css/InfrontFramework-3.6.21.css" />
    <link type="text/css" rel="stylesheet" href="//wtk.infrontservices.com/themes/light-3.9.16/theme.css" />
    <script type="text/javascript" src="//wtk.infrontservices.com/js/CommonFramework-2.9.16.min.js"></script>
    <script type="text/javascript" src="//wtk.infrontservices.com/js/InfrontUI-3.6.21.min.js"></script>
    <script>
    /* Instantiate Infront web toolkit and run it when document is ready */
    var infront;
    document.addEventListener("DOMContentLoaded", function(event) {
        infront = new Infront.UI({
            "signed_token": '<TOKEN>',
            "streaming": true,
            "enableLoginDialog": true,
            "store_session": true
        });
        infront.registerEventObserver("onReady", infrontReady);
        infront.init();
    });
    /* Infront web toolkit ready to go, defining widgets inside the infrontReady function */
    function infrontReady() {
        /* Create a index overview widget */
        var opts = new Infront.IndexOverviewWidgetOptions();

        /* We define an instrument by its feed number and ticker */
        opts.instrument = new Infront.Instrument(2098, "DAX");

        /* Bind the widget to a html element */
        infront.indexOverviewWidget("#index-overview", opts);
    }
    </script>
</head>
<body class="cell-body">
    <div class="cell-wrapper">
        <div class="cell-row">
            <div class="cell  cell--w4">
                <div class="cell-content" id="index-overview"></div>
            </div>
        </div>
    </div>
</body>
</html>
```
