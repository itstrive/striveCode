import Home from './components/home.vue'
import About from './components/about.vue'
import News from './components/news.vue'

export default{
	mode: 'history',
    routes: [
        {path: '/home', component: Home},
        {path: '/about', component: About},
        {path: '/news', component: News},
        {path: '*', redirect: '/home'},
    ]
}