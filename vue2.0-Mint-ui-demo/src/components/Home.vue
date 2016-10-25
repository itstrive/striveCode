<template>
	<div>
		<!--这是 tab选项卡 开始-->
	    <mt-tab-container v-model="selected" swipeable>
	      <mt-tab-container-item id="0">
	        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
	      </mt-tab-container-item>

	      <mt-tab-container-item id="1">
	        <mt-cell v-for="n in 5" title="tab-container 2">
	          2222
	        </mt-cell>
	        
	        <mt-header title="全面从严治党 制度的“笼子”越扎越紧全面从严治党 制度的“笼子”越扎越紧">
	          <router-link to="/" slot="left">
	            <mt-button icon="back">返回</mt-button>
	          </router-link>
	          <mt-button icon="more" slot="right"></mt-button>
	        </mt-header>

	      </mt-tab-container-item>
	      
	      <mt-tab-container-item id="2">
	        <mt-cell v-for="n in 7" title="tab-container 3">
	          3333
	        </mt-cell>
	      </mt-tab-container-item>
	    </mt-tab-container>

	    <mt-tabbar v-model="selected" fixed>
	      <mt-tab-item id="0">
	        <img slot="icon" src="../assets/100x100.png">
	        外卖
	      </mt-tab-item>
	      <mt-tab-item id="1">
	        <img slot="icon" src="../assets/100x100.png">
	        订单
	      </mt-tab-item>
	      <mt-tab-item id="2">
	        <img slot="icon" src="../assets/100x100.png">
	        发现
	      </mt-tab-item>
	    </mt-tabbar>
	    <!--这是 tab选项卡 结束-->
	</div>
</template>
<script>
	export default{
		data(){
			return {
				selected:0
			}
		}
	}
</script>