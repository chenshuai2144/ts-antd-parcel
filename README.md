# Typescript + React + Parcel =❤️

此存储库具有在 Typescript 中构建 react 应用程序的基本设置。

## 内置设置

* React + ReactDOM（ver.16）
* Typescript（带有 TSLint 设置）
* prettier + tslint 配置漂亮
* Parcel bundle

## 如何使用项目

```
git clone https://git.yundcs.com/dcs/ts-react-parcel.git
cd ts-react-parcel
npm install | yarn
```

## 如何开始应用程序开发

yarn develop

执行这个命令，你可以在你的浏览器的`localhost：1234`上运行＆测试这个应用程序。

## 如何构建应用程序

npm run build | yarn build

默认输出目录是`/ dist`。 你可以修改
`"build": "parcel build ./src/index.html --public-url '/'",`
来修改部署地方
