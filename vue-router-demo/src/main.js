/**
 * Created by strive-智能社 on 2016/9/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './router-config'

Vue.use(VueRouter);

// create router
const router = new VueRouter();
router.map(routeConfig);
const App = Vue.extend(require('./App.vue'));
router.start(App, '#box');





































