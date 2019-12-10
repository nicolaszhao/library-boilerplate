# {{name}}

## 上手

### 安装

```shell
$ npm i {{name}}
```

### 使用

```js
import MyLib from '{{name}}';
```

## 开发

项目使用 [rollup](https://www.rollupjs.org/guide/en/) 进行构建，你可以任意修改配置文件 `rollup.config.js` 并扩展它，也可以在[这里](https://github.com/rollup/awesome)搜寻你需要的 rollup 插件。

### 实时构建测试包

1. 执行 `npm start ` 构建并监视文件的更改
2. 执行 `npm link` 软链项目包到全局
3. 在你测试的项目中，执行 `npm link {{name}}`

### 构建 UMD 包

package.json:

```diff
"scripts": {
- "build": "rollup -c --environment NODE_ENV:production",
+ "build": "rollup -c --environment NODE_ENV:production,INCLUDE_UMD",
}
```

具体配置细节可查看 [rollup.config.js](./rollup.config.js)，如果你要弄清楚 rollup 如何配置环境变量，请参考[官方文档](https://www.rollupjs.org/guide/en/#command-line-flags)。

### 构建生产包

```
npm run build
```

## 测试

默认已内置了 [mocha](https://mochajs.org/)。在 `/test` 目录下编写完单元测试后，直接执行：

```
npm test
```

## 发布

1. 执行 `npm version <major|minor|patch>` 更新版本
2. 执行 `npm publish`，会自动重新执行命令 `npm run build`，并发布包到 [NPM](https://www.npmjs.com/)。如果是 [scope](https://docs.npmjs.com/cli/publish.html) 的包，需要带 `--access public` 参数

