# babel 插件

个人babel插件库。

## 本地调试

```shell
npm run dev
```
该命令会将 `/example/index.js` 中的代码进行编译，并输出到同级目录的 `dist.js`中，方便查看编译结果是否符合预期。

## 如何新增一个babel插件

1. `packages`目录中的每个文件都是一个babel插件，可以参照开发。
2. 开发完后，在 `.babelrc` 中引入
3. 进行本地测试
4. `npm publish`发布

