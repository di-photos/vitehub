import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NAS·U",
  base: '/vitehub/',
  description: "More Share More Fun",
  head: [['link', { rel: 'icon', href: '/vitehub/favicon.ico' }]],
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
      { text: 'NAS系统',
        items: [
          {
            text: '【01】 各Nas系统的分析对比',
            link: '/System/Comparative analysis of Nas systems'
          },
          {
            text: '【02】 常见的RAID阵列', 
            link: '/System/Raid Array'
          }
        ]
      },
      { text: 'NAS应用',
        items: [
          {
            text: '【01】 PVE下安装WG-Easy',
            link: '/Application/Installation of WG-Easy under PVE'
          },
          {
            text: '【02】 Unraid 引导盘制作Flash GUID为0000结尾的处理方法', 
            link: '/Application/Flash GUID ends in 0000 processing method'
          },
          {
            text: '【03】 MoviePilot 安装与使用', 
            link: '/Application/MoviePilot Installation and Use'
          },
          {
            text: '【04】 Unraid部署的思源笔记不能启动问题', 
            link: '/Application/SiYuan Notes'
          },
          {
            text: '【05】 解决Unraid的 Docker 镜像无法下载问题', 
            link: '/Application/Docker image downloaded'
          }
        ]
      },
      { text: '使用指引',
        items: [
          {
            text: '【01】 物理群晖',
            link: '/Guide/Synology Installation'
          },
          {
            text: '【02】 Unrai及虚拟群晖', 
            link: '/Guide/Unrai and Virtual Synology'
          }
        ]
      },
    ],
    docFooter: { 
      prev: '上一文', 
      next: '下一文' 
    },

    sidebar: [
      {
        text: '硬件选择',
        collapsed: false,
        items: [
          {
          text: 'NAS机箱',
          collapsed: true,
          items: [
            { text: 'NAS机箱省流版', link: '/Hardware/NAS Case' },
            { text: 'Tank机箱', link: '/Hardware/Tank' },
            { text: '宝藏盒Pro', link: '/Hardware/Treasure PRO' }
          ]
          },
          {
            text: '主板及CPU',
            collapsed: true,
            items: [
              { text: '平台选择考虑因素', link: '/Hardware/Motherboard and CPU' },
              { text: '低功耗平台', link: '/Hardware/Low-power platforms' },
              { text: '消费级平台', link: '/Hardware/Consumer platforms' },
              { text: '专业服务器平台', link: '/Hardware/Treasure PRO' },
            ]
            },
          { text: '内存', link: '/Hardware/Memory' },
          { text: '机箱风道/风扇', link: '/Hardware/Case Duct and Fan' },
          { text: '电源', link: '/Hardware/Power Supply' },  
        ]
      },
      {
        text: '系统及设置',
        collapsed: true,
        items: [
          { text: '各Nas系统的分析对比', link: '/System/Comparative analysis of Nas systems' },
          { text: '常见的RAID阵列', link: '/System/Raid Array' }
        ]
      },
      {
        text: 'NAS应用',
        collapsed: true,
        items: [
          { text: 'PVE下安装WG-Easy', link: '/Application/Installation of WG-Easy under PVE' },
          { text: 'Unraid 引导盘制作Flash GUID为0000结尾的处理方法', link: '/Application/Flash GUID ends in 0000 processing method' },
          { text: 'MoviePilot 安装与使用', link: '/Application/MoviePilot Installation and Use' },
          { text: 'Unraid部署的思源笔记不能启动问题', link: '/Application/SiYuan Notes' },
          { text: '解决Unraid的 Docker 镜像无法下载问题', link: '/Application/Docker image downloaded' }
        ]
      },
      {
        text: '使用指引',
        collapsed: true,
        items: [
          { text: '物理群晖', link: '/Guide/Synology Installation' },
          { text: 'Unrai及虚拟群晖', link: '/Guide/Unrai and Virtual Synology' }
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
