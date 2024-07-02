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
    }
    lastUpdated: true,
    lastUpdatedText: "最后更新",        
    nav: [    
      { text: 'NAS硬件',
        items: [
          {
            text: '【01】 NAS机箱',
            link: '/Hardware/NAS Case'
          },
          {
            text: '【02】 板U平台', 
            link: '/Hardware/Motherboard and CPU'
          },
          {
            text: '【03】 机箱风道/风扇', 
            link: '/Hardware/Case Duct and Fan'
          },
          {
            text: '【04】 电源', 
            link: '/Hardware/Power Supply'
          }
        ]
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
        text: 'NAS硬件',
        collapsed: false,
        items: [
          {
          text: '机箱',
          collapsed: true,
          items: [
            { text: 'NAS机箱省流版', link: '/Hardware/NAS Case' },
            { text: '★★★★★ | Tank机箱', link: '/Hardware/Tank' },
            { text: '★★★★☆ | 宝藏盒Pro', link: '/Hardware/Treasure PRO' }
          ]
          },
          { text: '【1.02】-板U平台', link: '/Hardware/Motherboard and CPU' },          
          { text: '【1.02】-板U平台', link: '/Hardware/Motherboard and CPU' },
          { text: '【1.03】-机箱风道/风扇', link: '/Hardware/Case Duct and Fan' },
          { text: '电源', link: '/Hardware/Power Supply' },  
        ]
      },
      {
        text: '【2.0】 NAS系统',
        collapsed: true,
        items: [
          { text: '【2.01】-各Nas系统的分析对比', link: '/System/Comparative analysis of Nas systems' },
          { text: '【2.02】-常见的RAID阵列', link: '/System/Raid Array' }
        ]
      },
      {
        text: '【3.0】 NAS应用',
        collapsed: true,
        items: [
          { text: '【3.01】-PVE下安装WG-Easy', link: '/Application/Installation of WG-Easy under PVE' },
          { text: '【3.02】-Unraid 引导盘制作Flash GUID为0000结尾的处理方法', link: '/Application/Flash GUID ends in 0000 processing method' },
          { text: '【3.03】-MoviePilot 安装与使用', link: '/Application/MoviePilot Installation and Use' },
          { text: '【3.04】-Unraid部署的思源笔记不能启动问题', link: '/Application/SiYuan Notes' },
          { text: '【3.05】-解决Unraid的 Docker 镜像无法下载问题', link: '/Application/Docker image downloaded' }
        ]
      },
      {
        text: '【4.0】 使用指引',
        collapsed: true,
        items: [
          { text: '【4.01】-物理群晖', link: '/Guide/Synology Installation' },
          { text: '【4.02】-Unrai及虚拟群晖', link: '/Guide/Unrai and Virtual Synology' }
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
