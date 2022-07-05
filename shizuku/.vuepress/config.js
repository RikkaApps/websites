const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: 'Shizuku',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/RikkaW/webfonts@4/css/Roboto-VF.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/RikkaW/webfonts@4/css/NotoSansCJK-SC-VF.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/RikkaW/webfonts@4/css/NotoSansCJK-TC-VF.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', { rel: 'apple-touch-icon', size: '57x57', href: '/icon/apple-icon-57x57.png' }],
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
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/icon/favicon-16x16.png' }]
  ],
  locales: {
    '/': {
      lang: 'en',
      description: 'Let your app use system APIs directly'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      description: '让你的应用直接使用系统 API'
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
      description: '讓你的應用程式直接使用系統 API'
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
        sidebar: {
        },
        nav: getNavbar('/', 'Introduction', 'User manual', 'Download', 'Developer guide'),
        lastUpdated: 'Last Updated'
      }
      ,
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
        sidebar: {
        },
        nav: getNavbar('/zh-hans/', '简介', '用户手册', '下载', '开发者指南'),
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
        sidebar: {
        },
        nav: getNavbar('/zh-hant/', '簡介', '使用者手冊', '下載', '開發者指南'),
        lastUpdated: '最後更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'https://github.com/RikkaApps/Shizuku',
    docsRepo: 'https://github.com/RikkaApps/websites',
    docsDir: 'shizuku',
    editLinks: true
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://shizuku.rikka.app',
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

function getNavbar(prefix, introduction, guide, download, dev) {
  return [
    { text: introduction, link: `${prefix}introduction` },
    { text: guide, link: `${prefix}guide/setup.html` },
    { text: dev, link: `https://github.com/RikkaApps/Shizuku/blob/master/README.md` },
    { text: download, link: `${prefix}download.html` },
  ]
}