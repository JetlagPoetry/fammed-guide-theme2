import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Page2 from './page2.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app')


const router = new VueRouter({
		routes : [
		{ path: '/', component: App},
		{ path: '/page2', name: 'Page2', component: Page2 },
	]
})
