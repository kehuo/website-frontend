---
id: basics
title: Basics
sidebar_label: Basics
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

<MDXJupyter filePath="basics/python.ipynb"/>

</TabItem>

<TabItem value="java">

<MDXJupyter filePath="basics/java.ipynb"/>

</TabItem>
</Tabs>