import Vue from 'vue'
import App from './App.vue'

import Loading from './components/loading'
import tabs from './components/tabs'

Vue.use(Loading);
Vue.use(tabs);

new Vue({
	el:'#app',
	render:h=>h(App)
})