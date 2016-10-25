//http://mint-ui.github.io/docs/#!/zh-cn2   mint-ui  API
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import Other from './components/Other.vue'
import Other2 from './components/Other2.vue'
import Home from './components/Home.vue'

Vue.use(Mint);
Vue.use(VueRouter);

const router=new VueRouter({
	routes:[
		{path:'/other', component:Other},
		{path:'/other2', component:Other2},
		{path:'/home', component:Home}
	]
});

new Vue({
	router,
  	el: '#app',
  	render: h => h(App)
})
