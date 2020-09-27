
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','bb5'),
  
  routes: [
{
  path: '/docs/misc/overview',
  component: ComponentCreator('/docs/misc/overview','109'),
  exact: true,
},
{
  path: '/docs/ml/overview',
  component: ComponentCreator('/docs/ml/overview','fd6'),
  exact: true,
},
{
  path: '/docs/programming/algorithms/cache',
  component: ComponentCreator('/docs/programming/algorithms/cache','57d'),
  exact: true,
},
{
  path: '/docs/programming/algorithms/overview',
  component: ComponentCreator('/docs/programming/algorithms/overview','257'),
  exact: true,
},
{
  path: '/docs/programming/prog-lang/overview',
  component: ComponentCreator('/docs/programming/prog-lang/overview','279'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
