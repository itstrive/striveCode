import Vue from 'vue'
import App from './App.vue'

import store from './store.js'

new Vue({
	store,
	el:'#app',
	render:h=>h(App)
})