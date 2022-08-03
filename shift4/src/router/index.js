import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import AboutUsPage from '../components/AboutUsPage.vue'
import PortfolioPage from '../components/PortfolioPage.vue'
import ServicesPage from '../components/ServicesPage.vue'
import LogInPage from '../components/LogInPage.vue'
import MyPage from '../components/MyPage.vue'
import TestPage from '@/components/TestPage.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        name:"MainPage",
        component:MainPage
    },
    {
        path:"/AboutUs",
        name:"AboutUs",
        component:AboutUsPage
    },
    {
        path:"/Portfolio",
        name:"PortfolioPage",
        component:PortfolioPage
    },
    {
        path:"/Services",
        name:"ServicesPage",
        component:ServicesPage
    },
    {
        path:"/LogIn",
        name:"LogInPage",
        component:LogInPage
    },
    {
        path:"/MyPage",
        name:"MyPage",
        component:MyPage
    },
    {
        path:"/Test",
        name:"Test",
        component:TestPage
    }
]
const router = new VueRouter({
    mode:"history",
    routes
})

export default router