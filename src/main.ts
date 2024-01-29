import { createApp } from 'vue'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import './style.scss'

import App from './App.vue'
import router from './_routes'

const app = createApp(App)
app.component('icon', FontAwesomeIcon)
app.component('icon-layers', FontAwesomeLayers)
app.component('icon-layers-text', FontAwesomeLayersText)
app.use(router)
app.mount('#app')
