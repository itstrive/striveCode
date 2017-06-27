跟着vue的版本过来的同志都知道，有个语法叫 .sync

> 这么一个场景，
>
> 正常情况下, 父组件把数据传递给子组件, 父组件更新数据，子组件会跟着更新。无论到哪个版本这个都靠谱的。
>
> 但是，反过来，子组件如果更新了数据，父组件是跟着更新呢？还是不要呢？

在vue1.0的时代?

```vue
<Child :msg.sync="msg"></Child>

当子组件更新了msg，父级会跟着更新，因为添加修饰符 .sync了
```

在vue2.0的时代?

作者把 .sync这个修饰符去掉了，因为思想是采用，单向数据流。因为如果还是保留，这样同步的更改，一旦组件嵌套关系复杂，就会很乱。

到了vue2.3时代?

当然有人提Issues了，说这个语法很好，希望下个版本加上。哈哈，果然作者加上了，但是....

和1.0还是不一样的。

##### 看下vue2.3之后 .sync的用法

官方说法:

```
<Child :msg.sync="msg"></Child>  //这个只是个语法糖，形式其实等价于

<Child :msg="msg" @update:msg="val => msg = val"></Child>
```

也就是说，之前1.0的时候，只要子级更改，添加.sync修饰符以后, 默认父级也会更改.现在如果想同步更改，必须手动。

语法是:

```
this.$emit('update:msg', newValue)
```

---

看以下具体代码：

父组件代码:

```vue
<template>
  <div id="app">
    {{msg}}
    <Child :msg.sync="msg"></Child>
  </div>
</template>

<script>
import Child from './child.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'parent msg'
    }
  },
  components:{
    Child
  }
}
</script>

<style>
</style>

```

子组件代码:

```vue
<template>
	<div>
		我是子组件 {{msg}}
		<input type="text" v-model="m" @input="change">
	</div>
</template>

<script>
export default{
	data(){
		return {
			m:''
		}
	},
	props:['msg'],
	mounted(){
		this.m=this.msg;
	},
	methods:{
		change(){
			this.$emit('update:msg', this.m);  //重点是这里，需要手动同步
		}
	}
}
</script>

<style>
	
</style>
```

