import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({routes});

new Vue({
    router,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app');