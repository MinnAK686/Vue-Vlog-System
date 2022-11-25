import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Link Bootstrap
import './assets/css/bootstrap.css'

// Google Material Icons
import 'material-icons/iconfont/material-icons.css'

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min'

createApp(App).use(store).use(router).mount('#app')
