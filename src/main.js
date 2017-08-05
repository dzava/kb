import Vue from 'vue'
import InstantSearch from 'vue-instantsearch'

import Item from './components/Item.vue'
import router from './router'

Vue.use(InstantSearch)
Vue.component('item', Item)

const app = new Vue({
    router
}).$mount('#app')
