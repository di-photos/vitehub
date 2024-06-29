import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NAS·U",
  base: '/vitehub/',
  description: "More Share More Fun",
  head: [['link', { rel: 'icon', href: '/vitehub/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'NAS·U',
    logo: "/Logo.png",
    outlineTitle: "本页目录",
    lastUpdated: true,
    lastUpdatedText: "最后更新",        
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    docFooter: { 
      prev: '上一文', 
      next: '下一文' 
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-Present NAS·U'
    }
  }
})
