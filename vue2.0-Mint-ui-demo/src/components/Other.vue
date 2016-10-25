<template>
	<div>
		<mt-cell title="标题文字" value="说明文字  "></mt-cell>

		<mt-cell-swipe
			title="向左滑动"
			:right="[
			{
			  content: '删除',
			  style: { background: 'red', color: '#fff' },
			  handler: () => this.$messagebox('delete')
			}
		]"></mt-cell-swipe>

			<!--加载动画-->
		<mt-cell>
			<mt-spinner type="snake" :size="14"></mt-spinner>
		</mt-cell>
		<mt-spinner type="double-bounce" color="red"></mt-spinner>
		<mt-spinner type="triple-bounce" color="#f60"></mt-spinner>
		<mt-spinner type="fading-circle" color="#399"></mt-spinner>

		<!--搜索-->
		<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索" fixed>
		</mt-search>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				value:'裙子'
			}
		}
	}
</script>