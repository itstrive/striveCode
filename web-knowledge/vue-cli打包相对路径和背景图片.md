vue-cli 打包部署相信大家肯定都会, 一个命令 `npm run build` 就可以

但是, 会遇到问题，可以往下看:

#### 打包资源相对引用:

一般情况下，通过 `webpack + vue-cli` 默认打包的`css` `js` 等资源，路径都是绝对的

![](http://oxyhnxrzt.bkt.clouddn.com/vue-2.png)

但当部署到带有文件夹的项目中， 这种路径就会出现问题， 因为 把配置的 `static` 文件夹当成了根路径，那么要解决这种问题，就得引用相对路径。

#### 解决办法

打开: `webpack.prod.conf.js`

找到: `output` 增加 `publicPath:'/'` 即可，如图:

![](http://oxyhnxrzt.bkt.clouddn.com/vue-1.png)

那么这样后, 资源的引用路径就正确了。

#### 或者(注意: 这是或者)

在 `config` 文件夹下的 `index.js` 中修改 `assetsPublicPath:'./' ` 同样也可以达到资源的相对引用。

![](http://oxyhnxrzt.bkt.clouddn.com/vue-3.png)



---

#### 背景图片的引用问题

上面虽然解决了资源路径的引用问题，但是资源里面的背景图片，不想index.html 中加载资源一样， 通过 `./static/js/app.js` 引用可以正常加载， 图片资源有的是通过 css加载的，比如 `background:url(../images/logo.png) no-repeat`  ，被相对打包后变成了 `url(static/img/logo.index.234234.png) no-repeat` 所以我们要保留css引用图片的正常路径:

**解决:**

在 build 文件夹下的 utils.js 代码，中添加一句: 看下图

![](http://oxyhnxrzt.bkt.clouddn.com/vue-4.png)

添加如图所示的一行代码，这样不论是字体还是图片的引用问题都能解决.