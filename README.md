# Typescript + React + Parcel =❤️

此存储库具有在 Typescript 中构建 react 应用程序的基本设置。

## 内置设置

* React + ReactDOM（ver.16）
* Typescript（带有 TSLint 设置）
* prettier + tslint 配置
* Parcel bundle

## 如何使用项目

```
git clone https://git.yundcs.com/dcs/ts-react-parcel.git
cd ts-react-parcel
npm install | yarn
```

## 反向代理
如果需要反向代理功能，可以在[index.js](./index.js)中找到配置。详细语法和设置清参考 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware),

## 如何开始应用程序开发

yarn develop

执行这个命令，你可以在你的浏览器的`localhost:1234`上运行＆测试这个应用程序。

## 如何构建应用程序

npm run build | yarn build

默认输出目录是`/ dist`。 你可以修改
`"build": "parcel build ./src/index.html --public-url '/'",`
来修改部署地方

## 参考

[parceljs](https://parceljs.org/getting_started.html) 零配置打包工具  
[react](https://reactjs.org/) 一个界面库  
[typescript](https://www.typescriptlang.org/) 一个 js 增强语言  
[tslint](https://palantir.github.io/tslint/) 代码风格管理器  
[perttier](https://prettier.io/) 完美的语法法工具
