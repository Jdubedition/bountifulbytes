import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseBtn from './components/base/Btn.vue'
import BaseCard from './components/base/Card.vue'
import BaseSubheading from './components/base/Subheading.vue'

Vue.component('base-card', BaseCard)
Vue.component('base-subheading', BaseSubheading)
Vue.component('base-btn', BaseBtn)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
