让vue支持jsx语法(不过好像真心没啥用，还不如直接用React)

不过还是简单说下用法:

1. 安装需要的模块(插件)

   ```
   npm install 
   babel-plugin-syntax-jsx 
   babel-plugin-transform-vue-jsx 
   babel-helper-vue-jsx-merge-props --save-dev
   ```

2. 在babelrc里面配置东西

   ```
   {
     "presets": ["es2015"],
     "plugins": ["transform-vue-jsx"]
   }
   ```

3. 编写jsx代码

   ```vue
   import Vue from 'vue'  
   import App from './App.vue'

   new Vue({  
     el: '#app',
     methods: {
       handleClick () {
         alert('Hello!')
       }
     },
     render (h) {
       return (
         <div>
           <h1 on-click={this.handleClick}>Hello from JSX</h1>
           <p> Hello World </p>
           <App />
         </div>
       )
     }
   })
   ```

   ​