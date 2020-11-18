---
id: collections
title: Collections
sidebar_label: Collections
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {MDXJupyter} from '../../../src/components/Jupyter'


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', }
  ]
}>

<TabItem value="py">

<MDXJupyter filePath="collections/python.ipynb"/>

</TabItem>

<TabItem value="java">

<MDXJupyter filePath="collections/java.ipynb"/>

</TabItem>
</Tabs>