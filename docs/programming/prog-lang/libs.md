---
id: libs
title: Libraries and Modules
sidebar_label: Libraries and Modules
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

<MDXJupyter filePath="libs/python.ipynb"/>

</TabItem>

<TabItem value="java">

<MDXJupyter filePath="libs/java.ipynb"/>

</TabItem>
</Tabs>