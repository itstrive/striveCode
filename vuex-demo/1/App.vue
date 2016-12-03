<template>
	<div id="app">
		<h3>welcome Vuex</h3>
		<button @click="increment">+</button>
    	<button @click="decrement">-</button>
    	<button @click="clickEven">count是偶数才能点击增加</button>
    	<button @click="clickAsync">点击处理异步</button>
    	<div>
    		现在的数据是: <em>{{$store.state.count}}</em>, 它是一个 <strong>{{evenOrOdd}}</strong>
    	</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed:mapGetters([
			'evenOrOdd'
		]),
		methods:mapActions([
			'increment',
			'decrement',
			'clickEven',
			'clickAsync'
		])
	}
</script>
<style>
	
</style>