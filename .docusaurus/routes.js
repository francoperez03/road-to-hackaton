import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/ai-playbook-noir-solidity',
    component: ComponentCreator('/ai-playbook-noir-solidity', '4a6'),
    exact: true
  },
  {
    path: '/connect',
    component: ComponentCreator('/connect', '919'),
    exact: true
  },
  {
    path: '/uml-layers',
    component: ComponentCreator('/uml-layers', '7dd'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '795'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2b5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e7c'),
            routes: [
              {
                path: '/docs/cheatsheet-solidity-2025',
                component: ComponentCreator('/docs/cheatsheet-solidity-2025', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/checklist-pre-demo',
                component: ComponentCreator('/docs/checklist-pre-demo', 'a44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gas-90-10',
                component: ComponentCreator('/docs/gas-90-10', '6ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/zk-lite-5q',
                component: ComponentCreator('/docs/zk-lite-5q', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
