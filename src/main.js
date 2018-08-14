import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueFire from 'vuefire'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckCircle, faCircle, faPlusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueFire)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
