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
      docsBranch: 'master',
      editLinks: true,
      logo: '/logo.png',
      editLinkText: '为此页提供修改建议',
      nav: [
        { text: 'UI库', link: '/ui/introduction'},
        { text: '组件库', link: '/compontents/introduction' },
    ],
    sidebar: {
      '/ui/': [
        {
          text: 'UI库',
          children: [
            {
              text: '介绍',
              link: '/ui/introduction',
            },
            {
              text: '开始',
              link: '/ui/start',
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
          content: 'vue3-admin, vitejs, vite, element-plus, vue',
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
      ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ];
  }
  
  