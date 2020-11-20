---
id: tree-misc
title: Tree Misc
sidebar_label: Tree Misc
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Build binary search tree based on a sorted array.

Example

Given an sorted array [-10, -3, 0, 5, 9], there are multiple binary search trees can be probably built based 
on the given array. One possible answer is showing like below:

![Binary Tree](../../../static/img/algorithms/tree/sample_bst.png)

Tree Node definition:


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>

<TabItem value="py">

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

</TabItem>

<TabItem value="java">

```java

```

</TabItem>
</Tabs>

Implement recursively

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>

<TabItem value="py">

```py
from typing import List
def sorted_arr_to_bst(sorted_arr: List) -> TreeNode:
        """bst refers to binary search tree"""
        def build_tree_recusively(left, right):
            """mid, left and right are all indexes in array"""
            if left > right:
                return None
            mid = (right+left) // 2
            r = TreeNode(self.arr[mid])
            r.left = build_tree(left, mid-1)
            r.right = build_tree(mid+1, right)
            return r
        
        if not head:
            return None
        tree = build_tree_recusively(0, len(sorted_arr)-1)
        return tree
```

</TabItem>

<TabItem value="java">

```java

```

</TabItem>
</Tabs>



Build binary search tree based on a LinkList.

Example

Given an sorted LinkList [-10, -3, 0, 5, 9], there are multiple binary search trees can be probably built based 
on the given LinkList. One possible answer is showing like below:

![Binary Tree](../../../static/img/algorithms/tree/sample_bst.png)

Tree Node definition:


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>

<TabItem value="py">

```py
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

</TabItem>

<TabItem value="java">

```java

```

</TabItem>
</Tabs>

Implement recursively

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py'},
    { label: 'Java', value: 'java'}
  ]
}>

<TabItem value="py">

```py
from typing import List
def sorted_linklist_to_bst(sorted_linklist: List) -> TreeNode:
        """bst refers to binary search tree"""
        pass
```

</TabItem>

<TabItem value="java">

```java

```

</TabItem>
</Tabs>