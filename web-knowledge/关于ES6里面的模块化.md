ES6的模块化，目前为止(2017-2-24)chrome浏览器兼容还不是太好，需要使用babel进行编译

##### babel+webpack配置:

webpack.config.js的代码如下:

```javascript
module.exports = {
	entry: './index.js', //入口文件
	output: {
		filename: 'build.js' //出口
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/ //排除那些目录
		}]
	}
};
```

##### .babelrc文件的配置

```
{
	"presets":[['es2015']]
}
```

##### 下载相应的模块

```
npm install babel-loader babel-core babel-preset-es2015
```

##### webpack -w运行

---

#### ES6里面模块化的使用方式

> 模块: 定义(导出) 和 引入(导入)
>
> 以下例子,导出模块放在  mod.js里面
>
> 以下例子,导入模块放在  index.js 里面 

1. 第一种书写方式

   mod.js代码

   ```javascript
   export let a = 12; //导出普通值
   export let b = 5;
   export let json = { //导出json
   	a,
   	b
   };
   export let show = function() { //导出函数
   	return 'welcome'
   };
   export class Person { //导出类
   	constructor() {
   		this.name = '123';
   	}
   	showName() {
   		return this.name;
   	}
   }
   ```

   index.js代码

   ```javascript
   import {
   	a,
   	b,
   	json,
   	show,
   	Person
   } from './mod'
   console.log(a, b, json, show, Person);
   ```

2. 第二种书写方式

   mod.js代码

   ```javascript
   let a = 12;
   let b = 5;
   let c = 10;

   export {
   	a,
   	b,
   	c as cc  //as是别名，使用的时候只能用别名
   }
   ```

   index.js代码

   ```
   import {
   	a,
   	b,
   	cc
   } from './mod'

   console.log(a, b, cc);
   ```

3. 第三种 default方式

   default方式的优点，import无需知道变量名，就可以直接使用

   mod.js的代码

   ```javascript
   export default function() {
   	console.log('welcome to ES6 modules')
   }
   ```

   index.js的代码

   ```javascript
   import aa from './mod'
   //import aa as cc from './mod'  //as用来起别名

   aa();
   ```

   **小总结:** 导出模块如果用default了，引入的时候直接用，若没有用default，引入的时候可以用{}的形式

   有了default的方便之处以后:

   ```
   import $ from './jquery-3.1.1'
   ```

   像这样引入模块就显的非常省事了。

4. 总结export和import的用法

   - export的用法

     ```javascript
     //1.
     export let a=12;
     export let b=5;
     //2.
     let a=12;
     let b=5;
     export {a,b}
     //3.
     let a=12;
     let b=5;
     export {a as aa, b as bb}
     //4.
     export default {
       a:12,
       b:5
     }
     //5.
     export let fn1=function(){}
     export let fn2=function(){}
     ```

   - import的用法

     ```javascript
     //1.
     import {a,b} from './mod'
     //2.
     import {a as aa, b as bb} from './mod'
     //3.
     import {aa,bb} from './mod'
     //4.
     import json from './mod'
     //5.
     import * as fn from './mod'  //* 用来加载所有模块
     ```

     ​