# {{name}}

## 快速上手

```shell
$ npm i {{name}}
```

## 构建 UMD 代码

```diff
"scripts": {
 - "build": "rollup -c --environment NODE_ENV:production",
 + "build": "rollup -c --environment NODE_ENV:production,INCLUDE_UMD",
 }
 ...
```

