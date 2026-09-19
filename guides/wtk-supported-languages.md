---
title: "WTK — Supported languages"
kind: guide
page_type: guide
product: "Infront Web Toolkit"
version: "4.3.1"
source_url: "https://docs.infrontfinance.com/docs/index.html"
library: "WTK"
guide_section: "Supported languages"
guide_order: 5
part_of: "getting-started"
---

# WTK — Supported languages

### Language support

The Infront web toolkit can easily be translated to new languages. We deliver the toolkit with translations for the following languages:

- English (default)
- Danish
- Finnish
- French
- German
- Italian
- Norwegian
- Polish
- Romanian
- Swedish

### Implementation Basics

### Add your required files

English is the default language for the web toolkit. However, any language listed above can be set as the default language with one of the supported language files. (Note: A custom language file can be created using the translation tool)

```html
<script type="text/javascript" src="//wtk.infrontservices.com/languages/da.js"></script> // Danish
<script type="text/javascript" src="//wtk.infrontservices.com/languages/fi.js"></script> // Finnish
<script type="text/javascript" src="//wtk.infrontservices.com/languages/fr.js"></script> // French
<script type="text/javascript" src="//wtk.infrontservices.com/languages/de.js"></script> // German
<script type="text/javascript" src="//wtk.infrontservices.com/languages/it.js"></script> // Italian
<script type="text/javascript" src="//wtk.infrontservices.com/languages/no.js"></script> // Norwegian
<script type="text/javascript" src="//wtk.infrontservices.com/languages/pl.js"></script> // Polish
<script type="text/javascript" src="//wtk.infrontservices.com/languages/ro.js"></script> // Romanian
<script type="text/javascript" src="//wtk.infrontservices.com/languages/sv.js"></script> // Swedish
```

### Adjusting UI settings

To set the default language, you must instantiate a new object of InfrontUIOptions() and specify language.

#### Language

Type: `string`

The ISO language-code for the language you wish to use. This language needs to be one of the default languages ("en" or "no") or installed previously installed in the library. If you set this, you should not set dictionary.

The object and the specified configuration is passed into the UI.

```ts
var uiOpts = new Infront.InfrontUIOptions();
uiOpts.language = "no";
```

```ts
var infrontUI = new Infront.UI(uiOpts);
```

### Example

```html
<script>
var uiOpts = new Infront.InfrontUIOptions();
uiOpts.language = "no";

/* ... other configuration options ... */

var infrontUI = new Infront.UI(uiOpts);
infrontUI.registerEventObserver("onReady", infrontReady);
infrontUI.init();

function infrontReady() {
    /* instantiate widgets here.... */
}
</script>
```
