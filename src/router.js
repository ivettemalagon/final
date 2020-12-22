import vueRouter from 'vue-router'
<<<<<<< HEAD
import User from './User'
import UserAuth from './UserAuth'
import Inventory from './Inventory'
import Search from './Search'
import Modify from './Modify'
=======
import User from './user'
import UserAuth from './components/userauth'
import Inventory from './components/inventory'
import Search from './components/search'
import Modify from './components/modify'
>>>>>>> 4e9af641372acf63482a6863db00a80d83772a17
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
