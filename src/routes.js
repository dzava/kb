import App from './App.vue'
import ItemEditor from './ItemEditor.vue'

export default [
    {
        path: '/',
        component: App
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
