import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import DesktopApp from './components/desktop/DesktopApp.vue'
import MobileApp from './components/mobile/MobileApp.vue'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

new Vue({
  router,
  vuetify,
  i18n,
  store,
  // render: h => h(App)
  render: function(h) {
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
      return h(MobileApp);
    } else {
      return h(DesktopApp);
    }
  }
}).$mount('#app');