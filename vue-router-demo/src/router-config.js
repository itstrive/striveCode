import Home from './components/Home.vue'
import About from './components/About.vue'
import News from './components/News.vue';
import Mess from './components/Message.vue';
import Detail from './components/Detail.vue';

export default {
    'home': {
        component: Home,
        subRoutes:{
            'news':{
                component:News,
                subRoutes:{
                    'detail/:id':{
                        component:Detail
                    }
                }
            },
            'message':{
                component:Mess
            }
        }
    },
    'about': {
        component: About
    }
}