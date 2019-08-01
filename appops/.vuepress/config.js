module.exports = {
  base: '/',
  title: 'App Ops',
  head: [
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
      description: 'Control the hidden appops conveniently'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      description: '方便地控制隐藏的 appops'
    },
    '/zh-hant/': {
      lang: 'zh-Hant',
      description: '方便地控制隱藏的 appops'
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
        sidebar: getSidebar("/guide/", "Basic", "Working modes", "FAQ", "Technical details"),
        nav: getNavbar('/', 'Guide', 'Download'),
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
        sidebar: getSidebar("/zh-hans/guide/", "基础", "工作模式", "FAQ", "技术细节"),
        nav: getNavbar('/zh-hans/', '指南', '下载'),
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
        sidebar: getSidebar("/zh-hant/guide/", "基礎", "工作模式", "FAQ", "技術細節"),
        nav: getNavbar('/zh-hant/', '指南', '下載'),
        lastUpdated: '最後更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    }/*,
    repo: 'https://github.com/RikkaApps/Shizuku',
    docsDir: 'docs',
    editLinks: true*/
  }
}

function getSidebar(prefix, basicTitle, workingModeTitle, faqTitle, technicalDetailsTitle) {
  var res = {}
  res[prefix] = [
    {
      title: basicTitle,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ''
      ]
    },
    {
      title: workingModeTitle,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'working_mode/introduction',
        'working_mode/shizuku',
        'working_mode/dpm',
        'working_mode/root',
        'working_mode/plugin',
      ]
    },
    {
      title: faqTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        'faq/how_to_reset',
        'faq/purchase',
      ]
    },
    {
      title: technicalDetailsTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        'technical/run_in_background',
      ]
    }
  ]
  return res
}

function getNavbar(prefix, guide, download) {
  return [
    { text: guide, link: `${prefix}guide/` },
    { text: download, link: `${prefix}download.html` },
  ]
}