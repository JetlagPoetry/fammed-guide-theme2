import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import App from './page2.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)
// new Vue({
// 	router,
// 	vuetify,
// 	render: h => h(App)
// }).$mount('#app')

// new Vue({
//   render: h => h(App),
//   router: routes,
//   vuetify,
//   components: { App }
// }).$mount('#app')

new Vue({
	el: '#app',
	router,
	vuetify,
	render: h => h(App)
})