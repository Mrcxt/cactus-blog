import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginImp from "vite-plugin-imp";
import styleImport from "vite-plugin-style-import";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { md } from "./plugins/md";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
  plugins: [
    vue(),
    md(),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "ant-design-vue",
    //       style: (name) => {
    //         if (/popconfirm/.test(name)) {
    //           return [
    //             "ant-design-vue/es/button/style/index.css",
    //             "ant-design-vue/es/popover/style/index.css",
    //           ];
    //         }
    //         return `ant-design-vue/es/${name}/style/index.css`;
    //       },
    //     },
    //   ],
    // }),
    styleImport({
      libs: [
        {
          libraryName: "ant-design-vue",
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index.css`;
          },
        },
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`;
          },
        },
      ],
    }),
  ],
});
