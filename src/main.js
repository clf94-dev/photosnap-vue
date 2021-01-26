import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vuelidate from 'vuelidate'
import AOS from 'aos'
import "aos/dist/aos.css"
import VueRouter from 'vue-router'

import Home from './components/pages/Home.vue'
import Features from './components/pages/Features.vue'
import Stories from './components/pages/Stories.vue'
import Pricing from './components/pages/Pricing.vue'
import ErrorPage from './components/pages/Error.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/pricing', component: Pricing },
    { path: '/stories', component: Stories },
    { path: '/features', component: Features },
    { path: '*', component: ErrorPage }

];

const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
    router,
    render: h => h(App),
    created() {
        AOS.init();
    }
}).$mount('#app')