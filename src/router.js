import Vue from 'vue'
import Router from 'vue-router'
import Artists from './components/Artists.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/artists',
            name: 'artists',
            component: Artists
        }
    ]
})