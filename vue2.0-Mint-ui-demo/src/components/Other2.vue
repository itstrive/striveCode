<template>
	<div>
		<!--开关-->
		<mt-switch v-model="value">{{value}}</mt-switch>

		<!--复选框-->
		<mt-checklist
		  title="复选框列表"
		  v-model="values"
		  :options="['选项A', '选项B', '选项C']">
		</mt-checklist>
		<mt-cell title="选中的是:">
			<span>{{values}}</span>
		</mt-cell>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				value:true,
				values:[]
			}
		}
	}
</script>