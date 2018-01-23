import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import ItemEditor from '../components/ItemEditor.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App,
            props: route => ({ query: route.query.q }),
        },
        {
            path: '/new',
            component: ItemEditor
        },
        {
            path: '/edit/:id',
            component: ItemEditor
        }
    ]
})
