import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueFire from 'vuefire'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faCheckCircle, faClock } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle, faUndo, faTimes, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

library.add(faCheckCircle, faCircle, faPlusCircle, faClock, faUndo, faTimes, faCheck, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueFire)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
