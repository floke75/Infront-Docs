---
title: "SDK — Setup"
kind: guide
page_type: guide
product: "Infront Web Toolkit"
version: "4.3.1"
source_url: "https://docs.infrontfinance.com/docs/index.html"
library: "SDK"
guide_section: "Setup"
guide_order: 7
part_of: "getting-started"
---

# SDK — Setup

### 1. Add the required files

Add the toolkit JavaScript file to the `<head>` section of your site.

```html
<script type="text/javascript" src="https://wtk.infrontservices.com/js/CommonFramework-4.3.1.min.js"></script>
```

### 2. Instantiate the SDK

Now that all files are included we instantiate the SDK with the desired options. In this example, we tell the SDK instance to handle the user login, and call a function to get SDK data when it's ready.

For ease of use, it is recommended to include this as a separate file.

```html
<script>
    /* Instantiate Infront SDK and run it when document is ready */
    document.addEventListener("DOMContentLoaded", function(event) {
        const sdk = new InfrontSDK.SDK({
            signedToken: '<TOKEN>',
            onReady: (event) => { SDKReady(sdk); },
            onDisconnect: (event) => { console.warn("Disconnected:", event); }
        });
</script>
```

### 3. Get the data

Everything is in place, and we can request our first data, in this case Symbol Ids

```html
<script>
    /* Infront SDK ready to go, defining data we want to fetch inside the SDKReady function */
    function SDKReady (sdk) {
        // Define info type
        const contentType = InfrontSDK.FeedContentType.SymbolIds

        // Define feed
        const feed = 17921

        // Define onData callback
        const onData = data => console.log("getFeedInfo:", InfrontSDK.FeedContentType[contentType], data);

        // Define onError callback
        const onError = error => console.log("Error:", error);

        // Define options
        const options = {
            contentType: contentType,
            feed: feed,
            providerId: null,
            chainName: null,
            subscribe: false,
            onData: onData,
            onError: onError
        };
        // Request data
        sdk.get(InfrontSDK.feedContents(options));
    }
</script>
```

### 4. Everything glued together

For your copy/paste convenience, here's the markup of the entire html file.

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="https://wtk.infrontservices.com/js/CommonFramework-latest.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function(event) {
            const sdk = new InfrontSDK.SDK({
                signedToken: '<TOKEN>',
                onReady: (event) => { SDKReady(sdk); },
                onDisconnect: (event) => { console.warn("Disconnected:", event); }
            });
        });

        /* Infront SDK ready to go, defining widgets inside the SDKReady function */
        function SDKReady (sdk) {
            // Define info type
            const contentType = InfrontSDK.FeedContentType.SymbolIds

            // Define feed
            const feed = 17921

            // Define onData callback
            const onData = data => console.log("getFeedInfo:", InfrontSDK.FeedContentType[contentType], data);

            // Define onError callback
            const onError = error => console.log("Error:", error);

            // Define options
            const options = {
                contentType: contentType,
                feed: feed,
                providerId: null,
                chainName: null,
                subscribe: false,
                onData: onData,
                onError: onError
            };
            // Request data
            sdk.get(InfrontSDK.feedContents(options));
        }

    </script>
</head>
<body class="cell-body"></body>
</html>
```
