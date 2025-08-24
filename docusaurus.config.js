// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Road To Hackathon',
  tagline: 'Tu entrenamiento completo para dominar hackathons ZK/Noir/Solidity',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mentoria-zk.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crypto_dev_1', // Usually your GitHub org/user name.
  projectName: 'road-to-hackathon', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Road To Hackathon',
        logo: {
          alt: 'Road To Hackathon Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/ai-playbook-noir-solidity',
            label: 'AI Playbook',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/uml-layers',
            label: 'UML Layers',
            position: 'left',
          },
          {
            to: '/connect',
            label: 'Connect',
            position: 'left',
          },
          {
            href: 'https://twitter.com/crypto_dev_1',
            label: 'X',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'AI Playbook',
                to: '/ai-playbook-noir-solidity',
              },
              {
                label: 'Docs',
                to: '/docs/cheatsheet-solidity-2025',
              },
              {
                label: 'UML Layers',
                to: '/uml-layers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://twitter.com/crypto_dev_1',
              },
              {
                label: 'Connect',
                to: '/connect',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @crypto_dev_1. Road To Hackathon - Entrena, Compite, Gana.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['solidity', 'rust'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;