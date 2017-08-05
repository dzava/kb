import Vue from 'vue'
import VueRouter from 'vue-router'
import InstantSearch from 'vue-instantsearch'

import App from './App.vue'
import Item from './Item.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(InstantSearch)
Vue.component('item', Item)

const router = new VueRouter({ routes })

const app = new Vue({
    router
}).$mount('#app')
