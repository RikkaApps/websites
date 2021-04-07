const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: 'Rikka Apps',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:300,400,500,700&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,400,500,700&display=swap'
    }],
    /*['link', { rel: 'apple-touch-icon', size: '57x57', href: '/icon/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', size: '60x60', href: '/icon/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', size: '72x72', href: '/icon/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', size: '76x76', href: '/icon/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', size: '114x114', href: '/icon/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', size: '120x120', href: '/icon/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', size: '144x144', href: '/icon/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', size: '152x152', href: '/icon/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/icon/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '192x192', href: '/icon/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '32x32', href: '/icon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '96x96', href: '/icon/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/icon/favicon-16x16.png' }]*/
  ],
  locales: {
    '/': {
      lang: 'en',
      description: 'Create Android apps with love & magic.'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      description: '用爱与魔法创造 Android 应用。'
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
      description: '用愛與魔法創造 Android 應用程式。'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: getSidebar('/knowledge/', 'Knowledge base'),
        nav: getNavbar('/', 'Knowledge base', 'Contribute translation'),
        lastUpdated: 'Last Updated'
      },
      '/zh-hans/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: getSidebar('/zh-hans/knowledge/', '知识库'),
        nav: getNavbar('/zh-hans/', '知识库', '参与翻译'),
        lastUpdated: '最后更新'
      },
      '/zh-hant/': {
        selectText: '語言',
        label: '繁體中文',
        editLinkText: '在 GitHub 上編輯此頁',
        serviceWorker: {
          updatePopup: {
            message: "發現新內容可用.",
            buttonText: "重新整理"
          }
        },
        sidebar: getSidebar('/zh-hant/knowledge/', '知識庫'),
        nav: getNavbar('/zh-hant/', '知識庫', '參與翻譯'),
        lastUpdated: '最後更新'
      }
    },
    displayAllHeaders: false,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    search: false,
    docsRepo: 'https://github.com/RikkaApps/websites',
    docsDir: 'www',
    editLinks: false
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://rikka.app',
        exclude: ['/404.html'],
        dateFormatter: (time) => {
          timestampCache[time]
        }
      }
    ],
    [
      'clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          var original = timestamp

          moment.locale(langMap[lang])
          var localized = moment(original).format('lll')
          
          moment.locale('en')
          var iso = moment(original).toISOString()
          timestampCache[localized] = iso

          return localized
        }
      }
    ]
  ]
}

function getSidebar(prefix, knowledgeTitle) {
  var res = {}
  res[prefix] = [
    {
      title: knowledgeTitle,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'google_play_purchase'
      ]
    }]
  return res
}

function getNavbar(prefix, knowledge, translation) {
  return [
    { text: knowledge, link: `${prefix}knowledge/google_play_purchase.md` },
    { text: translation, link: `${prefix}contribute_translation.md` }
  ]
}