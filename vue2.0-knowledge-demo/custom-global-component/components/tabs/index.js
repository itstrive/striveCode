import TabComponent from './Tabs.vue'

const Tabs={
	install:function(Vue){
		Vue.component('tabs', TabComponent);
	}
}

export default Tabs;