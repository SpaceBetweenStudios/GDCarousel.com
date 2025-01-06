import { createApp } from 'vue'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import './style/index.scss'

import App from './App.vue'
import router from './_routes'

const app = createApp(App)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', FontAwesomeIcon)
app.component('IconLayers', FontAwesomeLayers)
app.component('IconLayersText', FontAwesomeLayersText)
app.use(router)
app.mount('#app')
