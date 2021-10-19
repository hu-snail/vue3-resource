// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
 module.exports = {
    base: '/',
    title: 'vue3-resource',
    lang: 'zh-CN',
    description: '收集vue3资源',
    head: createHead(),
    themeConfig: {
      algolia: {
        apiKey: 'c57105e511faa5558547599f120ceeba',
        indexName: 'vitepress'
      },
      repo: 'hu-snail/vue3-resource',
      docsRepo: 'hu-snail/vue3-resource',
      docsBranch: 'main',
      editLinks: true,
      logo: '/logo.png',
      editLinkText: '为此页提供修改建议',
      nav: [
        { text: '总览', link: '/platform/introduction'},
        { text: '移动端', link: '/platform/mobile'},
        { 
          text: '桌面端',
          link: '/platform/web',
        },
        { text: '组件库', link: '/compontents/introduction' },
    ],
    sidebar: {
      '/platform/': [
        {
          text: '资源库',
          children: [
            {
              text: '总览',
              link: '/platform/introduction',
            },
            {
              text: '移动端',
              link: '/platform/mobile',
            },
            {
              text: '桌面端',
              link: '/platform/web',
            },
            {
              text: '小程序',
              link: '/platform/mp',
            },
            {
              text: 'H5',
              link: '/platform/h5',
            },
            {
              text: 'vite插件',
              link: '/platform/vite',
            },
            {
              text: 'TypeScript',
              link: '/platform/typeScript',
            },
            {
              text: '中后台管理',
              link: '/platform/manage',
            },
          ],
        }
      ]
    }
    },
  };
  
  /**
   * @type {()=>import('vitepress').HeadConfig[]}
   */
  
  function createHead() {
    return [
      ['meta', { name: 'author', content: 'hu-snail' }],
      [
        'meta',
        {
          name: 'keywords',
          content: 'vue3, vitejs, vite, element-plus, vue',
        },
      ],
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
      [
        'meta',
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
      ['meta', { name: 'keywords', content: 'vue3 vue' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ];
  }
  
  