现实项目中，后台过来的数据，有时候会很多，我们需要限制展示的数据条数。

在1.0中，可以直接使用  limitBy ,但是在 2.0中 limitBy 移除了

看DEMO:

1.0中的做法:

```vue
<div id="box">
  <ul>
    <li v-for="val in list | limitBy 3">
    	{{val}}
    </li>
  </ul>
</div>

<script>
	new Vue({
      el:'#box',
      data:{
          list:['width','height','background','color']
      }
  	});
</script>
    
```

2.0的做法:

> 使用computed来通过js操作

```vue
<div id="box">
  <ul>
    <li v-for="val in lists">
    	{{val}}
    </li>
  </ul>
</div>

<script>
  new Vue({
    el:'#box',
    data:{
      list:['width','height','background','color']
    },
    computed:{
      lists:function(){
          return this.list.slice(0,3);
      }
    }
  });
  </script>
```

