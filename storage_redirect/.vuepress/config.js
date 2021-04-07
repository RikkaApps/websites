const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
  "zh-Hant": "zh-tw"
}

var timestampCache = {}

module.exports = {
  base: '/',
  title: 'Storage Isolation',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://raw.rikka.app/css/SourceCodePro-BDC.css'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,500,700&display=swap'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700&display=swap'
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
      description: 'Elegantly solve the problem of "bad apps" abusing storage permissions'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      title: '存储空间隔离',
      description: '优雅地解决“坏应用”滥用存储权限的问题'
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
      title: '儲存空間隔離',
      description: '優雅地解決「壞應用程式」濫用儲存權限的問題'
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
        sidebar: getSidebar('/guide/', 'Guide', 'Advanced', 'Enhanced mode', 'Issues caused by OEMs', 'FAQ'),
        nav: getNavbar('/', 'Guide', 'Download', 'Changelog', 'Rikka Apps'),
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
        sidebar: getSidebar('/zh-hans/guide/', '指南', '高级', '增强模式', '厂商造成的问题', 'FAQ'),
        nav: getNavbar('/zh-hans/', '指南', '下载', 'Changelog', 'Rikka Apps'),
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
        sidebar: getSidebar('/zh-hant/guide/', '指南', '高級', '增強模式', '廠商造成的問題', 'FAQ'),
        nav: getNavbar('/zh-hant/', '指南', '下載', 'Changelog', 'Rikka Apps'),
        lastUpdated: '最後更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
    docsRepo: 'https://github.com/RikkaApps/websites',
    docsDir: 'storage_redirect',
    editLinks: true
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://sr.rikka.app',
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

function getSidebar(prefix, basicTitle, advancedTitle, enhancedModeTitle, compatibilityTitle, faqTitle) {
  var res = {}
  res[prefix] = [
    {
      title: basicTitle,
      collapsable: true,
      sidebarDepth: 0,
      children: [
        '',
        'tutorial',
        'contribute',
      ]
    },
    {
      title: advancedTitle,
      collapsable: true,
      sidebarDepth: 0,
      children: [
        'advanced/shared_user_id',
        'advanced/technical_details_export_isolated_files',
      ]
    },
    {
      title: enhancedModeTitle,
      collapsable: true,
      sidebarDepth: 0,
      children: [
        `enhanced_mode/`,
        `enhanced_mode/install`,
      ]
    },
    {
      title: compatibilityTitle,
      collapsable: true,
      sidebarDepth: 0,
      children: [
        `compatibility/`,
        `compatibility/samsung`,
        `compatibility/meizu`,
        `compatibility/miui`,
      ]
    },
    {
      title: faqTitle,
      collapsable: true,
      sidebarDepth: 0,
      children: [
        `faq/cant_find_app`,
        `faq/how_to_report_problems`,
        `faq/how_to_document`,
      ]
    }]
  return res
}

function getNavbar(prefix, guide, download, changelog, allRikkaApps) {
  return [
    { text: guide, link: `${prefix}guide/` },
    { text: download, link: `${prefix}download.html` },
    { text: changelog, link: `${prefix}changelog.html` },
    { text: allRikkaApps, link: `https://rikka.app${prefix}` },
  ]
}