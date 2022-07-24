import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/TestPage.vue'

Vue.use(VueRouter)
const routes=[
    {
        path:"/test",
        name:"test",
        component:Test
    }
]
const router = new VueRouter({
    mode:"history",
    routes
})

export default router