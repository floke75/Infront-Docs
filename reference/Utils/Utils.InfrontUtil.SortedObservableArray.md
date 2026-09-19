---
title: "SortedObservableArray<TItemType>"
qualified_name: "Utils.InfrontUtil.SortedObservableArray"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > SortedObservableArray"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.SortedObservableArray.html"
defines: ["SortedObservableArray"]
member_count: 19
members: ["beginUpdate", "clear", "endUpdate", "find", "foreach", "get", "insert", "move", "moveItemAt", "pop", "push", "remove", "removeItemAt", "replaceWith", "setCompareFunction", "sort", "unshift", "update", "updateItemAt"]
member_groups:
  "Methods": ["beginUpdate", "clear", "endUpdate", "find", "foreach", "get", "insert", "move", "moveItemAt", "pop", "push", "remove", "removeItemAt", "replaceWith", "setCompareFunction", "sort", "unshift", "update", "updateItemAt"]
related_types: ["Utils.InfrontUtil.ObservableArray"]
reference_count: 2
references: ["SDK.InfrontSDK.WatchlistContent", "Utils.InfrontUtil.ObservableArray"]
---

# SortedObservableArray<TItemType>

An observable array that will insert any object in sorted order, according to the provided
compare-function. This overrides the functionality of the push- and insert-functions.

#### Type Parameters

- TItemType = any

#### Hierarchy ([View Summary](../type-hierarchy.md#Utils.InfrontUtil.SortedObservableArray))

- ObservableArray<TItemType>

  - SortedObservableArray

### Methods

#### beginUpdate

```ts
beginUpdate(clearData?: boolean): void
```

Inhibit notifications to observers until endUpdate is called.

##### Parameters

- clearData: boolean = false

##### Returns void

Inherited from ObservableArray.beginUpdate

#### clear

```ts
clear(): void
```

Removes all items in the array.

##### Returns void

Inherited from ObservableArray.clear

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

Inherited from ObservableArray.endUpdate

#### find

```ts
find<T extends boolean = false>(
    compare: (item: TItemType, index?: number) => boolean,
    reverse?: boolean,
    returnIndex?: T,
): T extends true ? number : TItemType
```

Searches through the array and returns the first (or last if reverse is true) item where the compare-function
returns true.

##### Type Parameters

- T extends boolean = false

##### Parameters

- compare: (item: [TItemType](#titemtype), index?: number) => boolean

  A function to execute on each item. It has two arguments, the current item and its index in the array.
- reverse: boolean = false

  Iterate the array from the last it this is true.
- `Optional` returnIndex: T

  If true the return value is the index of found item.

##### Returns T extends true ? number: [TItemType](#titemtype)

If the item found the return value is item or item index if returnIndex is true. Otherwise the return value is null or -1.

Inherited from ObservableArray.find

#### foreach

```ts
foreach(func: (item: TItemType) => void): void
```

Iterates over the array and executes func with each item as a parameter. You should NOT modify the array in this
process.

##### Parameters

- func: (item: [TItemType](#titemtype)) => void

##### Returns void

Inherited from ObservableArray.foreach

#### get

```ts
get(): TItemType[]
```

Returns the javascript-array backing this ObservableArray. Be careful about interacting with this, since any manipulation of the
array will not be signaled to any observers.

##### Returns [TItemType](#titemtype)[]

Inherited from ObservableArray.get

#### insert

```ts
insert(item: TItemType): void
```

See push().

##### Parameters

- item: [TItemType](#titemtype)

##### Returns void

Overrides ObservableArray.insert

#### move

```ts
move(obj: TItemType, newIndex: number): void
```

Searches for an item and, if found, moves it to a new index.

##### Parameters

- obj: [TItemType](#titemtype)
- newIndex: number

##### Returns void

Inherited from ObservableArray.move

#### moveItemAt

```ts
moveItemAt(currentIndex: number, newIndex: number): void
```

Move item from `currentIndex` to ` newIndex`.

##### Parameters

- currentIndex: number
- newIndex: number

##### Returns void

Inherited from ObservableArray.moveItemAt

#### pop

```ts
pop(): TItemType
```

Removes the item at the end (biggest index) of the array and returns it.

##### Returns [TItemType](#titemtype)

any

Inherited from ObservableArray.pop

#### push

```ts
push(item: TItemType): void
```

The push-function normally appends the item to the end of the array, but since this class maintains
a sorted order it will be inserted into it's proper place instead.

##### Parameters

- item: [TItemType](#titemtype)

##### Returns void

Overrides ObservableArray.push

#### remove

```ts
remove(item: TItemType): void
```

Search for obj and remove it if found.

##### Parameters

- item: [TItemType](#titemtype)

##### Returns void

Inherited from ObservableArray.remove

#### removeItemAt

```ts
removeItemAt(index: number): TItemType
```

Remove the item at the given index and returns it.

##### Parameters

- index: number

##### Returns [TItemType](#titemtype)

The removed item

Inherited from ObservableArray.removeItemAt

#### replaceWith

```ts
replaceWith(newData: TItemType[]): void
```

Replaces the data currently in the array with new data.

##### Parameters

- newData: [TItemType](#titemtype)[]

##### Returns void

Overrides ObservableArray.replaceWith

#### setCompareFunction

```ts
setCompareFunction(compareFunction: CompareFunction<TItemType>): void
```

Changes the compare-function of this array. This causes the array to be re-sorted.

##### Parameters

- compareFunction: CompareFunction<[TItemType](#titemtype)>

##### Returns void

#### sort

```ts
sort(compareFunction: (itemA: TItemType, itemB: TItemType) => number): void
```

Sorts the array using the provided compare-function. After the sort the observers will receive one move-callback
for each element with the new position, even if it did not move in the array.

##### Parameters

- compareFunction: (itemA: [TItemType](#titemtype), itemB: [TItemType](#titemtype)) => number

##### Returns void

Inherited from ObservableArray.sort

#### unshift

```ts
unshift(item: TItemType): void
```

Appends an item to the start (smallest index) of the array.

##### Parameters

- item: [TItemType](#titemtype)

##### Returns void

Inherited from ObservableArray.unshift

#### update

```ts
update(oldItem: TItemType, newItem: TItemType): TItemType
```

Update existing item with the passed one. This will call itemChanged callback.

##### Parameters

- oldItem: [TItemType](#titemtype)

  The item to look for in the array.
- newItem: [TItemType](#titemtype)

  New item to replace the existing one with.

##### Returns [TItemType](#titemtype)

Old item if it is existing in the array, otherwise null.

Inherited from ObservableArray.update

#### updateItemAt

```ts
updateItemAt(newItem: TItemType, index: number): TItemType
```

Update the item at specific index. This will call itemChanged callback.

##### Parameters

- newItem: [TItemType](#titemtype)

  New item to replace the existing one with.
- index: number

  Existing item index in the array.

##### Returns [TItemType](#titemtype)

Old item if the index is correct, otherwise null.

Inherited from ObservableArray.updateItemAt
