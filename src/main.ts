import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSliders, faLocationDot, faEnvelope, faAngleRight, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSliders, faLinkedin, faLocationDot, faSquareGithub, faEnvelope, faAngleRight, faDesktop)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


