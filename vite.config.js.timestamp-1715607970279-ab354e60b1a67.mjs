// vite.config.js
import { defineConfig } from "file:///D:/projects/project-group-5/node_modules/vite/dist/node/index.js";
import glob from "file:///D:/projects/project-group-5/node_modules/glob/glob.js";
import injectHTML from "file:///D:/projects/project-group-5/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///D:/projects/project-group-5/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js"
        }
      },
      outDir: "../dist"
    },
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxwcm9qZWN0LWdyb3VwLTVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXHByb2plY3QtZ3JvdXAtNVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvcHJvamVjdC1ncm91cC01L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xyXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tICd2aXRlLXBsdWdpbi1odG1sLWluamVjdCc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIFtjb21tYW5kID09PSAnc2VydmUnID8gJ2dsb2JhbCcgOiAnX2dsb2JhbCddOiB7fSxcclxuICAgIH0sXHJcbiAgICByb290OiAnc3JjJyxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBpbnB1dDogZ2xvYi5zeW5jKCcuL3NyYy8qLmh0bWwnKSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdjb21tb25IZWxwZXJzLmpzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbaW5qZWN0SFRNTCgpLCBGdWxsUmVsb2FkKFsnLi9zcmMvKiovKiouaHRtbCddKV0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxvQkFBb0I7QUFDdFMsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsUUFBUSxNQUFNO0FBQzNDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLENBQUMsWUFBWSxVQUFVLFdBQVcsU0FBUyxHQUFHLENBQUM7QUFBQSxJQUNqRDtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BRVgsZUFBZTtBQUFBLFFBQ2IsT0FBTyxLQUFLLEtBQUssY0FBYztBQUFBLFFBQy9CLFFBQVE7QUFBQSxVQUNOLGFBQWEsSUFBSTtBQUNmLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUFBLEVBQzFEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
