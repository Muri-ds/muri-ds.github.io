import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ru-RU",
  title: "Докумантация Muri",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "Документация по использованию бота Muri.",
  themeConfig: {
    logo: "/logo-nobg.png",
    nav: [
      { text: "Главная", link: "/" },
      { text: "Основное", link: "/help/" },
      { text: "Обновления", link: "/changelog/" },
      { text: "Документы", link: "/legal/" },
    ],

    sidebar: {
      "/help/": {
        base: "/help/",
        items: [
          {
            text: "FAQ (ЧАВО)",
            link: "faq",
          },
          {
            text: "Как пригласить бота",
            link: "invite",
          },
        ],
      },
      "/legal/": {
        base: "/legal/",
        items: [
          {
            text: "Основные",
            collapsed: false,
            items: [
              { text: "Политика конфиденциальности", link: "privacy" },
              { text: "Условия использования", link: "terms" },
            ],
          },
          {
            text: "Оплата",
            collapsed: false,
            items: [
              { text: "Публичная оферта", link: "oferta" },
              { text: "Реквизиты", link: "requisite" },
            ],
          },
        ],
      },
      "/changelog/": {
        base: "/changelog/",
        items: [
          {
            text: "Основные",
            link: "index",
          },
          {
            text: "Архив",
            collapsed: true,
            items: [
              { text: "v. 0.2.0", link: "0-2-0" },
              { text: "v. 0.1.7", link: "0-1-7" },
              { text: "v. 0.1.6", link: "0-1-6" },
              { text: "v. 0.1.5", link: "0-1-5" },
              { text: "v. 0.1.4", link: "0-1-4" },
              { text: "v. 0.1.3", link: "0-1-3" },
              { text: "v. 0.1.2", link: "0-1-2" },
              { text: "v. 0.1.1", link: "0-1-1" },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.com/invite/edGKDHYXPbs" },
    ],
  },

  lastUpdated: false,
});
