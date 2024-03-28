import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuchen Wu's blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Zotero使用笔记", link: "/Zotero使用笔记/00 Zotero安装与上手" },
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
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
});
