import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NAS·U",
  base: '/',
  description: "More Share More Fun",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/Logo.png",
    siteTitle: 'NAS·U',
    search: {
      provider: 'local'
    },
    outline: {
      level: [2,5],
      label: '本文提纲'
    },
    lastUpdated: true,
    lastUpdatedText: "最后更新",        
    nav: [    
      { text: '首页',
        link: '/index'
      },
      { text: '联系方式',
        items: [
          {
            text: '关于Nas·U',
            link: '/index'
          },
          {
            text: 'Nas定制', 
            link: '/Nas Customized'
          },
          {
            text: '联系方式', 
            link: '/System/Raid Array'
          },
        ]
      },      
    ],
    docFooter: { 
      prev: '上一文', 
      next: '下一文' 
    },

    sidebar: [
      {
        text: '1-硬件选择',
        collapsed: false,
        items: [
          {
          text: '1.1-NAS机箱',
          collapsed: false,
          items: [
            { text: '- 机箱省流版', link: '/Hardware/NAS Case' },
            { text: '- Tank机箱', link: '/Hardware/Tank' },
            { text: '- 宝藏盒Pro', link: '/Hardware/Treasure PRO' },
            { text: '- 半人马座', link: '/Hardware/Centaurus' },
            { text: '- 乔思伯N2', link: '/Hardware/N2' },
            { text: '- 乔思伯N4', link: '/Hardware/N4' },
            { text: '- 迎广MS04', link: '/Hardware/MS04' },
            { text: '- Nbox', link: '/Hardware/Nbox' },
            { text: '- 更多机箱体验待更新', link: '/Hardware/Other' },
          ]
          },
          {
            text: '1.2-主板及CPU',
            collapsed: false,
            items: [
              { text: '- 平台选择考虑因素', link: '/Hardware/Motherboard and CPU' },
              { text: '- 低功耗平台', link: '/Hardware/Low-power platforms' },
              { text: '- 消费级平台', link: '/Hardware/Consumer platforms' },
            ]
            },
          { text: '1.3-硬盘', link: '/Hardware/Hardisk' },
          { text: '1.4-内存', link: '/Hardware/Memory' },
          { text: '1.5-机箱风道/风扇', link: '/Hardware/Case Duct and Fan' },
          { text: '1.6-电源', link: '/Hardware/Power Supply' },  
        ]
      },
      {
        text: '2-配套指引',
        collapsed: false,
        items: [
          {
            text: '2.1-物理群辉',
            collapsed: false,
            items: [
              { text: '2.1.01-获取群辉IP', link: '/Guide/Synology Installation_001' },
              { text: '2.1.02-完善系统安装', link: '/Guide/Synology Installation_002' },
              { text: '2.1.03-创建存储空间', link: '/Guide/Synology Installation_003' },             
            ]
          },             
          { text: '2.2-Unrai及虚拟群晖', link: '/Guide/Unrai and Virtual Synology' }
        ]
      },  
      {
        text: '3- 系统及设置',
        collapsed: false,
        items: [
          { text: '3.01-各Nas系统的分析对比', link: '/System/Comparative analysis of Nas systems' },
          { text: '3.02-常见的RAID阵列', link: '/System/Raid Array' }
        ]
      },
      {
        text: '4-NAS应用',
        collapsed: true,
        items: [
          { text: '4.01-PVE下安装WG-Easy', link: '/Application/Installation of WG-Easy under PVE' },
          { text: '4.02-Unraid 引导盘制作Flash GUID为0000结尾的处理方法', link: '/Application/Flash GUID ends in 0000 processing method' },
          { text: '4.03-MoviePilot 安装与使用', link: '/Application/MoviePilot Installation and Use' },
          { text: '4.04-Unraid部署的思源笔记不能启动问题', link: '/Application/SiYuan Notes' },
          { text: '4.05-解决Unraid的 Docker 镜像无法下载问题', link: '/Application/Docker image downloaded' }
        ]
      }, 
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
