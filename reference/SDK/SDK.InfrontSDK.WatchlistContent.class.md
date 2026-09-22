---
title: "WatchlistContent"
qualified_name: "SDK.InfrontSDK.WatchlistContent"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > WatchlistContent"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.WatchlistContent.html"
defines: ["WatchlistContent"]
member_count: 23
members: ["id", "isReadOnly", "listChecksum", "listName", "provider?", "beginUpdate", "clear", "endUpdate", "find", "foreach", "get", "insert", "move", "moveItemAt", "pop", "push", "remove", "removeItemAt", "replaceWith", "sort", "unshift", "update", "updateItemAt"]
member_groups:
  "Properties": ["id", "isReadOnly", "listChecksum", "listName", "provider?"]
  "Methods": ["beginUpdate", "clear", "endUpdate", "find", "foreach", "get", "insert", "move", "moveItemAt", "pop", "push", "remove", "removeItemAt", "replaceWith", "sort", "unshift", "update", "updateItemAt"]
reference_count: 1
references: ["SDK.InfrontSDK.WatchlistItem"]
---

# WatchlistContent

> Not the same page as [`watchListContent`](./SDK.InfrontSDK.watchListContent.md), the function — the names differ only in case.

Watchlist content.

### Properties

#### id

```ts
id: string
```

Watchlist internal id. (File id, not to be mistaken for the Infront.StorageXmlTags.WatchlistID!)

Overrides MonitoredObservableArray.id

#### isReadOnly

```ts
isReadOnly: boolean
```

Watchlist is read-only.

#### listChecksum

```ts
listChecksum: number
```

Watchlist checksum. This can be useful when caching the watchlist.

#### listName

```ts
listName: string
```

Watchlist title.

#### `Optional` provider

```ts
provider?: number
```

Provider the list belongs to

### Methods

#### beginUpdate

```ts
beginUpdate(clearData?: boolean): void
```

Inhibit notifications to observers until endUpdate is called.

##### Parameters

- clearData: boolean = false

##### Returns void

Inherited from MonitoredObservableArray.beginUpdate

#### clear

```ts
clear(): void
```

Removes all items in the array.

##### Returns void

Inherited from MonitoredObservableArray.clear

#### endUpdate

```ts
endUpdate(useReInit?: boolean): void
```

Update observers via reInit and resume normal notifications.
Ignored if there is no corresponding previous call to beginUpdate.
if useReInit is set to true, updates are sent via

##### Parameters

- useReInit: boolean = true

##### Returns void

Inherited from MonitoredObservableArray.endUpdate

#### find

```ts
find<T extends boolean = false>(
    compare: (item: WatchlistItem, index?: number) => boolean,
    reverse?: boolean,
    returnIndex?: T,
): T extends true ? number : WatchlistItem
```

Searches through the array and returns the first (or last if reverse is true) item where the compare-function
returns true.

##### Type Parameters

- T extends boolean = false

##### Parameters

- compare: (item: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md), index?: number) => boolean

  A function to execute on each item. It has two arguments, the current item and its index in the array.
- reverse: boolean = false

  Iterate the array from the last it this is true.
- `Optional` returnIndex: [T](#findt)

  If true the return value is the index of found item.

##### Returns [T](#findt) extends true ? number: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

If the item found the return value is item or item index if returnIndex is true. Otherwise the return value is null or -1.

Inherited from MonitoredObservableArray.find

#### foreach

```ts
foreach(func: (item: WatchlistItem) => void): void
```

Iterates over the array and executes func with each item as a parameter. You should NOT modify the array in this
process.

##### Parameters

- func: (item: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)) => void

##### Returns void

Inherited from MonitoredObservableArray.foreach

#### get

```ts
get(): WatchlistItem[]
```

Returns the javascript-array backing this ObservableArray. Be careful about interacting with this, since any manipulation of the
array will not be signaled to any observers.

##### Returns [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)[]

Inherited from MonitoredObservableArray.get

#### insert

```ts
insert(item: WatchlistItem, index: number): void
```

Insert a value at the specified index.

##### Parameters

- item: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)
- index: number

##### Returns void

Inherited from MonitoredObservableArray.insert

#### move

```ts
move(obj: WatchlistItem, newIndex: number): void
```

Searches for an item and, if found, moves it to a new index.

##### Parameters

- obj: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)
- newIndex: number

##### Returns void

Inherited from MonitoredObservableArray.move

#### moveItemAt

```ts
moveItemAt(currentIndex: number, newIndex: number): void
```

Move item from `currentIndex` to ` newIndex`.

##### Parameters

- currentIndex: number
- newIndex: number

##### Returns void

Inherited from MonitoredObservableArray.moveItemAt

#### pop

```ts
pop(): WatchlistItem
```

Removes the item at the end (biggest index) of the array and returns it.

##### Returns [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

any

Inherited from MonitoredObservableArray.pop

#### push

```ts
push(item: WatchlistItem): void
```

Appends an item to the end (biggest index) of the array.

##### Parameters

- item: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

##### Returns void

Inherited from MonitoredObservableArray.push

#### remove

```ts
remove(item: WatchlistItem): void
```

Search for obj and remove it if found.

##### Parameters

- item: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

##### Returns void

Inherited from MonitoredObservableArray.remove

#### removeItemAt

```ts
removeItemAt(index: number): WatchlistItem
```

Remove the item at the given index and returns it.

##### Parameters

- index: number

##### Returns [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

The removed item

Inherited from MonitoredObservableArray.removeItemAt

#### replaceWith

```ts
replaceWith(data: WatchlistItem[]): void
```

Replaces the data currently in the array with new data.

##### Parameters

- data: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)[]

##### Returns void

Inherited from MonitoredObservableArray.replaceWith

#### sort

```ts
sort(
    compareFunction: (itemA: WatchlistItem, itemB: WatchlistItem) => number,
): void
```

Sorts the array using the provided compare-function. After the sort the observers will receive one move-callback
for each element with the new position, even if it did not move in the array.

##### Parameters

- compareFunction: (itemA: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md), itemB: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)) => number

##### Returns void

Inherited from MonitoredObservableArray.sort

#### unshift

```ts
unshift(item: WatchlistItem): void
```

Appends an item to the start (smallest index) of the array.

##### Parameters

- item: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

##### Returns void

Inherited from MonitoredObservableArray.unshift

#### update

```ts
update(oldItem: WatchlistItem, newItem: WatchlistItem): WatchlistItem
```

Update existing item with the passed one. This will call itemChanged callback.

##### Parameters

- oldItem: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

  The item to look for in the array.
- newItem: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

  New item to replace the existing one with.

##### Returns [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

Old item if it is existing in the array, otherwise null.

Inherited from MonitoredObservableArray.update

#### updateItemAt

```ts
updateItemAt(newItem: WatchlistItem, index: number): WatchlistItem
```

Update the item at specific index. This will call itemChanged callback.

##### Parameters

- newItem: [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

  New item to replace the existing one with.
- index: number

  Existing item index in the array.

##### Returns [WatchlistItem](./SDK.InfrontSDK.WatchlistItem.md)

Old item if the index is correct, otherwise null.

Inherited from MonitoredObservableArray.updateItemAt
