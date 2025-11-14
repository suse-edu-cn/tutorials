import { defineConfig, type DefaultTheme } from 'vitepress'
import menu from './menu.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "SUSEer 的计算机学习指南",
    description: "为计协的各位新手 SUSEer 准备的学习路线！",

    themeConfig: {
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '语言',
        outlineTitle: '当前页',
        lastUpdatedText: '最近更新时间',
        siteTitle: 'SUSEer 的计算机学习指南',
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },

        nav: nav(),
        sidebar: sidebar(),
        search: {
            provider: 'local'
        },
        
        editLink: {
            pattern: 'https://github.com/suse-edu-cn/tutorials/edit/main/:path',
            text: '在 GitHub 上编辑此页'
        },
        footer: {
            message: '本文档基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 协议</a> 发布',
            copyright: '&copy; 2025 Project Dept. of OpenAtom Open Source Club at SUSE'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/suse-edu-cn/tutorials' }
        ]
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [{
        text: '预备课',
        link: '/startup/'
    },
    {
        text: '前端',
        link: '/frontend/'
    },
    {
        text: '后端',
        link: '/backend/'
    },
    {
        text: '客户端',
        link: '/client/'
    },
    {
        text: '嵌入式',
        link: '/embedded/'
    }]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return menu
}
