import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '小兔兔音乐'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login.vue')


    }

]

const router = new VueRouter({
    routes
})

export default router