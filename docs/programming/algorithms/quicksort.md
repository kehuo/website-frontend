---
id: quicksort
title: Quick Sort
sidebar_label: Quick Sort
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Quick sort

|                    Item                     |                               Value                                |
| :-----------------------------------------: | :-----------------------------------------------------------: |
|               Data Structure                |                               Array                           |
|         Worst-case Time Complexity          |                              O(n^^2)                          |
|          Best-case Time Complexity          |    O(n log n) or O(n) (three-way partition and equal keys)    |
|           Average Time Complexity           |                           O(n log n)                          |
| Worst-case Space Complexity (for recursion) | O(n) auxiliary (naive) or O(log n) auxiliary (Sedgewick 1978) |


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'}
  ]
}>

<TabItem value="py">

```py
from typing import List
import random


def randomized_partition(nums: List[int], left: int, right: int) -> int:
    pivot = random.randint(left, right)
    nums[pivot], nums[right] = nums[right], nums[pivot]
    i = j = left
    while i < right:
        if nums[i] <= nums[right]:
            nums[j], nums[i] = nums[i], nums[j]
            j += 1
        i += 1
    nums[i], nums[j] = nums[j], nums[i]
    return j


def randomized_quicksort(nums: List[int], left: int, right: int) -> None:
    if left >= right:
        return
    mid = randomized_partition(nums, left, right)
    randomized_quicksort(nums, left, mid - 1)
    randomized_quicksort(nums, mid + 1, right)


def quicksort(nums: List[int]) -> None:
    randomized_quicksort(nums, 0, len(nums) - 1)
```

</TabItem>
</Tabs>

## Quick Select

|                    Item                     |    Value    |
| :-----------------------------------------: | :---------: |
|               Data Structure                |    Array    |
|         Worst-case Time Complexity          |   O(n^^2)   |
|          Best-case Time Complexity          |    O(n)     |
|           Average Time Complexity           |    O(n)     |
| Worst-case Space Complexity (for recursion) |    O(n)     |
| Best-case Space Complexity (for recursion)  |    O(1)     |
|  Average Space Complexity (for recursion)   |  O(log n)   |

Instead of recursing into both sides, as in quicksort, quickselect only recurses into one side – the side with the element it is searching for. This reduces the average complexity from O(n log n) to O(n), with a worst case of $O(n^^2).

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'}
  ]
}>

<TabItem value="py">

```py
from typing import List
import random


def randomized_partition(nums: List[int], left: int, right: int) -> int:
    pivot = random.randint(left, right)
    nums[pivot], nums[right] = nums[right], nums[pivot]
    i = j = left
    while i < right:
        if nums[i] <= nums[right]:
            nums[j], nums[i] = nums[i], nums[j]
            j += 1
        i += 1
    nums[i], nums[j] = nums[j], nums[i]
    return j


def randomized_quickselect(nums: List[int], left: int, right: int,
                           index: int) -> int:
    mid = randomized_partition(nums, left, right)
    if mid == index:
        return nums[mid]
    elif mid < index:
        return randomized_quickselect(nums, mid + 1, right, index)
    else:
        return randomized_quickselect(nums, left, mid - 1, index)


def quickselect(nums: List[int], index: int) -> int:
    if index >= len(nums):
        raise IndexError
    return randomized_quickselect(nums, 0, len(nums) - 1, index)
```

</TabItem>
</Tabs>