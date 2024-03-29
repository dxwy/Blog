import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Blog/",
  title: "Yuchen Wu's blog",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/favicon-200x200-dxwy.png" }],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?8e7e0af519a0476c309e036518ef0011";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Zotero使用笔记",
        link: "/Zotero使用笔记/00 Zotero安装与上手",
      },
    ],
    sidebar: {
      "/Zotero使用笔记/": [
        {
          text: "Zotero使用笔记",
          items: [
            {
              text: "00 Zotero安装与上手",
              link: "/Zotero使用笔记/00 Zotero安装与上手",
            },
            {
              text: "01 使用WebDAV协议同步Zotero附件——InfiniCLOUD",
              link: "/Zotero使用笔记/01 使用WebDAV协议同步Zotero附件——InfiniCLOUD",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/dxwy" }],
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    editLink: {
      pattern: "https://github.com/dxwy/Blog/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2024-present <a href="https://github.com/dxwy">dxwy</a>',
    },
    logo: "/favicon-200x200-dxwy.png",
  },
});
