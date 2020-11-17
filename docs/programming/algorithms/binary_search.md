---
id: binary-search
title: Binary Search
sidebar_label: Binary Search
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


|            Item             |    Value    |
| :-------------------------: | :---------: |
|       Data Structure        |    Array    |
| Worst-case Time Complexity  |  O(\log n)  |
|  Best-case Time Complexity  |    O(1)     |
|   Average Time Complexity   |  O(\log n)  |
| Worst-case Space Complexity |    O(1)     |

## Unique Position

Find the index of $x$ in $nums$, where all elements are unique.

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>
<TabItem value="py">

```py
def binary_search_unique(nums: List[int], x: int, left=None,
                         right=None) -> int:
    if left is None:
        left = 0
    if right is None:
        right = len(nums) - 1

    while left <= right:
        mid = left + ((right - left) >> 1)
        if nums[mid] == x:
            return mid
        elif nums[mid] < x:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```
</TabItem>

<TabItem value="java">
</TabItem>

</Tabs>


## Left Insertion Position

Locate the insertion point for $x$ in $nums$ to maintain sorted order. If $x$ is already present in $nums$, the insertion point will be before (to the left of) any existing entries.

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>
<TabItem value="py">

```py
def binary_search_left(nums: List[int], x: int, left=None, right=None) -> int:
    if left is None:
        left = 0
    if right is None:
        right = len(nums)

    while left < right:
        mid = left + ((right - left) >> 1)
        if nums[mid] == x:
            right = mid
        elif nums[mid] < x:
            left = mid + 1
        else:
            right = mid
    return left
```
</TabItem>

<TabItem value="java">
</TabItem>

</Tabs>


## Right Insertion Position

Locate the insertion point for $x$ in $nums$ to maintain sorted order. If $x$ is already present in $nums$, the insertion point will be after (to the right of) any existing entries.

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>
<TabItem value="py">

```py
def binary_search_right(nums: List[int], x: int, left=None, right=None) -> int:
    if left is None:
        left = 0
    if right is None:
        right = len(nums)

    while left < right:
        mid = left + ((right - left) >> 1)
        if nums[mid] == x:
            left = mid + 1
        elif nums[mid] < x:
            left = mid + 1
        else:
            right = mid
    return left
```
</TabItem>

<TabItem value="java">
</TabItem>

</Tabs>