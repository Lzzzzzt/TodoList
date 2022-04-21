import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'

import VueParticles from "vue-particles"
// 使用vuetify
Vue.use(Vuetify)
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App)
}).$mount('#app')
