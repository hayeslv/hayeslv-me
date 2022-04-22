import { resolve } from "path";
import type { UserConfig } from "vite";
import fs from "fs-extra";
import matter from "gray-matter";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Pages from "vite-plugin-pages";
import WindiCSS from "vite-plugin-windicss";
import PurgeIcons from "vite-plugin-purge-icons";

const config: UserConfig = {
  resolve: {
    alias: {
      "~": `${resolve(__dirname, "src")}/`,
      "~image": `${resolve(__dirname, "src/assets/image")}/`,
    },
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    VueJsx(),
    WindiCSS(),
    PurgeIcons(),
    Pages({
      extensions: ["vue", "md"],
      pagesDir: "pages",
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));

        if (!path.includes("projects.md")) {
          const md = fs.readFileSync(path, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }

        return route;
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        /* 引入var.scss全局预定义变量，多个：'@import "xxx";@import "xxx' */
        additionalData: "@import '~/style/global.scss';",
      },
    },
  },
};

export default config;
