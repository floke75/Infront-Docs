---
title: "Field notes — verified against the live service"
kind: index
page_type: field-notes-index
verified: "2026-09-22"
source: "live sandbox (docs.infrontfinance.com/sandbox), EFN documentation test user, SDK 2.3.1"
---

# Field notes: what the live Infront service actually does

Everything else in this corpus is extracted from Infront's documentation. This folder records what the
**live service returned when it was queried**, and where that disagrees with the docs or says more than
they do. Read the relevant note before designing an integration: each one exists because the docs alone
would have sent the work the wrong way.

**Provenance.** Observed 2026-09-22 in Infront's online sandbox, signed in as EFN's documentation test
user: SDK `2.3.1` (`sdk.version()`), environment `cloud.eu`, realm `infront`. **Entitlements belong to the
login that observed them.** The test user's feeds, delays and missing markets are not production's — EFN's
production user gets real-time Nasdaq Stockholm data where the test user gets 15-minute delayed data.
Anything a note says about access, delay or which feeds exist is scoped to the test user unless it says
otherwise.

**Trust order:** observed here > `reference/` > `examples/` > `legacy/`. A note that contradicts the docs
says so, and names the page.

**Hand-written, not generated.** The extraction pipeline (`tools/run.sh`) does not produce this folder and
rebuilds `out/` from scratch. When regenerating, copy `field-notes/` into `out/` before `index.js` runs, so
it enters `manifest.json` and `check.js` validates its links. `tools/readme.js` and `tools/concepts.js`
route to it; a regeneration that forgot the copy fails the link check rather than dropping the notes.

| Note | Read it when |
|---|---|
| [sandbox-probing.md](sandbox-probing.md) | you want an answer from the live service instead of the docs |
| [authentication.md](authentication.md) | wiring login: who holds which secret, and what reaches the browser |
| [instrument-ids.md](instrument-ids.md) | turning "OMXS30", "SAAB B" or "Brent" into a `{ feed, ticker }` that works |
| [chains.md](chains.md) | you need an index's constituents or an exchange's market lists |
| [feeds-test-user.md](feeds-test-user.md) | which markets a login can see, with their delay and trading hours |
| [streaming.md](streaming.md) | subscribing to live fields, the shapes that come back, update rates, batching |
| [time-series.md](time-series.md) | intraday bars — and the ordering trap in a live series |
| [errors-and-access.md](errors-and-access.md) | an id "fails", or you need real-time vs delayed per feed and per symbol |
| [open-questions.md](open-questions.md) | what only Infront can answer, collected for the next conversation with them |
