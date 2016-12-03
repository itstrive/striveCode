项目中，有时候咱需要定义一个全局组件，到处可以使用。如何定义呢？

那么,接下来咱定义一个tabs切换的组件，先看目录结构

|-main.js

|-App.vue

|-components/

​	|-tabs/	----->  这里就是tabs组件

​		|-index.js   //功能: 需要添加install和导出tabs

​		|-Tabs.vue  //具体tabs的做法

---

在main.js里的使用方式：

> import Vue from 'vue'
>
> **import Tabs from './component/tabs'**
>
> **Vue.use(Tabs)**

在App.vue  或者其他任意组件里面就可以随处使用tabs组件了

> <tabs></tabs>

---

主角: tabs里面的index.js和Tabs.vue如何编写呢? 看参考代码

Tabs.vue里的代码如下:

```vue
<template>
	<div class="tab-box">
		<input class="active" type="button" value="aaa">
		<input type="button" value="bbb">
		<input type="button" value="ccc">
		<div style="display:block;">111</div>
		<div>222</div>
		<div>333</div>
	</div>
</template>
<script>
	export default{
		methods:{
			fnTabs(){
				var oBox=this.$el;
				var aBtn=oBox.getElementsByTagName('input');
				var aCon=oBox.getElementsByTagName('div');

				for(var i=0; i<aBtn.length; i++){
					(function(index){
						aBtn[i].onclick=function(){
							for(var i=0; i<aBtn.length; i++){
								aBtn[i].className='';
								aCon[i].style.display='none';
							}
							aBtn[index].className='active';
							aCon[index].style.display='block';
						};
					})(i);
				}
			}
		},
		mounted(){
			this.fnTabs();
		}
	}
</script>
<style scoped lang="less">
	.tab-box{
		.active{
			background:#f60;
			color:#fff;
		}
		div{
			width:200px;
			height:200px;
			border:1px solid #000;
			display:none;
		}
	}
</style>
```

index.js里的代码如下:(这个必须要有,也是核心)

```javascript
import TabComponent from './Tabs.vue'

const Tabs={
	install:function(Vue){
		Vue.component('tabs', TabComponent);
	}
}

export default Tabs;
```

代码参考地址: https://github.com/itstrive/striveCode/tree/js/vue2.0-knowledge-demo/custom-global-component