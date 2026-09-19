---
title: "UI"
qualified_name: "WTK.UI"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Core Objects"
nav_path: "WTK > Core Objects > UI"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.UI.html"
defines: ["UI"]
member_count: 2
members: ["registerEventObserver", "registerLanguageData"]
member_groups:
  "Core Objects": ["registerEventObserver"]
  "InfrontUI": ["registerEventObserver"]
  "Other": ["registerLanguageData"]
related_types: ["WTK.LoginDialogObserver", "WTK.TradingLoginDialogObserver"]
reference_count: 3
references: ["WTK.InfrontUIOptions", "WTK.LoginDialogObserver", "WTK.TradingLoginDialogObserver"]
---

# UI

InfrontUI class.

`var infrontUI = new Infront.UI(options);`

The entry point of the widget-library.

Takes in options object - a map of configuration-options.

Options can be configured with InfrontUIOptions.

#### Example

```ts
<script type="text/javascript">
    // Logs in with username and password. Specifies english language.
    var uiOpts = new Infront.InfrontUIOptions();
    uiOpts.language = "en";
    uiOpts.user_id = "fakeUserName";
    uiOpts.password = "fakePassword";
    var infrontUI = new Infront.UI(uiOpts);
    infrontUI.registerEventObserver("onReady", infront_ready);
    infrontUI.init();
    function infront_ready(event) {
        // Instantiate widgets here...
    }
</script>
```

#### See

InfrontUIOptions | [registerEventObserver](#registereventobserver)

#### Implements

- [LoginDialogObserver](./WTK.LoginDialogObserver.md)
- [TradingLoginDialogObserver](./WTK.TradingLoginDialogObserver.md)

### Core Objects

#### registerEventObserver

```ts
registerEventObserver(
    eventName: string,
    callback: (event: InfrontEvent) => void,
): void
```

InfrontUI Events

`infrontUI.registerEventObserver(eventName, callback);`

Use registerEventObserver to get notified when desired event is fired.

Check available eventName options.

#### Alerts

##### onAlertChanged

onAlertChanged will be fired when an alert has been modified.
AlertsChangedEvent instance will be passed to the callback.

#### Login

##### onDisconnect

onDisconnect event indicate that the connection is not active anymore.
DisconnectEvent instance will be passed to the callback.

This could be activated in many different cases. Here are most common reasons:

- Lack of connectivity to the server.
- Kick-out message has been sent.
- Invalid session token.

##### onLoginFailed

onLoginFailed will be fired when the connection succeeded but it is rejected du to wrong user name, password or token.
LoginFailedEvent instance will be passed to the callback.

##### onReady

onReady event will be activated once, after successful login.
ReadyEvent instance will be passed to the callback.

#### Trading

##### onPortfolioChange

onPortfolioChange event will be called once a portfolio is selected.
This will be fired after successful login to trading.
PortfolioChangeEvent instance will be passed to the callback.

##### onPortfolioCurrencyChanged

onPortfolioCurrencyChanged event will be activated after receiving trading power.
PortfolioCurrencyChangedEvent instance will be passed to the callback.

##### onTradeExecuted

onTradeExecuted will be fired by trading gateway to report executed trade(s).
TradeExecutedEvent instance will be passed to the callback.

##### onTradingDisconnect

onTradingDisconnect will be called after loosing the connection to trading gateway.
TradingDisconnectedEvent instance will be passed to the callback.

##### onTradingError

onTradingError will be fired by the trading gateway to indicate an error.
Error details will be passed as instance of TradingErrorEvent to the callback.

##### onTradingLogin

onTradingLogin will be fired after successful login to trading gateway.
TradingConnectedEvent instance will be passed to the callback.

##### onTradingLoginCanceled

##### onTradingLoginFailed

onTradingLoginFailed will be fired after unsuccessful login to trading gateway.
More details about the error will be passed as TradingLoginFailedEvent instance to the callback.

##### onTradingLostConnection

onTradingLostConnection will indicate that the connection to the trading gateway is down.
TradingLostConnectionEvent instance will be passed to the callback.

##### onTradingReconnected

onTradingReconnected will be fired after connection recovery to the trading gateway.
TradingReconnectedEvent instance will be passed to the callback.

##### onTradingReconnecting

onTradingReconnecting will be fired when trying to recover connection to the trading gateway.
TradingReconnectingEvent instance will be passed to the callback.

##### onTradingSessionReferenceReceived

onTradingSessionReferenceReceived will be fired after receiving session info from server.
TradingSessionReferenceEvent instance will be passed to the callback to to provide "referenceText" and "referenceValue".

##### onTradingTerminated

onTradingTerminated will be fired when it is not possible to recover the connection to the trading gateway.
TradingTerminatedEvent instance will be passed to the callback.

##### onTradingTokenInvalid

onTradingTokenInvalid will be fired when the sent token is rejected.
TradingTokenInvalidEvent instance will be passed to the callback.

#### Watchlist

##### onWatchlistInstrumentAdded

onWatchlistInstrumentAdded will be fired when new instrument has been added to the watchlist.
WatchlistInstrumentAddedEvent instance will be passed to the callback.

##### onWatchlistInstrumentRemoved

onWatchlistInstrumentRemoved will be fired when an instrument has been removed from a watchlist.
WatchlistInstrumentRemovedEvent instance will be passed to the callback.

#### onLanguageMapChange

##### Parameters

- eventName: string
- callback: (event: InfrontEvent) => void

##### Returns void

##### See

InfrontUIOptions | Infront.InfrontEvent

### InfrontUI

#### registerEventObserver

```ts
registerEventObserver(
    eventName: string,
    callback: (event: InfrontEvent) => void,
): void
```

InfrontUI Events

`infrontUI.registerEventObserver(eventName, callback);`

Use registerEventObserver to get notified when desired event is fired.

Check available eventName options.

#### Alerts

##### onAlertChanged

onAlertChanged will be fired when an alert has been modified.
AlertsChangedEvent instance will be passed to the callback.

#### Login

##### onDisconnect

onDisconnect event indicate that the connection is not active anymore.
DisconnectEvent instance will be passed to the callback.

This could be activated in many different cases. Here are most common reasons:

- Lack of connectivity to the server.
- Kick-out message has been sent.
- Invalid session token.

##### onLoginFailed

onLoginFailed will be fired when the connection succeeded but it is rejected du to wrong user name, password or token.
LoginFailedEvent instance will be passed to the callback.

##### onReady

onReady event will be activated once, after successful login.
ReadyEvent instance will be passed to the callback.

#### Trading

##### onPortfolioChange

onPortfolioChange event will be called once a portfolio is selected.
This will be fired after successful login to trading.
PortfolioChangeEvent instance will be passed to the callback.

##### onPortfolioCurrencyChanged

onPortfolioCurrencyChanged event will be activated after receiving trading power.
PortfolioCurrencyChangedEvent instance will be passed to the callback.

##### onTradeExecuted

onTradeExecuted will be fired by trading gateway to report executed trade(s).
TradeExecutedEvent instance will be passed to the callback.

##### onTradingDisconnect

onTradingDisconnect will be called after loosing the connection to trading gateway.
TradingDisconnectedEvent instance will be passed to the callback.

##### onTradingError

onTradingError will be fired by the trading gateway to indicate an error.
Error details will be passed as instance of TradingErrorEvent to the callback.

##### onTradingLogin

onTradingLogin will be fired after successful login to trading gateway.
TradingConnectedEvent instance will be passed to the callback.

##### onTradingLoginCanceled

##### onTradingLoginFailed

onTradingLoginFailed will be fired after unsuccessful login to trading gateway.
More details about the error will be passed as TradingLoginFailedEvent instance to the callback.

##### onTradingLostConnection

onTradingLostConnection will indicate that the connection to the trading gateway is down.
TradingLostConnectionEvent instance will be passed to the callback.

##### onTradingReconnected

onTradingReconnected will be fired after connection recovery to the trading gateway.
TradingReconnectedEvent instance will be passed to the callback.

##### onTradingReconnecting

onTradingReconnecting will be fired when trying to recover connection to the trading gateway.
TradingReconnectingEvent instance will be passed to the callback.

##### onTradingSessionReferenceReceived

onTradingSessionReferenceReceived will be fired after receiving session info from server.
TradingSessionReferenceEvent instance will be passed to the callback to to provide "referenceText" and "referenceValue".

##### onTradingTerminated

onTradingTerminated will be fired when it is not possible to recover the connection to the trading gateway.
TradingTerminatedEvent instance will be passed to the callback.

##### onTradingTokenInvalid

onTradingTokenInvalid will be fired when the sent token is rejected.
TradingTokenInvalidEvent instance will be passed to the callback.

#### Watchlist

##### onWatchlistInstrumentAdded

onWatchlistInstrumentAdded will be fired when new instrument has been added to the watchlist.
WatchlistInstrumentAddedEvent instance will be passed to the callback.

##### onWatchlistInstrumentRemoved

onWatchlistInstrumentRemoved will be fired when an instrument has been removed from a watchlist.
WatchlistInstrumentRemovedEvent instance will be passed to the callback.

#### onLanguageMapChange

##### Parameters

- eventName: string
- callback: (event: InfrontEvent) => void

##### Returns void

##### See

InfrontUIOptions | Infront.InfrontEvent

### Other

#### registerLanguageData

```ts
registerLanguageData(language: string, data: object): void
```

Register additional translations after initialization.

##### Parameters

- language: string

  The language to add translations to
- data: object

  the translations to add

##### Returns void
