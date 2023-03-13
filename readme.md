Reproduction for https://github.com/brillout/vite-plugin-ssr/issues/701.

```bash
git clone git@github.com:brillout/vps-reprod-701
cd vps-reprod-701/
pnpm install
pnpm run prod
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/vps-reprod-701 && cd vps-reprod-701/ && pnpm install && pnpm run prod
```

Go to [localhost:3000](http://localhost:3000) and observe the error.

```
Server running at http://localhost:3000
ReferenceError: require is not defined
    at getDataFromTree (file:///home/rom/tmp/vps-reprod-701/dist/server/renderer/default-page-server.js:119:48)
    at render (file:///home/rom/tmp/vps-reprod-701/dist/server/renderer/default-page-server.js:146:26)
    at /home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage/renderPageContext.js:220:65
    at /home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/utils/callHookWithTimeout.js:34:31
    at callHookWithTimeout (/home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/utils/callHookWithTimeout.js:40:7)
    at executeOnRenderHtmlHook (/home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage/renderPageContext.js:220:58)
    at renderPageContext (/home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage/renderPageContext.js:63:36)
    at async renderPageAttempt (/home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage.js:157:36)
    at async renderPage (/home/rom/tmp/vps-reprod-701/node_modules/.pnpm/vite-plugin-ssr@0.4.93_vite@4.0.3/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/renderPage.js:40:35)
    at async /home/rom/tmp/vps-reprod-701/server/index.js:37:25
```
