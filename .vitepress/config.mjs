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
    
    outlineTitle: "本页目录",
    lastUpdated: true,
    lastUpdatedText: "最后更新",        
    nav: [    
      { text: 'NAS硬件杂谈',
        items: [
          {
            text: 'NAS机箱选择',
            link: '/Hardware/NAS硬件杂谈：NAS机箱选择'
          },
          {
            text: '板U平台', 
            link: '/Hardware/NAS硬件杂谈：板U平台'
          },
          {
            text: '机箱风扇选择', 
            link: '/Hardware/NAS硬件杂谈：机箱风扇选择'
          },
          {
            text: '电源选择', 
            link: '/Hardware/NAS硬件杂谈：电源'
          }
        ]
      },
      { text: 'NAS系统相关',
        items: [
          {
            text: '各Nas系统的分析对比',
            link: '/System/NAS系统相关：各Nas系统的分析对比'
          },
          {
            text: 'RAID阵列', 
            link: '/System/NAS系统相关：RAID阵列'
          }
        ]
      },
      { text: 'NAS应用',
        items: [
          {
            text: 'PVE下安装WG-Easy',
            link: '/Application/NAS应用：PVE下安装WG-Easy'
          },
          {
            text: 'Unraid 引导盘制作Flash GUID为0000结尾的处理方法', 
            link: '/Application/NAS应用：Unraid 引导盘制作Flash GUID为0000结尾的处理方法'
          },
          {
            text: '全自动化观影之 MoviePilot 安装与使用', 
            link: '/Application/NAS应用：全自动化观影之 MoviePilot 安装与使用'
          }
        ]
      },
      { text: '使用指引',
        items: [
          {
            text: '物理群晖',
            link: '/Guide/NAS使用指引：物理群晖'
          },
          {
            text: 'Unrai及虚拟群晖', 
            link: '/Guide/NAS使用指引：Unrai及虚拟群晖'
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
        text: '一、NAS硬件杂谈',
        collapsed: false,
        items: [
          { text: 'NAS机箱选择', link: '/Hardware/NAS硬件杂谈：NAS机箱选择' },
          { text: '板U平台', link: '/Hardware/NAS硬件杂谈：板U平台' },
          { text: '机箱风扇选择', link: '/Hardware/NAS硬件杂谈：机箱风扇选择' },
          { text: '电源', link: '/Hardware/NAS硬件杂谈：电源' },  
        ]
      },
      {
        text: '二、NAS系统相关',
        collapsed: true,
        items: [
          { text: '各Nas系统的分析对比', link: '/System/NAS系统相关：各Nas系统的分析对比' },
          { text: 'RAID阵列', link: '/System/NAS系统相关：RAID阵列' }
        ]
      },
      {
        text: '三、NAS应用',
        collapsed: true,
        items: [
          { text: 'PVE下安装WG-Easy', link: '/Application/NAS应用：PVE下安装WG-Easy' },
          { text: 'Unraid 引导盘制作Flash GUID为0000结尾的处理方法', link: '/Application/NAS应用：Unraid 引导盘制作Flash GUID为0000结尾的处理方法' },
          { text: '全自动化观影之 MoviePilot 安装与使用', link: '/Application/NAS应用：全自动化观影之 MoviePilot 安装与使用' }
        ]
      },
      {
        text: '四、NAS使用指引',
        collapsed: true,
        items: [
          { text: '物理群晖', link: '/Guide/NAS使用指引：物理群晖' },
          { text: 'Unrai及虚拟群晖', link: '/Guide/NAS使用指引：Unrai及虚拟群晖' }
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
