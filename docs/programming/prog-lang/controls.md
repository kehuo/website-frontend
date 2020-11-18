---
id: controls
title: Flow Control
sidebar_label: Flow Control
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {MDXJupyter} from '../../../src/components/Jupyter'


<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', },
  ]
}>

<TabItem value="py">

<MDXJupyter filePath="controls/python.ipynb"/>

</TabItem>

<TabItem value="java">

<MDXJupyter filePath="controls/java.ipynb"/>

</TabItem>
</Tabs>