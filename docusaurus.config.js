module.exports = {
  // complete config API doc: https://www.docusaurus.cn/docs/docusaurus.config.js
  title: 'HUO ke',
  tagline: 'Stay cool, keep moving.',
  url: 'http://localhost',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/fire_favicon.ico',
  organizationName: 'kehuo', // Usually your GitHub org/user name.
  projectName: 'website-frontend', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true, // 导航栏右上角右上角白天/黑夜的开关
    },
    navbar: {
      //title: 'HUO Ke',
      logo: {
        alt: 'Logo',
        //src: 'img/logo/fire_logo_wider_gap.png',
        src: 'img/logo/logo_notHD.png',
        
      },

      // 导航栏右上角
      items: [
        {
          to: 'docs/programming/algorithms/overview',
          label: 'Algorithms',
          position: 'right',
        },

        {
          to: 'docs/programming/prog-lang/overview',
          label: 'Programming Languages',
          position: 'right',
        },

        {
          to: 'docs/ml/overview',
          label: 'Machine Learning',
          position: 'right',
        },

        {
          to: 'docs/misc/overview',
          label: 'Misc',
          position: 'right',
        },
        
        {
          href: 'https://github.com/kehuo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      logo: {
        alt: 'HydraKoma - HUO Ke',
        src: 'img/fire_hydrakoma_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} HUO Ke`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    //"@docusaurus/plugin-content-pages",
    //"@docusaurus/plugin-content-docs"
  ]
};
