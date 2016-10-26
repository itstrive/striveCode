#### vue里面的事件

​	@click="show"

​	@click.enter="show"

​	...

#### @click.native的使用

```vue
<!DOCTYPE html>
<html>
<head>
	<title>vue-demo</title>
	<meta charset="utf-8">
	<script src="vue.js"></script>
	<script type="text/javascript">
		window.onload=function(){
			var vm=new Vue({
				el:'#box',
				data:{
					msg:'1111'
				},
				methods:{
					show(){	//这个对应的是navive的show
						alert(this.$el);
						this.msg='asdfadsf'
					}
				},
				components:{
					'my-a':{
						data(){
							return {
								msg:'welcome son'
							}
						},
						template:`<div>
							<h3>我是标题3 -- {{msg}}</h3>
							<p>adsfasfd</p>
						</div>`
					}
				}
			});
		};
	</script>
</head>
<body>
	<div id="box">
		<my-a @click.native="show"></my-a>
		<input type="button" value="按钮">
		<br>
		{{msg}}
	</div>	
</body>
</html>
```

