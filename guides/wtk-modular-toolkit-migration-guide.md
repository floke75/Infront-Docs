---
title: "WTK — Modular toolkit migration guide"
kind: guide
page_type: guide
product: "Infront Web Toolkit"
version: "4.3.1"
source_url: "https://docs.infrontfinance.com/docs/index.html"
library: "WTK"
guide_section: "Modular toolkit migration guide"
guide_order: 2
part_of: "getting-started"
---

# WTK — Modular toolkit migration guide

### Why Modular WTK?

Modular WTK is a variant of the WTK library that can be used in modern NPM-based code, than can be bundled via WebPack, Rollup, ESBuild, or any similar bundling tool, and should be usable out-of-the-box from frameworks like Angular or React.

The main benefits from the modular WTK are:

- Tree-shakeable: only the imports you actually use are compiled into your JavaScript bundle for bundlers that support treeshaking.
- Pay-for-play: only the widgets you use are compiled into your JavaScript bundle; unused widgets are not bundled, regardless of treeshaking.
- Modern imports from sub-packages rather than monolithic imports and TypeScript namespaces.

> **Although WTK has been modularized, this is not yet the case for SDK; this means you’ll still run into old style and new style APIs. Both libraries are provided via an NPM package, and you cannot mix the old style script imports with the NPM packages.**

### Original Usage

Originally, to use WTK (and SDK), you would include a global script reference to

- `https://wtk.infrontservices.com/js/CommonFramework-3.3.1.min.js`
- `https://wtk.infrontservices.com/js/InfrontUI-4.3.1.min.js`

Assets come from

- `https://wtk.infrontservices.com/img/`
- `https://wtk.infrontservices.com/themes/`

And the `Infront.UI` object you build has factory methods for all individual widgets.

```html
<script src="https://wtk.infrontservices.com/js/CommonFramework-3.3.1.min.js"></script>
<script src="https://wtk.infrontservices.com/js/InfrontUI-4.3.1.min.js"></script>
<script>
const ui = new Infront.UI({
  ...
});
ui.registerEventObserver('onReady', () => {
  const widget = infront.analyticsGprvWidget('targetId', { ... });
});
ui.init();
</script>
```

### New Usage

With the new modular WTK, the code should no longer come from a global JavaScript file, but you import the required types from an NPM package.
The imports are split into the following import paths:

- SDK

  - **@infront/sdk** corresponds to `CommonFramework-*.js`; this package has not yet been fully modularized, so you generally import the namespaces ` Infront`, ` InfrontSDK`, and ` InfrontUtil` from this package and use them like before.
- Toolkit JavaScript

  - **@infront/wtk** corresponds to `InfrontUI-*.js`, but only the common ` Infront` namespace extensions like the ` UI` type are exposed as separate imports, but no widget-specific types, nor utilities.
  - **@infront/wtk/widgets/<name>** is the import path for individual widgets.
  - **@infront/wtk/utils/<name>** is the import path for select utility classes from WTK.
  - **@infront/wtk/components/<name>** is the import path for components, but it’s generally not advised to use these directly.
- Toolkit CSS

  - **@infront/wtk/css/InfrontFramework.css** is the import path for the primary CSS file.
  - **@infront/wtk/themes/<name>/theme.css** is the import path for the theme files.
  - **@infront/wtk/themes/<name>/full.css** is the import path for the full combined framework + theme files.

**All `<nam>` s are snake-case.*

> **Note** New versions of WTK are still provided as a script include, hosted by Infront. However, that version should be treated as the old non-modular version, as it provides full backward compatibility of the API surface, which the NPM package does not.

### Examples

The previous example would look like

```javascript
import { Infront, InfrontSDK } from '@infront/sdk';
import { UI } from '@infront/wtk';
import { AnalyticsGprvWidget, type AnalyticsGprvWidgetOptions } from '@infront/wtk/widgets/analytics-gprv';

const ui = new Infront.UI({
  ...
});
ui.registerEventObserver('onReady', () => {
  const widget = ui.widget(AnalyticsGprvWidget, 'targetId', { ... });
});
ui.init();
```

### Widget Migrations

Note one extra change you’ll need to refactor: the Infront.UI type (now UI from @infront/wtk) no longer provides factory methods for each widget, but a single constructor function, requiring you to specify a widget class:

```javascript
// OLD
const widget = ui.someWidgetName('targetId', ...);
// NEW
const widget = ui.widget(SomeWidgetName, 'targetId', ...);
```

Most new widgets no longer require you to create a specific options instance, but an options literal is now the preferred way to initialize a widget:

```javascript
// OLD
const options = new Infront.SomeWidgetOptions();
options.someValue = 1234;
const widget = ui.someWidgetName('targetId', options);
// NEW
const widget = ui.widget(SomeWidgetName, 'targetId', { 
  someValue: 1234,
});
```

> Note that this change has not yet been completed for the whole of WTK, so check the TypeScript typings.

Also, most widgets support modifications of their options via the `modify()` method, where you can specify (in most cases) a partial options literal:

```javascript
// OLD
const options = new Infront.SomeWidgetOptions();
Object.assign(options, oldOptions);
options.someValue = 5678;
widget.destroy();
widget = ui.someWidgetName('targetId', options);
// NEW
widget.modify({
  someValue: 5678,
});
```

### Limitations

The current setup has the following limitations:

- SDK has not yet been modularized, so you still import monolithic `Infront`, ` InfrontSDK` and ` InfrontUtil` namespaces.
- WTK package cannot be used directly from a web page via `<script type="module">`
