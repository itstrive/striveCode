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