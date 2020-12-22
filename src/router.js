import vueRouter from 'vue-router'

import User from './user.vue'
import UserAuth from './UserAuth.Vue'
import Inventory from './Inventory.Vue'
import Search from './Search.Vue'
import Modify from './Modify.Vue'

import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
        path: '/',
        name: "root",
        component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/auth',
            name: "user_auth",
            component: UserAuth
        },
        {
        path: '/inventory',
        name: "inventory",
        component: Inventory
        },
        {
        path: '/inventory/product/',
        name: "buscar",
        component: Search
        },
        {
        path: '/inventory/product/modify/',
        name: "modificar",
        component: Modify
        },
    ]
})
export default router
