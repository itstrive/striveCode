<template>
	<div>
		<h3>我是新闻页面^_^</h3>
		<ul>
			<li v-for="(item ,index) in newList" :key="index">
				<a :href="item.href" target="_blank">{{item.title}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				newList:[
					{href:"http://www.baidu.com", title:"十八大以来，中共这样治党"},
					{href:"http://www.baidu.com", title:"李克强：在改革开放中实现东北振兴"},
					{href:"http://www.baidu.com", title:"市委书记贪腐外逃 女儿质问：咱家缺钱吗"}
				]
			}
		}
	}
</script>