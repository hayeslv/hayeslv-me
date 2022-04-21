import "@unocss/reset/tailwind.css";
import "uno.css";

import App from "./App.vue";
import autoRoutes from "pages-generated";
import { ViteSSG } from "vite-ssg";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import NProgress from "nprogress";

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith("/")
      ? `${i.path}index.html`
      : `${i.path}.html`,
  };
});

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  if (savedPosition) { return savedPosition; }
  else { return { top: 0 }; }
};

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    dayjs.extend(LocalizedFormat);

    if (isClient) {
      router.beforeEach(() => { NProgress.start(); });
      router.afterEach(() => { NProgress.done(); });
    }
  },
);
