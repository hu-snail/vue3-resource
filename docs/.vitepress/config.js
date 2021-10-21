// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
 module.exports = {
    base: '/',
    title: 'Vue3-resource',
    lang: 'zh-CN',
    description: '收集vue3资源，包含web端&移动端&小程序&Electron等栏目',
    head: createHead(),
    themeConfig: {
      // algolia: {
      //   apiKey: '1885f2f9da49911be5abd90180426414',
      //   indexName: 'vue3-resource'
      // },
      repo: 'hu-snail/vue3-resource',
      docsRepo: 'hu-snail/vue3-resource',
      docsBranch: 'main',
      editLinks: false,
      logo: '/logo.png',
      editLinkText: '为此页提供修改建议',
      nav: [
        { text: '总览', link: '/platform/introduction'},
        { 
          text: 'web端',
          link: '/platform/web/introduction',
          items: [{
            text: '说明',
            link: '/platform/web/introduction',
          }, {
            text: 'UI库',
            link: '/platform/web/ui',
          }, {
            text: '开箱即用',
            link: '/platform/web/manage',
          }, {
            text: '富文本编辑器',
            link: '/platform/web/editor',
          }, {
            text: 'markdown编辑器',
            link: '/platform/web/markdown',
          }, {
            text: '上传组件',
            link: '/platform/web/upload',
          }, {
            text: '图片/背景组件',
            link: '/platform/web/img&bg',
          }, {
            text: '音频/视频组件',
            link: '/platform/web/audio&video',
          }, {
            text: '图标库',
            link: '/platform/web/icons',
          }, {
            text: '图表组件',
            link: '/platform/web/charts',
          }, {
            text: '拖拽组件',
            link: '/platform/web/drag',
          }, {
            text: '配套资源',
            link: '/platform/web/include',
          }, {
            text: '文件组件',
            link: '/platform/web/files',
          }, {
            text: '动画库',
            link: '/platform/web/animate',
          }, {
            text: '地图组件',
            link: '/platform/web/map',
          }, {
            text: '其他组件',
            link: '/platform/web/others',
          }]
        },
        { 
          text: '移动端',
          link: '/platform/mobile/introduction',
          items: [{
            text: 'UI库',
            link: '/platform/mobile/ui',
          }, {
            text: '开源项目',
            link: '/platform/mobile/project',
          }, {
            text: '滚动组件',
            link: '/platform/mobile/scroll',
          }, {
            text: '配套资源',
            link: '/platform/mobile/include',
          }]
        },
        { 
          text: '小程序',
          link: '/platform/mp/project',
          items: [{
            text: '框架',
            link: '/platform/mp/project',
          }, {
            text: 'UI库',
            link: '/platform/mp/ui',
          }]
        },
        { 
          text: '文档&工具',
          link: '/platform/docs&tool/introduction',
          items: [{
            text: '文档',
            link: '/platform/docs&tool/docs',
          }, {
            text: '工具',
            link: '/platform/docs&tool/tool',
          }, {
            text: 'vscode插件',
            link: '/platform/docs&tool/vscode',
          }]
        },
        { text: '常用库', link: '/platform/common' },
        { text: '学习&面试', link: '/platform/study' },
        { text: '收藏', link: '/platform/like' },
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
              text: 'web端',
              link: '/platform/web/introduction',
              children: [{
                  text: '说明',
                  link: '/platform/web/introduction',
                },
                {
                  text: 'UI库',
                  link: '/platform/web/ui',
                }, {
                  text: '开箱即用',
                  link: '/platform/web/manage',
                }, {
                  text: '富文本编辑器',
                  link: '/platform/web/editor',
                }, {
                  text: 'markdown编辑器',
                  link: '/platform/web/markdown',
                }, {
                  text: '上传组件',
                  link: '/platform/web/upload',
                }, {
                  text: '图片/背景组件',
                  link: '/platform/web/img&bg',
                }, {
                  text: '音频/视频组件',
                  link: '/platform/web/audio&video',
                }, {
                  text: '图标库',
                  link: '/platform/web/icons',
                }, {
                  text: '图表组件',
                  link: '/platform/web/charts',
                }, {
                  text: '拖拽组件',
                  link: '/platform/web/drag',
                }, {
                  text: '配套资源',
                  link: '/platform/web/include',
                }, {
                  text: '文件组件',
                  link: '/platform/web/files',
                }, {
                  text: '动画库',
                  link: '/platform/web/animate',
                }, {
                  text: '地图组件',
                  link: '/platform/web/map',
                }, {
                  text: '其他组件',
                  link: '/platform/web/others',
                }
              ]
            },
            {
              text: '移动端',
              link: '/platform/mobile/introduction',
              children: [{
                text: 'UI库',
                link: '/platform/mobile/ui',
              }, {
                text: '开源项目',
                link: '/platform/mobile/project',
              }, {
                text: '滚动组件',
                link: '/platform/mobile/scroll',
              }, {
                text: '配套资源',
                link: '/platform/mobile/include',
              }]
            },
            {
              text: 'Electron',
              link: '/platform/electron',
            },
            {
              text: '小程序',
              link: '/platform/mp/project',
              children: [{
                text: '框架',
                link: '/platform/mp/project',
              }, {
                text: 'UI库',
                link: '/platform/mp/ui',
              }]
            },
            { 
              text: '常用库',
              link: '/platform/common' 
            },
            { 
              text: '收藏',
              link: '/platform/like' 
            },
            {
              text: 'vite插件',
              link: '/platform/vite',
            },
            { 
              text: '文档&工具',
              link: '/platform/docs&tool/introduction',
              children: [{
                text: '文档',
                link: '/platform/docs&tool/docs',
              }, {
                text: '工具',
                link: '/platform/docs&tool/tool',
              }, {
                text: 'vscode插件',
                link: '/platform/docs&tool/vscode',
              }]
            },
            { text: '学习&面试', link: '/platform/study' },
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
  
  