### 注意事项
- 本项目需要`gulp`, gulp需要的nodeJs版本不能太高，建议nodeJs的版本为 11以下，不然会出问题
- 全局安装gulp,或者使用 npx,npx在低版本node中有bug，所以建议全局安装gulp

```
npm install --global gulp-cli
```
- 可以用 `nvm`管理

### 下载样板
- 样板地址在: https://github.com/itstrive/striveCode/tree/master/gulp-rem-boilerplate
- 安装依赖
> 在项目根目录运行

```
npm i  或者 cnpm i
```

### 目录介绍
```
|-node_modules/
|-public/
|-.browserslistrc   配置autoprefixer的browserlist
|-gulpfile.js
|-package.json
```

重点public目录:

```
|-conf/	这里主要放的就是favicon.ico，或者serach.xml 跟nginx配合使用
|-css/  编译好的css文件
|-html/ 编译好的html文件
|-images/ 静态图片
|-js/  放js文件，里面自带一个rem.js 移动端必备
|-js_es6/ 移动端很多es6特性不支持，需要放入此文件，进行编译
|-less/  切图人员重点使用
|-page/  切图人员重点使用
```

### 运行项目

开启开发模式:
```
gulp
```
然后浏览器输入 localhost 访问即可

打包:

```
gulp build
```

### 使用

切图人员只需要关心， `page`目录和`less`目录

需要注意的是 `page` 目录里引入的资源都是编译好的，比如:

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>模板页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <script src="../js/rem.js"></script>
    <link rel="stylesheet" href="../css/index.css">
</head>

<body>
    @@include('./include/header.html')
    <div id="div1"></div>
    <h1 class="logo">
        <img src="../images/logo.png" class="logo-img" alt="">
    </h1>

    <div class="logo-bg"></div>

    <div class="border1px"></div>
</body>
</html>
```

### 开发的时候，设计图需要750标准设计稿
- 测量多少，就填写多少
- 有时候1像素无需转化为rem，只需要, 行后填写 `/*no*/` 或者 大写 PX

```
border: 1px solid #000; /*no*/
border: 1PX solid #000;
```



